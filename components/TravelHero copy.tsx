"use client";

import React, { useState } from "react";

import Image from "next/image";

const tabs = [
  {
    id: "hotels",
    label: "Hotels & Homes",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    id: "flights",
    label: "Flights",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    id: "trains",
    label: "Trains",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
        />
      </svg>
    ),
  },
  {
    id: "cars",
    label: "Cars",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    id: "tours",
    label: "Attractions & Tours",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    id: "flight-hotel",
    label: "Flight + Hotel",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
];

const TravelHero = () => {
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("round-trip");

  return (
    <section className="relative flex min-h-[400px] w-full flex-col items-center justify-start px-4 md:min-h-[600px] md:px-0">
      {/* Background with Overlay */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Travel Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
      </div>

      {/* Content Overlay */}
      <section className="relative z-10 mt-14 mr-auto ml-auto w-full max-w-6xl justify-center pt-14 pb-12 text-center sm:pt-20 md:pt-28">
        {/* Social proof */}
        <div className="mx-auto mt-10 mb-6 flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
          {/* Avatar stack */}
          <div className="flex -space-x-3">
            {[
              "https://i.pinimg.com/736x/8f/e2/79/8fe279b786f81b6fb18f27c59efd43c2.jpg",
              "https://i.pinimg.com/736x/83/1a/d3/831ad35f453c799b257ef08941d2814d.jpg",
              "https://i.pinimg.com/736x/ec/6a/80/ec6a80f3565d3936d355036109f5fece.jpg",
              "https://i.pinimg.com/736x/73/61/d2/7361d2e649742a9693acb3b25fb1770d.jpg",
              "https://i.pinimg.com/736x/3e/f0/ce/3ef0ce379294c7a841107328f2134af0.jpg",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Client ${i + 1}`}
                className="h-9 w-9 rounded-full object-cover ring-2 ring-black/60"
              />
            ))}
          </div>

          {/* Text + stars */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-yellow-400"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>

            <p className="mt-1 text-center text-[10px] leading-none font-bold tracking-widest text-white uppercase lg:text-left">
              Trusted by 10k+ Travelers
            </p>
          </div>
        </div>

        <h1 className="font-geist mr-auto ml-auto max-w-4xl px-4 text-3xl leading-[1.1] font-bold tracking-tighter text-white sm:text-6xl md:text-7xl md:leading-[0.9]">
          Experience a new ,
          <br />
          <span
            className="text-blue-400 italic underline-offset-8 transition-all hover:text-blue-300"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Version
          </span>{" "}
          Of Travel
        </h1>
        <p className="font-geist mt-8 mr-auto ml-auto max-w-2xl text-lg leading-relaxed text-white/80">
          We curate the perfect journey for your next adventure.
        </p>
      </section>
    </section>
  );
};

export default TravelHero;
