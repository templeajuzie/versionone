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
import { useApplication } from "@/context/applicationContext";
import { applicationFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  ArrowLeft, 
  Briefcase, 
  Building2, 
  Clock, 
  DollarSign, 
  MapPin, 
  Share2,
  Upload,
  FileText,
  X,
  AlertCircle,
  Link,
  
  Mail,
  Copy,
  Check
} from "lucide-react";
import { IconBrandFacebook, IconBrandX,  IconBrandLinkedin } from "@tabler/icons-react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { 
  Dropzone, 
  DropZoneArea, 
  DropzoneDescription, 
  DropzoneFileList, 
  DropzoneFileListItem, 
  DropzoneMessage, 
  DropzoneTrigger, 
  useDropzone 
} from "@/components/ui/dropzone";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { copyToClipboard } from "@/lib/utils";

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
  const { createApplication } = useApplication();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [job, setJob] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isApplying, setIsApplying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countryCodeVal, setCountryCodeVal] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const dropzone = useDropzone({
    onDropFile: async (file) => {
      setResumeFile(file);
      return { status: "success", result: file.name };
    },
    validation: {
      accept: {
        "application/pdf": [".pdf"],
        "application/msword": [".doc"],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      },
      maxSize: 5 * 1024 * 1024, // 5MB
      maxFiles: 1,
    },
    onRemoveFile: () => {
      setResumeFile(null);
    },
    shapeUploadError: (err) => String(err),
  });

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
      portfolio_url: "",
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

  const onSubmitApplication = async (values: z.infer<typeof applicationFormSchema>) => {
    if (job?.isCVRequired && !resumeFile && !values.resume_url) {
      toast.error("Please upload your resume or provide a resume link");
      return;
    }

    if (job?.isCoverletterRequired && !values.cover_letter?.trim()) {
      toast.error("A cover letter is required for this position");
      return;
    }

    setIsApplying(true);
    try {
      await createApplication(
        {
          ...values,
          job_id: jobId,
        },
        resumeFile || undefined
      );

      setIsModalOpen(false);
      form.reset();
      setResumeFile(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Application failed", err);
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsApplying(false);
    }
  };

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = async () => {
    const success = await copyToClipboard(window.location.href);
    if (success) {
      setIsCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const shareLinks = [
    {
      name: "LinkedIn",
      icon: <IconBrandLinkedin className="h-4 w-4" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`,
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      name: "Twitter",
      icon: <IconBrandX className="h-4 w-4" />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this job: ${job?.title} at ${job?.company}`)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`,
      color: "hover:bg-sky-500 hover:text-white"
    },
    {
      name: "Facebook",
      icon: <IconBrandFacebook className="h-4 w-4" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`,
      color: "hover:bg-blue-700 hover:text-white"
    },
    {
      name: "Email",
      icon: <Mail className="h-4 w-4" />,
      url: `mailto:?subject=${encodeURIComponent(`Job Opportunity: ${job?.title}`)}&body=${encodeURIComponent(`Check out this job posting: ${typeof window !== "undefined" ? window.location.href : ""}`)}`,
      color: "hover:bg-gray-600 hover:text-white"
    }
  ];

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

  if (!job) {
    return (
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center p-12 pt-32 text-center">
        <div className="bg-muted mb-6 rounded-full p-6">
          <Briefcase className="text-muted-foreground h-12 w-12" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight">Job Not Found</h2>
        <p className="text-muted-foreground mt-3 text-lg">
          The position you are looking for doesn&apos;t exist or has been removed.
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
              {job.status?.toLowerCase() !== "open" && (
                <Badge variant="destructive" className="px-3 py-1 text-sm font-medium">
                  Closed
                </Badge>
              )}
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
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="lg" className="h-12 w-full gap-2 sm:w-auto">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-64 p-3">
                <div className="space-y-3">
                  <h4 className="px-2 text-sm font-semibold">Share this job</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {shareLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 rounded-md border p-2 text-xs font-medium transition-colors ${link.color}`}
                      >
                        {link.icon}
                        {link.name}
                      </a>
                    ))}
                  </div>
                  <Separator />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start gap-2 text-xs font-medium"
                    onClick={handleCopyLink}
                  >
                    {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    {isCopied ? "Copied!" : "Copy Link"}
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
            <Button 
              size="lg" 
              className="h-12 w-full px-8 text-base shadow-sm sm:w-auto" 
              onClick={handleApplyClick}
              disabled={job.status?.toLowerCase() !== "open"}
            >
              {job.status?.toLowerCase() === "open" ? "Apply Now" : "Position Closed"}
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
                  <Button 
                    className="h-12 w-full text-base font-medium shadow-sm" 
                    onClick={handleApplyClick}
                    disabled={job.status?.toLowerCase() !== "open"}
                  >
                    {job.status?.toLowerCase() === "open" ? "Apply for this job" : "Position Closed"}
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
              <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit(onSubmitApplication)(e); }} className="space-y-8 pb-24">
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

                {/* Resume / CV — always shown; required indicator based on job flag */}
                <FormField
                  control={form.control}
                  name="resume_url"
                  render={() => (
                    <FormItem>
                      <FormLabel>
                        Resume / CV{" "}
                        {job?.isCVRequired ? (
                          <span className="text-destructive">*</span>
                        ) : (
                          <span className="text-muted-foreground font-normal">(Optional)</span>
                        )}
                      </FormLabel>
                      <FormControl>
                        <div className="space-y-4">
                          <Dropzone {...dropzone}>
                            <DropZoneArea className="border-dashed py-10 transition-colors hover:border-primary/50 hover:bg-primary/5">
                              <div className="flex flex-col items-center gap-2 text-center">
                                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full text-primary">
                                  <Upload className="h-6 w-6" />
                                </div>
                                <div className="space-y-1">
                                  <DropzoneTrigger className="text-primary hover:underline">
                                    Click to upload
                                  </DropzoneTrigger>{" "}
                                  <span className="text-muted-foreground">or drag and drop</span>
                                </div>
                                <DropzoneDescription className="text-xs">
                                  PDF, DOC, or DOCX (max 5MB)
                                </DropzoneDescription>
                              </div>
                            </DropZoneArea>
                            <DropzoneMessage className="mt-2" />

                            <DropzoneFileList className="mt-4">
                              {dropzone.fileStatuses.map((fileStatus) => (
                                <DropzoneFileListItem key={fileStatus.id} file={fileStatus}>
                                  <div className="flex items-center gap-3">
                                    <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg text-primary">
                                      <FileText className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                      <p className="truncate text-sm font-medium">
                                        {fileStatus.fileName}
                                      </p>
                                      <p className="text-muted-foreground text-xs">
                                        {(fileStatus.file.size / (1024 * 1024)).toFixed(2)} MB
                                      </p>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => dropzone.onRemoveFile(fileStatus.id)}
                                      className="text-muted-foreground hover:text-destructive transition-colors"
                                    >
                                      <X className="h-4 w-4" />
                                    </button>
                                  </div>
                                </DropzoneFileListItem>
                              ))}
                            </DropzoneFileList>
                          </Dropzone>

                          {/* Fallback URL input */}
                          <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                              <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                              <span className="bg-background text-muted-foreground px-2">
                                Or provide a link
                              </span>
                            </div>
                          </div>

                          <Input
                            placeholder="https://link-to-your-resume.com"
                            {...form.register("resume_url")}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Cover Letter — always shown; required indicator based on job flag */}
                <FormField
                  control={form.control}
                  name="cover_letter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Cover Letter{" "}
                        {job?.isCoverletterRequired ? (
                          <span className="text-destructive">*</span>
                        ) : (
                          <span className="text-muted-foreground font-normal">(Optional)</span>
                        )}
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

                {/* Portfolio URL */}
                <FormField
                  control={form.control}
                  name="portfolio_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1.5">
                        <Link className="h-3.5 w-3.5" />
                        Portfolio / Personal Website{" "}
                        <span className="text-muted-foreground font-normal">(Optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://yourportfolio.com"
                          value={field.value ?? ""}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          name={field.name}
                          ref={field.ref}
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
