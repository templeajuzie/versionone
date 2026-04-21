"use client";

import React from "react";
import Image from "next/image";

const destinations = [
  {
    id: "anywhere",
    name: "Anywhere",
    tag: null,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600",
    special: true,
  },
  {
    id: "owerri",
    name: "Owerri",
    tag: "Short haul",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600",
  },
  {
    id: "nairobi",
    name: "Nairobi",
    tag: "Medium haul",
    image:
      "https://i.pinimg.com/736x/ae/12/f9/ae12f9dc43e37b7a1b6f7cccc678874c.jpg",
  },
  {
    id: "london",
    name: "London",
    tag: "Long haul",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600",
  },
  {
    id: "warri",
    name: "Warri",
    tag: "Short haul",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600",
  },
];

const InspirationSection = () => {
  return (
    <section className="mb-16 mt-16">
     
      <div className="flex flex-nowrap md:grid md:grid-cols-5 gap-4 overflow-x-auto pb-8 px-4 md:px-0 scrollbar-hide -mx-4 md:mx-0">
        {destinations.map((dest) => (
          <div 
            key={dest.id}
            className={`min-w-[240px] md:min-w-0 relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer border transition-all duration-300 hover:shadow-xl ${
              dest.special ? "bg-blue-600 border-blue-500 shadow-lg shadow-blue-500/20" : "bg-white border-gray-100 shadow-sm"
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
              <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-gray-500 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded cursor-default z-10">
                {dest.tag}
              </div>
            )}

            {/* Earth Icon for Anywhere */}
            {dest.special && (
              <div className="absolute inset-0 flex items-center justify-center opacity-80">
                 <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
            )}

            <div className="absolute bottom-4 left-4 z-10 w-full pr-8">
              <span className={`text-lg font-bold ${dest.special ? "text-white" : "text-white drop-shadow-md"}`}>
                {dest.name}
              </span>
              {dest.special && (
                 <div className="absolute bottom-[-10px] left-8 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-white border-r-[10px] border-r-transparent" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InspirationSection;
