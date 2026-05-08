/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Globe2,
  Palmtree,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

const content = {
  title: "Tourist / Visit Visa (Worldwide)",
  description:
    "A short-term travel visa that allows individuals to visit any country globally for tourism, family visits, business meetings, or leisure purposes.",
  types: [
    "Tourist Visa",
    "Visitor Visa",
    "Short-Stay Visa",
    "Family Visit Visa",
    "Business Visit Visa",
    "Multiple-Entry Visit Visa",
    "E-Visa / Online Visa",
  ],
  process: [
    "Select destination country",
    "Complete visa application",
    "Submit required documents",
    "Attend biometrics/interview (if required)",
    "Visa processing",
    "Approval or decision",
  ],
  howToApply: [
    "Choose your destination and visa type",
    "Prepare documents (passport, travel itinerary, proof of funds, accommodation)",
    "Apply online or at embassy/visa center",
    "Attend biometrics or interview if required",
    "Wait for processing",
    "Receive visa and travel",
  ],
  timeline: "1 – 6 weeks (average worldwide)",
  benefits: [
    "Travel and explore globally",
    "Visit family and friends abroad",
    "Attend business meetings and events",
    "Flexible short-term stay options",
    "Single or multiple-entry availability",
  ],
  who: [
    "Tourists and travelers",
    "Individuals visiting family or friends",
    "Business visitors",
    "Short-term international travelers",
  ],
};

const GridPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-zinc-200"
    aria-hidden="true"
  >
    <defs>
      <pattern id="grid-pattern-tourist" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern-tourist)" />
  </svg>
);

export default function TouristVisaPage() {
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
              <Link href="/services/visas" className="hover:text-[#2D3E75]">
                Visas
              </Link>
              <ChevronRight size={10} />
              <span className="text-zinc-900">Tourist Visa</span>
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
                      <Camera size={18} className="text-[#2D3E75]" />
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
                  Travel the world with ease—your journey begins with a visit visa.
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
                    <Palmtree size={80} />
                  </div>
                  <h3 className="relative z-10 mb-2 text-2xl font-black">Explore the World</h3>
                  <p className="relative z-10 mb-8 text-sm text-zinc-400">
                    Get professional assistance with your tourist visa application for any destination.
                  </p>
                  <Link
                    href="/contact"
                    className="relative z-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 font-black text-[#2D3E75] transition-colors hover:bg-zinc-50"
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
