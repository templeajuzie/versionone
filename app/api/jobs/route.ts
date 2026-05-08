import { DeleteJob, GetJobs, PostJob, UpdateJob } from "@/actions/jobs";
import { apiHandler } from "@/lib/api-handler";
import { Result } from "better-result";

export const POST = apiHandler({

  handler: async ({ body }) => {
    try {
      const response = await PostJob(body);
      console.log("resssss", response);
      return Result.ok(response);
    } catch (error) {
      console.log("errror", error);
      return Result.err(error instanceof Error ? error : new Error("Failed to create job"));
    }
  },
});

export const GET = apiHandler({
  handler: async () => {
    try {
      const jobs = await GetJobs();
      console.log(jobs);
      return Result.ok(jobs);
    } catch (error) {
      return Result.err(error instanceof Error ? error : new Error("Failed to retrieve jobs"));
    }
  },
});

export const PATCH = apiHandler({
  auth: ["session"],
  handler: async ({ body }) => {
    try {
      const response = await UpdateJob(body);
      return Result.ok(response);
    } catch (error) {
      return Result.err(error instanceof Error ? error : new Error("Failed to update job"));
    }
  },
});

export const DELETE = apiHandler({
  auth: ["session"],
  handler: async ({ body }) => {
    try {
      const response = await DeleteJob(body);
      return Result.ok(response);
    } catch (error) {
      return Result.err(error instanceof Error ? error : new Error("Failed to delete job"));
    }
  },
});
