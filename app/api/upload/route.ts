import { uploadFiles } from "@/integration/file-upload";
import { apiHandler } from "@/lib/api-handler";
import { Result } from "better-result";

export const POST = apiHandler({
  handler: async ({ req }) => {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return Result.err(new Error("No file provided"));
    }

    const urls = await uploadFiles([file]);
    
    if (urls.length === 0) {
      return Result.err(new Error("Upload failed"));
    }

    return Result.ok({ url: urls[0] });
  },
});
