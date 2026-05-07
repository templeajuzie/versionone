export const authProviderEnum = ["google", "local"] as const;

export type AuthProvider = (typeof authProviderEnum)[number];
 