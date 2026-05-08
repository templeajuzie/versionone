"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useApplication } from "@/context/applicationContext";
import { useJob } from "@/context/JobContext";
import { format } from "date-fns";
import {
  Briefcase,
  Calendar,
  Eye,
  FileText,
  Mail,
  MoreVertical,
  Search,
  User
} from "lucide-react";
import { useState } from "react";

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

export default function ApplicationsPage() {
  const { applications, isLoadingApplications } = useApplication();
  const { jobs } = useJob();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApplications = applications.filter((app) => 
    app.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getJobTitle = (jobId: string) => {
    return jobs.find((j) => j.id === jobId)?.title || "Unknown Job";
  };

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 p-4 md:p-8">
      {/* Header Section */}
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-foreground text-3xl font-bold tracking-tight">Applications</h1>
          <p className="text-muted-foreground mt-1">Review and manage candidate applications for all positions.</p>
        </div>
      </div>

      {/* Filters / Search */}
      <div className="bg-card flex flex-col items-center gap-4 rounded-xl border p-4 shadow-sm sm:flex-row">
        <div className="text-muted-foreground relative w-full sm:max-w-md">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            placeholder="Search candidates by name or email..."
            className="bg-background/50 border-none pl-9 shadow-none focus-visible:ring-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="ml-auto flex w-full gap-2 sm:w-auto">
          <Button
            variant="outline"
            className="bg-background/50 text-muted-foreground w-full border-none shadow-none sm:w-auto"
          >
            Filter Status
          </Button>
        </div>
      </div>

      {/* Applications List */}
      <div className="grid grid-cols-1 gap-4">
        {isLoadingApplications ? (
          Array.from({ length: 5 }).map((_, index) => (
            <Card key={index} className="border-border/40 bg-card overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-1/4" />
                    <Skeleton className="h-4 w-1/3" />
                  </div>
                  <Skeleton className="h-8 w-24 rounded-full" />
                </div>
              </CardContent>
            </Card>
          ))
        ) : filteredApplications.length > 0 ? (
          filteredApplications.map((app) => (
            <Card
              key={app.id}
              className="border-border/40 hover:border-primary/20 bg-card group transition-all duration-200 hover:shadow-md"
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center">
                  <div className="bg-primary/5 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <User className="h-6 w-6" />
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold tracking-tight">{app.full_name}</h3>
                      <Badge
                        variant="outline"
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${getStatusColor(app.status)}`}
                      >
                        {app.status}
                      </Badge>
                    </div>
                    
                    <div className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                      <div className="flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5" />
                        {app.email}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" />
                        {getJobTitle(app.job_id)}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        Applied on {app.applied_at ? format(new Date(app.applied_at), "MMM d, yyyy") : "Unknown date"}
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
                    <Button variant="ghost" size="icon" asChild className="h-9 w-9">
                      <a href={app.resume_url} target="_blank" rel="noopener noreferrer" title="View Resume">
                        <FileText className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="gap-2">
                      <a href={`/admin/dashboard/applications/${app.id}`}>
                        <Eye className="h-4 w-4" />
                        Details
                      </a>
                    </Button>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem asChild>
                          <a href={`/admin/dashboard/applications/${app.id}`}>View Candidate Profile</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Send Email</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-rose-500 focus:bg-rose-500/10 focus:text-rose-500">
                          Reject Candidate
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-muted mb-4 rounded-full p-6">
              <User className="text-muted-foreground h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold">No applications found</h3>
            <p className="text-muted-foreground mt-2 max-w-xs">
              No candidates have applied yet, or your search didn&apos;t match any applicants.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
