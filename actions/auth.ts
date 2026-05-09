"use server";

import { Account, auth, db } from "@/db";
import { setCookies, getCookie, deleteCookies } from "@/integration/cookiemanager";
import { signJwt, verifyJwt } from "@/integration/jwt";
import bcrypt from "bcryptjs";
import { postAccount, postAuth, putAccount, putAuth, retrieveAccount } from "./account";
import { desc, eq } from "drizzle-orm";

const BCRYPT_SALT_ROUNDS = 10;

type CurrentUserPayload = {
  accountId: string;
  email: string;
};

const generateAndSetSession = async (account: { id: string; email: string }) => {
  const payload: CurrentUserPayload = { accountId: account.id, email: account.email };

  const accessToken = signJwt(payload, "180d");
  const refreshToken = signJwt(payload, "180d");

  await setCookies([
    { key: "accessToken", value: accessToken, maxAge: 180 * 24 * 60 * 60 },
    { key: "refreshToken", value: refreshToken, maxAge: 180 * 24 * 60 * 60 },
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
    expiresAt: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000), // 180 days
    isRevoked: false,
    ...(sessionMetadata && { metadata: sessionMetadata }),
  });

  return { accountId: account.id, accessToken, refreshToken, isNewUser };
};

export const retrieveAuth = async (params: { id: string } | { accountId: string }) => {
  const whereClause = "id" in params ? eq(auth.id, params.id) : eq(auth.accountId, params.accountId);

  const [response] = await db
    .select()
    .from(auth)
    .where(whereClause)
    .orderBy(desc(auth.createdAt))
    .limit(1);

  if (!response) return null;

  return response;
};

export const getCurrentUser = async () => {
  const accessToken = await getCookie("accessToken");

  if (!accessToken) return null;

  try {
    const payload = verifyJwt<CurrentUserPayload>(accessToken);

    const authRecord = await retrieveAuth({ accountId: payload.accountId });

    if (!authRecord) return null;

    if (authRecord.isRevoked || new Date() > authRecord.expiresAt) {
      await deleteCookies(["accessToken", "refreshToken"]);
      return null;
    }

    const account = await retrieveAccount({ id: payload.accountId });

    if (!account) {
      await deleteCookies(["accessToken", "refreshToken"]);
      return null;
    }

    return {
      id: account.id,
      email: account.email,
      profile: {
        firstName: account.profile?.firstName || null,
        lastName: account.profile?.lastName || null,
        avatarUrl: account.profile?.avatarUrl || null,
      },
      createdAt: account.created_at,
    };
  } catch (error) {
    console.error("Error in getCurrentUser:", error);
    return null;
  }
};

export const signOut = async () => {
  const accessToken = await getCookie("accessToken");

  if (accessToken) {
    try {
      const payload = verifyJwt<CurrentUserPayload>(accessToken);

      const authRecord = await retrieveAuth({ accountId: payload.accountId });

      if (authRecord) await putAuth(authRecord.id, { isRevoked: true });
    } catch (error) {
      console.error("Error revoking token:", error);
    }
  }

  await deleteCookies(["accessToken", "refreshToken"]);

  return { success: true };
};
