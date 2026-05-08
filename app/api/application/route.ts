import { GetAllApplcation, PostApplication } from "@/actions/application";
import { apiHandler } from "@/lib/api-handler";
import { Result } from "better-result";
import { uploadFiles } from "@/integration/file-upload";

export const GET = apiHandler({
  handler: async () => {
    const applications = await GetAllApplcation();
    return Result.ok(applications);
  },
});

export const POST = apiHandler({
  handler: async ({ body }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let applicationData: any;

    if (body instanceof FormData) {
      const resumeFile = body.get("resume") as File;
      const dataStr = body.get("data") as string;
      applicationData = JSON.parse(dataStr);

      if (resumeFile && resumeFile.size > 0) {
        const urls = await uploadFiles([resumeFile]);
        if (urls.length > 0) {
          applicationData.resume_url = urls[0];
        }
      }
    } else {
      applicationData = body;
    }

    const result = await PostApplication(applicationData);
    return Result.ok(result);
  },
});
