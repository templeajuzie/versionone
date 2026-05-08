/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Globe2,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const content = {
  title: "Employer-Sponsored Permanent Residency",
  description:
    "A secure and direct pathway to permanent residency through a verified job offer and employer support. Widely used in countries like Canada, Australia, United Kingdom, New Zealand, and Germany, this route allows skilled workers to transition from employment to permanent settlement with higher approval confidence.",
  types: [
    "Employer Nomination Scheme (PR)",
    "Employer-Sponsored PR Visa",
    "Work-to-PR Employer Pathway",
    "Provincial / State Employer Nomination",
    "Skilled Worker Sponsored PR Route",
  ],
  process: [
    "Secure job offer from approved employer",
    "Employer nomination / sponsorship approval",
    "Submit permanent residency application",
    "Document verification",
    "Medical & background checks",
    "PR approval",
  ],
  howToApply: [
    "Obtain a valid long-term job offer",
    "Ensure employer is authorized to sponsor PR",
    "Prepare documents (work experience, qualifications, passport)",
    "Employer submits nomination or support documents",
    "Submit PR application",
    "Complete biometrics, medicals & checks",
    "Receive permanent residency",
  ],
  timeline: "6 – 18 months (average)",
  benefits: [
    "Higher chances of PR approval",
    "Guaranteed employment",
    "Faster pathway compared to independent routes",
    "Family inclusion (spouse & children)",
    "Access to full residency benefits",
    "Long-term job security",
    "Pathway to citizenship",
  ],
  countries: [
    {
      name: "Canada",
      points: ["Employer-supported PNP streams", "LMIA-backed job offers boost PR chances", "Direct PR pathway"],
    },
    {
      name: "Australia",
      points: ["Employer Nomination Scheme (subclass 186)", "Direct PR visa", "Strong demand for skilled workers"],
    },
    {
      name: "United Kingdom",
      points: ["Skilled Worker Visa → ILR (PR)", "Requires continuous employment", "Typically after 5 years"],
    },
    {
      name: "New Zealand",
      points: ["Employer-supported residence pathways", "Work-to-residence programs", "Strong job market demand"],
    },
    {
      name: "Germany",
      points: ["Employer-backed work → PR pathway", "EU Blue Card route", "Fast-track options available"],
    },
  ],
  who: [
    "Skilled professionals with job offers",
    "Individuals seeking secure PR routes",
    "Applicants aiming for long-term employment and settlement",
    "Workers already employed abroad",
  ],
};

const GridPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-zinc-200"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="grid-pattern-employer-sponsored"
        width={200}
        height={200}
        x="50%"
        y={-1}
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern-employer-sponsored)" />
  </svg>
);

export default function EmployerSponsoredPermanentResidencyPage() {
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

              <Link href="/services/pr" className="transition hover:text-white">
                Permanent Residency
              </Link>

              <ChevronRight size={12} />

              <span className="text-white">{content.title}</span>
            </nav>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl leading-[0.95] font-black tracking-tight text-white md:text-7xl"
            >
              {content.title}
            </motion.h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">{content.description}</p>
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
                <h2 className="text-primary mb-8 flex items-center gap-3 text-2xl font-black">Types of Programs</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {content.types.map((type, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                      <TrendingUp size={18} className="text-[#2D3E75]" />
                      <span className="text-sm font-bold text-zinc-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Process */}
              <div>
                <h2 className="text-primary mb-8 flex items-center gap-3 text-2xl font-black">Application Process</h2>
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
                <h2 className="text-primary mb-8 flex items-center gap-3 text-2xl font-black">
                  Program Overview by Country
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {content.countries.map((country, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-zinc-100 bg-white p-8 shadow-sm transition-all hover:shadow-sm"
                    >
                      <h3 className="text-primary mb-4 text-xl font-black">{country.name}</h3>
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
                <h2 className="text-primary mb-8 flex items-center gap-3 text-2xl font-black">Who Should Apply</h2>
                <div className="flex flex-wrap gap-3">
                  {content.who.map((person, i) => (
                    <div key={i} className="rounded-full bg-zinc-100 px-6 py-3 text-sm font-bold text-zinc-700">
                      {person}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-10">
                <p className="text-primary text-2xl font-black italic">
                  Turn your job into permanent residency—secure your future with employer support.
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
                      <p className="text-primary text-xl font-black">{content.timeline}</p>
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
                  <h3 className="relative z-10 mb-2 text-2xl font-black">Secure Your PR</h3>
                  <p className="relative z-10 mb-8 text-sm text-zinc-400">
                    Get an expert assessment for your employer-sponsored permanent residency and secure your global
                    career.
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
