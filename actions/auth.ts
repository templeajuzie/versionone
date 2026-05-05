import { setCookies } from "@/integration/cookiemanager";
import { signJwt } from "@/integration/jwt";
import bcrypt from "bcryptjs";
import { postAccount, putAccount, retrieveAccount, postAuth } from "./account";
import { Account } from "@/db";

const BCRYPT_SALT_ROUNDS = 10;

const generateAndSetSession = async (account: { id: string; email: string }) => {
  const payload = { accountId: account.id, email: account.email };

  const accessToken = signJwt(payload, "6h");
  const refreshToken = signJwt(payload, "30d");

  await setCookies([
    { key: "accessToken", value: accessToken, maxAge: 6 * 60 * 60 }, // 6 hours
    { key: "refreshToken", value: refreshToken, maxAge: 30 * 24 * 60 * 60 }, // 30 days
  ]);

  return { accessToken, refreshToken };
};


  

export const accountValidator = async (
  email: string,
  intent: "SIGN_IN" | "SIGN_UP",
  sso: Account["sso"]["values"][number],
  profile?: Account["profile"],
  sessionMetadata?: Record<string, unknown>
) => {
  const { provider, sub: rawSub } = sso;
  let account = await retrieveAccount({ email });
  const isNewUser = !account;

  if (!account) {
    if (intent === "SIGN_IN" && provider === "local") {
      throw new Error("Account not found. Please sign up first.");
    }

    const sub = provider === "local" ? await bcrypt.hash(rawSub, BCRYPT_SALT_ROUNDS) : rawSub;

    account = await postAccount({
      email,
      sso: { values: [{ provider, sub }] },
      profile: profile ?? null,
    });
  } else {
    const existingSso = account.sso?.values?.find((s) => s.provider === provider);

    if (provider === "local") {
      if (intent === "SIGN_UP") {
        throw new Error("An account with this email already exists.");
      }

      if (!existingSso) {
        throw new Error("This account was created using social login");
      }

      const isValid = await bcrypt.compare(rawSub, existingSso.sub);
      if (!isValid) throw new Error("Invalid email or password.");
    } else {
      // SSO Provider (Google, GitHub, etc.)
      // We trust SSO providers to verify email. If account exists but this SSO isn't linked, link it.
      if (!existingSso) {
        await putAccount(account.id, {
          sso: { values: [...account.sso.values, { provider, sub: rawSub }] },
          ...(profile?.avatarUrl && { profile: { ...account.profile, avatarUrl: profile.avatarUrl } }),
        });
      }
    }
  }

  // 3. Session Generation
  const { accessToken, refreshToken } = await generateAndSetSession(account);
  await postAuth({
    accountId: account.id,
    provider,
    accessToken,
    refreshToken,
    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    isRevoked: false,
    ...(sessionMetadata && { metadata: sessionMetadata }),
  });

  return { accountId: account.id, accessToken, refreshToken, isNewUser };
};
