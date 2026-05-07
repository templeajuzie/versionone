"use client";

import { JobForm } from "@/components/JobForm";

export default function NewJobPage() {
  return (
    <main className="min-h-screen bg-background">
      
      <div className="mx-auto px-4 py-12">
      

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Post a New Job
          </h1>
          <p className="text-lg text-muted-foreground">
            Fill out the form below to post a job opening to our platform.
          </p>
        </div>

        <div className="bg-card  border-none rounded-lg p-8">
          <JobForm />
        </div>
      </div>
    </main>
  );
}
