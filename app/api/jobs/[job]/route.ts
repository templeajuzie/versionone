import { GetSingleJob } from "@/actions/jobs";
import { apiHandler } from "@/lib/api-handler";
import { Result } from "better-result";

export const GET = apiHandler({
  handler: async ({ params }) => {
    try {
      const id = params.job;
      if (!id) return Result.err(new Error("Job ID is required"));
      const job = await GetSingleJob(id);
      if (!job) return Result.err(new Error("Job not found"));
      return Result.ok(job);
    } catch (error) {
      return Result.err(error instanceof Error ? error : new Error("Failed to retrieve job"));
    }
  },
});
