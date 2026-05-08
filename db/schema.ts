import { AuthProvider, authProviderEnum as authProviderEnum$1 } from "@/types/schema.client";
import { InferSelectModel } from "drizzle-orm";
import { boolean, integer, jsonb, pgEnum, pgTable, text, timestamp, unique } from "drizzle-orm/pg-core";

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

export const authProviderEnum = pgEnum("auth_provider", authProviderEnum$1);

export type AccountSSOOption = {
  provider: AuthProvider;
  sub: string;
};

export type AccountProfile = {
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
};

export const accounts = pgTable("account", {
  id: text("id").primaryKey().unique(),
  email: text("email").notNull().unique(),
  profile: jsonb("profile").$type<AccountProfile>(),
  sso: jsonb("sso").$type<{ values: Array<AccountSSOOption> }>().notNull(),
  role: roleEnum("role").notNull().default("admin"),
  created_at: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const auth = pgTable("auth", {
  id: text("id").primaryKey(),
  accountId: text("account_id")
    .notNull()
    .references(() => accounts.id),
  provider: authProviderEnum("provider").notNull(),
  accessToken: text("access_token").notNull(),
  refreshToken: text("refresh_token").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  isRevoked: boolean("is_revoked").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  metadata: jsonb("metadata").$type<Record<string, unknown> | null>(),
});

export const Jobs = pgTable("jobs", {
  id: text("id").primaryKey(),
  user_id: text("user_id")
    .notNull()
    .references(() => accounts.id),
  title: text("title").notNull(),
  description: text("description").notNull(),
  company: text("company").notNull(),
  location: text("location").notNull(),
  job_type: jobTypeEnum("job_type").notNull().default("full-time"),
  salaryMin: integer("salaryMin"),
  salaryMax: integer("salaryMax"),
  is_remote: boolean("is_remote").notNull().default(false),
  requirements: text("requirements"),
  benefits: text("benefits"),
  status: jobStatusEnum("status").notNull().default("open"),
  isSponsored: boolean("isSponsored").notNull().default(false),
  isCVRequired: boolean("isCVRequired").notNull().default(false),
  isCoverletterRequired: boolean("isCoverletterRequired").notNull().default(false),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const Applications = pgTable(
  "applications",
  {
    id: text("id").primaryKey(),

    job_id: text("job_id")
      .notNull()
      .references(() => Jobs.id),

    applicant_id: text("applicant_id")
      .notNull()
      .references(() => accounts.id),

    full_name: text("full_name").notNull(),

    email: text("email").notNull(),

    phone: text("phone").notNull(),
   country_code: text("country_code").notNull(),
    country: text("country").notNull(),

    linkedin_url: text("linkedin_url"),

    portfolio_url: text("portfolio_url"),

    github_url: text("github_url"),

    years_of_experience: integer("years_of_experience"),

    expected_salary: integer("expected_salary"),

    availability_date: text("availability_date"),

    recruiter_notes: text("recruiter_notes"),

    resume_url: text("resume_url").notNull(),

    cover_letter: text("cover_letter"),

    status: applicationStatusEnum("status").notNull().default("pending"),

    applied_at: timestamp("applied_at").defaultNow(),

    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    uniqueApplication: unique().on(table.job_id, table.applicant_id),
  })
);
export type Account = InferSelectModel<typeof accounts>;
export type Auth = InferSelectModel<typeof auth>;
export type Job = InferSelectModel<typeof Jobs>;
export type Application = InferSelectModel<typeof Applications>;
