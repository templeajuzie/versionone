"use client";

import React from "react";

import Image from "next/image";

const destinations = [
  {
    id: "anywhere",
    name: "Anywhere",
    tag: null,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600",
    special: true,
  },
  {
    id: "amsterdam",
    name: "Amsterdam",
    tag: "Short haul",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600",
  },
  {
    id: "germany",
    name: "Germany",
    tag: "Medium haul",
    image: "https://i.pinimg.com/736x/ae/12/f9/ae12f9dc43e37b7a1b6f7cccc678874c.jpg",
  },
  {
    id: "london",
    name: "London",
    tag: "Long haul",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600",
  },
  {
    id: "canada",
    name: "Canada",
    tag: "Short haul",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600",
  },
];

const InspirationSection = () => {
  return (
    <section className="mt-16 mb-16">
      <div className="scrollbar-hide -mx-4 flex flex-nowrap gap-4 overflow-x-auto px-4 pb-8 md:mx-0 md:grid md:grid-cols-5 md:px-0">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className={`group relative aspect-[4/3] min-w-[240px] cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl md:min-w-0 ${
              dest.special
                ? "border-blue-500 bg-blue-600 shadow-lg shadow-blue-500/20"
                : "border-gray-100 bg-white shadow-sm"
            }`}
          >
            {dest.image && (
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className={`object-cover transition-transform duration-500 group-hover:scale-110 ${dest.special ? "opacity-40 mix-blend-overlay" : ""}`}
              />
            )}

            {/* Tag */}
            {dest.tag && (
              <div className="absolute top-2 left-2 z-10 cursor-default rounded bg-white/90 px-2 py-0.5 text-[10px] font-bold tracking-wider text-gray-500 uppercase backdrop-blur-sm">
                {dest.tag}
              </div>
            )}

            {/* Earth Icon for Anywhere */}
            {dest.special && (
              <div className="absolute inset-0 flex items-center justify-center opacity-80">
                <svg className="h-20 w-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
            )}

            <div className="absolute bottom-4 left-4 z-10 w-full pr-8">
              <span className={`text-lg font-bold ${dest.special ? "text-white" : "text-white drop-shadow-md"}`}>
                {dest.name}
              </span>
              {dest.special && (
                <div className="absolute bottom-[-10px] left-8 h-0 w-0 border-t-[10px] border-r-[10px] border-l-[10px] border-t-white border-r-transparent border-l-transparent" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InspirationSection;
