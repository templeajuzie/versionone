/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, CheckCircle2, ChevronRight, Clock, FileText, ShieldCheck } from "lucide-react";
import Link from "next/link";

const content = {
  title: "Business / Entrepreneur Permanent Residency",
  description:
    "A strategic pathway for business owners and entrepreneurs to obtain permanent residency by establishing, investing in, or managing a business abroad. Offered in countries like Canada, Australia, United Kingdom, New Zealand, and Portugal, this route combines business growth with long-term settlement.",
  types: [
    "Entrepreneur Visa → Permanent Residency",
    "Business Innovation & Investment PR",
    "Startup / Founder PR Pathway",
    "Self-Employed Business Residency",
    "Regional Business Migration Programs",
  ],
  process: [
    "Choose country and business pathway",
    "Meet eligibility (experience, funds, business plan)",
    "Submit Expression of Interest / application",
    "Business proposal evaluation",
    "Approval / invitation",
    "Establish or invest in business",
    "Apply for permanent residency",
    "PR approval",
  ],
  howToApply: [
    "Select preferred country and business program",
    "Prepare business plan and financial documents",
    "Show proof of funds and business experience",
    "Submit application or EOI",
    "Get approval or nomination",
    "Set up or invest in business",
    "Meet program conditions",
    "Apply for and obtain PR",
  ],
  timeline: "6 – 24 months (average)",
  benefits: [
    "Permanent residency through business ownership",
    "Access to international markets",
    "Opportunity to expand or start a business",
    "Family inclusion (spouse & children)",
    "High earning and investment potential",
    "Pathway to citizenship",
    "Long-term financial and lifestyle stability",
  ],
  countries: [
    {
      name: "Canada",
      points: [
        "Start-Up Visa Program",
        "Provincial entrepreneur streams",
        "Direct PR or pathway through business",
      ],
    },
    {
      name: "Australia",
      points: [
        "Business Innovation & Investment Program",
        "Temporary → PR pathway",
        "Strong support for entrepreneurs",
      ],
    },
    {
      name: "United Kingdom",
      points: [
        "Innovator Founder Visa",
        "Focus on scalable businesses",
        "Leads to settlement",
      ],
    },
    {
      name: "New Zealand",
      points: [
        "Entrepreneur Work Visa → Residence",
        "Requires business setup and operation",
        "Strong PR pathway",
      ],
    },
    {
        name: "Portugal",
        points: [
            "Business investment options under residency programs",
            "Access to EU market",
            "Pathway to citizenship"
        ]
    }
  ],
  who: [
    "Business owners and entrepreneurs",
    "Investors seeking active business involvement",
    "Individuals with innovative business ideas",
    "Applicants aiming for PR through entrepreneurship",
  ],
};

const GridPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-zinc-200"
    aria-hidden="true"
  >
    <defs>
      <pattern id="grid-pattern-business-pr" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern-business-pr)" />
  </svg>
);

export default function BusinessEntrepreneurPermanentResidencyPage() {
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
              <Link href="/services/pr" className="hover:text-blue-600">
                Permanent Residency
              </Link>
              <ChevronRight size={10} />
              <span className="text-zinc-900 text-xs">Business / Entrepreneur PR</span>
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

              <div>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-zinc-900">
                  <span className="h-1 w-8 rounded-full bg-zinc-900" />
                  Application Process
                </h2>
                <div className="relative space-y-8 pl-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:bg-zinc-100">
                  {content.process.map((step, i) => (
                    <div key={i} className="relative">
                      <div className="absolute top-1 -left-[31px] z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-zinc-900 bg-white text-[10px] font-black text-zinc-900">
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
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
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
                  Turn your business vision into global success—build, invest, and settle abroad
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
                    <Briefcase size={80} />
                  </div>
                  <h3 className="relative z-10 mb-2 text-2xl font-black">Global Expansion</h3>
                  <p className="relative z-10 mb-8 text-sm text-zinc-400">
                    Expert assistance for business and entrepreneur permanent residency.
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
