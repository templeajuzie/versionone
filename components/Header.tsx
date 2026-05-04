"use client";
import { useEffect, useState } from "react";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  Navbar,
  NavbarButton,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { motion } from "framer-motion";
import { CirclePower } from "lucide-react";
import Image from "next/image";

export function Header() {
  const navItems = [
    { name: "Destinations", link: "#destinations" },
    { name: "Tours", link: "#tours" },
    // { name: "Hotels", link: "#hotels" },
    { name: "Flights", link: "#flights" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [yOffset, setYOffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = Math.min(scrollY / 300, 1) * -20;
      setYOffset(offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dynamicScale = Math.max(0.4, Math.min(1.2, (windowWidth / 1600) * 1.2));

  const baseTransform = {
    translateX: windowWidth < 640 ? 0 : 2,
    scale: dynamicScale,
    rotateX: 47,
    rotateY: 31,
    rotateZ: 324,
  };

  return (
    // <div className="relative"></div>
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <div className="w-fit rounded-lg bg-white px-2 py-0.5">
          <NavbarLogo />
        </div>
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton variant="primary">Book a call</NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <div className="w-fit rounded-lg bg-white px-2 py-0.5">
            <NavbarLogo />
          </div>
          <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
              Book a call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
