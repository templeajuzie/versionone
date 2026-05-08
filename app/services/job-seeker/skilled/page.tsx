/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Globe2,
  Hammer,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const unskilledContent = {
  title: "Immigration Options for Unskilled Workers",
  description:
    "A practical and accessible pathway for individuals without specialized qualifications to live and work abroad. Countries like Canada, United Kingdom, Poland, Romania, United Arab Emirates, and Saudi Arabia offer structured programs for entry-level and general labor roles.",
  types: [
    "General Labor / Low-Skilled Work Visa",
    "Seasonal Worker Programs",
    "Agricultural / Farm Worker Programs",
    "Factory / Warehouse Worker Programs",
    "Hospitality & Service Worker Visa",
    "Construction Worker Programs",
    "Domestic Worker / Caregiver Programs",
    "Cleaning & Maintenance Worker Visa",
    "Retail / Supermarket Worker Programs",
    "Temporary Work Permit (Low-Skilled Category)",
  ],
  process: [
    "Job Search / Employer Recruitment",
    "Job Offer from Employer",
    "Work Permit / Visa Application",
    "Document Submission",
    "Medical & Background Checks",
    "Visa Approval & Travel",
  ],
  howToApply: [
    "Find job opportunities through approved recruiters or employers",
    "Secure a valid job offer",
    "Prepare basic documents (passport, photos, ID)",
    "Employer processes work permit approval",
    "Submit visa application",
    "Complete medicals and background checks",
    "Receive visa and travel",
  ],
  timeline: "2 – 12 weeks (average)",
  benefits: [
    "No high qualifications required",
    "Fast and simple application process",
    "Immediate employment opportunities",
    "Earn and support family",
    "Opportunity to gain international experience",
    "Possibility to transition to higher roles or other visa types",
  ],
  countries: [
    {
      name: "Canada",
      points: [
        "Seasonal Agricultural Worker Program",
        "Caregiver Programs",
        "LMIA-based low-skilled jobs",
        "Some pathways to PR",
      ],
    },
    {
      name: "United Kingdom",
      points: ["Seasonal Worker Visa", "Agriculture & food processing roles", "Short-term employment"],
    },
    {
      name: "Poland & Romania",
      points: [
        "Factory, warehouse, and construction jobs",
        "Simple work permit process",
        "High demand for foreign workers",
      ],
    },
    {
      name: "Middle East (UAE & Saudi Arabia)",
      points: [
        "Domestic, construction, hospitality jobs",
        "Employer-sponsored visas",
        "Fast processing and relocation",
      ],
    },
  ],
  who: [
    "Individuals without specialized skills",
    "Job seekers looking for immediate employment abroad",
    "First-time international workers",
    "Applicants seeking entry into global workforce",
  ],
};

const GridPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-zinc-200"
    aria-hidden="true"
  >
    <defs>
      <pattern id="grid-pattern-unskilled" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern-unskilled)" />
  </svg>
);

export default function UnskilledWorkVisaPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <section className="relative isolate min-h-[70vh] overflow-hidden border-b border-white/10 py-32 md:py-40">
        {/* Background */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Travel Hero"
            fill
            priority
            className="object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        </div>

        {/* Grid */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <GridPattern />
        </div>

        {/* Content */}
        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 md:px-10">
          <div className="max-w-4xl">
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase">
              <Link href="/services" className="transition hover:text-white">
                Services
              </Link>

              <ChevronRight size={12} />

              <Link href="/services/job-seeker" className="transition hover:text-white">
                Job Seeker
              </Link>

              <ChevronRight size={12} />

              <span className="text-white">{unskilledContent.title}</span>
            </nav>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl leading-[0.95] font-black tracking-tight text-white md:text-7xl"
            >
              {unskilledContent.title}
            </motion.h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              {unskilledContent.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="flex-1 space-y-20">
              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-zinc-400" />
                  Types of Programs
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {unskilledContent.types.map((type, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                      <Hammer size={18} className="text-zinc-500" />
                      <span className="text-sm font-bold text-zinc-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-zinc-400" />
                  Application Process
                </h2>
                <div className="relative space-y-8 pl-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:bg-zinc-100">
                  {unskilledContent.process.map((step, i) => (
                    <div key={i} className="relative">
                      <div className="absolute top-1 -left-[31px] z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-zinc-400 bg-white text-[10px] font-black text-zinc-500">
                        {i + 1}
                      </div>
                      <p className="text-base font-bold text-zinc-800">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-zinc-900 p-10 text-white">
                <h2 className="mb-8 text-2xl font-black">How to Apply</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {unskilledContent.howToApply.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 rounded-full bg-white/10 p-1 text-zinc-400">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="text-sm leading-relaxed text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-zinc-400" />
                  Program Overview by Country
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {unskilledContent.countries.map((country, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-zinc-100 bg-white p-8 shadow-sm transition-all hover:shadow-sm"
                    >
                      <h3 className="mb-4 text-xl font-black text-zinc-900">{country.name}</h3>
                      <ul className="space-y-3">
                        {country.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-500">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-zinc-400" />
                  Who Should Apply
                </h2>
                <div className="flex flex-wrap gap-3">
                  {unskilledContent.who.map((person, i) => (
                    <div key={i} className="rounded-full bg-zinc-100 px-6 py-3 text-sm font-bold text-zinc-700">
                      {person}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-10">
                <p className="text-2xl font-black text-zinc-900 italic">
                  Start your journey today—your opportunity to work abroad is closer than you think.
                </p>
              </div>
            </div>

            <aside className="lg:w-96 lg:shrink-0">
              <div className="sticky top-32 space-y-8">
                <div className="rounded-lg border border-zinc-100 bg-white p-8 shadow-sm">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-2xl bg-zinc-50 p-3 text-zinc-500">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-widest text-zinc-400 uppercase">
                        Processing Timeline
                      </p>
                      <p className="text-xl font-black text-zinc-900">{unskilledContent.timeline}</p>
                    </div>
                  </div>
                  <div className="mb-6 h-px bg-zinc-100" />
                  <div className="space-y-4">
                    <p className="mb-2 text-[10px] font-black tracking-widest text-zinc-400 uppercase">Key Benefits</p>
                    {unskilledContent.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <ShieldCheck size={16} className="shrink-0 text-zinc-500" />
                        <span className="text-sm font-bold text-zinc-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg bg-zinc-900 p-8 text-white shadow-sm">
                  <div className="absolute top-0 right-0 p-6 opacity-10 transition-transform group-hover:scale-110">
                    <TrendingUp size={80} />
                  </div>
                  <h3 className="relative z-10 mb-2 text-2xl font-black">Begin Your Journey</h3>
                  <p className="relative z-10 mb-8 text-sm text-zinc-400">
                    No specialized skills? No problem. We help you find entry-level opportunities globally.
                  </p>
                  <Link
                    href="/contact"
                    className="relative z-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 font-black text-zinc-900 transition-colors hover:bg-zinc-50"
                  >
                    Free Assessment <ArrowRight size={18} />
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
