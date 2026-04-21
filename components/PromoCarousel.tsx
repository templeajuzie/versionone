"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
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
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Featured Promotions</h2>
          <p className="text-gray-500 text-sm mt-1">Handpicked deals just for you</p>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full border border-gray-100 bg-white hover:bg-gray-50 transition-all shadow-sm hover:shadow active:scale-90"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full border border-gray-100 bg-white hover:bg-gray-50 transition-all shadow-sm hover:shadow active:scale-90"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-3xl group">
        <div 
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {promoCards.map((promo) => (
            <div 
              key={promo.id}
              className="min-w-full relative aspect-[21/9] md:aspect-[24/8] lg:aspect-[32/10]"
            >
              <Image
                src={promo.image}
                alt={promo.title}
                fill
                priority={promo.id === 1}
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${promo.color} md:w-2/3 lg:w-1/2`} />
              
              <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-center z-10">
                <div className="max-w-xl">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-4">
                    {promo.subtitle}
                  </span>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-lg leading-tight">
                    {promo.title}
                  </h3>
                  <button className="group/btn relative px-8 py-4 bg-white text-gray-900 rounded-xl font-bold shadow-2xl hover:bg-blue-50 transition-all active:scale-95 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      {promo.buttonText}
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators Overlay */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
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
