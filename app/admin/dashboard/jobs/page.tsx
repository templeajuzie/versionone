"use client";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useJob } from "@/context/JobContext";
import { Job } from "@/db/schema";
import { Building2, DollarSign, Edit, Eye, MapPin, MoreVertical, Plus, Search, Trash2 } from "lucide-react";



const getStatusColor = (status?: string) => {
  switch (status) {
    case "open":
      return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    case "closed":
      return "bg-rose-500/10 text-rose-500 border-rose-500/20";
    case "draft":
      return "bg-slate-500/10 text-slate-500 border-slate-500/20";
    default:
      return "bg-slate-500/10 text-slate-500 border-slate-500/20";
  }
};

const formatCurrency = (amount: number | null | undefined) => {
  if (!amount) return null;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function JobsPage() {
  const { jobs, isLoadingJobs, deleteJob } = useJob();
  const [jobToDelete, setJobToDelete] = useState<string | null>(null);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 p-4 md:p-8">
      {/* Header Section */}
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-foreground text-3xl font-bold tracking-tight">Jobs</h1>
          <p className="text-muted-foreground mt-1">Manage your job postings and track applications.</p>
        </div>
        <Button asChild className="gap-2 shadow-sm">
          {/* Using an anchor/Link assuming the creation route is standard */}
          <a href="/admin/dashboard/create">
            <Plus className="h-4 w-4" />
            Post New Job
          </a>
        </Button>
      </div>

      {/* Filters / Search */}
      <div className="bg-card flex flex-col items-center gap-4 rounded-xl border p-4 shadow-sm sm:flex-row">
        <div className="text-muted-foreground relative w-full sm:max-w-md">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            placeholder="Search jobs by title or company..."
            className="bg-background/50 border-none pl-9 shadow-none focus-visible:ring-1"
          />
        </div>
        <div className="ml-auto flex w-full gap-2 sm:w-auto">
          <Button
            variant="outline"
            className="bg-background/50 text-muted-foreground w-full border-none shadow-none sm:w-auto"
          >
            Filter
          </Button>
          <Button
            variant="outline"
            className="bg-background/50 text-muted-foreground w-full border-none shadow-none sm:w-auto"
          >
            Sort By
          </Button>
        </div>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {isLoadingJobs ? (
          Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className="border-border/40 bg-card flex flex-col overflow-hidden">
              <CardHeader className="relative items-start pb-4">
                <div className="flex w-full items-start justify-between">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-md" />
                </div>
                <div className="mt-3 w-full space-y-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </CardHeader>
              <CardContent className="flex-1 pb-4">
                <div className="flex flex-col gap-3">
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/2" />
                  <div className="mt-2 flex gap-2">
                    <Skeleton className="h-5 w-20 rounded-full" />
                    <Skeleton className="h-5 w-16 rounded-full" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-border/40 bg-muted/20 border-t pt-4">
                <Skeleton className="h-10 w-full rounded-md" />
              </CardFooter>
            </Card>
          ))
        ) : jobs.length > 0 ? (
          jobs.map((job) => (
            <Card
              key={job.id}
              className="border-border/40 hover:border-primary/20 bg-card group flex flex-col overflow-hidden transition-shadow duration-200 hover:shadow-md"
            >
              <CardHeader className="relative items-start pb-4">
                <div className="flex w-full items-start justify-between">
                  <Badge
                    variant="outline"
                    className={`rounded-full px-2.5 py-0.5 font-medium capitalize ${getStatusColor(job.status)}`}
                  >
                    {job.status}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground -mt-2 -mr-2 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[160px]">
                      <DropdownMenuItem asChild>
                        <a href={`/admin/dashboard/jobs/${job.id}`} className="flex w-full cursor-pointer items-center">
                          <Eye className="mr-2 h-4 w-4" />
                          <span>View Details</span>
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a
                          href={`/admin/dashboard/jobs/${job.id}/edit`}
                          className="flex w-full cursor-pointer items-center"
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit Job</span>
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer"
                        onClick={() => setJobToDelete(job.id ?? null)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Delete Job</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="mt-3 space-y-1">
                  <CardTitle className="line-clamp-1 text-xl leading-tight font-semibold" title={job.title}>
                    {job.title}
                  </CardTitle>
                  <div className="text-muted-foreground flex items-center gap-2 text-sm">
                    <Building2 className="h-4 w-4 shrink-0" />
                    <span className="truncate">{job.company}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 pb-4">
                <div className="flex flex-col gap-2.5">
                  <div className="text-muted-foreground flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span className="truncate">
                      {job.location} {job.is_remote && "(Remote)"}
                    </span>
                  </div>
                  {(job.salaryMin || job.salaryMax) && (
                    <div className="text-muted-foreground text-foreground/80 flex items-center gap-2 text-sm font-medium">
                      <DollarSign className="h-4 w-4 shrink-0 text-emerald-500/70" />
                      <span>
                        {job.salaryMin ? formatCurrency(job.salaryMin) : "Competitive"}
                        {job.salaryMax && ` - ${formatCurrency(job.salaryMax)}`}
                      </span>
                    </div>
                  )}

                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground font-normal capitalize"
                    >
                      {job.jobType?.replace("-", " ")}
                    </Badge>
                    {job.is_remote && (
                      <Badge
                        variant="secondary"
                        className="border-blue-500/20 bg-blue-500/10 font-normal text-blue-600 dark:text-blue-400"
                      >
                        Remote
                      </Badge>
                    )}
                    {job.isSponsored && (
                      <Badge
                        variant="secondary"
                        className="border-amber-500/20 bg-amber-500/10 font-normal text-amber-600 dark:text-amber-400"
                      >
                        Sponsored
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="border-border/40 bg-muted/20 flex gap-3 border-t pt-4">
                <Button variant="default" className="w-full font-medium" asChild>
                  <a href={`/admin/dashboard/jobs/${job.id}`}>View Details</a>
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <div className="bg-muted mb-4 rounded-full p-4">
              <Search className="text-muted-foreground h-8 w-8" />
            </div>
            <h3 className="w-full text-lg font-semibold">No jobs found</h3>
            <p className="text-muted-foreground mt-1 w-full max-w-sm">
              You haven&lsquo;t posted any jobs yet, or no jobs match your current filters.
            </p>
            <Button asChild className="mt-6">
              <a href="/admin/dashboard/create">
                <Plus className="mr-2 h-4 w-4" />
                Post Your First Job
              </a>
            </Button>
          </div>
        )}
      </div>

      <AlertDialog open={!!jobToDelete} onOpenChange={(open) => !open && setJobToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the job posting and remove all associated data
              from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => {
                if (jobToDelete) {
                  deleteJob(jobToDelete);
                  setJobToDelete(null);
                }
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
