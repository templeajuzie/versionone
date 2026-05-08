/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useJob } from "@/context/JobContext";
import { type JobFormInput, jobFormSchema } from "@/lib/validation";
import { JobStatus, JobType } from "@/types/form.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Save } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params.id as string;
  const { getJobById, updateJob } = useJob();
  const [isEditing, setIsEditing] = useState(false);
  const [job, setJob] = useState<any>(null);
  const [isLoadingSingleJob, setIsLoadingSingleJob] = useState<boolean>(true);

  useEffect(() => {
    async function loadJob() {
      setIsLoadingSingleJob(true);
      try {
        const fetchedJob = await getJobById(jobId);
        setJob(fetchedJob);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingSingleJob(false);
      }
    }
    if (jobId) {
      loadJob();
    }
  }, [jobId, getJobById]);

  const form = useForm<JobFormInput>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      title: "",
      company: "",
      location: "",
      job_type: JobType.FullTime,
      salaryMin: 0,
      salaryMax: 0,
      is_remote: false,
      requirements: "",
      benefits: "",
      description: "",
      status: JobStatus.Open,
      isSponsored: false,
      isCoverletterRequired: false,
      isCVRequired: false,
    },
  });

  useEffect(() => {
    if (job) {
      form.reset({
        title: job.title,
        company: job.company,
        location: job.location,
        job_type: (job as any).job_type || JobType.FullTime,
        salaryMin: job.salaryMin || 0,
        salaryMax: job.salaryMax || 0,
        is_remote: job.is_remote,
        requirements: job.requirements || "",
        benefits: job.benefits || "",
        description: job.description,
        status: job.status as unknown as JobStatus,
        isSponsored: job.isSponsored,
        isCoverletterRequired: job.isCoverletterRequired,
        isCVRequired: job.isCVRequired,
      });
    }
  }, [job, form]);

  async function onSubmit(values: JobFormInput) {
    if (!jobId) return;
    try {
      updateJob(jobId, {
        title: values.title,
        company: values.company,
        location: values.location,
        job_type: values.job_type,
        salaryMin: values.salaryMin ?? undefined,
        salaryMax: values.salaryMax ?? undefined,
        is_remote: values.is_remote,
        requirements: values.requirements,
        benefits: values.benefits,
        description: values.description,
        status: values.status,
        isSponsored: values.isSponsored,
        isCoverletterRequired: values.isCoverletterRequired,
        isCVRequired: values.isCVRequired,
      } as any);
      setIsEditing(false);
    } catch (err: unknown) {
      const errorMsg =
        err && typeof err === "object" && "message" in err ? (err as { message?: string }).message : undefined;
      toast.error(errorMsg || "Failed to update job posting. Please try again.");
    }
  }

  if (isLoadingSingleJob) {
    return (
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 p-4 md:p-8">
        <Skeleton className="h-8 w-1/4" />
        <Skeleton className="h-100 w-full rounded-xl" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center p-12 text-center">
        <h2 className="text-2xl font-bold">Job Not Found</h2>
        <p className="text-muted-foreground mt-2">The job you are looking for does not exist or has been removed.</p>
        <Button variant="outline" className="mt-4" onClick={() => router.push("/admin/dashboard/jobs")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Go Back to Jobs
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full flex-col gap-8 p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.push("/admin/dashboard/jobs")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-foreground text-3xl font-bold tracking-tight">{isEditing ? "Edit Job" : job.title}</h1>
            <p className="text-muted-foreground mt-1">
              {isEditing ? "Modify the details of this job posting." : `at ${job.company}`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)}>Edit Job Details</Button>
          ) : (
            <Button
              variant="outline"
              onClick={() => {
                setIsEditing(false);
                form.reset(); // Reset to what it was
              }}
            >
              Cancel Editing
            </Button>
          )}
        </div>
      </div>

      <div className="bg-card rounded-xl border p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="group space-y-10">
            {/* Adding inert if not editing so inputs act safely disabled visually */}
            <fieldset disabled={!isEditing} className={`space-y-10 ${!isEditing ? "opacity-90" : ""}`}>
              {/* Section: Job Details */}
              <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                <div className="space-y-1">
                  <h2 className="font-semibold">Job Details</h2>
                  <p className="text-muted-foreground text-sm">Core information about the job opening.</p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-2">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-start gap-2">
                        <FormLabel>Job Title *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Senior React Developer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-start gap-2">
                        <FormLabel>Company Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., TechCorp Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-start gap-2">
                        <FormLabel>Location *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., San Francisco, CA" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="job_type"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-start gap-2">
                        <FormLabel>Job Type *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value} disabled={!isEditing}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Job Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={JobType.FullTime}>Full-time</SelectItem>
                            <SelectItem value={JobType.PartTime}>Part-time</SelectItem>
                            <SelectItem value={JobType.Contract}>Contract</SelectItem>
                            <SelectItem value={JobType.Temporary}>Temporary</SelectItem>
                            <SelectItem value={JobType.Internship}>Internship</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="salaryMin"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-start gap-2">
                        <FormLabel>Minimum Salary</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 80000"
                            {...field}
                            value={field.value ?? 0}
                            onChange={(e) => field.onChange(e.target.valueAsNumber)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="salaryMax"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-start gap-2">
                        <FormLabel>Maximum Salary</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 120000"
                            {...field}
                            value={field.value ?? 0}
                            onChange={(e) => field.onChange(e.target.valueAsNumber)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Separator className="my-10" />

              {/* Section: Description & Requirements */}
              <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                <div className="space-y-1">
                  <h2 className="font-semibold">Description & Requirements</h2>
                  <p className="text-muted-foreground text-sm">Role, requirements, and benefits.</p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:col-span-2">
                  <div className="flex gap-6">
                    <FormField
                      control={form.control}
                      name="isCVRequired"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center gap-3 space-y-0">
                          <FormControl>
                            <input
                              type="checkbox"
                              checked={field.value}
                              onChange={field.onChange}
                              className="h-4 w-4"
                              disabled={!isEditing}
                            />
                          </FormControl>
                          <FormLabel className="cursor-pointer">CV Required</FormLabel>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="isCoverletterRequired"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center gap-3 space-y-0">
                          <FormControl>
                            <input
                              type="checkbox"
                              checked={field.value}
                              onChange={field.onChange}
                              className="h-4 w-4"
                              disabled={!isEditing}
                            />
                          </FormControl>
                          <FormLabel className="cursor-pointer">Cover Letter Required</FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-start gap-2">
                        <FormLabel>Job Description *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describe the role..." className="min-h-32" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="requirements"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-start gap-2">
                        <FormLabel>Requirements *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="List required skills..." className="min-h-24" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="benefits"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-start gap-2">
                        <FormLabel>Benefits *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="List benefits..." className="min-h-24" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Separator className="my-10" />

              {/* Section: Listing Options */}
              <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                <div className="space-y-1">
                  <h2 className="font-semibold">Listing Options</h2>
                  <p className="text-muted-foreground text-sm">Set visibility, remote status, and sponsorship.</p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:col-span-2">
                  <div className="flex gap-6">
                    <FormField
                      control={form.control}
                      name="is_remote"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center gap-3 space-y-0">
                          <FormControl>
                            <input
                              type="checkbox"
                              checked={field.value}
                              onChange={field.onChange}
                              className="h-4 w-4"
                              disabled={!isEditing}
                            />
                          </FormControl>
                          <FormLabel className="cursor-pointer">Remote Position</FormLabel>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="isSponsored"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center gap-3 space-y-0">
                          <FormControl>
                            <input
                              type="checkbox"
                              checked={field.value}
                              onChange={field.onChange}
                              className="h-4 w-4"
                              disabled={!isEditing}
                            />
                          </FormControl>
                          <FormLabel className="cursor-pointer">Sponsored Listing</FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem className="mt-4 flex flex-col items-start gap-2">
                        <FormLabel>Job Status *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value} disabled={!isEditing}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Job Status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={JobStatus.Draft}>Draft</SelectItem>
                            <SelectItem value={JobStatus.Open}>Open</SelectItem>
                            <SelectItem value={JobStatus.Closed}>Closed</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </fieldset>

            {isEditing && (
              <div className="flex justify-end gap-3 border-t pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false);
                    form.reset();
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
