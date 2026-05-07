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
      <div className="mb-10 flex flex-col items-end justify-between gap-6 md:flex-row">
        <div className="max-w-xl">
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
            Traveler <span className="text-blue-600">Moments</span>
          </h2>
          <p className="leading-relaxed text-gray-500">
            Every journey tells a story. Explore our collection of breathtaking moments captured by travelers across the
            globe.
          </p>
        </div>
        <Link
          href="/gallery"
          className="rounded-lg border-2 border-slate-900 px-6 py-3 font-bold transition-all hover:bg-slate-900 hover:text-white active:scale-95"
        >
          View Full Gallery
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((item) => (
          <div key={item.id} className="group relative h-96 overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={item.url}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="absolute right-0 bottom-0 left-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="mb-1 text-xs font-bold tracking-widest text-blue-400 uppercase">{item.location}</p>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySnippet;
