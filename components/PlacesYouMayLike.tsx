"use client";

import React from "react";
import Image from "next/image";

const places = [
  {
    id: 1,
    name: "Badaling Great Wall",
    location: "Beijing",
    rating: "4.7/5",
    reviews: "58,346 reviews",
    image:
      "https://i.pinimg.com/736x/d2/8d/ab/d28dab6a28d4011d4f22da89e1a5a84e.jpg",
    hotTag: "10",
  },
  {
    id: 2,
    name: "The British Museum",
    location: "London",
    rating: "4.8/5",
    reviews: "3,383 reviews",
    image:
      "https://i.pinimg.com/736x/c5/1b/f0/c51bf05b5ae3d50053395e236ebd7414.jpg",
    hotTag: "10",
  },
  {
    id: 3,
    name: "Sagrada Familia",
    location: "Barcelona",
    rating: "4.7/5",
    reviews: "4,529 reviews",
    image:
      "https://i.pinimg.com/1200x/be/45/e3/be45e368aa6d389f7ae6d6c467e268fd.jpg",
    hotTag: "10",
  },
  {
    id: 4,
    name: "Shanghai Disney Resort",
    location: "Shanghai",
    rating: "4.7/5",
    reviews: "296,361 reviews",
    image:
      "https://i.pinimg.com/1200x/9b/5c/d9/9b5cd9b6019ef4555a699637d7a4eca2.jpg",
    hotTag: "10",
  },
];

const PlacesYouMayLike = () => {
  return (
    <section className="">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Places you may like
        </h2>
        <button className="flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">
          More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {places.map((place) => (
          <div key={place.id} className="relative group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={place.image}
                alt={place.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Trip Best Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-yellow-100">
                 <span className="text-[10px] font-bold text-[#8A5A11] uppercase tracking-tighter italic">Trip.Best</span>
                 <svg className="w-2.5 h-2.5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>

              {/* Heart Wishlist */}
              <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full transition-colors group/heart">
                <svg className="w-5 h-5 text-white group-hover/heart:fill-red-500 group-hover/heart:text-red-500 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </button>

              <div className="absolute bottom-4 left-4 right-4">
                {/* Location + Hot Tag */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded border border-white/30">
                    {place.location}
                  </span>
                  <div className="flex items-center gap-1 bg-red-500/80 backdrop-blur-md px-1.5 py-0.5 rounded shadow-lg">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-1.091-1.247-1.541-.267-.45-.37-.82-.442-1.22-.072-.4-.055-.843.134-1.236z" clipRule="evenodd" /></svg>
                    <span className="text-white text-[10px] font-bold">{place.hotTag}</span>
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg leading-tight mb-2 drop-shadow-md">
                  {place.name}
                </h3>

                <div className="flex items-center gap-2 text-white/90 text-xs">
                  <span className="font-bold">{place.rating}</span>
                  <span className="opacity-60">·</span>
                  <span>{place.reviews}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlacesYouMayLike;
