import { GetAllApplcation, PostApplication } from "@/actions/application";
import { apiHandler } from "@/lib/api-handler";
import { Result } from "better-result";
import { uploadFiles } from "@/integration/file-upload";
import { resend } from "@/integration/ResendConfig";
import { GetSingleJob } from "@/actions/jobs";
import { retrieveAccount } from "@/actions/account";

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

    // Send email notification to recruiter
    try {
      const job = await GetSingleJob(applicationData.job_id);
      if (job) {
        const recruiter = await retrieveAccount({ id: job.user_id });
        if (recruiter?.email) {
          await resend.emails.send({
            from: "Global WorkGate <onboarding@resend.dev>",
      to: ["versiononeinvestment@gmail.com"],
            subject: `New Application for ${job.title}`,
            html: `
              <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
                <div style="background: #2D3E75; padding: 24px 32px; border-radius: 8px; margin-bottom: 24px;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 800;">New Job Application</h1>
                  <p style="color: #93c5fd; margin: 4px 0 0; font-size: 13px;">${job.title} — ${job.company}</p>
                </div>

                <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
                  <h2 style="font-size: 16px; font-weight: 700; color: #111827; margin-top: 0; margin-bottom: 16px;">Applicant Details</h2>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; width: 140px;">Full Name</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; font-weight: 600; color: #111827;">${applicationData.full_name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; font-weight: 600; color: #2563eb;">${applicationData.email}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; font-weight: 600; color: #111827;">${applicationData.phone}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Resume</td>
                      <td style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #111827;">
                        <a href="${applicationData.resume_url}" style="color: #2563eb; text-decoration: none;">View Resume</a>
                      </td>
                    </tr>
                  </table>
                </div>

                <div style="text-align: center;">
                  <a href="${process.env.NEXT_PUBLIC_DASHBOARD_URL}/admin/dashboard/applications/${result.id}" 
                     style="display: inline-block; background: #2563eb; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
                    Review Application
                  </a>
                </div>

                <p style="font-size: 11px; color: #9ca3af; text-align: center; margin-top: 24px;">
                  This is an automated notification from Global WorkGate.
                </p>
              </div>
            `,
          });
        }
      }
    } catch (error) {
      console.error("Failed to send recruiter notification email:", error);
    }

    return Result.ok(result);
  },
});
