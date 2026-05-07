import { db, Applications, Application } from "@/db";
import { eq } from "drizzle-orm";
export const PostApplication = async (data: Application) => {
  const [application] = await db.insert(Applications).values(data).returning();
  return application;
};

export const GetAllApplcation = async () => {
    const applications = await db.select().from(Applications)
    return applications;
    };

export const GetApplicationById = async (id: string) => {
  const [application] = await db.select().from(Applications).where(eq(Applications.id, id)).limit(1);
  return application;
};
