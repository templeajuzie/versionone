"use client";

import { JobForm } from "@/components/JobForm";

export default function NewJobPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-foreground mb-2 text-4xl font-bold">Post a New Job</h1>
          <p className="text-muted-foreground text-lg">
            Fill out the form below to post a job opening to our platform.
          </p>
        </div>

        <div className="bg-noneupgrade rounded-lg border-none p-8">
          <JobForm />
        </div>
      </div>
    </main>
  );
}
