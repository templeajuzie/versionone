import { boolean, integer, pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "superadmin"]);
export const jobTypeEnum = pgEnum("job_type", ["full-time", "part-time", "contract", "internship", "freelance"]);
export const jobStatusEnum = pgEnum("job_status", ["open", "closed", "draft"]);
export const applicationStatusEnum = pgEnum("application_status", [
  "pending",
  "reviewing",
  "interviewing",
  "rejected",
  "hired",
]);

export const account = pgTable("account", {
  id: serial("id").primaryKey().unique(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  role: roleEnum("role").notNull().default("admin"),
  created_at: timestamp("created_at").defaultNow(),
});

export const Jobs = pgTable("jobs", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id")
    .notNull()
    .references(() => account.id),
  title: text("title").notNull(),
  description: text("description").notNull(),
  company: text("company").notNull(),
  location: text("location").notNull(),
  job_type: jobTypeEnum("job_type").notNull().default("full-time"),
  salary_range: text("salary_range"),
  is_remote: boolean("is_remote").notNull().default(false),
  requirements: text("requirements"),
  benefits: text("benefits"),
  status: jobStatusEnum("status").notNull().default("open"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const Applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  job_id: integer("job_id")
    .notNull()
    .references(() => Jobs.id),
  applicant_id: integer("applicant_id")
    .notNull()
    .references(() => account.id),
  resume_url: text("resume_url").notNull(),
  cover_letter: text("cover_letter"),
  status: applicationStatusEnum("status").notNull().default("pending"),
  applied_at: timestamp("applied_at").defaultNow(),
});
