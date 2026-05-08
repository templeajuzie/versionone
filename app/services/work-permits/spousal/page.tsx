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
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Globe2,
  ShieldCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const spousalContent = {
  title: "Spousal Open Work Permit",
  description:
    "A flexible immigration pathway that allows spouses or partners of students and skilled workers to live and work freely abroad without being tied to a specific employer. Popular in countries like Canada, United Kingdom, Australia, and Ireland, this permit supports family unity while opening doors to career opportunities.",
  types: [
    "Spousal Open Work Permit (SOWP)",
    "Dependent Partner Work Visa",
    "Spouse Work Rights Visa",
    "Family Accompanying Work Permit",
    "Graduate Spouse Work Permit",
  ],
  process: [
    "Confirm eligibility through spouse/partner status",
    "Link application to principal applicant (student/worker)",
    "Submit work permit application",
    "Document verification",
    "Biometrics & background checks",
    "Permit approval",
  ],
  howToApply: [
    "Ensure your spouse/partner holds a valid visa (study/work)",
    "Prepare relationship proof (marriage certificate, evidence of partnership)",
    "Gather supporting documents (passport, visa copies, financial proof)",
    "Submit application (together or separately)",
    "Provide biometrics and required checks",
    "Receive approval and relocate",
  ],
  timeline: "2 – 12 weeks (average)",
  benefits: [
    "Work for any employer",
    "No job offer required",
    "Live together with your spouse abroad",
    "Gain international work experience",
    "Support family income",
    "Pathway to permanent residency (in many cases)",
    "Flexibility to change jobs anytime",
  ],
  countries: [
    {
      name: "Canada",
      points: [
        "Spouses of skilled workers and international students eligible",
        "Open work permit with full flexibility",
        "Strong PR pathways for families",
      ],
    },
    {
      name: "United Kingdom",
      points: [
        "Dependent visa allows full work rights",
        "No restriction on employer",
        "Leads to settlement with main applicant",
      ],
    },
    {
      name: "Australia",
      points: ["Partner visa / dependent visa with work rights", "Full-time work allowed", "PR pathways available"],
    },
    {
      name: "Ireland",
      points: [
        "Spouses of critical skills workers eligible",
        "Stamp 1G permission allows open work",
        "Easy transition to long-term residence",
      ],
    },
  ],
  european: [
    { name: "Germany", desc: "Spouses can work freely upon arrival" },
    { name: "Netherlands", desc: "Partner residence permit with open work rights" },
    { name: "France", desc: "Family reunification with work authorization" },
    { name: "Sweden", desc: "Dependent permits include work rights" },
    { name: "Denmark", desc: "Spouses allowed to work without restriction" },
  ],
  who: [
    "Spouses of international students",
    "Partners of skilled workers",
    "Families relocating together",
    "Individuals seeking flexible work opportunities abroad",
  ],
};

const GridPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-zinc-200"
    aria-hidden="true"
  >
    <defs>
      <pattern id="grid-pattern" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern)" />
  </svg>
);

export default function SpousalWorkPermitPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      {/* ── HERO ─────────────────────────────────────────────────── */}
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

              <Link href="/services/work-permits" className="transition hover:text-white">
                Work Permits
              </Link>

              <ChevronRight size={12} />

              <span className="text-white">{spousalContent.title}</span>
            </nav>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl leading-[0.95] font-black tracking-tight text-white md:text-7xl"
            >
              {spousalContent.title}
            </motion.h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              {spousalContent.description}
            </p>
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
                  <span className="h-1 w-8 rounded-full bg-blue-600" />
                  Types of Permits
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {spousalContent.types.map((type, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                      <FileText size={18} className="text-blue-600" />
                      <span className="text-sm font-bold text-zinc-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Process */}
              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-blue-600" />
                  Application Process
                </h2>
                <div className="relative space-y-8 pl-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:bg-zinc-100">
                  {spousalContent.process.map((step, i) => (
                    <div key={i} className="relative">
                      <div className="absolute top-1 -left-[31px] z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-[10px] font-black text-blue-600">
                        {i + 1}
                      </div>
                      <p className="text-base font-bold text-zinc-800">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Apply */}
              <div className="rounded-lg bg-zinc-900 p-10 text-white">
                <h2 className="mb-8 text-2xl font-black">How to Apply</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {spousalContent.howToApply.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 rounded-full bg-white/10 p-1 text-blue-400">
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
                  <span className="h-1 w-8 rounded-full bg-blue-600" />
                  Program Overview by Country
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {spousalContent.countries.map((country, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-zinc-100 bg-white p-8 shadow-sm transition-all hover:shadow-sm"
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

                <div className="mt-12 rounded-lg border border-zinc-100 bg-zinc-50 p-8">
                  <h3 className="mb-6 text-lg font-black text-zinc-900">
                    European Countries (Similar Spousal Work Rights)
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {spousalContent.european.map((eu, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Globe2 size={16} className="text-blue-600" />
                        <span className="text-sm font-bold text-zinc-700">{eu.name} —</span>
                        <span className="text-sm text-zinc-500">{eu.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Who Should Apply */}
              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-blue-600" />
                  Who Should Apply
                </h2>
                <div className="flex flex-wrap gap-3">
                  {spousalContent.who.map((person, i) => (
                    <div key={i} className="rounded-full bg-zinc-100 px-6 py-3 text-sm font-bold text-zinc-700">
                      {person}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-10">
                <p className="text-2xl font-black text-zinc-900 italic">
                  Move together, work freely, and build your future as a family—anywhere in the world.
                </p>
              </div>
            </div>

            {/* Right Sidebar (Sticky) */}
            <aside className="lg:w-96 lg:shrink-0">
              <div className="sticky top-32 space-y-8">
                {/* Timeline Card */}
                <div className="rounded-lg border border-zinc-100 bg-white p-8 shadow-sm">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-widest text-zinc-400 uppercase">
                        Processing Timeline
                      </p>
                      <p className="text-xl font-black text-zinc-900">{spousalContent.timeline}</p>
                    </div>
                  </div>
                  <div className="mb-6 h-px bg-zinc-100" />
                  <div className="space-y-4">
                    <p className="mb-2 text-[10px] font-black tracking-widest text-zinc-400 uppercase">Key Benefits</p>
                    {spousalContent.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <ShieldCheck size={16} className="shrink-0 text-emerald-500" />
                        <span className="text-sm font-bold text-zinc-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="group relative overflow-hidden rounded-lg bg-blue-600 p-8 text-white shadow-sm">
                  <div className="absolute top-0 right-0 p-6 opacity-10 transition-transform group-hover:scale-110">
                    <Users size={80} />
                  </div>
                  <h3 className="relative z-10 mb-2 text-2xl font-black">Start Your Family Journey</h3>
                  <p className="relative z-10 mb-8 text-sm text-blue-100">
                    Get an expert assessment of your family's eligibility in 30 minutes.
                  </p>
                  <Link
                    href="/contact"
                    className="relative z-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 font-black text-blue-600 transition-colors hover:bg-zinc-50"
                  >
                    Free Consultation <ArrowRight size={18} />
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
