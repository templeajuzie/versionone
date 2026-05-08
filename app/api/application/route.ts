import { GetAllApplcation, PostApplication } from "@/actions/application";
import { apiHandler } from "@/lib/api-handler";
import { Result } from "better-result";

export const GET = apiHandler({
  handler: async () => {
    const applications = await GetAllApplcation();
    return Result.ok(applications);
  },
});

export const POST = apiHandler({
  handler: async ({ body }) => {
    const result = await PostApplication(body);
    return Result.ok(result);
  },
});
