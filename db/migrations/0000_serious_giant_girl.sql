CREATE TYPE "public"."application_status" AS ENUM('pending', 'reviewing', 'interviewing', 'rejected', 'hired');--> statement-breakpoint
CREATE TYPE "public"."auth_provider" AS ENUM('google', 'local');--> statement-breakpoint
CREATE TYPE "public"."job_status" AS ENUM('open', 'closed', 'draft');--> statement-breakpoint
CREATE TYPE "public"."job_type" AS ENUM('full-time', 'part-time', 'contract', 'internship', 'freelance');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('admin', 'superadmin');--> statement-breakpoint
CREATE TABLE "applications" (
	"id" serial PRIMARY KEY NOT NULL,
	"job_id" integer NOT NULL,
	"applicant_id" text NOT NULL,
	"resume_url" text NOT NULL,
	"cover_letter" text,
	"status" "application_status" DEFAULT 'pending' NOT NULL,
	"applied_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "jobs" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"company" text NOT NULL,
	"location" text NOT NULL,
	"job_type" "job_type" DEFAULT 'full-time' NOT NULL,
	"salary_range" text,
	"is_remote" boolean DEFAULT false NOT NULL,
	"requirements" text,
	"benefits" text,
	"status" "job_status" DEFAULT 'open' NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "account" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"profile" jsonb,
	"sso" jsonb NOT NULL,
	"role" "role" DEFAULT 'admin' NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "account_id_unique" UNIQUE("id"),
	CONSTRAINT "account_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "auth" (
	"id" text PRIMARY KEY NOT NULL,
	"account_id" text NOT NULL,
	"provider" "auth_provider" NOT NULL,
	"access_token" text NOT NULL,
	"refresh_token" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"is_revoked" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"metadata" jsonb
);
--> statement-breakpoint
ALTER TABLE "applications" ADD CONSTRAINT "applications_job_id_jobs_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."jobs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "applications" ADD CONSTRAINT "applications_applicant_id_account_id_fk" FOREIGN KEY ("applicant_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_user_id_account_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "auth" ADD CONSTRAINT "auth_account_id_account_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;