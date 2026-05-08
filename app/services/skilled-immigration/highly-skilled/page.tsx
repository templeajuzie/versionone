/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Globe2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const highlySkilledContent = {
  title: "Highly Skilled Migrant Programs",
  description:
    "A premium immigration pathway tailored for top-tier professionals seeking to live and work in advanced economies like Netherlands, Germany, Canada, and Sweden. These programs are designed to attract experienced, high-earning, and highly educated individuals who can contribute significantly to a country’s economy.",
  types: [
    "Highly Skilled Migrant Visa",
    "EU Blue Card",
    "Skilled Worker Visa (High Salary Category)",
    "Talent / Specialist Work Visa",
    "Employer-Sponsored High-Skill Visa",
    "Fast-Track Skilled Residence Permit",
  ],
  process: [
    "Confirm eligibility (education, salary level, experience)",
    "Secure job offer (in most cases)",
    "Employer sponsorship / registration",
    "Visa / residence permit application",
    "Document verification",
    "Medical & background checks",
    "Visa approval",
  ],
  howToApply: [
    "Ensure your qualifications meet high-skill standards",
    "Secure a high-paying job offer from an approved employer",
    "Prepare documents (degree certificates, CV, passport)",
    "Employer initiates or supports application",
    "Submit visa / residence permit application",
    "Complete biometrics, medicals & checks",
    "Receive approval and relocate",
  ],
  timeline: "2 – 10 weeks (average)",
  benefits: [
    "Fast-track processing",
    "Higher salary thresholds and better income",
    "Priority treatment in immigration systems",
    "Opportunity to relocate with family",
    "Access to strong economies and job markets",
    "Pathway to permanent residency and citizenship",
  ],
  countries: [
    {
      name: "Netherlands",
      points: [
        "Highly Skilled Migrant (Kennismigrant) Program",
        "Requires employer recognized by immigration authority",
        "Salary threshold applies",
        "Fast processing and PR pathway",
      ],
    },
    {
      name: "Germany",
      points: ["EU Blue Card route", "Requires degree and minimum salary", "Fast-track permanent residency options"],
    },
    {
      name: "Canada",
      points: [
        "Express Entry for high-skilled professionals",
        "High CRS scores favor top candidates",
        "Direct pathway to PR",
      ],
    },
    {
      name: "Sweden",
      points: [
        "Work permit for highly skilled professionals",
        "Employer sponsorship required",
        "Strong work-life balance and PR options",
      ],
    },
  ],
  who: [
    "Highly educated professionals",
    "Individuals with strong work experience",
    "High-income earners",
    "Experts in specialized industries",
  ],
};

const GridPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-zinc-200"
    aria-hidden="true"
  >
    <defs>
      <pattern id="grid-pattern-highly" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern-highly)" />
  </svg>
);

export default function HighlySkilledMigrantPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden border-b border-zinc-100 pt-44 pb-20">
        <GridPattern />
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-6">
            <nav className="flex items-center gap-2 text-[10px] font-black tracking-widest text-zinc-400 uppercase">
              <Link href="/services" className="hover:text-blue-600">
                Services
              </Link>
              <ChevronRight size={10} />
              <Link href="/services/skilled-immigration" className="hover:text-blue-600">
                Skilled Immigration
              </Link>
              <ChevronRight size={10} />
              <span className="text-zinc-900">Highly Skilled</span>
            </nav>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl text-4xl leading-tight font-black text-zinc-900 md:text-6xl"
            >
              {highlySkilledContent.title}
            </motion.h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-500">{highlySkilledContent.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="flex-1 space-y-20">
              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-blue-600" />
                  Types of Visas
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {highlySkilledContent.types.map((type, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                      <Award size={18} className="text-blue-600" />
                      <span className="text-sm font-bold text-zinc-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-blue-600" />
                  Application Process
                </h2>
                <div className="relative space-y-8 pl-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:bg-zinc-100">
                  {highlySkilledContent.process.map((step, i) => (
                    <div key={i} className="relative">
                      <div className="absolute top-1 -left-[31px] z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-[10px] font-black text-blue-600">
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
                  {highlySkilledContent.howToApply.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 rounded-full bg-white/10 p-1 text-blue-400">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="text-sm leading-relaxed text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-blue-600" />
                  Program Overview by Country
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {highlySkilledContent.countries.map((country, i) => (
                    <div
                      key={i}
                      className="rounded-3xl border border-zinc-100 bg-white p-8 shadow-sm transition-all hover:shadow-sm"
                    >
                      <h3 className="mb-4 text-xl font-black text-zinc-900">{country.name}</h3>
                      <ul className="space-y-3">
                        {country.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-500">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
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
                  <span className="h-1 w-8 rounded-full bg-blue-600" />
                  Who Should Apply
                </h2>
                <div className="flex flex-wrap gap-3">
                  {highlySkilledContent.who.map((person, i) => (
                    <div key={i} className="rounded-full bg-zinc-100 px-6 py-3 text-sm font-bold text-zinc-700">
                      {person}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-10">
                <p className="text-2xl font-black text-zinc-900 italic">
                  If you are highly skilled, the world’s top economies are looking for you—step into global success
                  today.
                </p>
              </div>
            </div>

            <aside className="lg:w-96 lg:shrink-0">
              <div className="sticky top-32 space-y-8">
                <div className="rounded-lg border border-zinc-100 bg-white p-8 shadow-sm">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-widest text-zinc-400 uppercase">
                        Processing Timeline
                      </p>
                      <p className="text-xl font-black text-zinc-900">{highlySkilledContent.timeline}</p>
                    </div>
                  </div>
                  <div className="mb-6 h-px bg-zinc-100" />
                  <div className="space-y-4">
                    <p className="mb-2 text-[10px] font-black tracking-widest text-zinc-400 uppercase">Key Benefits</p>
                    {highlySkilledContent.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <ShieldCheck size={16} className="shrink-0 text-emerald-500" />
                        <span className="text-sm font-bold text-zinc-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg bg-blue-600 p-8 text-white shadow-sm">
                  <div className="absolute top-0 right-0 p-6 opacity-10 transition-transform group-hover:scale-110">
                    <TrendingUp size={80} />
                  </div>
                  <h3 className="relative z-10 mb-2 text-2xl font-black">Elite Career Fast-Track</h3>
                  <p className="relative z-10 mb-8 text-sm text-blue-100">
                    Get priority processing and secure your place in a top-tier economy.
                  </p>
                  <Link
                    href="/contact"
                    className="relative z-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 font-black text-blue-600 transition-colors hover:bg-zinc-50"
                  >
                    Apply Now <ArrowRight size={18} />
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
