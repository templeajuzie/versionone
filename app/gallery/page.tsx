"use client"

import React from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=736&auto=format&fit=crop",
    title: "Alpine Escape",
    location: "Switzerland",
  },
  {
    id: 2,
    url: "https://i.pinimg.com/736x/49/03/93/490393d9d4b8bc0ec0500950abdc0504.jpg",
    title: "Crystal Waters",
    location: "Maldives",
  },
  {
    id: 3,
    url: "https://i.pinimg.com/736x/48/43/26/4843262c53337717fa18d09f76e3bf46.jpg",
    title: "Urban Skyline",
    location: "Tokyo",
  },
  {
    id: 4,
    url: "https://i.pinimg.com/736x/da/9c/b5/da9cb525fb45848cfb22e2aa6dc1363d.jpg",
    title: "Desert Sunset",
    location: "Dubai",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&w=798&auto=format&fit=crop",
    title: "Coastal Breeze",
    location: "Santorini",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=687&auto=format&fit=crop",
    title: "Mountain Trails",
    location: "Patagonia",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&w=862&auto=format&fit=crop",
    title: "Hidden Valley",
    location: "Iceland",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&w=687&auto=format&fit=crop",
    title: "Tropical Retreat",
    location: "Bali",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&w=703&auto=format&fit=crop",
    title: "City of Lights",
    location: "Paris",
  },
];

const Gallery = () => {

  const content = {
    title: "Our Gallery",
    description: "Explore our gallery and see our amazing collection of photos",
  };
  return (
    <div className="">
      <Header />
      <div className="">
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

                <Link href="/services/job-seeker" className="transition hover:text-white">
                  Job Seeker
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
        <div className="mx-auto mt-12 max-w-7xl px-6 pb-20 md:px-10">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4 [&>div]:mb-6">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="group relative break-inside-avoid overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute right-0 bottom-0 left-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="mb-1 text-xs font-bold tracking-widest text-blue-400 uppercase">{item.location}</p>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;

const GridPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-zinc-200"
    aria-hidden="true"
  >
    <defs>
      <pattern id="grid-pattern-job-seeker" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern-job-seeker)" />
  </svg>
);