"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=736&auto=format&fit=crop",
    title: "Alpine Escape",
    location: "Switzerland",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&w=798&auto=format&fit=crop",
    title: "Crystal Waters",
    location: "Maldives",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=687&auto=format&fit=crop",
    title: "Urban Skyline",
    location: "Tokyo",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&w=862&auto=format&fit=crop",
    title: "Desert Sunset",
    location: "Dubai",
  },
];

const GallerySnippet = () => {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Traveler <span className="text-blue-600">Moments</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Every journey tells a story. Explore our collection of breathtaking moments captured by travelers across the globe.
          </p>
        </div>
        <Link 
          href="/gallery" 
          className="px-6 py-3 border-2 border-slate-900 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all active:scale-95"
        >
          View Full Gallery
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryImages.map((item) => (
          <div 
            key={item.id} 
            className="group relative h-96 rounded-3xl overflow-hidden shadow-lg"
          >
            <Image
              src={item.url}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">
                {item.location}
              </p>
              <h3 className="text-white text-xl font-bold">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySnippet;
