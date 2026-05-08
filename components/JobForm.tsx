"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useJob } from "@/context/JobContext";
import { type JobFormInput, jobFormSchema } from "@/lib/validation";
import { JobStatus, JobType } from "@/types/form.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function JobForm() {
  const router = useRouter();
  const { createJob, isError, isPending, error } = useJob();
  const userid = "ac_MDFqjTIPKO0bvL7tjYvxNen0N";
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

  async function onSubmit(values: JobFormInput) {
    try {
      createJob({
        title: values.title,
        company: values.company,
        location: values.location,
        jobType: values.job_type,
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
        user_id: userid,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit(onSubmit)(e); }} className="mx-auto space-y-10">
        {/* Section: Job Details */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-1">
            <h2 className="font-semibold">Job Details</h2>
            <p className="text-muted-foreground text-sm">Enter the core information about the job opening.</p>
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
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
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
                  <FormLabel>Minimum Salary (Optional)</FormLabel>
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
                  <FormLabel>Maximum Salary (Optional)</FormLabel>
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
            <p className="text-muted-foreground text-sm">Describe the role, requirements, and benefits for this job.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:col-span-2">
            <FormField
              control={form.control}
              name="isCVRequired"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <FormLabel>CV Required</FormLabel>
                    <FormDescription>Applicants must upload a CV to apply.</FormDescription>
                  </div>
                  <FormControl>
                    <input type="checkbox" checked={field.value} onChange={field.onChange} className="h-4 w-4" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isCoverletterRequired"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <FormLabel>Cover Letter Required</FormLabel>
                    <FormDescription>Applicants must submit a cover letter to apply.</FormDescription>
                  </div>
                  <FormControl>
                    <input type="checkbox" checked={field.value} onChange={field.onChange} className="h-4 w-4" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start gap-2">
                  <FormLabel>Job Description *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe the role, responsibilities..." className="min-h-32" {...field} />
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
                    <Textarea
                      placeholder="List required skills, experience, qualifications..."
                      className="min-h-24"
                      {...field}
                    />
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
                    <Textarea
                      placeholder="List benefits such as health insurance, PTO..."
                      className="min-h-24"
                      {...field}
                    />
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
            <p className="text-muted-foreground text-sm">Set job visibility, remote status, and sponsorship.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:col-span-2">
            <FormField
              control={form.control}
              name="is_remote"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <FormLabel>Remote Position</FormLabel>
                    <FormDescription>Is this position available for remote work?</FormDescription>
                  </div>
                  <FormControl>
                    <input type="checkbox" checked={field.value} onChange={field.onChange} className="h-4 w-4" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isSponsored"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <FormLabel>Sponsored Listing</FormLabel>
                    <FormDescription>Promote this job to the top of listings</FormDescription>
                  </div>
                  <FormControl>
                    <input type="checkbox" checked={field.value} onChange={field.onChange} className="h-4 w-4" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start gap-2">
                  <FormLabel>Job Status *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
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

        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline" className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button type="submit" className="w-full sm:w-auto" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Posting...
              </>
            ) : (
              "Post Job"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
