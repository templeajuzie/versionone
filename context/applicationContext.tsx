"use client";

import { createContext, useContext, ReactNode } from "react";
import { ApplicationFormInput } from "@/lib/validation";
import { ApiClient } from "@/app/api-client";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

interface ApplicationContextType {
  createApplication: (data: ApplicationFormInput, resumeFile?: File) => Promise<void>;
  isPending: boolean;
  isError: boolean;
  error: Error | null;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export function ApplicationContextProvider({ children }: { children: ReactNode }) {
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

  const submitApplicationMutation = useMutation({
    mutationFn: async ({ data, resumeFile }: { data: ApplicationFormInput; resumeFile?: File }) => {
      let resume_url = data.resume_url;

      // 1. Upload file if exists
      if (resumeFile) {
        const formData = new FormData();
        formData.append("file", resumeFile);
        
        const uploadResult = await api.postFormData<{ url: string }>("/upload", formData);
        
        if (uploadResult.isErr()) {
          throw uploadResult.error;
        }
        
        resume_url = uploadResult.value.url;
      }

      // 2. Submit application
      const applicationResult = await api.post("/application", {
        ...data,
        resume_url,
        id: data.id || crypto.randomUUID(),
      });

      if (applicationResult.isErr()) {
        throw applicationResult.error;
      }

      return applicationResult.value;
    },
    onSuccess: () => {
      toast.success("Application submitted successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit application.");
    },
  });

  const createApplication = async (data: ApplicationFormInput, resumeFile?: File) => {
    await submitApplicationMutation.mutateAsync({ data, resumeFile });
  };

  return (
    <ApplicationContext.Provider 
      value={{ 
        createApplication, 
        isPending: submitApplicationMutation.isPending, 
        isError: submitApplicationMutation.isError, 
        error: submitApplicationMutation.error 
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