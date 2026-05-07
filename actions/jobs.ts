import { Job, Jobs, db } from "@/db";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";

export async function PostJob(body: Omit<Job, "id"| "createdAt" | "updatedAt">) {
  return db
    .insert(Jobs)
    .values({
      ...body,
      id: nanoid(),
    })
    .returning();
}

export const GetJobs = async () => {
  const jobs = await db.select().from(Jobs);
  return jobs;
};

export const GetSingleJob = async (id: string) => {
  const [job] = await db.select().from(Jobs).where(eq(Jobs.id, id)).limit(1);
  return job;
};
