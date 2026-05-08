import { GetApplicationById } from "@/actions/application";
import { apiHandler } from "@/lib/api-handler";
import { Result } from "better-result";


export const GET = apiHandler({
  handler: async ({ params }) => {
    try {
      const id = params.id;
      if (!id) return Result.err(new Error("Application ID is required"));
      const application = await GetApplicationById(id);
      if (!application) return Result.err(new Error("Application not found"));
      return Result.ok(application);
    } catch (error) {
      return Result.err(error instanceof Error ? error : new Error("Failed to retrieve application"));
    }
  },
});
