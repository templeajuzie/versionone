/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";



import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { immigrationMegaMenu } from "@/data/headerData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Globe, Shield, Users } from "lucide-react";
import Link from "next/link";













// ── Category descriptions ─────────────────────────────────────────────
const categoryMeta: Record<string, { description: string; accent: string }> = {
  "Skilled Immigration": {
    description: "Points-based systems, employer-sponsored programs, and global talent schemes for qualified professionals seeking international careers.",
    accent: "bg-blue-600",
  },
  "Work Permits": {
    description: "Comprehensive work authorization services — including open permits, seasonal work, digital nomad visas, and employer-specific programs.",
    accent: "bg-indigo-600",
  },
  "Permanent Residency": {
    description: "Secure your future with permanent residency through skilled work, family sponsorship, investment, or international Golden Visa routes.",
    accent: "bg-amber-600",
  },
  "Visit /E-Visa": {
    description: "Hassle-free tourist, transit, medical, and business visas for short-term international travel and family visits.",
    accent: "bg-emerald-600",
  },
  "Job Seeker Visa": {
    description: "Explore opportunities on the ground. Dedicated job search visas for Germany, Europe, and other top global destinations.",
    accent: "bg-rose-600",
  },
  "Business Immigration": {
    description: "Expert guidance for investor visas, startup permits, and citizenship-by-investment for entrepreneurs and business owners.",
    accent: "bg-zinc-900",
  },
};

// ── Flatten items (handle nested sub-sections) ───────────────────────
type FlatItem = { name: string; link: string; subtitle?: string };

function flattenItems(items: any[]): FlatItem[] {
  const result: FlatItem[] = [];
  for (const item of items) {
    if ("subtitle" in item && item.items) {
      for (const sub of item.items) {
        result.push({ ...sub, subtitle: item.subtitle });
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

// ── Group by subtitle ────────────────────────────────────────────────
function groupItems(flatItems: FlatItem[]) {
  const groups: { subtitle: string | null; items: FlatItem[] }[] = [];
  let current: { subtitle: string | null; items: FlatItem[] } | null = null;
  for (const item of flatItems) {
    const sub = item.subtitle ?? null;
    if (!current || current.subtitle !== sub) {
      current = { subtitle: sub, items: [] };
      groups.push(current);
    }
    current.items.push(item);
  }
  return groups;
}

const GridPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full stroke-zinc-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="0787a7c5-978c-4f86-83c0-20a23f84d319"
        width={200}
        height={200}
        x="50%"
        y={-1}
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f86-83c0-20a23f84d319)" />
  </svg>
);

export default function ServicesPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCat = immigrationMegaMenu[activeIdx];
  const meta = categoryMeta[activeCat.title];
  const flat = flattenItems(activeCat.items);
  const groups = groupItems(flat);

  return (
    <div className="min-h-screen">
      <Header />

     

      {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
      <section className="pb-32 mt-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
            {/* Sidebar Navigation */}
            <aside className="lg:w-72 lg:shrink-0">
              <div className="sticky top-32 flex flex-col gap-8">
                <div>
                  <p className="mb-4 text-[10px] font-black  text-zinc-400 uppercase">Services</p>
                  <nav className="flex flex-col gap-1">
                    {immigrationMegaMenu.map((cat, idx) => {
                      const isActive = idx === activeIdx;
                      return (
                        <button
                          key={cat.title}
                          onClick={() => setActiveIdx(idx)}
                          className={`group relative flex items-center justify-between rounded-lg px-5 py-4 transition-all duration-300 ${
                            isActive
                              ? "translate-x-2 bg-zinc-900 text-white shadow-xl"
                              : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                          }`}
                        >
                          <span className="text-sm font-black">{cat.title}</span>
                          <ChevronRight
                            size={16}
                            className={`transition-transform ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"}`}
                          />
                        </button>
                      );
                    })}
                  </nav>
                </div>

                <div className="group relative overflow-hidden rounded-lg bg-blue-600 p-8 text-white shadow-xl">
                  <div className="absolute top-0 right-0 p-4 opacity-10 transition-transform group-hover:scale-110">
                    <ArrowRight size={60} />
                  </div>
                  <h3 className="relative z-10 mb-2 text-xl font-black">Free Assessment</h3>
                  <p className="relative z-10 mb-6 text-xs leading-relaxed text-blue-100">
                    Find out which programs you qualify for in just 30 minutes.
                  </p>
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-xs font-black text-blue-600 shadow-lg transition-colors hover:bg-zinc-50"
                  >
                    Get Started <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Program Content */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                >
                  <div className="mb-12">
                    <div className={`h-1.5 w-12 rounded-full ${meta.accent} mb-6`} />
                    <h2 className="mb-4 text-4xl font-black text-zinc-900">{activeCat.title}</h2>
                    <p className="max-w-2xl text-lg leading-relaxed text-zinc-500">{meta.description}</p>
                  </div>

                  <div className="flex flex-col gap-12">
                    {groups.map((group, gIdx) => (
                      <div key={gIdx} className="flex flex-col gap-4">
                        {group.subtitle && (
                          <div className="flex items-center gap-4">
                            <span className="text-[11px] font-black  whitespace-nowrap text-zinc-300 uppercase">
                              {group.subtitle}
                            </span>
                            <div className="h-px w-full bg-zinc-100" />
                          </div>
                        )}
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                          {group.items.map((item, iIdx) => (
                            <motion.div
                              key={item.link}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: iIdx * 0.05 }}
                            >
                              <Link
                                href={item.link}
                                className="group flex items-center justify-between rounded-lg border border-zinc-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5"
                              >
                                <span className="text-sm font-bold text-zinc-700 transition-colors group-hover:text-zinc-900">
                                  {item.name}
                                </span>
                                <div className="rounded-lg bg-zinc-50 p-2 text-zinc-300 transition-all group-hover:bg-blue-50 group-hover:text-blue-600">
                                  <ArrowUpRight size={14} />
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES GRID ──────────────────────────────────────── */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black tracking-tight text-zinc-900 md:text-5xl">
              Global <span className="text-blue-600 italic">Opportunities</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-medium text-zinc-500">
              Explore all our service categories and find the pathway that suits your professional profile.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {immigrationMegaMenu.map((cat, idx) => {
              const m = categoryMeta[cat.title];
              const count = flattenItems(cat.items).length;
              return (
                <motion.button
                  key={cat.title}
                  onClick={() => {
                    setActiveIdx(idx);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group rounded-lg border border-zinc-100 bg-white p-8 text-left shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className={`h-2 w-12 rounded-full ${m.accent}`} />
                    <span className="text-[10px] font-black tracking-widest text-zinc-300 uppercase">
                      {count} Programs
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-black text-zinc-900 transition-colors group-hover:text-blue-600">
                    {cat.title}
                  </h3>
                  <p className="mb-8 text-sm leading-relaxed text-zinc-500">{m.description}</p>
                  <div className="flex items-center gap-2 text-xs font-black text-zinc-300 transition-colors group-hover:text-blue-600">
                    Explore Pathway <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const ChevronRight = ({ className, size }: { className?: string; size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);
