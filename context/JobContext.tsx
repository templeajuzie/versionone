/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ReactNode, createContext, useContext, useState } from "react";

import { ApiClient } from "@/app/api-client";
import { mockApplications } from "@/constant/mockData";
// import { getCookie } from "@/integration/cookiemanager";
import { Application, Job } from "@/types/form.type";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

interface JobContextType {
  jobs: Job[];
  isLoadingJobs: boolean;
  applications: Application[];
  createJob: (job: Omit<Job, "id" | "createdAt">) => void;
  updateJob: (id: string, job: Partial<Job>) => void;
  deleteJob: (id: string) => void;
  addApplication: (app: Omit<Application, "id" | "appliedAt">) => void;
  updateApplication: (id: string, app: Partial<Application>) => void;
  getJobById: (id: string) => Promise<Job | undefined>;
  getApplicationsByJobId: (jobId: string) => Application[];
  isError: boolean;
  isPending: boolean;
  error: Error | null;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export function JobProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<Application[]>(mockApplications);
  const client = new QueryClient();
  function getCookieValue(key: string): string | undefined {
    if (typeof document === "undefined") return undefined;
    const match = document.cookie.match(new RegExp("(^| )" + key + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : undefined;
  }

  const accessToken = getCookieValue("accessToken");
  const refreshToken = getCookieValue("refreshToken");

  function PostJob(jobData: Omit<Job, "id" | "createdAt">) {
    const api = new ApiClient({
      baseUrl: process.env.NEXT_PUBLIC_API_URL!,
      headers: {
        "x-access-token": accessToken || "",
        "x-refresh-token": refreshToken || "",
      },
    });
    return api.post("/jobs", jobData);
  }

  function FetchJobs() {
    const api = new ApiClient({
      baseUrl: process.env.NEXT_PUBLIC_API_URL!,
      headers: {
        "x-access-token": accessToken || "",
        "x-refresh-token": refreshToken || "",
      },
    });
    return api.get("/jobs");
  }

  const { data: jobsResponse, isLoading: isLoadingJobs } = useQuery({
    queryKey: ["get-jobs"],
    queryFn: FetchJobs,
  });

  const displayJobs: Job[] =
    (jobsResponse as any)?.value || (jobsResponse as any)?.data || (Array.isArray(jobsResponse) ? jobsResponse : jobs);
   console.log("Fetched jobs:", displayJobs);
   console.log("Raw jobs response:", jobsResponse);
  function UpdateJobApi(jobData: Partial<Job> & Pick<Job, "id">) {
    const api = new ApiClient({
      baseUrl: process.env.NEXT_PUBLIC_API_URL || "",
      headers: {
        "x-access-token": accessToken || "",
        "x-refresh-token": refreshToken || "",
      },
    });
    return api.patch("/jobs", jobData);
  }

  function DeleteJobApi(jobId: string) {
    const api = new ApiClient({
      baseUrl: process.env.NEXT_PUBLIC_API_URL || "",
      headers: {
        "x-access-token": accessToken || "",
        "x-refresh-token": refreshToken || "",
      },
    });
    // Assuming backend deletes by id
    return api.delete("/jobs", { id: jobId } as any);
  }

  const {
    mutate: createJob,
    isError,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["post-jobs"],
    mutationFn: PostJob,
    onSuccess: (result) => {
      console.log("data", result);
      if (result.isErr()) {
        toast.error(result.error?.message || "Failed to create job posting.");
      } else {
        client.invalidateQueries({ queryKey: ["get-jobs"] });
        toast.success("Your job posting has been created successfully.");
      }
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to create job posting.");
    },
  });

  const { mutate: updateJobMutation } = useMutation({
    mutationKey: ["update-job"],
    mutationFn: UpdateJobApi,
    onSuccess: (result) => {
   
      if (result.isErr()) {
        toast.error(result.error?.message || "Failed to update job.");
      } else {
        client.invalidateQueries({ queryKey: ["get-jobs"] });
        toast.success("Job updated successfully.");
      }
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to update job.");
    },
  });

  const { mutate: deleteJobMutation } = useMutation({
    mutationKey: ["delete-job"],
    mutationFn: DeleteJobApi,
    onSuccess: (result) => {
      if (result.isErr()) {
        toast.error(result.error?.message || "Failed to delete job.");
      } else {
        client.invalidateQueries({ queryKey: ["get-jobs"] });
        toast.success("Job deleted successfully.");
      }
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to delete job.");
    },
  });

  const updateJob = (id: string, jobData: Partial<Job>) => {
    updateJobMutation({ id, ...jobData });
    setJobs(jobs.map((job) => (job.id === id ? { ...job, ...jobData } : job)));
  };

  const deleteJob = (id: string) => {
    deleteJobMutation(id);
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

  const getJobById = async (id: string) => {
    const api = new ApiClient({
      baseUrl: process.env.NEXT_PUBLIC_API_URL!,
      headers: {
        "x-access-token": accessToken || "",
        "x-refresh-token": refreshToken || "",
      },
    });

    try {
      const response = await api.get(`/jobs/${id}`);
      const data = (response as any)?.value || (response as any)?.data || response;
      return data;
    } catch (err) {
      console.error("Failed to fetch job by ID", err);
      // Fallback to local state if api fetch fails or isn't perfect yet
      return jobs.find((job) => job.id === id);
    }
  };

  const getApplicationsByJobId = (jobId: string) => {
    return applications.filter((app) => app.jobId === jobId);
  };

  const value: JobContextType = {
    jobs: displayJobs,
    isLoadingJobs,
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
