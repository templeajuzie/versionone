"use client";

import React, { useCallback, useEffect, useState } from "react";

import Image from "next/image";

const heroSlides = [
  {
    src: "/images/img1.png",
    alt: "Scenic travel destination with boats on water",
  },
  {
    src: "/images/img2.png",
    alt: "Beautiful tropical beach with palm trees",
  },
  {
    src: "/images/img3.png",
    alt: "Mountain landscape with reflective lake",
  },
  {
    src: "/images/img4.png",
    alt: "Road trip through scenic countryside",
  },
  {
    src: "/images/img5.png",
    alt: "Historic European cityscape at golden hour",
  },
  {
    src: "/images/img6.png",
    alt: "Historic European cityscape at golden hour",
  },
  {
    src: "/images/img7.png",
    alt: "Historic European cityscape at golden hour",
  },
];

const SLIDE_INTERVAL = 6000;

const TravelHero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative mx-auto mt-28 flex min-h-[300px] w-full max-w-7xl flex-col items-center justify-start px-4 md:min-h-[500px] md:px-0">
      {/* Background Slider */}
      <div className="absolute inset-0 -z-20 overflow-hidden rounded-lg shadow-xl">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: index === activeSlide ? 1 : 0 }}
          >
            <Image src={slide.src} alt={slide.alt} fill className="object-cover" priority={index === 0} sizes="100vw" />
          </div>
        ))}
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/60 mix-blend-multiply" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === activeSlide ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <section className="absolute bottom-4 z-10 mt-14 mr-auto ml-2 w-full max-w-6xl justify-start pt-14 pb-12 text-start lg:bottom-32 lg:ml-auto">
        <div className="mx-auto mt-10 mb-6 flex w-full justify-start gap-4 lg:flex-row">
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

          <div className="hidden flex-col items-center md:flex lg:items-start">
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

        <h1 className="font-geist mr-auto max-w-4xl text-3xl leading-[1.1] font-bold tracking-tighter text-white md:text-5xl md:leading-[0.9]">
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
        <p className="font-geist mt-3 max-w-2xl text-sm text-white/80">
          We curate the perfect journey for your next adventure.
        </p>
      </section>
    </section>
  );
};

export default TravelHero;
