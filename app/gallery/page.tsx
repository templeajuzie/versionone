"use client"

import React from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
        <div className="mx-auto mt-12 max-w-5xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-4">
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=736&auto=format&fit=crop"
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                Show More
                <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&w=798&auto=format&fit=crop"
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                Show More
                <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=687&auto=format&fit=crop"
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                Show More
                <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&w=862&auto=format&fit=crop"
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                Show More
                <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&w=687&auto=format&fit=crop"
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                Show More
                <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&w=703&auto=format&fit=crop"
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                Show More
                <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=736&auto=format&fit=crop"
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                Show More
                <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&w=798&auto=format&fit=crop"
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                Show More
                <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
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