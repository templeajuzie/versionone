import { JobStatus, JobType } from "@/types/form.type";
import { z } from "zod";

export const jobFormSchema = z.object({
  id: z.string().optional(),
  user_id: z.string().optional(),
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  job_type: z.enum([JobType.FullTime, JobType.PartTime, JobType.Contract, JobType.Temporary, JobType.Internship]),
  salaryMin: z.number().min(0).optional().nullable(),
  salaryMax: z.number().min(0).optional().nullable(),
  is_remote: z.boolean(),
  requirements: z.string().min(10, "Requirements must be at least 10 characters"),
  benefits: z.string().min(10, "Benefits must be at least 10 characters"),
  status: z.enum([JobStatus.Draft, JobStatus.Open, JobStatus.Closed]),
  isSponsored: z.boolean(),
  isCVRequired: z.boolean().optional(),
  isCoverletterRequired: z.boolean().optional(),
});
export const applicationFormSchema = z.object({
  applicantEmail: z.string().email("Invalid email address"),
  resumeUrl: z.string().url("Resume must be a valid URL"),
  coverLetter: z.string().min(50, "Cover letter must be at least 50 characters"),
  country: z.string().min(2, "Please select a country"),
});

export type JobFormInput = z.infer<typeof jobFormSchema>;
export type ApplicationFormInput = z.infer<typeof applicationFormSchema>;
