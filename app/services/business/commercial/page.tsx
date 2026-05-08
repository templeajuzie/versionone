/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Clock, Coins, FileText, ShieldCheck } from "lucide-react";
import Link from "next/link";

const content = {
  title: "Commercial Investment Programs (Worldwide)",
  description:
    "A strategic pathway that allows individuals to gain residency by making active commercial investments—such as establishing, acquiring, or investing in businesses that contribute to the economy and create jobs.",
  types: [
    "Commercial Investment Visa",
    "Business Investment Programs",
    "Enterprise Investment Schemes",
    "Job Creation Investment Programs",
    "Corporate Investment Residency",
  ],
  howToApply: [
    "Choose destination country and investment route",
    "Prepare business or investment plan",
    "Show proof of funds and source of wealth",
    "Make qualifying commercial investment",
    "Submit visa/residency application",
    "Attend interview or business assessment (if required)",
    "Receive visa/residency approval",
  ],
  timeline: "4 – 16 weeks (average worldwide)",
  benefits: [
    "Residency through active business investment",
    "Opportunity to generate income and profits",
    "Access to global markets",
    "Family inclusion (spouse & children)",
    "High return on investment potential",
    "Pathway to permanent residency and citizenship",
  ],
  countries: [
    "United States", "Canada", "Australia", "United Kingdom", "Portugal", 
    "Netherlands", "Ireland", "United Arab Emirates"
  ],
  who: [
    "Investors seeking active business involvement",
    "Entrepreneurs expanding internationally",
    "High-net-worth individuals",
    "Applicants targeting residency through commercial ventures",
  ],
};

const GridPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-zinc-200"
    aria-hidden="true"
  >
    <defs>
      <pattern id="grid-pattern-commercial-investment" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern-commercial-investment)" />
  </svg>
);

export default function CommercialInvestmentProgramsPage() {
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
              <Link href="/services/business" className="hover:text-blue-600">
                Business
              </Link>
              <ChevronRight size={10} />
              <span className="text-zinc-900 text-xs">Commercial Investment</span>
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

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="flex-1 space-y-20">
              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-zinc-900" />
                  Types of Programs
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {content.types.map((type, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                      <FileText size={18} className="text-zinc-600" />
                      <span className="text-sm font-bold text-zinc-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-zinc-900 p-10 text-white">
                <h2 className="mb-8 text-2xl font-black">How to Apply</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {content.howToApply.map((item, i) => (
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
                  <span className="h-1 w-8 rounded-full bg-zinc-900" />
                  Countries Offering Commercial Investment
                </h2>
                <div className="flex flex-wrap gap-3">
                  {content.countries.map((country, i) => (
                    <div key={i} className="rounded-full border border-zinc-100 bg-white px-6 py-3 text-sm font-bold text-zinc-700 shadow-sm">
                      {country}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-zinc-900" />
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
                  Invest smart, grow globally, and secure your future through commercial opportunities.
                </p>
              </div>
            </div>

            <aside className="lg:w-96 lg:shrink-0">
              <div className="sticky top-32 space-y-8">
                <div className="rounded-lg border border-zinc-100 bg-white p-8 shadow-sm">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-2xl bg-zinc-50 p-3 text-zinc-900">
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
                        <ShieldCheck size={16} className="shrink-0 text-zinc-900" />
                        <span className="text-sm font-bold text-zinc-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg bg-zinc-900 p-8 text-white shadow-sm">
                  <div className="absolute top-0 right-0 p-6 opacity-10 transition-transform group-hover:scale-110">
                    <Coins size={80} />
                  </div>
                  <h3 className="relative z-10 mb-2 text-2xl font-black">Active Investment</h3>
                  <p className="relative z-10 mb-8 text-sm text-zinc-400">
                    Expert assistance for commercial investment programs worldwide.
                  </p>
                  <Link
                    href="/contact"
                    className="relative z-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 font-black text-zinc-900 transition-colors hover:bg-zinc-50"
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
