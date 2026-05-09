"use server";

import { Job, Jobs, db } from "@/db";
import { desc, eq } from "drizzle-orm";
import { nanoid } from "nanoid";

export async function PostJob(body: Omit<Job, "id" | "createdAt" | "updatedAt">) {
  return db
    .insert(Jobs)
    .values({
      ...body,
      id: nanoid(),
    })
    .returning();
}

export const GetJobs = async () => {
  const jobs = await db.select().from(Jobs).orderBy(desc(Jobs.created_at));
  return jobs;
};

export const GetSingleJob = async (id: string) => {
  const [job] = await db.select().from(Jobs).where(eq(Jobs.id, id)).limit(1);
  return job;
};

export const UpdateJob = async (body: Partial<Job> & Pick<Job, "id">) => {
  return db.update(Jobs).set(body).where(eq(Jobs.id, body.id)).returning();
};

export const DeleteJob = async (body: Pick<Job, "id">) => {
  return db.delete(Jobs).where(eq(Jobs.id, body.id)).returning();
};
