"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 z-30 w-full transition-all duration-300 ${isScrolled ? "bg-white/80 shadow-sm backdrop-blur-md" : "bg-transparent"}`}
    >
      {/* Top Banner (Optional: Hide on scroll or keep) */}
      {!isScrolled && (
        <div className="bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A] py-2 text-center text-xs font-medium text-white">
          <p>
            Exclusive Price Drop! Hurry, <span className="underline underline-offset-2">Offer Ends Soon!</span>
          </p>
        </div>
      )}

      <nav className="flex h-fit items-center justify-between px-6 py-2 transition-all md:px-16 lg:px-24 xl:px-32">
        <Link href="/" className={`flex items-center gap-2 ${isScrolled ? "text-gray-900" : "text-white"}`}>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-lg ${isScrolled ? "bg-gray-800" : "bg-white"}`}
          >
            <svg
              className={`h-6 w-6 ${isScrolled ? "text-white" : "text-black"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter italic">
            Version<span className="">One</span>
          </span>
        </Link>
        <ul
          className={`hidden items-center space-x-8 transition-colors duration-300 md:flex md:pl-28 ${isScrolled ? "text-gray-900" : "text-white"}`}
        >
          <li>
            <Link href="/" className="text-sm font-medium transition-opacity hover:opacity-70">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-sm font-medium transition-opacity hover:opacity-70">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-sm font-medium transition-opacity hover:opacity-70">
              Our Services
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="text-sm font-medium transition-opacity hover:opacity-70">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-sm font-medium transition-opacity hover:opacity-70">
              FAQ
            </Link>
          </li>
        </ul>
        <button
          className={`hidden cursor-pointer rounded-full px-9 py-2 font-medium transition-all active:scale-95 md:inline ${
            isScrolled
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
          }`}
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </button>
        <button
          aria-label="menu-btn"
          type="button"
          className={`menu-btn inline-block cursor-pointer transition active:scale-90 md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="currentColor">
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Header;
