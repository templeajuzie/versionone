"use server";

import { Applications, db, Jobs } from "@/db";
import { count, eq, gte, lt, and } from "drizzle-orm";

export const GetDashboardStats = async () => {
  try {
    // Basic stats - using Number() to ensure we handle string counts from Postgres
    const [totalJobsResult] = await db.select({ value: count() }).from(Jobs);
    const [openJobsResult] = await db
      .select({ value: count() })
      .from(Jobs)
      .where(eq(Jobs.status, "open"));

    const [totalApplicationsResult] = await db.select({ value: count() }).from(Applications);
    const [pendingApplicationsResult] = await db
      .select({ value: count() })
      .from(Applications)
      .where(eq(Applications.status, "pending"));

    const last7Days = new Date();
    last7Days.setDate(last7Days.getDate() - 7);

    const [recentApplicationsCountResult] = await db
      .select({ value: count() })
      .from(Applications)
      .where(gte(Applications.applied_at, last7Days));

    const stats = {
      jobs: {
        total: Number(totalJobsResult?.value ?? 0),
        open: Number(openJobsResult?.value ?? 0),
      },
      applications: {
        total: Number(totalApplicationsResult?.value ?? 0),
        pending: Number(pendingApplicationsResult?.value ?? 0),
        recent: Number(recentApplicationsCountResult?.value ?? 0),
      },
    };

    // Trend data (last 7 days)
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const trendData = [];
    
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      d.setHours(0, 0, 0, 0);
      
      const nextD = new Date(d);
      nextD.setDate(nextD.getDate() + 1);

      const [appCount] = await db
        .select({ value: count() })
        .from(Applications)
        .where(
          and(
            gte(Applications.applied_at, d),
            lt(Applications.applied_at, nextD)
          )
        );
      
      const [jobCount] = await db
        .select({ value: count() })
        .from(Jobs)
        .where(
          and(
            gte(Jobs.created_at, d),
            lt(Jobs.created_at, nextD)
          )
        );

      trendData.push({
        name: days[d.getDay()],
        applications: Number(appCount?.value ?? 0),
        jobs: Number(jobCount?.value ?? 0),
      });
    }

    // Distribution data (by job type)
    const distribution = await db
      .select({ 
        name: Jobs.job_type,
        value: count() 
      })
      .from(Jobs)
      .groupBy(Jobs.job_type);

    const colors: Record<string, string> = {
      "full-time": "#3b82f6",
      "part-time": "#8b5cf6",
      "contract": "#ec4899",
      "internship": "#f59e0b",
      "freelance": "#10b981",
    };

    const distributionData = distribution.map(d => ({
      name: d.name,
      value: Number(d.value),
      color: colors[d.name] || "#94a3b8"
    }));

    return {
      ...stats,
      trendData,
      distributionData,
    };
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    throw error;
  }
};
