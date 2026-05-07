import { Job, Application, JobType, JobStatus, ApplicationStatus } from "@/types/form.type";

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior React Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    jobType: JobType.FullTime,
    salaryMin: 120000,
    salaryMax: 160000,
    isRemote: true,
    requirements:
      "5+ years React experience, TypeScript, Node.js, AWS knowledge required",
    benefits:
      "Health insurance, 401k, flexible hours, unlimited PTO, home office stipend",
    description:
      "We are looking for an experienced React developer to lead our frontend team. You will work on scalable applications serving millions of users.",
    status: JobStatus.Open,
    isSponsored: true,
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Product Manager",
    company: "StartupXYZ",
    location: "New York, NY",
    jobType: JobType.FullTime,
    salaryMin: 100000,
    salaryMax: 140000,
    isRemote: false,
    requirements:
      "3+ years product management, data analysis skills, excellent communication",
    benefits: "Equity options, health insurance, professional development budget",
    description:
      "Join our growing startup as Product Manager. You will define product strategy and work with engineering and design teams.",
    status: JobStatus.Open,
    isSponsored: true,
    createdAt: new Date("2024-01-14"),
  },
  {
    id: "3",
    title: "Full Stack Engineer",
    company: "WebSolutions Inc",
    location: "Austin, TX",
    jobType: JobType.FullTime,
    salaryMin: 90000,
    salaryMax: 130000,
    isRemote: true,
    requirements:
      "3+ years full stack development, JavaScript/TypeScript, PostgreSQL, Docker",
    benefits: "Remote first, health insurance, learning stipend, team outings",
    description:
      "Build robust web applications with our full stack team. You will work on both frontend and backend systems serving thousands of users.",
    status: JobStatus.Open,
    isSponsored: false,
    createdAt: new Date("2024-01-13"),
  },
  {
    id: "4",
    title: "UX Designer",
    company: "DesignHub",
    location: "Los Angeles, CA",
    jobType: JobType.FullTime,
    salaryMin: 80000,
    salaryMax: 120000,
    isRemote: true,
    requirements:
      "4+ years UX design, Figma expertise, user research, prototyping",
    benefits: "Creative freedom, health insurance, mac equipment provided",
    description:
      "Create beautiful and intuitive user interfaces for our design platform. Work with a team of talented designers and engineers.",
    status: JobStatus.Open,
    isSponsored: false,
    createdAt: new Date("2024-01-12"),
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Seattle, WA",
    jobType: JobType.FullTime,
    salaryMin: 110000,
    salaryMax: 150000,
    isRemote: true,
    requirements:
      "5+ years DevOps, Kubernetes, CI/CD pipelines, AWS/GCP experience",
    benefits: "Competitive salary, health insurance, conference budget",
    description:
      "Manage and optimize our cloud infrastructure. Build scalable systems supporting millions of requests per day.",
    status: JobStatus.Open,
    isSponsored: false,
    createdAt: new Date("2024-01-11"),
  },
];

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
