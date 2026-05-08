import { Application, ApplicationStatus, Job, JobStatus, JobType } from "@/types/form.type";

export const mockApplications: Application[] = [
  {
    id: "app-1",
    jobId: "1",
    applicantEmail: "john.doe@example.com",
    resumeUrl: "https://example.com/resumes/john-doe.pdf",
    coverLetter:
      "I am very interested in this Senior React Developer position. With 6 years of React experience and a strong background in TypeScript and Node.js, I am confident I can contribute significantly to your team.",
    country: "United States",
    status: ApplicationStatus.Reviewed,
    appliedAt: new Date("2024-01-16"),
  },
  {
    id: "app-2",
    jobId: "1",
    applicantEmail: "jane.smith@example.com",
    resumeUrl: "https://example.com/resumes/jane-smith.pdf",
    coverLetter:
      "I have been working with React for over 8 years and have led multiple frontend teams. I am excited about the opportunity to contribute to TechCorp's mission.",
    country: "Canada",
    status: ApplicationStatus.Applied,
    appliedAt: new Date("2024-01-17"),
  },
  {
    id: "app-3",
    jobId: "2",
    applicantEmail: "bob.johnson@example.com",
    resumeUrl: "https://example.com/resumes/bob-johnson.pdf",
    coverLetter:
      "As a product manager with 4 years of experience in B2B SaaS, I believe I can drive significant growth for StartupXYZ. Looking forward to discussing how I can contribute.",
    country: "United States",
    status: ApplicationStatus.Interviewed,
    appliedAt: new Date("2024-01-16"),
  },
];
