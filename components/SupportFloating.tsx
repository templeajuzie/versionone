"use client";

import React from "react";

import Image from "next/image";

const SupportFloating = () => {
  return (
    <div className="fixed right-8 bottom-8 z-50 flex flex-col gap-4">
      {/* Genie Chat Bot Icon */}
      <button className="group relative overflow-hidden rounded-full border border-gray-100 bg-white p-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:scale-110 active:scale-95">
        <div className="absolute inset-0 bg-blue-500 opacity-0 transition-opacity group-hover:opacity-10" />
        <div className="relative h-16 w-16">
          <Image src="/genie-bot.png" alt="Genie Bot" fill className="object-contain" />
        </div>
        <div className="absolute -top-1 -right-1 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase shadow-sm">
          Genie
        </div>
      </button>

      {/* Headset Support Icon */}
      <button className="group hover:text-primary rounded-full border border-gray-100 bg-white p-4 text-gray-700 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:scale-110 active:scale-95">
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    </div>
  );
};

export default SupportFloating;
