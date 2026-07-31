"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

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
      className={`fixed w-full top-0 z-30 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      {/* Top Banner (Optional: Hide on scroll or keep) */}
      {!isScrolled && (
        <div className="text-center font-medium py-2 bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A] text-white text-xs">
          <p>
            Exclusive Price Drop! Hurry,{" "}
            <span className="underline underline-offset-2">
              Offer Ends Soon!
            </span>
          </p>
        </div>
      )}

      <nav className="h-fit flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-2 transition-all">
        <Link
          href="/"
          className={`flex items-center gap-2 ${isScrolled ? "text-gray-900" : "text-white"}`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${isScrolled ? "bg-gray-800" : "bg-white"}`}
          >
            <svg
              className={`w-6 h-6 ${isScrolled? "text-white" : "text-black"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter  italic">
            Version<span className="">One</span>
          </span>
        </Link>
        <ul
          className={`hidden md:flex items-center space-x-8 md:pl-28 transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white"}`}
        >
          <li>
            <Link
              href="/"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              FAQ
            </Link>
          </li>
        </ul>
        <button
          className={`md:inline hidden px-9 py-2 rounded-full active:scale-95 transition-all cursor-pointer font-medium ${
            isScrolled
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20"
          }`}
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </button>
        <button
          aria-label="menu-btn"
          type="button"
          className={`menu-btn inline-block md:hidden active:scale-90 transition cursor-pointer ${isScrolled ? "text-gray-900" : "text-white"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="currentColor"
          >
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Header;
