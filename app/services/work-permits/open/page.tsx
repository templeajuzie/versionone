/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, CheckCircle2, ChevronRight, Clock, FileText, Globe2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const openWorkContent = {
  title: "Open Work Permit",
  description:
    "A flexible immigration pathway that allows you to live and work in a country without being tied to a specific employer. Widely used in countries like Canada, Australia, United Kingdom, Ireland, and across parts of Europe, this permit gives you the freedom to explore job opportunities, switch employers, and build your career with ease.",
  types: [
    "Open Work Permit",
    "Post-Graduate Work Permit (PGWP)",
    "Spousal Open Work Permit (SOWP)",
    "Bridging Open Work Permit",
    "Working Holiday / Youth Mobility Permit",
    "Graduate Work Visa",
  ],
  process: [
    "Determine eligibility category",
    "Submit work permit application",
    "Document verification",
    "Biometrics submission",
    "Background checks",
    "Permit approval",
  ],
  howToApply: [
    "Identify your eligibility (student graduate, spouse, youth program, etc.)",
    "Prepare documents (passport, proof of relationship/study/work status)",
    "Submit work permit application",
    "Provide biometrics and supporting documents",
    "Wait for approval",
    "Travel and start working freely",
  ],
  timeline: "2 – 12 weeks (average)",
  benefits: [
    "Work for any employer",
    "No job offer required (in most cases)",
    "Freedom to change jobs",
    "Opportunity to gain local work experience",
    "Pathway to permanent residency",
    "Flexible career growth",
  ],
  countries: [
    {
      name: "Canada",
      points: [
        "Most established open work permit system",
        "Includes PGWP, SOWP, Bridging permits",
        "Strong PR pathways",
      ],
    },
    {
      name: "Australia",
      points: ["Temporary Graduate Visa (subclass 485)", "Working Holiday Visa options", "Post-study work flexibility"],
    },
    {
      name: "United Kingdom",
      points: ["Graduate Route Visa", "High Potential Individual (HPI) Visa", "No employer restriction"],
    },
    {
      name: "Ireland",
      points: ["Third Level Graduate Programme", "Work freely after study", "Pathway to employment"],
    },
  ],
  european: [
    { name: "Germany", desc: "Job Seeker Visa & post-study work permits" },
    { name: "Netherlands", desc: "Orientation Year Visa (zoekjaar)" },
    { name: "France", desc: "Post-study work permits (APS)" },
    { name: "Sweden", desc: "Job search residence permits" },
    { name: "Denmark", desc: "Establishment Card scheme" },
  ],
  who: [
    "International students and graduates",
    "Spouses of skilled workers or students",
    "Young professionals seeking global exposure",
    "Individuals who want flexibility in employment",
  ],
};

const GridPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-zinc-200"
    aria-hidden="true"
  >
    <defs>
      <pattern id="grid-pattern-open" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern-open)" />
  </svg>
);

export default function OpenWorkPermitPage() {
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

              <Link href="/services/work-permits" className="transition hover:text-white">
                Work Permits
              </Link>

              <ChevronRight size={12} />

              <span className="text-white">{openWorkContent.title}</span>
            </nav>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl leading-[0.95] font-black tracking-tight text-white md:text-7xl"
            >
              {openWorkContent.title}
            </motion.h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              {openWorkContent.description}
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
                  <span className="h-1 w-8 rounded-full bg-indigo-600" />
                  Types of Permits
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {openWorkContent.types.map((type, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                      <FileText size={18} className="text-indigo-600" />
                      <span className="text-sm font-bold text-zinc-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-indigo-600" />
                  Application Process
                </h2>
                <div className="relative space-y-8 pl-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:bg-zinc-100">
                  {openWorkContent.process.map((step, i) => (
                    <div key={i} className="relative">
                      <div className="absolute top-1 -left-[31px] z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-600 bg-white text-[10px] font-black text-indigo-600">
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
                  {openWorkContent.howToApply.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 rounded-full bg-white/10 p-1 text-indigo-400">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="text-sm leading-relaxed text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-indigo-600" />
                  Program Overview by Country
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {openWorkContent.countries.map((country, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-zinc-100 bg-white p-8 shadow-sm transition-all hover:shadow-sm"
                    >
                      <h3 className="mb-4 text-xl font-black text-zinc-900">{country.name}</h3>
                      <ul className="space-y-3">
                        {country.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-500">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-12 rounded-lg border border-zinc-100 bg-zinc-50 p-8">
                  <h3 className="mb-6 text-lg font-black text-zinc-900">Other Flexible European Options</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {openWorkContent.european.map((eu, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Globe2 size={16} className="text-indigo-600" />
                        <span className="text-sm font-bold text-zinc-700">{eu.name} —</span>
                        <span className="text-sm text-zinc-500">{eu.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-indigo-600" />
                  Who Should Apply
                </h2>
                <div className="flex flex-wrap gap-3">
                  {openWorkContent.who.map((person, i) => (
                    <div key={i} className="rounded-full bg-zinc-100 px-6 py-3 text-sm font-bold text-zinc-700">
                      {person}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-10">
                <p className="text-2xl font-black text-zinc-900 italic">
                  Work freely, explore opportunities, and grow your career globally—without limits.
                </p>
              </div>
            </div>

            <aside className="lg:w-96 lg:shrink-0">
              <div className="sticky top-32 space-y-8">
                <div className="rounded-lg border border-zinc-100 bg-white p-8 shadow-sm">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-2xl bg-indigo-50 p-3 text-indigo-600">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-widest text-zinc-400 uppercase">
                        Processing Timeline
                      </p>
                      <p className="text-xl font-black text-zinc-900">{openWorkContent.timeline}</p>
                    </div>
                  </div>
                  <div className="mb-6 h-px bg-zinc-100" />
                  <div className="space-y-4">
                    <p className="mb-2 text-[10px] font-black tracking-widest text-zinc-400 uppercase">Key Benefits</p>
                    {openWorkContent.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <ShieldCheck size={16} className="shrink-0 text-emerald-500" />
                        <span className="text-sm font-bold text-zinc-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg bg-indigo-600 p-8 text-white shadow-sm">
                  <div className="absolute top-0 right-0 p-6 opacity-10 transition-transform group-hover:scale-110">
                    <Briefcase size={80} />
                  </div>
                  <h3 className="relative z-10 mb-2 text-2xl font-black">Expand Your Horizons</h3>
                  <p className="relative z-10 mb-8 text-sm text-indigo-100">
                    Discover your eligibility for a flexible work permit today.
                  </p>
                  <Link
                    href="/contact"
                    className="relative z-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 font-black text-indigo-600 transition-colors hover:bg-zinc-50"
                  >
                    Start Assessment <ArrowRight size={18} />
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
