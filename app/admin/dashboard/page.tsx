/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
import { useApplication } from "@/context/applicationContext";
import {
  ArrowUpRightIcon,
  BriefcaseIcon,
  CalendarIcon,
  ClockIcon,
  FileTextIcon,
  TrendingUpIcon,
  UsersIcon
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  XAxis,
  YAxis
} from "recharts";

export default function Page() {
  const { dashboardStats, isLoadingStats, applications } = useApplication();

  const mainStats = [
    {
      title: "Total Jobs",
      value: dashboardStats?.jobs?.total ?? 0,
      icon: <BriefcaseIcon className="size-4" />,
      description: "Active postings",
    },
    {
      title: "Applications",
      value: dashboardStats?.applications?.total ?? 0,
      icon: <FileTextIcon className="size-4" />,
      description: "Total received",
    },
    {
      title: "Pending Review",
      value: dashboardStats?.applications?.pending ?? 0,
      icon: <ClockIcon className="size-4" />,
      description: "Awaiting action",
    },
    {
      title: "Recent Growth",
      value: dashboardStats?.applications?.recent ?? 0,
      icon: <TrendingUpIcon className="size-4" />,
      description: "Last 7 days",
    },
  ];

  const chartConfig = {
    applications: {
      label: "Applications",
      color: "hsl(var(--primary))",
    },
    jobs: {
      label: "Jobs",
      color: "hsl(var(--muted-foreground))",
    },
  };

  const trendData = dashboardStats?.trendData || [];
  const distributionData = dashboardStats?.distributionData || [];

  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 space-y-6 max-w-8xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <CalendarIcon className="size-3" />
              Last updated: {new Date().toLocaleTimeString()}
            </span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {isLoadingStats
            ? Array.from({ length: 4 }).map((_, i) => (
                <Card key={i}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <Skeleton className="h-4 w-24" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-8 w-12" />
                  </CardContent>
                </Card>
              ))
            : mainStats.map((stat, i) => (
                <Card key={i}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                    <div className="text-muted-foreground">
                      {stat.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Application Activity</CardTitle>
              <CardDescription>Daily flow of applicants over the last week.</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] pl-2">
              {isLoadingStats ? (
                <Skeleton className="h-full w-full" />
              ) : trendData.length > 0 ? (
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <AreaChart data={trendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      className="text-[10px] fill-muted-foreground"
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      className="text-[10px] fill-muted-foreground"
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area 
                      type="monotone" 
                      dataKey="applications" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      fill="hsl(var(--primary))" 
                      fillOpacity={0.1} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="jobs" 
                      stroke="hsl(var(--muted-foreground))" 
                      strokeWidth={2}
                      fill="hsl(var(--muted-foreground))" 
                      fillOpacity={0.05} 
                    />
                  </AreaChart>
                </ChartContainer>
              ) : (
                <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground">
                  No activity recorded in the last 7 days
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Job Distribution</CardTitle>
              <CardDescription>Breakdown by employment type.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center h-[300px]">
              {isLoadingStats ? (
                <Skeleton className="size-48 rounded-full" />
              ) : distributionData.length > 0 ? (
                <>
                  <ChartContainer config={chartConfig} className="mx-auto aspect-square h-[200px]">
                    <PieChart>
                      <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                      <Pie
                        data={distributionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {distributionData.map((entry: any, index: number) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ChartContainer>
                  <div className="grid grid-cols-2 gap-4 mt-4 w-full">
                    {distributionData.map((item: any, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <div className="size-2 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-muted-foreground truncate capitalize">{item.name}</span>
                        <span className="ml-auto font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-sm text-muted-foreground">No jobs posted yet</div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>Latest candidates to join the pipeline.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applications?.slice(0, 5).map((app: any) => (
                  <div key={app.id} className="flex items-center gap-4 py-2 border-b last:border-0">
                    <div className="size-9 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                      {app.full_name?.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{app.full_name}</p>
                      <p className="text-xs text-muted-foreground truncate">{app.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium">{app.country}</p>
                      <p className="text-[10px] text-muted-foreground">{new Date(app.applied_at).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
                {(!applications || applications.length === 0) && !isLoadingStats && (
                  <div className="text-center py-10 text-muted-foreground text-sm">
                    No recent applications found
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <button className="flex items-center gap-2 w-full p-2 text-sm rounded-md hover:bg-muted transition-colors text-left font-medium">
                <BriefcaseIcon className="size-4" />
                Post New Job
              </button>
              <button className="flex items-center gap-2 w-full p-2 text-sm rounded-md hover:bg-muted transition-colors text-left font-medium">
                <UsersIcon className="size-4" />
                Invite Recruiter
              </button>
              <button className="flex items-center gap-2 w-full p-2 text-sm rounded-md hover:bg-muted transition-colors text-left font-medium">
                <ArrowUpRightIcon className="size-4" />
                Export Data
              </button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
