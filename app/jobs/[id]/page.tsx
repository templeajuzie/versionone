"use client";

import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Country, CountryDropdown } from "@/components/ui/country-dropdown";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useJob } from "@/context/JobContext";
import { applicationFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Briefcase, Building2, Clock, DollarSign, MapPin, Share2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formatCurrency = (amount: number | null | undefined) => {
  if (!amount) return null;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function PublicJobDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params.id as string; 
  const { getJobById } = useJob();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [job, setJob] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isApplying, setIsApplying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countryCodeVal, setCountryCodeVal] = useState("");

  const form = useForm({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      resume_url: "",
      cover_letter: "",
      country: "",
      country_code: "",
      phone: "",
      job_id: jobId,
    },
  });

  useEffect(() => {
    async function loadJob() {
      if (!jobId) return;
      setIsLoading(true);
      try {
        const fetchedJob = await getJobById(jobId);
        setJob(fetchedJob);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadJob();
  }, [jobId, getJobById]);

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const onSubmitApplication = (values: z.infer<typeof applicationFormSchema>) => {
    if (job?.isCVRequired && !values.resume_url) {
      form.setError("resume_url", { message: "Resume URL is required for this role" });
      return;
    }
    if (job?.isCoverletterRequired && !values.cover_letter) {
      form.setError("cover_letter", { message: "Cover letter is required for this role" });
      return;
    }

    setIsApplying(true);
    // Simulate application process
    setTimeout(() => {
      setIsApplying(false);
      setIsModalOpen(false);
      toast.success("Application submitted successfully! Check your email for next steps.");
      form.reset();
    }, 1500);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: job?.title,
        text: `Check out this job at ${job?.company}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  if (isLoading) {
    return (
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 p-4 pt-16 md:p-8 md:pt-24 lg:pt-32">
        <Skeleton className="h-6 w-32" />
        <div className="space-y-4">
          <Skeleton className="h-12 w-3/4 md:w-1/2" />
          <div className="flex gap-4">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-64 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!job || job.status?.toLowerCase() !== "open") {
    return (
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center p-12 pt-32 text-center">
        <div className="bg-muted mb-6 rounded-full p-6">
          <Briefcase className="text-muted-foreground h-12 w-12" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight">Job Not Found or Closed</h2>
        <p className="text-muted-foreground mt-3 text-lg">
          The position you are looking for has either been filled, removed, or doesn&apos;t exist.
        </p>
        <Button size="lg" className="mt-8" onClick={() => router.push("/jobs")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Browse Open Jobs
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 p-4 pt-16 md:p-8 md:pt-24 lg:pt-32">
        {/* Back Navigation */}
        <div>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground -ml-4"
            onClick={() => router.push("/jobs")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all jobs
          </Button>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {job.is_remote && (
                <Badge className="border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-500/20">
                  Remote
                </Badge>
              )}
              <Badge variant="secondary" className="px-3 py-1 text-sm font-medium capitalize">
                {job.jobType?.replace("-", " ") || "Full-time"}
              </Badge>
            </div>

            <h1 className="text-foreground text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              {job.title}
            </h1>

            <div className="text-muted-foreground flex flex-wrap items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                <span className="text-foreground/90 font-medium">{job.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{job.location}</span>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button variant="outline" size="lg" className="h-12 w-full gap-2 sm:w-auto" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button size="lg" className="h-12 w-full px-8 text-base shadow-sm sm:w-auto" onClick={handleApplyClick}>
              Apply Now
            </Button>
          </div>
        </div>

        <Separator className="my-2" />

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Left Column: Job Details */}
          <div className="space-y-12 lg:col-span-2">
            <section className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">About the Role</h3>
              <div className="text-muted-foreground prose prose-slate dark:prose-invert max-w-none text-base leading-relaxed whitespace-pre-wrap">
                {job.description}
              </div>
            </section>

            {job.requirements && (
              <section className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">Requirements</h3>
                <div className="text-muted-foreground prose prose-slate dark:prose-invert max-w-none text-base leading-relaxed whitespace-pre-wrap">
                  {job.requirements}
                </div>
              </section>
            )}

            {job.benefits && (
              <section className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">Benefits & Perks</h3>
                <div className="text-muted-foreground prose prose-slate dark:prose-invert max-w-none text-base leading-relaxed whitespace-pre-wrap">
                  {job.benefits}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Quick Info Sidebar */}
          <div className="space-y-6">
            <Card className="bg-card border-border/40 shadow-sm">
              <CardContent className="p-6">
                <h4 className="mb-6 text-lg font-semibold">Job Overview</h4>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Compensation</p>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {job.salaryMin || job.salaryMax ? (
                          <>
                            {job.salaryMin ? formatCurrency(job.salaryMin) : "Competitive"}
                            {job.salaryMax && ` - ${formatCurrency(job.salaryMax)}`}
                          </>
                        ) : (
                          "Competitive Salary"
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {job.location} {job.is_remote && "(Remote enabled)"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Job Type</p>
                      <p className="text-muted-foreground mt-1 text-sm capitalize">
                        {job.jobType?.replace("-", " ") || "Full-time"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Application Requirements</p>
                      <ul className="text-muted-foreground mt-1 list-inside list-disc text-sm">
                        {job.isCVRequired && <li>Resume / CV</li>}
                        {job.isCoverletterRequired && <li>Cover Letter</li>}
                        {!job.isCVRequired && !job.isCoverletterRequired && <li>Standard Profile</li>}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-border/40 mt-8 border-t pt-6">
                  <Button className="h-12 w-full text-base font-medium shadow-sm" onClick={handleApplyClick}>
                    Apply for this job
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-background fixed inset-0 z-50 flex h-dvh w-screen max-w-none translate-0 flex-col gap-0 overflow-y-auto rounded-none border-0 p-0 sm:max-w-[100vw] sm:rounded-none">
          <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 md:px-8 md:py-24">
            <DialogHeader className="mb-8">
              <DialogTitle className="text-left text-3xl font-extrabold md:text-4xl">
                Apply for <span className="text-primary">{job?.title}</span>
              </DialogTitle>
              <DialogDescription className="mt-2 text-left text-base">
                We&apos;re excited to see your application! Please fill out the details below.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmitApplication)} className="space-y-8 pb-24">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Full Name <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Email <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>
                        Country of Residence <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <CountryDropdown
                          defaultValue={field.value}
                          onChange={(country: Country) => {
                            field.onChange(country.alpha3);
                            const code = country.countryCallingCodes[0] || "";
                            form.setValue("country_code", code);
                            setCountryCodeVal(code);
                          }}
                          placeholder="Select your country"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>
                          Phone Number <span className="text-destructive">*</span>
                        </FormLabel>
                        <div className="flex gap-2">
                          <Input
                            readOnly
                            className="bg-muted text-muted-foreground w-24 cursor-default outline-none focus-visible:ring-0"
                            value={countryCodeVal}
                            placeholder="+000"
                          />
                          <FormControl>
                            <Input placeholder="Enter your phone number..." className="flex-1" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="resume_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Resume URL {job?.isCVRequired && <span className="text-destructive">*</span>}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="https://link-to-your-resume.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cover_letter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Cover Letter{" "}
                        {job?.isCoverletterRequired ? <span className="text-destructive">*</span> : "(Optional)"}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us why you're a great fit..."
                          className="min-h-36 resize-y"
                          name={field.name}
                          ref={field.ref}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          value={field.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="border-border/40 flex justify-end gap-3 border-t pt-6">
                  <Button type="button" variant="outline" className="h-12 px-6" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="h-12 px-8" disabled={isApplying}>
                    {isApplying ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
