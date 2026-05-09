/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetDashboardStats } from "@/actions/dashboard";
import { apiHandler } from "@/lib/api-handler";
import { Result } from "better-result";

export const GET = apiHandler({
  auth: ["session"],
  handler: async () => {
    try {
      const stats = await GetDashboardStats();
      return Result.ok(stats);
    } catch (error: any) {
      return Result.err(error);
    }
  },
});
