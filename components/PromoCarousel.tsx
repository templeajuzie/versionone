"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";

const promoCards = [
  {
    id: 1,
    title: "Go China",
    subtitle: "MUST-VISIT CITIES",
    image: "/promo-china.png",
    buttonText: "Book Now",
    color: "from-green-600/80 to-green-900/90",
  },
  {
    id: 2,
    title: "Rewards",
    subtitle: "VersionOne EXCLUSIVE",
    image: "/promo-rewards.png",
    buttonText: "Join Now",
    color: "from-blue-600/80 to-blue-900/90",
  },
  {
    id: 3,
    title: "Music Awards",
    subtitle: "VOTE NOW",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800",
    buttonText: "Submit Now",
    color: "from-purple-600/80 to-purple-900/90",
  },
  {
    id: 4,
    title: "Spring Gems",
    subtitle: "HOTEL DISCOUNTS",
    image: "/travel-hero-bg.png",
    buttonText: "Save $20",
    color: "from-orange-500/80 to-orange-800/90",
  },
];

const PromoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  // Constants
  const minSwipeDistance = 50;
  const autoPlayDelay = 5000;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % promoCards.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + promoCards.length) % promoCards.length);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, autoPlayDelay);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <section
      className="relative mb-12 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Promotions</h2>
          <p className="mt-1 text-sm text-gray-500">Handpicked deals just for you</p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="rounded-full border border-gray-100 bg-white p-3 shadow-sm transition-all hover:bg-gray-50 hover:shadow active:scale-90"
            aria-label="Previous slide"
          >
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="rounded-full border border-gray-100 bg-white p-3 shadow-sm transition-all hover:bg-gray-50 hover:shadow active:scale-90"
            aria-label="Next slide"
          >
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="group relative overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {promoCards.map((promo) => (
            <div key={promo.id} className="relative aspect-[21/9] min-w-full md:aspect-[24/8] lg:aspect-[32/10]">
              <Image src={promo.image} alt={promo.title} fill priority={promo.id === 1} className="object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-r ${promo.color} md:w-2/3 lg:w-1/2`} />

              <div className="absolute inset-0 z-10 flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <div className="max-w-xl">
                  <span className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase backdrop-blur-md">
                    {promo.subtitle}
                  </span>
                  <h3 className="mb-6 text-4xl leading-tight font-black text-white drop-shadow-lg md:text-5xl lg:text-6xl">
                    {promo.title}
                  </h3>
                  <button className="group/btn relative overflow-hidden rounded-xl bg-white px-8 py-4 font-bold text-gray-900 shadow-2xl transition-all hover:bg-blue-50 active:scale-95">
                    <span className="relative z-10 flex items-center gap-2">
                      {promo.buttonText}
                      <svg
                        className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators Overlay */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {promoCards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoCarousel;
