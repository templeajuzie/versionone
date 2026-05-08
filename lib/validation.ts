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

export const applicationStatusEnum = z.enum(["pending", "reviewing", "interviewing", "rejected", "hired"]);

export const applicationFormSchema = z.object({
  id: z.string().optional(),

  full_name: z.string().min(2, "Full name must be at least 2 characters"),

  email: z.string().email("Invalid email address"),

  phone: z.string().min(10, "Phone number must be at least 10 characters"),
   country_code: z.string().min(1, "Country code is required"),
  country: z.string().min(2, "Country must be at least 2 characters"),

  job_id: z.string({ message: "Job ID is required" }),

  resume_url: z.string().url("Resume must be a valid URL").optional().nullable(),

  cover_letter: z.string().optional().nullable(),

  linkedin_url: z.string().url().optional().nullable(),

  portfolio_url: z.string().url().optional().nullable(),

  github_url: z.string().url().optional().nullable(),

  years_of_experience: z.number().optional(),

  expected_salary: z.number().optional(),

  availability_date: z.string().optional(),

  recruiter_notes: z.string().optional().nullable(),

  status: applicationStatusEnum.optional().default("pending"),

  created_at: z.date().optional(),

  updated_at: z.date().optional(),
});

export type JobFormInput = z.infer<typeof jobFormSchema>;
export type ApplicationFormInput = z.infer<typeof applicationFormSchema>;
