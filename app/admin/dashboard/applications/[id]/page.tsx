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
  Clock3
} from "lucide-react";
import {IconBrandLinkedin} from "@tabler/icons-react";
import { format } from "date-fns";

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
  const { getApplicationById } = useApplication();
  const { getJobById } = useJob();
  const [application, setApplication] = useState<any>(null);
  const [job, setJob] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
    fetchDetails();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-7xl p-4 md:p-8">
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
          The application record you are looking for might have been deleted or moved.
        </p>
        <Button className="mt-6" onClick={() => router.push("/admin/dashboard/applications")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Applications
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl p-4 md:p-8">
      {/* Back Button & Header */}
      <div className="mb-8 flex flex-col gap-4">
        <Button 
          variant="ghost" 
          className="w-fit gap-2 pl-0 hover:bg-transparent" 
          onClick={() => router.push("/admin/dashboard/applications")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Applications
        </Button>
        
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex gap-5">
             <div className="bg-primary/5 text-primary flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-primary/10">
                <User className="h-10 w-10" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold tracking-tight">{application.full_name}</h1>
                  <Badge className={`rounded-full px-3 py-1 font-medium capitalize ${getStatusColor(application.status)}`}>
                    {application.status}
                  </Badge>
                </div>
                <div className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="h-4 w-4" />
                    Applying for <span className="text-foreground">{job?.title || "Unknown Position"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    Submitted {format(new Date(application.applied_at), "PPP")}
                  </div>
                </div>
              </div>
          </div>

          <div className="flex flex-wrap gap-3">
             <Button variant="outline" className="gap-2" asChild>
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
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">Experience</span>
                    <span className="font-medium">{application.years_of_experience || 0} Years</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">Expected Salary</span>
                    <span className="font-medium">${application.expected_salary?.toLocaleString() || "N/A"}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
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
                    <div className="flex flex-col">
                      <span className="text-muted-foreground text-xs uppercase tracking-wider">Location</span>
                      <span className="text-sm font-medium">{application.country}, {application.country_code}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-lg">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground text-xs uppercase tracking-wider">Phone</span>
                      <span className="text-sm font-medium">{application.phone}</span>
                    </div>
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
          {/* Resume Card */}
          <Card className="border-primary/20 bg-primary/5 overflow-hidden shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-base font-bold">
                <FileText className="h-5 w-5" />
                Resume / CV
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-background flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                 <FileText className="text-muted-foreground mb-2 h-10 w-10 opacity-40" />
                 <p className="text-xs font-medium uppercase tracking-tighter">PDF Document</p>
              </div>
              <Button className="w-full gap-2" asChild>
                <a href={application.resume_url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  View Full Resume
                </a>
              </Button>
              <Button variant="outline" className="w-full gap-2" asChild>
                <a href={application.resume_url} download={`Resume_${application.full_name.replace(/\s+/g, "_")}`} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Social Links Card */}
          <Card className="border-border/40 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-semibold">Online Presence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {application.linkedin_url && (
                <Button variant="outline" className="w-full justify-start gap-3" asChild>
                  <a href={application.linkedin_url} target="_blank" rel="noopener noreferrer">
                    <IconBrandLinkedin className="h-4 w-4 text-[#0A66C2]" />
                    LinkedIn Profile
                  </a>
                </Button>
              )}
              {application.portfolio_url && (
                <Button variant="outline" className="w-full justify-start gap-3" asChild>
                  <a href={application.portfolio_url} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4 text-emerald-500" />
                    Portfolio / Website
                  </a>
                </Button>
              )}
              {!application.linkedin_url && !application.portfolio_url && (
                <p className="text-muted-foreground text-sm italic">No social links provided.</p>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions / Status */}
          <Card className="border-border/40 shadow-sm">
             <CardHeader>
                <CardTitle className="text-base font-semibold">Update Status</CardTitle>
             </CardHeader>
             <CardContent className="grid grid-cols-1 gap-2">
                <Button variant="outline" className="justify-start gap-2 text-blue-600 hover:bg-blue-500/10 hover:text-blue-600">
                  <Clock3 className="h-4 w-4" />
                  Move to Review
                </Button>
                <Button variant="outline" className="justify-start gap-2 text-purple-600 hover:bg-purple-500/10 hover:text-purple-600">
                  <MessageSquare className="h-4 w-4" />
                  Invite to Interview
                </Button>
                <Button variant="outline" className="justify-start gap-2 text-emerald-600 hover:bg-emerald-500/10 hover:text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                  Mark as Hired
                </Button>
                <Button variant="outline" className="justify-start gap-2 text-rose-600 hover:bg-rose-500/10 hover:text-rose-600">
                  <XCircle className="h-4 w-4" />
                  Reject Candidate
                </Button>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
