"use server";

import { Application, Applications, db } from "@/db";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";

export const PostApplication = async (data: Application) => {
  const [application] = await db
    .insert(Applications)
    .values({
      ...data,
      id: `apl_${nanoid(10)}`,
    })
    .returning();
  return application;
};

export const GetAllApplcation = async () => {
  const applications = await db.select().from(Applications);
  return applications;
};

export const GetApplicationById = async (id: string) => {
  const [application] = await db.select().from(Applications).where(eq(Applications.id, id)).limit(1);
  return application;
};

export const UpdateApplicationStatus = async (id: string, status: Application["status"]) => {
  const [application] = await db
    .update(Applications)
    .set({ status, updated_at: new Date() })
    .where(eq(Applications.id, id))
    .returning();
  return application;
};
