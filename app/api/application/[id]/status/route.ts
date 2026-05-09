/* eslint-disable @typescript-eslint/no-explicit-any */
import { UpdateApplicationStatus } from "@/actions/application";
import { apiHandler } from "@/lib/api-handler";
import { Result } from "better-result";
import { z } from "zod";

export const PATCH = apiHandler({
  auth: ["session"],
  schema: {
    body: z.object({
      status: z.enum(["pending", "reviewing", "interviewing", "rejected", "hired"]),
    }),
    params: z.object({
      id: z.string(),
    }),
  },
  handler: async ({ body, params }) => {
    try {
      const updated = await UpdateApplicationStatus(params.id, body.status);
      return Result.ok(updated);
    } catch (error: any) {
      return Result.err(error);
    }
  },
});
