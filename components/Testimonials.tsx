/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useCallback, useSyncExternalStore } from "react";



import Image from "next/image";

















































const testimonials = [
  {
    id: 1,
    text: "Global Workgate made my Canadian PR process seamless. Their experts are truly knowledgeable and supportive throughout.",
    name: "James Chile",
    role: "Software Engineer",
    img: "https://i.pinimg.com/736x/09/98/76/099876060f60757d49a1eb7f5571d091.jpg",
  },
  {
    id: 2,
    text: "The best immigration consultants I've worked with. They helped me secure my UK Skilled Worker visa in record time!",
    name: "Emily Rodriguez",
    role: "Project Manager",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
  },
  {
    id: 3,
    text: "Professional, transparent, and efficient. I highly recommend Fly High for anyone looking to migrate to Australia.",
    name: "Jacky Harrison",
    role: "Operations Lead",
    img: "https://i.pinimg.com/736x/83/1a/d3/831ad35f453c799b257ef08941d2814d.jpg",
  },
  {
    id: 4,
    text: "They handled my family's Portuguese Golden Visa with absolute care. We are now enjoying our new life in Lisbon.",
    name: "Omolade Ayomide",
    role: "Entrepreneur",
    img: "https://i.pinimg.com/736x/e9/2a/e8/e92ae8120eff7445dfd1cdc984ea6281.jpg",
  },
  {
    id: 5,
    text: "Exceptional service! Their job seeker visa assistance for Germany was top-notch. I found a job within 3 months.",
    name: "Michael Chen",
    role: "Data Analyst",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200",
  },
  {
    id: 6,
    text: "A truly global agency. Their knowledge of Middle Eastern work permits is unmatched. Highly professional team.",
    name: "Maya Peters",
    role: "Consultant",
    img: "https://i.pinimg.com/736x/04/24/a1/0424a1f06d569a96735d06c3c5f8723e.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="overflow-hidden bg-black py-10">
      <div className="container mx-auto mb-16 px-4 text-center">
        <h2 className="mb-6 text-4xl font-black tracking-tight text-white md:text-5xl">
          Trusted by <span className="text-blue-500">10,000+</span> Global Citizens
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-zinc-400">
          Join thousands of successful migrants who&#39;ve transformed their lives with Global Workgate. Real stories
          from real people.
        </p>
      </div>

      <div className="relative flex flex-col gap-8">
        {/* Row 1: Right to Left */}
        <div className="group flex overflow-hidden">
          <div className="animate-marquee-left group-hover:pause flex gap-6">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`${t.id}-1-${i}`} {...t} />
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="group flex overflow-hidden">
          <div className="animate-marquee-right group-hover:pause flex gap-6">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`${t.id}-2-${i}`} {...t} />
            ))}
          </div>
        </div>

        {/* Side Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black to-transparent" />
      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const TestimonialCard = ({ text, name, role, img }: any) => (
  <div className="w-[300px] shrink-0 rounded-lg border border-zinc-800/60 bg-zinc-900/70 p-5 backdrop-blur-md transition-all duration-300 hover:bg-zinc-900 md:w-[320px]">
    <div className="mb-3 flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-sm text-yellow-500">
          ★
        </span>
      ))}
    </div>

    <p className="mb-5 text-sm leading-6 text-zinc-300">"{text}"</p>

    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 shrink-0">
        <Image
          src={img}
          alt={name}
          fill
          className="rounded-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
        />
      </div>

      <div>
        <h4 className="text-sm leading-none font-semibold text-white">{name}</h4>

        <p className="mt-1 text-xs text-zinc-500">{role}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;

const useMediaQuery = (query: string) => {
  const subscribe = useCallback(
    (callback: () => void) => {
      if (typeof window === "undefined") return () => {};
      const matchMedia = window.matchMedia(query);
      matchMedia.addEventListener("change", callback);
      return () => matchMedia.removeEventListener("change", callback);
    },
    [query]
  );

  const getSnapshot = () => {
    return typeof window !== "undefined" ? window.matchMedia(query).matches : false;
  };

  return useSyncExternalStore(subscribe, getSnapshot);
};
