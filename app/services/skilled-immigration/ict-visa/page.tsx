/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import { ArrowRight, Building2, CheckCircle2, ChevronRight, Clock, FileText, Globe2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ictContent = {
  title: "Intra-Company Transfer (ICT) Visa",
  description:
    "A strategic pathway for professionals already working within multinational companies to relocate to overseas branches in top destinations like United Kingdom, Canada, Australia, Germany, and Netherlands. This visa allows you to continue your career with the same employer while gaining international exposure and advancing professionally.",
  types: [
    "Intra-Company Transfer Visa (ICT)",
    "Senior or Specialist Worker Visa",
    "Managerial Transfer Visa",
    "Trainee / Graduate Transfer Visa",
    "EU ICT Residence Permit",
  ],
  process: [
    "Confirm eligibility with current employer",
    "Internal company transfer approval",
    "Employer sponsorship / documentation",
    "Visa application submission",
    "Document verification",
    "Biometrics, medical & background checks",
    "Visa approval",
  ],
  howToApply: [
    "Be employed by a multinational company",
    "Request or receive transfer to overseas branch",
    "Ensure role meets visa requirements (manager/specialist/trainee)",
    "Employer prepares transfer and sponsorship documents",
    "Submit visa application",
    "Complete biometrics and checks",
    "Receive visa and relocate",
  ],
  timeline: "2 – 8 weeks (average)",
  benefits: [
    "Continue working with your current employer",
    "Fast and smooth relocation process",
    "Gain international work experience",
    "No need to search for a new job",
    "Opportunity to relocate with family",
    "Pathway to long-term residency (in some countries)",
    "Career growth within global organizations",
  ],
  countries: [
    {
      name: "United Kingdom",
      points: [
        "Senior or Specialist Worker Visa",
        "Requires sponsorship from UK branch",
        "Salary threshold applies",
        "Limited but possible settlement options",
      ],
    },
    {
      name: "Canada",
      points: ["ICT under LMIA-exempt category", "Fast processing", "Pathway to PR through work experience"],
    },
    {
      name: "Australia",
      points: ["Subclass 482 visa (intra-company stream)", "Employer sponsorship required", "Pathway to PR"],
    },
    {
      name: "Germany",
      points: ["EU ICT Card", "For managers, specialists, trainees", "Mobility within EU countries"],
    },
  ],
  netherlands: {
    name: "Netherlands",
    points: [
      "ICT Permit and Highly Skilled Migrant route",
      "Recognized sponsor required",
      "Strong work-life balance and PR options",
    ],
  },
  who: [
    "Employees of multinational companies",
    "Managers, specialists, and trainees",
    "Professionals seeking international exposure within same company",
  ],
};

const GridPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-zinc-200"
    aria-hidden="true"
  >
    <defs>
      <pattern id="grid-pattern-ict" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern-ict)" />
  </svg>
);

export default function IntraCompanyTransferICTVisaPage() {
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

              <Link href="/services/skilled-immigration" className="transition hover:text-white">
                Skilled Immigration
              </Link>

              <ChevronRight size={12} />

              <span className="text-white">{ictContent.title}</span>
            </nav>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl leading-[0.95] font-black tracking-tight text-white md:text-7xl"
            >
              {ictContent.title}
            </motion.h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              {ictContent.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="flex-1 space-y-20">
              <div>
                <h2 className="text-primary mb-8 flex items-center gap-3 text-2xl font-black">Types of Visas</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {ictContent.types.map((type, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                      <FileText size={18} className="text-zinc-600" />
                      <span className="text-sm font-bold text-zinc-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-primary mb-8 flex items-center gap-3 text-2xl font-black">Application Process</h2>
                <div className="relative space-y-8 pl-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:bg-zinc-100">
                  {ictContent.process.map((step, i) => (
                    <div key={i} className="relative">
                      <div className="text-primary absolute top-1 -left-[31px] z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-zinc-900 bg-white text-[10px] font-black">
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
                  {ictContent.howToApply.map((item, i) => (
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
                <h2 className="text-primary mb-8 flex items-center gap-3 text-2xl font-black">
                  Program Overview by Country
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {ictContent.countries.map((country, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-zinc-100 bg-white p-8 shadow-sm transition-all hover:shadow-sm"
                    >
                      <h3 className="text-primary mb-4 text-xl font-black">{country.name}</h3>
                      <ul className="space-y-3">
                        {country.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-500">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-lg border border-zinc-100 bg-white p-8 shadow-sm">
                  <h3 className="text-primary mb-4 text-xl font-black">{ictContent.netherlands.name}</h3>
                  <ul className="space-y-3">
                    {ictContent.netherlands.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-500">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-primary mb-8 flex items-center gap-3 text-2xl font-black">Who Should Apply</h2>
                <div className="flex flex-wrap gap-3">
                  {ictContent.who.map((person, i) => (
                    <div key={i} className="rounded-full bg-zinc-100 px-6 py-3 text-sm font-bold text-zinc-700">
                      {person}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-10">
                <p className="text-primary text-2xl font-black italic">
                  Take your career global without changing employers—your international transfer starts here.
                </p>
              </div>
            </div>

            <aside className="lg:w-96 lg:shrink-0">
              <div className="sticky top-32 space-y-8">
                <div className="rounded-lg border border-zinc-100 bg-white p-8 shadow-sm">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="text-primary rounded-2xl bg-zinc-50 p-3">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-widest text-zinc-400 uppercase">
                        Processing Timeline
                      </p>
                      <p className="text-primary text-xl font-black">{ictContent.timeline}</p>
                    </div>
                  </div>
                  <div className="mb-6 h-px bg-zinc-100" />
                  <div className="space-y-4">
                    <p className="mb-2 text-[10px] font-black tracking-widest text-zinc-400 uppercase">Key Benefits</p>
                    {ictContent.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <ShieldCheck size={16} className="text-primary shrink-0" />
                        <span className="text-sm font-bold text-zinc-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg bg-zinc-900 p-8 text-white shadow-sm">
                  <div className="absolute top-0 right-0 p-6 opacity-10 transition-transform group-hover:scale-110">
                    <Building2 size={80} />
                  </div>
                  <h3 className="relative z-10 mb-2 text-2xl font-black">Relocate with Confidence</h3>
                  <p className="relative z-10 mb-8 text-sm text-zinc-400">
                    Expert assistance for intra-company transfers across 50+ countries.
                  </p>
                  <Link
                    href="/contact"
                    className="text-primary relative z-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 font-black transition-colors hover:bg-zinc-50"
                  >
                    Contact Expert <ArrowRight size={18} />
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
