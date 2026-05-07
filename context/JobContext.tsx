"use client";

import { ReactNode, createContext, useContext, useState } from "react";

import { ApiClient } from "@/app/api-client";
import { mockApplications, mockJobs } from "@/constant/mockData";
// import { getCookie } from "@/integration/cookiemanager";
import { Application, Job } from "@/types/form.type";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface JobContextType {
  jobs: Job[];
  applications: Application[];
  createJob: (job: Omit<Job, "id" | "createdAt">) => void;
  updateJob: (id: string, job: Partial<Job>) => void;
  deleteJob: (id: string) => void;
  addApplication: (app: Omit<Application, "id" | "appliedAt">) => void;
  updateApplication: (id: string, app: Partial<Application>) => void;
  getJobById: (id: string) => Job | undefined;
  getApplicationsByJobId: (jobId: string) => Application[];
  isError: boolean;
  isPending: boolean;
  error: Error | null;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export function JobProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [applications, setApplications] = useState<Application[]>(mockApplications);

  function getCookieValue(key: string): string | undefined {
    if (typeof document === "undefined") return undefined;
    const match = document.cookie.match(new RegExp("(^| )" + key + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : undefined;
  }

  function PostJob(jobData: Omit<Job, "id" | "createdAt">) {
    const accessToken = getCookieValue("accessToken");
    const refreshToken = getCookieValue("refreshToken");
    const api = new ApiClient({
      baseUrl: process.env.NEXT_PUBLIC_API_URL!,
      headers: {
        "x-access-token": accessToken || "",
        "x-refresh-token": refreshToken || "",
      },
    });
    return api.post("/jobs", jobData);
  }

const { mutate: createJob, isError, isPending, error } = useMutation({
  mutationKey: ["post-jobs"],
  mutationFn: PostJob,
  onSuccess: (result) => {  
    console.log('data', 
result
    )
    if(result.isOk()){

      toast.success("Your job posting has been created successfully.");
    }
  },
  onError: (error) => {
    toast.error(error?.message || "Failed to create job posting.");
  },
});


  const updateJob = (id: string, jobData: Partial<Job>) => {
    setJobs(jobs.map((job) => (job.id === id ? { ...job, ...jobData } : job)));
  };

  const deleteJob = (id: string) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const addApplication = (appData: Omit<Application, "id" | "appliedAt">) => {
    const newApp: Application = {
      ...appData,
      id: Date.now().toString(),
      appliedAt: new Date(),
    };
    setApplications([newApp, ...applications]);
  };

  const updateApplication = (id: string, appData: Partial<Application>) => {
    setApplications(applications.map((app) => (app.id === id ? { ...app, ...appData } : app)));
  };

  const getJobById = (id: string) => {
    return jobs.find((job) => job.id === id);
  };

  const getApplicationsByJobId = (jobId: string) => {
    return applications.filter((app) => app.jobId === jobId);
  };

  const value: JobContextType = {
    jobs,
    isError,
    isPending,
    applications,
    error,
    createJob,
    updateJob,
    deleteJob,
    addApplication,
    updateApplication,
    getJobById,
    getApplicationsByJobId,
  };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}

export function useJob() {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJob must be used within a JobProvider");
  }
  return context;
}
