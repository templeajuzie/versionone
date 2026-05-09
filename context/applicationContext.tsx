/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createContext, useContext, ReactNode } from "react";
import { ApplicationFormInput } from "@/lib/validation";
import { ApiClient } from "@/app/api-client";
import { toast } from "sonner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface ApplicationContextType {
  applications: any[];
  isLoadingApplications: boolean;
  dashboardStats: any;
  isLoadingStats: boolean;
  createApplication: (data: ApplicationFormInput, resumeFile?: File) => Promise<void>;
  getApplicationById: (id: string) => Promise<any>;
  updateStatus: (id: string, status: string) => Promise<void>;
  isPending: boolean;
  isUpdating: boolean;
  isError: boolean;
  error: Error | null;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export function ApplicationContextProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();

  function getCookieValue(key: string): string | undefined {
    if (typeof document === "undefined") return undefined;
    const match = document.cookie.match(new RegExp("(^| )" + key + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : undefined;
  }

  const accessToken = getCookieValue("accessToken");
  const refreshToken = getCookieValue("refreshToken");

  const api = new ApiClient({
    baseUrl: process.env.NEXT_PUBLIC_API_URL!,
    headers: {
      "x-access-token": accessToken || "",
      "x-refresh-token": refreshToken || "",
    },
  });

  const { data: applicationsResponse, isLoading: isLoadingApplications } = useQuery({
    queryKey: ["get-applications"],
    queryFn: () => api.get("/application"),
  });

  const { data: statsResponse, isLoading: isLoadingStats } = useQuery({
    queryKey: ["get-dashboard-stats"],
    queryFn: () => api.get("/dashboard/stats"),
  });

  const applications: any[] = 
    (applicationsResponse as any)?.value?.value || 
    (applicationsResponse as any)?.value?.data || 
    (applicationsResponse as any)?.value || 
    [];

  const dashboardStats: any = 
    (statsResponse as any)?.value?.value || 
    (statsResponse as any)?.value?.data || 
    (statsResponse as any)?.value || 
    null;

  const submitApplicationMutation = useMutation({
    mutationFn: async ({ data, resumeFile }: { data: ApplicationFormInput; resumeFile?: File }) => {
      // 1. Prepare data
      if (resumeFile) {
        const formData = new FormData();
        formData.append("resume", resumeFile);
        formData.append("data", JSON.stringify(data));
        
        const applicationResult = await api.postFormData("/application", formData);
        
        if (applicationResult.isErr()) {
          throw applicationResult.error;
        }
        
        return applicationResult.value;
      } else {
        // Just send JSON if no file
        const applicationResult = await api.post("/application", {
          ...data,
          id: data.id || crypto.randomUUID(),
        });

        if (applicationResult.isErr()) {
          throw applicationResult.error;
        }

        return applicationResult.value;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-applications"] });
      toast.success("Application submitted successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit application.");
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const result = await api.patch(`/application/${id}/status`, { status });
      if (result.isErr()) throw result.error;
      return result.value;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-applications"] });
      queryClient.invalidateQueries({ queryKey: ["get-dashboard-stats"] });
      toast.success("Status updated successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update status.");
    },
  });

  const getApplicationById = async (id: string) => {
    try {
      const response = await api.get(`/application/${id}`);
      return (response as any)?.value || (response as any)?.data || response;
    } catch (err) {
      console.error("Failed to fetch application by ID", err);
      return applications.find((app) => app.id === id);
    }
  };

  const createApplication = async (data: ApplicationFormInput, resumeFile?: File) => {
    await submitApplicationMutation.mutateAsync({ data, resumeFile });
  };

  const updateStatus = async (id: string, status: string) => {
    await updateStatusMutation.mutateAsync({ id, status });
  };

  return (
    <ApplicationContext.Provider 
      value={{ 
        applications,
        isLoadingApplications,
        dashboardStats,
        isLoadingStats,
        createApplication, 
        getApplicationById,
        updateStatus,
        isPending: submitApplicationMutation.isPending, 
        isUpdating: updateStatusMutation.isPending,
        isError: submitApplicationMutation.isError || updateStatusMutation.isError, 
        error: submitApplicationMutation.error || (updateStatusMutation.error as Error)
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export const useApplication = () => {
  const context = useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error("useApplication must be used within an ApplicationContextProvider");
  }
  return context;
};