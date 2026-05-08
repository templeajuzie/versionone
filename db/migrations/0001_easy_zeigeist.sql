ALTER TABLE "applications" DROP CONSTRAINT "applications_job_id_applicant_id_unique";--> statement-breakpoint
ALTER TABLE "applications" DROP CONSTRAINT "applications_applicant_id_account_id_fk";
--> statement-breakpoint
ALTER TABLE "applications" DROP COLUMN "applicant_id";--> statement-breakpoint
ALTER TABLE "applications" DROP COLUMN "github_url";