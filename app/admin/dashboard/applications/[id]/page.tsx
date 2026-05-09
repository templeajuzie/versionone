/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useApplication } from "@/context/applicationContext";
import { useJob } from "@/context/JobContext";
import { 
  ArrowLeft, 
  Briefcase, 
  Calendar, 
  Download, 
  ExternalLink, 
  FileText, 
  Globe,  
  Mail, 
  Phone, 
  User, 
  MessageSquare,
  Clock,
  MapPin,
  CheckCircle2,
  XCircle,
  Clock3,
  Loader2,
  Copy,
  Check
} from "lucide-react";
import {IconBrandLinkedin} from "@tabler/icons-react";
import { format } from "date-fns";
import { copyToClipboard } from "@/lib/utils";
import { toast } from "sonner";

const getStatusColor = (status?: string) => {
  switch (status?.toLowerCase()) {
    case "pending":
      return "bg-amber-500/10 text-amber-500 border-amber-500/20";
    case "reviewing":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    case "interviewing":
      return "bg-purple-500/10 text-purple-500 border-purple-500/20";
    case "hired":
      return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    case "rejected":
      return "bg-rose-500/10 text-rose-500 border-rose-500/20";
    default:
      return "bg-slate-500/10 text-slate-500 border-slate-500/20";
  }
};

export default function ApplicationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { getApplicationById, updateStatus, isUpdating } = useApplication();
  const { getJobById } = useJob();
  const [application, setApplication] = useState<any>(null);
  const [job, setJob] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const fetchDetails = async () => {
    const id = params.id as string;
    const appData = await getApplicationById(id);
    if (appData) {
      setApplication(appData);
      const jobData = await getJobById(appData.job_id);
      setJob(jobData);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  const handleStatusUpdate = async (newStatus: string) => {
    if (!application?.id) return;
    await updateStatus(application.id, newStatus);
    // Refresh local data to show updated status
    fetchDetails();
  };

  const handleCopy = async (text: string, field: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedField(field);
      toast.success(`${field} copied to clipboard`);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-8xl p-4 md:p-8">
        <div className="flex flex-col gap-8">
          <Skeleton className="h-8 w-48" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-96 w-full" />
            </div>
            <div className="space-y-6">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-64 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center p-4 text-center">
        <div className="bg-muted mb-4 rounded-full p-4">
          <User className="text-muted-foreground h-12 w-12" />
        </div>
        <h2 className="text-2xl font-bold">Application Not Found</h2>
        <p className="text-muted-foreground mt-2 max-w-md">
          The application you&#39;re looking for doesn&apos;t exist or has been removed from the database.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => router.push("/admin/dashboard/applications")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Applications
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-8xl flex-col gap-8 p-4 md:p-8">
      {/* Header with Navigation and Quick Actions */}
      <div className="flex flex-col gap-4">
        <Button 
          variant="ghost" 
          className="w-fit text-muted-foreground hover:text-foreground -ml-2"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to List
        </Button>
        
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm">
               <User className="text-primary h-8 w-8" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold tracking-tight">{application.full_name}</h1>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-muted-foreground"
                  onClick={() => handleCopy(application.full_name, "Name")}
                >
                  {copiedField === "Name" ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                </Button>
                <Badge className={`${getStatusColor(application.status)} border px-3 py-1 text-xs font-semibold capitalize shadow-none`}>
                  {application.status}
                </Badge>
              </div>
              <p className="text-muted-foreground mt-1 flex items-center gap-2">
                Applied for <span className="text-foreground font-medium underline-offset-4 hover:underline">{job?.title || "Unknown Position"}</span>
                <span className="text-muted-foreground/30">•</span>
                <Clock className="h-3 w-3" /> {format(new Date(application.applied_at), "MMM d, yyyy")}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
             <Button variant="outline" className="shadow-none" asChild>
                <a href={application.resume_url} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" /> Download Resume
                </a>
             </Button>
             <Button className="shadow-none bg-blue-600 hover:bg-blue-700" asChild>
                <a href={`mailto:${application.email}?subject=Regarding your application for ${job?.title || "the position"}&body=Hi ${application.full_name},`}>
                  <Mail className="h-4 w-4" /> Email Candidate
                </a>
             </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Cover Letter Section */}
          <Card className="border-border/40 overflow-hidden shadow-sm">
            <CardHeader className="bg-muted/30">
              <div className="flex items-center gap-2">
                <FileText className="text-primary h-5 w-5" />
                <CardTitle className="text-lg font-semibold">Cover Letter</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {application.cover_letter ? (
                <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap text-slate-600 dark:text-slate-400">
                  {application.cover_letter}
                </div>
              ) : (
                <p className="text-muted-foreground italic">No cover letter provided for this application.</p>
              )}
            </CardContent>
          </Card>

          {/* Candidate Details Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
             <Card className="border-border/40 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">Experience & Background</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Experience</span>
                    <span className="font-medium">{application.years_of_experience || 0} Years</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Expected Salary</span>
                    <span className="font-medium">${application.expected_salary?.toLocaleString() || "N/A"}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Availability</span>
                    <span className="font-medium">{application.availability_date || "Immediate"}</span>
                  </div>
                </CardContent>
             </Card>

             <Card className="border-border/40 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">Location & Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-lg">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-muted-foreground text-xs uppercase tracking-wider">Location</span>
                      <span className="text-sm font-medium">{application.country}, {application.country_code}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-muted-foreground"
                      onClick={() => handleCopy(`${application.country}, ${application.country_code}`, "Location")}
                    >
                      {copiedField === "Location" ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-lg">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-muted-foreground text-xs uppercase tracking-wider">Phone</span>
                      <span className="text-sm font-medium">{application.phone}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-muted-foreground"
                      onClick={() => handleCopy(application.phone, "Phone")}
                    >
                      {copiedField === "Phone" ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-lg">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-muted-foreground text-xs uppercase tracking-wider">Email</span>
                      <span className="text-sm font-medium truncate max-w-[150px]">{application.email}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-muted-foreground"
                      onClick={() => handleCopy(application.email, "Email")}
                    >
                      {copiedField === "Email" ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                </CardContent>
             </Card>
          </div>

          {/* Additional Info / Recruiter Notes */}
          <Card className="border-border/40 shadow-sm">
            <CardHeader className="bg-muted/30">
               <CardTitle className="text-lg font-semibold">Recruiter Notes</CardTitle>
               <CardDescription>Internal notes and feedback about this candidate.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
               <div className="bg-background rounded-xl border p-4">
                 {application.recruiter_notes ? (
                    <p className="text-sm">{application.recruiter_notes}</p>
                 ) : (
                    <p className="text-muted-foreground text-sm italic">Add feedback from interview or profile review here...</p>
                 )}
               </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status Management */}
          <Card className="border-border/40 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-base font-semibold">Application Status</CardTitle>
              <CardDescription>Update candidate&lsquo;s progress in the pipeline.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: "Pending", value: "pending", icon: Clock3, color: "text-amber-500" },
                { label: "Reviewing", value: "reviewing", icon: MessageSquare, color: "text-blue-500" },
                { label: "Interviewing", value: "interviewing", icon: Calendar, color: "text-purple-500" },
                { label: "Hired", value: "hired", icon: CheckCircle2, color: "text-emerald-500" },
                { label: "Rejected", value: "rejected", icon: XCircle, color: "text-rose-500" },
              ].map((status) => (
                <Button
                  key={status.value}
                  variant={application.status === status.value ? "secondary" : "outline"}
                  className={`w-full justify-start gap-3 shadow-none ${application.status === status.value ? "bg-muted font-bold" : "hover:bg-muted/50"}`}
                  onClick={() => handleStatusUpdate(status.value)}
                  disabled={isUpdating}
                >
                  {isUpdating && application.status !== status.value ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <status.icon className={`h-4 w-4 ${status.color}`} />
                  )}
                  {status.label}
                  {application.status === status.value && (
                    <div className="ml-auto h-2 w-2 rounded-full bg-primary" />
                  )}
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/40 shadow-sm">
             <CardHeader className="pb-3">
               <CardTitle className="text-base font-semibold">Job Details</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
               <div className="flex items-start gap-3">
                 <Briefcase className="text-muted-foreground mt-1 h-4 w-4" />
                 <div className="flex-1">
                   <p className="text-sm font-semibold">{job?.title || "Unknown Role"}</p>
                   <p className="text-muted-foreground text-xs">{job?.company || "Unknown Company"}</p>
                 </div>
                 <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground"
                    onClick={() => handleCopy(job?.title || "", "Job Title")}
                  >
                    {copiedField === "Job Title" ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                  </Button>
               </div>
               <div className="flex items-center gap-3">
                 <Globe className="text-muted-foreground h-4 w-4" />
                 <span className="text-muted-foreground text-xs uppercase tracking-wider">{job?.is_remote ? "Remote" : "On-site"}</span>
               </div>
               <Button 
                variant="link" 
                className="h-auto p-0 text-xs font-semibold"
                onClick={() => router.push(`/admin/dashboard/jobs/${job?.id}`)}
               >
                 View Job Posting <ExternalLink className="ml-1 h-3 w-3" />
               </Button>
             </CardContent>
          </Card>

          <Card className="border-border/40 shadow-sm">
             <CardHeader className="pb-3">
               <CardTitle className="text-base font-semibold">Social Presence</CardTitle>
             </CardHeader>
             <CardContent className="space-y-3">
               {application.linkedin_url ? (
                 <div className="flex items-center gap-2">
                    <Button variant="outline" className="flex-1 justify-start gap-3 shadow-none" asChild>
                      <a href={application.linkedin_url} target="_blank" rel="noopener noreferrer">
                        <IconBrandLinkedin className="h-4 w-4 text-[#0077B5]" /> LinkedIn Profile
                      </a>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-10 w-10 text-muted-foreground shrink-0 border"
                      onClick={() => handleCopy(application.linkedin_url, "LinkedIn URL")}
                    >
                      {copiedField === "LinkedIn URL" ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                    </Button>
                 </div>
               ) : (
                 <p className="text-muted-foreground text-xs italic">No LinkedIn profile provided.</p>
               )}
               {application.portfolio_url ? (
                 <div className="flex items-center gap-2">
                    <Button variant="outline" className="flex-1 justify-start gap-3 shadow-none" asChild>
                      <a href={application.portfolio_url} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 text-slate-600" /> Portfolio Website
                      </a>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-10 w-10 text-muted-foreground shrink-0 border"
                      onClick={() => handleCopy(application.portfolio_url, "Portfolio URL")}
                    >
                      {copiedField === "Portfolio URL" ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                    </Button>
                 </div>
               ) : (
                 <p className="text-muted-foreground text-xs italic">No portfolio URL provided.</p>
               )}
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
