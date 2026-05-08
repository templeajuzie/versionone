/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { immigrationMegaMenu } from "@/data/headerData";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Globe, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const activeCat = immigrationMegaMenu.find((c) => c.title === "Work Permits")!;

const categoryMeta = {
  description:
    "Comprehensive work authorization services — including open permits, seasonal work, digital nomad visas, and employer-specific programs.",
  accent: "bg-indigo-600",
};

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
    className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-zinc-200"
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

export default function WorkPermitsPage() {
  const flat = flattenItems(activeCat.items);
  const groups = groupItems(flat);

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

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-12">
              {groups.map((group, gIdx) => (
                <div key={gIdx} className="flex flex-col gap-4">
                  {group.subtitle && (
                    <div className="flex items-center gap-4">
                      <span className="text-[11px] font-black tracking-[0.2em] whitespace-nowrap text-zinc-300 uppercase">
                        {group.subtitle}
                      </span>
                      <div className="h-px w-full bg-zinc-100" />
                    </div>
                  )}
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item, iIdx) => (
                      <motion.div
                        key={item.link}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: iIdx * 0.05 }}
                      >
                        <Link
                          href={item.link}
                          className="group flex items-center justify-between rounded-2xl border border-zinc-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5"
                        >
                          <span className="text-sm font-bold text-zinc-700 transition-colors group-hover:text-zinc-900">
                            {item.name}
                          </span>
                          <div className="rounded-lg bg-zinc-50 p-2 text-zinc-300 transition-all group-hover:bg-indigo-50 group-hover:text-indigo-600">
                            <ArrowUpRight size={14} />
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
