/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Globe2,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const content = {
  title: "Employer-Sponsored Skilled Work Visa",
  description:
    "A direct and fast-track pathway for skilled professionals to work abroad with the backing of an employer in top destinations like United Kingdom, Canada, Australia, and Germany. This route connects your skills to real job opportunities—giving you a secure way to relocate and build your career internationally.",
  types: [
    "Employer-Sponsored Work Visa",
    "Skilled Worker Visa (Sponsored)",
    "Temporary Skill Shortage Visa",
    "Employer Nomination Scheme (PR Visa)",
    "LMIA-Based Work Permit",
    "EU Blue Card (Employer-Based)",
    "Intra-Company Transfer (ICT) Visa",
  ],
  process: [
    "Job Search / Employer Sponsorship",
    "Job Offer from Approved Employer",
    "Employer Authorization (LMIA / Sponsorship License)",
    "Visa Application Submission",
    "Document Verification",
    "Medical & Background Checks",
    "Visa Approval",
  ],
  howToApply: [
    "Secure a job offer from a licensed sponsor",
    "Ensure your occupation meets country requirements",
    "Employer completes necessary sponsorship approvals",
    "Prepare and submit visa application",
    "Provide supporting documents and biometrics",
    "Complete medicals and background checks",
    "Receive visa approval and relocate",
  ],
  timeline: "1 – 6 months (average)",
  benefits: [
    "Guaranteed employment before relocation",
    "Faster visa processing in many cases",
    "High chances of approval with sponsorship",
    "Opportunity to relocate with family",
    "Pathway to permanent residency",
    "Access to stable income and career growth",
  ],
  countries: [
    {
      name: "United Kingdom",
      points: [
        "Skilled Worker Visa requires licensed sponsor",
        "70-point system",
        "Salary threshold applies",
        "Leads to settlement",
      ],
    },
    {
      name: "Canada",
      points: [
        "LMIA-based work permits",
        "Employer proves need for foreign worker",
        "Can transition to Permanent Residency",
        "Multiple sector opportunities",
      ],
    },
    {
      name: "Australia",
      points: [
        "Subclass 482 (Temporary Skill Shortage)",
        "Subclass 186 (PR pathway)",
        "Employer nomination required",
        "Strong pathway to PR",
      ],
    },
    {
      name: "Germany",
      points: [
        "EU Blue Card and Skilled Worker Visa",
        "Requires job offer and qualifications",
        "Competitive salary threshold",
        "PR pathway available",
      ],
    },
  ],
  who: [
    "Skilled professionals with job offers",
    "Individuals seeking secure relocation",
    "Applicants targeting PR through employment",
    "Professionals in high-demand occupations",
  ],
};

const GridPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-zinc-200"
    aria-hidden="true"
  >
    <defs>
      <pattern id="grid-pattern-employer" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern-employer)" />
  </svg>
);

export default function EmployerSponsoredWorkVisaPage() {
  const brandColor = "#2D3E75";

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-zinc-100 pt-44 pb-20">
        <GridPattern />
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-6">
            <nav className="flex items-center gap-2 text-[10px] font-black tracking-widest text-zinc-400 uppercase">
              <Link href="/services" className="hover:text-[#2D3E75]">
                Services
              </Link>
              <ChevronRight size={10} />
              <Link href="/services/skilled-immigration" className="hover:text-[#2D3E75]">
                Skilled Immigration
              </Link>
              <ChevronRight size={10} />
              <span className="text-zinc-900">Employer Sponsored</span>
            </nav>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl text-4xl leading-tight font-black text-zinc-900 md:text-6xl"
            >
              {content.title}
            </motion.h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-500">{content.description}</p>
          </div>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-16 lg:flex-row">
            {/* Left Column */}
            <div className="flex-1 space-y-20">
              {/* Types */}
              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-[#2D3E75]" />
                  Types of Visas
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {content.types.map((type, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                      <FileText size={18} className="text-[#2D3E75]" />
                      <span className="text-sm font-bold text-zinc-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Process */}
              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-[#2D3E75]" />
                  Application Process
                </h2>
                <div className="relative space-y-8 pl-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:bg-zinc-100">
                  {content.process.map((step, i) => (
                    <div key={i} className="relative">
                      <div className="absolute top-1 -left-[31px] z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#2D3E75] bg-white text-[10px] font-black text-[#2D3E75]">
                        {i + 1}
                      </div>
                      <p className="text-base font-bold text-zinc-800">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Apply */}
              <div className="rounded-lg bg-[#2D3E75] p-10 text-white">
                <h2 className="mb-8 text-2xl font-black">How to Apply</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {content.howToApply.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 rounded-full bg-white/10 p-1 text-white">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="text-sm leading-relaxed text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Country Overview */}
              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-[#2D3E75]" />
                  Program Overview by Country
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {content.countries.map((country, i) => (
                    <div
                      key={i}
                      className="rounded-3xl border border-zinc-100 bg-white p-8 shadow-sm transition-all hover:shadow-sm"
                    >
                      <h3 className="mb-4 text-xl font-black text-zinc-900">{country.name}</h3>
                      <ul className="space-y-3">
                        {country.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-500">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2D3E75]" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Should Apply */}
              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-[#2D3E75]" />
                  Who Should Apply
                </h2>
                <div className="flex flex-wrap gap-3">
                  {content.who.map((person, i) => (
                    <div key={i} className="rounded-full bg-zinc-100 px-6 py-3 text-sm font-bold text-zinc-700">
                      {person}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-10">
                <p className="text-2xl font-black text-zinc-900 italic">
                  Secure your job abroad first—then move with confidence. Your global career starts here.
                </p>
              </div>
            </div>

            {/* Right Sidebar (Sticky) */}
            <aside className="lg:w-96 lg:shrink-0">
              <div className="sticky top-32 space-y-8">
                {/* Timeline Card */}
                <div className="rounded-lg border border-zinc-100 bg-white p-8 shadow-sm">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-2xl bg-zinc-50 p-3 text-[#2D3E75]">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-widest text-zinc-400 uppercase">
                        Processing Timeline
                      </p>
                      <p className="text-xl font-black text-zinc-900">{content.timeline}</p>
                    </div>
                  </div>
                  <div className="mb-6 h-px bg-zinc-100" />
                  <div className="space-y-4">
                    <p className="mb-2 text-[10px] font-black tracking-widest text-zinc-400 uppercase">Key Benefits</p>
                    {content.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <ShieldCheck size={16} className="shrink-0 text-[#2D3E75]" />
                        <span className="text-sm font-bold text-zinc-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="group relative overflow-hidden rounded-lg bg-[#2D3E75] p-8 text-white shadow-sm">
                  <div className="absolute top-0 right-0 p-6 opacity-10 transition-transform group-hover:scale-110">
                    <Building2 size={80} />
                  </div>
                  <h3 className="relative z-10 mb-2 text-2xl font-black">Secure Your Role</h3>
                  <p className="relative z-10 mb-8 text-sm text-zinc-400">
                    Get help with employer sponsorship and visa applications today.
                  </p>
                  <Link
                    href="/contact"
                    className="relative z-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 font-black text-[#2D3E75] transition-colors hover:bg-zinc-50"
                  >
                    Start Now <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
