"use client";

import React from "react";

import Image from "next/image";

const destinations = [
  {
    id: "canada",
    name: "Canada",
    tag: "Express Entry",
    image: "https://i.pinimg.com/1200x/5d/e0/c2/5de0c2101aa515a64822a371aff16fe3.jpg",
  },
  {
    id: "uk",
    name: "United Kingdom",
    tag: "Skilled Worker",
    image: "https://i.pinimg.com/1200x/8b/66/3f/8b663fec9b665e460239e93f47e09006.jpg",
  },
  {
    id: "australia",
    name: "Australia",
    tag: "PR Pathways",
    image: "https://i.pinimg.com/736x/cf/85/97/cf8597ac0daad255fd5c635047351897.jpg",
  },
  {
    id: "germany",
    name: "Germany",
    tag: "Job Seeker",
    image: "https://i.pinimg.com/736x/9b/47/10/9b4710a9a31a3fa5c2007f0f663dc2b9.jpg",
  },
  {
    id: "usa",
    name: "USA",
    tag: "EB-5 / H1-B",
    image: "https://i.pinimg.com/736x/0c/25/df/0c25dfc2de5521c3b3522e6700739763.jpg",
  },
];

const InspirationSection = () => {
  return (
    <section className="">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-primary text-3xl font-black md:text-4xl">
          Top <span className="text-primary">Destinations</span> for Migration
        </h2>
        <p className="mt-2 max-w-2xl text-zinc-500">
          Discover the most popular countries for skilled workers, investors, and students. Your journey to a new life
          starts here.
        </p>
      </div>

      <div className="scrollbar-hide -mx-4 flex flex-nowrap gap-4 overflow-x-auto px-4 pb-8 md:mx-0 md:grid md:grid-cols-5 md:px-0">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="group relative aspect-[4/5] min-w-[240px] cursor-pointer overflow-hidden rounded-xl border border-zinc-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:min-w-0"
          >
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

            {/* Tag */}
            {/* <div className="absolute top-4 left-4 z-10 rounded-md bg-blue-600 px-3 py-1 text-[10px] font-black tracking-widest text-white uppercase shadow-lg">
              {dest.tag}
            </div> */}

            <div className="absolute bottom-6 left-6 z-10">
              <span className="text-2xl font-black text-white drop-shadow-lg">{dest.name}</span>
              <div className="mt-2 flex items-center gap-2 text-xs font-bold tracking-wider text-white/80 uppercase">
                View Pathways
                <svg
                  className="h-3 w-3 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InspirationSection;
