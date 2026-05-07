import { GetJobs, PostJob } from "@/actions/jobs";
import { apiHandler } from "@/lib/api-handler";
import { Result } from "better-result";

export const POST = apiHandler({
  auth: ["session"],
  handler: async ({ body }) => {
    try {
      const response = await PostJob(body);
      return Result.ok(response);
    } catch (error) {
      return Result.err(error instanceof Error ? error : new Error("Failed to create job"));
    }
  },
});


export const GET = apiHandler({
  handler: async () => {
    try {
      const jobs = await GetJobs();
      return Result.ok(jobs);
    } catch (error) {
      return Result.err(error instanceof Error ? error : new Error("Failed to retrieve jobs"));
    }
  },
});


