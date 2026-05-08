"use client";

import { useState } from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useJob } from "@/context/JobContext";
import { Building2, DollarSign, MapPin, Search } from "lucide-react";
import Link from "next/link";

const formatCurrency = (amount: number | null | undefined) => {
  if (!amount) return null;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function JobsPage() {
  const { jobs, isLoadingJobs } = useJob();
  const [searchTerm, setSearchTerm] = useState("");

  // Only show open jobs to public users
  const activeJobs = jobs.filter((job) => job.status?.toLowerCase() === "open");

  const filteredJobs = activeJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="div">
      <Header />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 p-4 pt-16 md:p-8 md:pt-24 lg:pt-32">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-foreground text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Find Your Next <span className="text-primary">Opportunity</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl text-lg md:text-xl">
            Explore job openings and discover the perfect role that matches your skills and career ambitions.
          </p>
        </div>

        {/* Filters / Search */}
        <div className="bg-card mx-auto flex w-full max-w-4xl flex-col items-center gap-4 rounded-xl border p-4 sm:flex-row">
          <div className="text-muted-foreground relative w-full flex-1">
            <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
            <Input
              placeholder="Search jobs by title or company..."
              className="bg-background/50 h-12 w-full border-none pl-10 text-base shadow-none focus-visible:ring-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full sm:w-auto">
            <Button className="h-12 w-full px-8 text-base shadow-sm sm:w-auto">Find Jobs</Button>
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
                    <Skeleton className="h-8 w-8 rounded-md opacity-0" /> {/* Spacer */}
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
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="border-border/40 hover:border-primary/20 bg-card group flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <CardHeader className="relative items-start pb-4">
                  <div className="flex w-full items-start justify-between">
                    <Badge
                      variant="outline"
                      className="rounded-full border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-medium text-emerald-600 capitalize"
                    >
                      New
                    </Badge>
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
                      <div className="text-foreground/80 flex items-center gap-2 text-sm font-medium">
                        <DollarSign className="h-4 w-4 shrink-0 text-emerald-500/70" />
                        <span>
                          {job.salaryMin ? formatCurrency(job.salaryMin) : "Competitive"}
                          {job.salaryMax && ` - ${formatCurrency(job.salaryMax)}`}
                        </span>
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap gap-2">
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
                    <Link href={`/jobs/${job.id}`}>View Details & Apply</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
              <div className="bg-muted mb-4 rounded-full p-6">
                <Search className="text-muted-foreground h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold">No open jobs found</h3>
              <p className="text-muted-foreground mt-2 max-w-md">
                {searchTerm
                  ? "Try adjusting your search criteria to find what you're looking for."
                  : "There are currently no open positions. Please check back later."}
              </p>
              {searchTerm && (
                <Button variant="outline" className="mt-6" onClick={() => setSearchTerm("")}>
                  Clear Search
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
