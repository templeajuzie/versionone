export enum JobType {
  FullTime = "full-time",
  PartTime = "part-time",
  Contract = "contract",
  Temporary = "temporary",
  Internship = "internship",
}

// Job Status Enum
export enum JobStatus {
  Draft = "draft",
  Open = "open",
  Closed = "closed",
}

// Application Status Enum
export enum ApplicationStatus {
  Applied = "applied",
  Reviewed = "reviewed",
  Interviewed = "interviewed",
  Rejected = "rejected",
  Accepted = "accepted",
}

// Job Type
export interface Job {
  id?: string;
  title: string;
  company: string;
  location: string;
  jobType: JobType;
  salaryMin?: number;
  salaryMax?: number;
  is_remote: boolean;
  requirements: string;
  benefits: string;
  description: string;
  status: JobStatus;
  isSponsored: boolean;
  createdAt: Date;
  isCoverletterRequired: boolean | undefined;
  isCVRequired: boolean | undefined;
  user_id: string;
}

// Application Type
export interface Application {
  id: string;
  jobId: string;
  applicantEmail: string;
  resumeUrl: string;
  coverLetter: string;
  country: string;
  status: ApplicationStatus;
  appliedAt: Date;
}

// Form Types
export interface JobFormData {
  title: string;
  company: string;
  location: string;
  jobType: JobType;
  salaryMin: number;
  salaryMax: number;
  isRemote: boolean;
  requirements: string;
  benefits: string;
  description: string;
  status: JobStatus;
  isSponsored: boolean;
}

export interface ApplicationFormData {
  applicantEmail: string;
  resumeUrl: string;
  coverLetter: string;
  country: string;
}
