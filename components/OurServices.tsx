"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import { immigrationMegaMenu } from "@/data/headerData";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceImages: Record<string, string> = {
  "Skilled Immigration": "/images/services1.jpg",
  "Work Permits": "/images/services2.jpg",
  "Permanent Residency": "/images/services3.jpg",
  "Visit /E-Visa": "/images/services4.jpg",
  "Job Seeker Visa": "/images/services5.jpg",
  "Business Immigration": "/images/services6.jpg",
};

const serviceLinks: Record<string, string> = {
  "Skilled Immigration": "/services/skilled-immigration",
  "Work Permits": "/services/work-permits",
  "Permanent Residency": "/services/pr",
  "Visit /E-Visa": "/services/visas",
  "Job Seeker Visa": "/services/job-seeker",
  "Business Immigration": "/services/business",
};

const OurServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const current = containerRef.current;
    if (current) {
      current.addEventListener("scroll", checkScroll);
      checkScroll();
    }
    return () => current?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = useCallback((direction: "left" | "right") => {
    if (containerRef.current) {
      const { clientWidth, scrollLeft, scrollWidth } = containerRef.current;

      if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 10) {
        // Loop back to start
        containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const scrollAmount = direction === "left" ? -clientWidth / 1.2 : clientWidth / 1.2;
        containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // Loop back to start
          containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroll("right");
        }
      }
    }, 4000); // Auto scroll every 4 seconds
    return () => clearInterval(interval);
  }, [scroll]);

  return (
    <section className="">
      <div className="mb-8 flex items-end justify-between px-4 md:px-0">
        <div>
          <span className="mb-2 block text-sm font-bold tracking-widest text-blue-600 uppercase">Expert Guidance</span>
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">Our Immigration Services</h2>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 transition-all ${
              canScrollLeft
                ? "bg-white text-gray-900 shadow-md hover:bg-gray-50 active:scale-90"
                : "cursor-not-allowed bg-gray-50 text-gray-300 opacity-50"
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 transition-all ${
              canScrollRight
                ? "bg-white text-gray-900 shadow-md hover:bg-gray-50 active:scale-90"
                : "cursor-not-allowed bg-gray-50 text-gray-300 opacity-50"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth px-4 pb-8 md:px-0"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {immigrationMegaMenu.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="scroll-snap-align-start relative min-w-[280px] flex-none transition-all duration-500 sm:min-w-[320px] md:min-w-[350px] lg:w-[calc(25%-18px)]"
          >
            <Link href={serviceLinks[category.title] || "#"}>
              <div className="group relative transform cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:shadow-2xl">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={
                      serviceImages[category.title] ||
                      "https://images.unsplash.com/photo-1436491865332-7a61a109db05?q=80&w=2070&auto=format&fit=crop"
                    }
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Visual Glass Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-5 left-5 flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 shadow-lg backdrop-blur-md">
                      <span className="text-[10px] font-black tracking-tight text-blue-600 uppercase">
                        Fly High Abroad
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(3)].map((_, i) => (
                          <svg key={i} className="h-2 w-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute right-6 bottom-6 left-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-md">
                        {category.items.length} Programs Available
                      </span>
                      <span className="rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold text-white shadow-lg">
                        Global
                      </span>
                    </div>

                    <h3 className="mb-2 text-2xl leading-tight font-black text-white drop-shadow-sm">
                      {category.title}
                    </h3>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-xs font-bold text-yellow-400">
                        <span>★</span>
                        <span>Premium Service</span>
                      </div>
                    </div>

                    {/* Hover visible button */}
                    <div className="mt-4 overflow-hidden opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <div className="w-full rounded-lg bg-white py-3 text-center text-sm font-bold text-gray-900 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        Learn More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scroll-snap-align-start {
          scroll-snap-align: start;
        }
      `}</style>
    </section>
  );
};

export default OurServices;
