"use client";

import React from "react";
import Image from "next/image";

const SupportFloating = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* Genie Chat Bot Icon */}
      <button className="relative group bg-white p-1 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 transition-all hover:scale-110 active:scale-95 overflow-hidden">
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity" />
        <div className="w-16 h-16 relative">
          <Image 
            src="/genie-bot.png" 
            alt="Genie Bot" 
            fill 
            className="object-contain"
          />
        </div>
        <div className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm uppercase tracking-wider">
          Genie
        </div>
      </button>

      {/* Headset Support Icon */}
      <button className="bg-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 transition-all hover:scale-110 active:scale-95 text-gray-700 hover:text-blue-600 group">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    </div>
  );
};

export default SupportFloating;
