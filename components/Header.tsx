"use client";

import { useEffect, useState } from "react";

import { immigrationMegaMenu } from "@/data/headerData";
import { cn } from "@/lib/utils";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Mail,
  Phone,
  Menu,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

import { NavbarLogo } from "./ui/resizable-navbar";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "./ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "#", hasMegaMenu: true },
    { name: "Success Stories", link: "/success-story" },
    { name: "Blogs", link: "/blogs" },
    { name: "Job Offers", link: "/job-offers" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div
        className={cn(
          "hidden sm:flex items-center justify-between bg-[#2D3E75] px-4 py-1.5 text-[10px] text-white md:px-8 md:text-xs lg:text-sm transition-all duration-300",
          isScrolled && "h-0 py-0 overflow-hidden opacity-0"
        )}
      >
        <div className="flex items-center gap-3 md:gap-5">
          <a
            href="https://wa.me/971529075570"
            className="flex items-center gap-1.5 transition-colors hover:text-green-300"
          >
            <IconBrandWhatsapp size={15} className="text-green-400" />
            <span>+971 52 907 5570</span>
          </a>
          <a
            href="tel:+971588744312"
            className="hidden md:flex items-center gap-1.5 transition-colors hover:text-blue-200"
          >
            <Phone size={13} />
            <span>+971 58 874 4312</span>
          </a>
          <a
            href="mailto:sales@flyhighabroad.ae"
            className="hidden lg:flex items-center gap-1.5 transition-colors hover:text-blue-200"
          >
            <Mail size={13} />
            <span>sales@flyhighabroad.ae</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Link href="#" className="opacity-70 transition-all hover:opacity-100 hover:scale-110">
            <IconBrandFacebook size={16} />
          </Link>
          <Link href="#" className="opacity-70 transition-all hover:opacity-100 hover:scale-110">
            <IconBrandInstagram size={16} />
          </Link>
          <Link href="#" className="opacity-70 transition-all hover:opacity-100 hover:scale-110">
            <IconBrandLinkedin size={16} />
          </Link>
          <Link href="#" className="opacity-70 transition-all hover:opacity-100 hover:scale-110">
            <IconBrandYoutube size={16} />
          </Link>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav
        className={cn(
          "flex items-center justify-between bg-white px-4 transition-all duration-300 md:px-8",
          isScrolled ? "py-2 shadow-lg" : "py-3"
        )}
      >
        {/* Logo */}
        <div className="relative z-50">
          <NavbarLogo />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 xl:flex">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="group relative"
              onMouseEnter={() =>
                link.hasMegaMenu && setActiveMegaMenu("immigration")
              }
              onMouseLeave={() =>
                link.hasMegaMenu && setActiveMegaMenu(null)
              }
            >
              <Link
                href={link.link}
                className="flex items-center gap-1 text-sm font-semibold text-gray-700 transition-colors hover:text-[#2D3E75]"
              >
                {link.name}
                {link.hasMegaMenu && (
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                )}
              </Link>
              {link.hasMegaMenu && (
                <div className="absolute top-full left-0 h-8 w-full" />
              )}
            </div>
          ))}
        </div>

        {/* Right: CTA + Mobile Trigger */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#2D3E75] px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#1a2a5c] hover:-translate-y-0.5 active:scale-95"
          >
            Contact Us
            <ArrowUpRight size={15} />
          </Link>

          {/* Mobile Sheet Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="xl:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors">
                <Menu size={26} />
              </button>
            </SheetTrigger>

            <SheetContent side="right" showCloseButton={true} className="p-0 w-full sm:max-w-md overflow-y-auto">
              <SheetHeader className="border-b border-gray-100 px-5 py-4">
                <SheetTitle className="text-lg font-bold text-[#2D3E75]">
                  Menu
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Nav Links */}
              <div className="flex flex-col">
                {navLinks.map((link) =>
                  link.hasMegaMenu ? (
                    /* Services with Accordion Sub-menus */
                    <div key={link.name} className="border-b border-gray-50">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="services" className="border-0">
                          <AccordionTrigger className="px-5 py-4 text-base font-bold text-[#2D3E75] hover:no-underline hover:bg-gray-50">
                            {link.name}
                          </AccordionTrigger>
                          <AccordionContent className="px-0 pb-0">
                            {/* Nested Accordion for each category */}
                            <Accordion type="single" collapsible className="w-full">
                              {immigrationMegaMenu.map((category) => (
                                <AccordionItem
                                  key={category.title}
                                  value={category.title}
                                  className="border-0 border-t border-gray-50"
                                >
                                  <AccordionTrigger className="px-7 py-3 text-sm font-bold text-red-600 hover:no-underline hover:bg-red-50/50">
                                    {category.title}
                                  </AccordionTrigger>
                                  <AccordionContent className="pb-2">
                                    <div className="flex flex-col">
                                      {category.items.map((item, idx) =>
                                        "subtitle" in item ? (
                                          <div key={idx} className="px-9 py-2">
                                            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                                              {item.subtitle}
                                            </p>
                                            <div className="flex flex-col gap-0.5">
                                              {item.items?.map(
                                                (subItem, sIdx) => (
                                                  <SheetClose asChild key={sIdx}>
                                                    <Link
                                                      href={subItem.link}
                                                      className="rounded-md px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#2D3E75]"
                                                    >
                                                      {subItem.name}
                                                    </Link>
                                                  </SheetClose>
                                                )
                                              )}
                                            </div>
                                          </div>
                                        ) : (
                                          <SheetClose asChild key={idx}>
                                            <Link
                                              href={item.link || "#"}
                                              className="rounded-md px-9 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#2D3E75]"
                                            >
                                              {item.name}
                                            </Link>
                                          </SheetClose>
                                        )
                                      )}
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  ) : (
                    <SheetClose asChild key={link.name}>
                      <Link
                        href={link.link}
                        className="border-b border-gray-50 px-5 py-4 text-base font-bold text-[#2D3E75] transition-colors hover:bg-gray-50"
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  )
                )}
              </div>

              {/* Mobile Footer */}
              <div className="mt-auto border-t border-gray-100 bg-gray-50 p-5">
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2D3E75] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#1a2a5c] active:scale-[0.98]"
                  >
                    Contact Us
                    <ArrowUpRight size={16} />
                  </Link>
                </SheetClose>

                <div className="mt-5 flex items-center justify-center gap-5">
                  <a href="https://wa.me/971529075570" className="text-[#2D3E75] hover:text-green-600 transition-colors">
                    <IconBrandWhatsapp size={22} />
                  </a>
                  <Link href="#" className="text-[#2D3E75] hover:text-blue-600 transition-colors">
                    <IconBrandFacebook size={22} />
                  </Link>
                  <Link href="#" className="text-[#2D3E75] hover:text-pink-600 transition-colors">
                    <IconBrandInstagram size={22} />
                  </Link>
                  <Link href="#" className="text-[#2D3E75] hover:text-blue-700 transition-colors">
                    <IconBrandLinkedin size={22} />
                  </Link>
                  <Link href="#" className="text-[#2D3E75] hover:text-red-600 transition-colors">
                    <IconBrandYoutube size={22} />
                  </Link>
                </div>

                <p className="mt-4 text-center text-[10px] text-gray-400">
                  © {new Date().getFullYear()} Fly High Abroad
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Desktop Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMegaMenu === "immigration" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="hidden xl:block absolute right-0 left-0 max-h-[80vh] overflow-y-auto border-t border-gray-100 bg-white shadow-2xl"
            onMouseEnter={() => setActiveMegaMenu("immigration")}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="mx-auto grid max-w-7xl grid-cols-6 gap-8 px-8 py-10">
              {immigrationMegaMenu.map((category) => (
                <div key={category.title} className="flex flex-col gap-4">
                  <h3 className="border-b border-gray-100 pb-3 text-[11px] font-black uppercase tracking-widest text-[#2D3E75]">
                    {category.title}
                  </h3>
                  <div className="flex flex-col gap-1.5">
                    {category.items.map((item, idx) =>
                      "subtitle" in item ? (
                        <div key={idx} className="mt-3 first:mt-0">
                          <p className="mb-1.5 text-[9px] font-bold uppercase tracking-wider text-gray-400">
                            {item.subtitle}
                          </p>
                          <div className="flex flex-col gap-1 border-l-2 border-gray-100 pl-2.5">
                            {item.items?.map((subItem, sIdx) => (
                              <Link
                                key={sIdx}
                                href={subItem.link}
                                className="rounded px-1.5 py-1 text-xs text-gray-500 transition-colors hover:bg-gray-50 hover:text-[#2D3E75]"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={idx}
                          href={item.link || "#"}
                          className="rounded px-1.5 py-1 text-xs text-gray-500 transition-colors hover:bg-gray-50 hover:text-[#2D3E75]"
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
