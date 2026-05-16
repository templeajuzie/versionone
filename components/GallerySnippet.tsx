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
];

const GallerySnippet = () => {
  return (
    <section className="">
      <div className="mb-10 flex flex-col items-end justify-between gap-6 md:flex-row">
        <div className="max-w-xl">
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
            Traveler <span className="text-primary">Moments</span>
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
          <div key={item.id} className="group relative h-96 overflow-hidden rounded-lg shadow-lg">
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
