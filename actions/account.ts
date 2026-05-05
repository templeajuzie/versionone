import { Account, Auth, accounts, auth, db } from "@/db";
import { getCookie } from "@/integration/cookiemanager";
import { verifyJwt } from "@/integration/jwt";
import { AuthProvider } from "@/types/schema.client";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";

type CreateAccount = Omit<Account, "id">;

export const postAccount = async (params: Partial<CreateAccount>) => {
  const [account] = await db
    .insert(accounts)
    .values({
      id: `ac_${nanoid(25)}`,
      ...params,
    } as Account)
    .returning();

  return account;
};

export const putAccount = async (id: string, params: Partial<Account>) => {
  const [account] = await db
    .update(accounts)
    .set({ ...params, updatedAt: new Date() })
    .where(eq(accounts.id, id))
    .returning();

  if (!account) throw new Error("Account not found");

  return account;
};

export type AccountLookup =
  | { id: string }
  | { email: string }
  | { sso: { provider: AuthProvider; sub: string } }
  | { accessToken: true };

export const retrieveAccount = async (payload: AccountLookup): Promise<Account | null> => {
  if ("accessToken" in payload) {
    const accessToken = await getCookie("accessToken");
    if (!accessToken) return null;
    const { accountId } = (await verifyJwt(accessToken)) as { accountId: string };
    return await retrieveAccount({ id: accountId });
  }

  const query = db.select().from(accounts);
  let result;

  if ("id" in payload) {
    result = await query.where(eq(accounts.id, payload.id)).limit(1);
  } else if ("email" in payload) {
    result = await query.where(eq(accounts.email, payload.email)).limit(1);
  } else {
    throw new Error("Unsupported lookup method or missing implementation for SSO");
  }

  return result[0] ?? null;
};

export const postAuth = async (params: Partial<Auth>) => {
  const [response] = await db
    .insert(auth)
    .values({
      id: `auth_${nanoid(25)}`,
      ...params,
    } as Auth)
    .returning();

  return response;
};
