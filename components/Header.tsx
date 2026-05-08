"use client";

import { useEffect, useState } from "react";



import { immigrationMegaMenu } from "@/data/headerData";
import { cn } from "@/lib/utils";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconBrandYoutube } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronRight, Mail, Menu, Phone, X } from "lucide-react";
import Link from "next/link";



import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { NavbarLogo } from "./ui/resizable-navbar";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";







































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
    { name: "Services", link: "/services", hasMegaMenu: true },
    { name: "Success Stories", link: "/success-story" },
    { name: "Blogs", link: "https://medium.com/@globalworkgate" },
    { name: "Job Offers", link: "/job-offers" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full bg-white transition-all duration-300">
      {/* Top Utility Bar */}
      <div
        className={cn(
          "w-full bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A] px-2 py-2.5 text-center text-sm font-medium text-white",
          isScrolled && "h-0 overflow-hidden py-0 opacity-0"
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
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
              className="hidden items-center gap-1.5 transition-colors hover:text-blue-200 md:flex"
            >
              <Phone size={13} />
              <span>+971 58 874 4312</span>
            </a>
            <a
              href="mailto:Versiononeinvestment@gmail.com"
              className="hidden items-center gap-1.5 transition-colors hover:text-blue-200 lg:flex"
            >
              <Mail size={13} />
              <span>Versiononeinvestment@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="#" className="opacity-70 transition-all hover:scale-110 hover:opacity-100">
              <IconBrandFacebook size={16} />
            </Link>
            <Link href="#" className="opacity-70 transition-all hover:scale-110 hover:opacity-100">
              <IconBrandInstagram size={16} />
            </Link>
            <Link href="#" className="opacity-70 transition-all hover:scale-110 hover:opacity-100">
              <IconBrandLinkedin size={16} />
            </Link>
            <Link href="#" className="opacity-70 transition-all hover:scale-110 hover:opacity-100">
              <IconBrandYoutube size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav
        className={cn(
          "bg-background flex items-center justify-between px-4 transition-all duration-300 md:px-8",
          isScrolled ? "py-2 shadow-sm" : "py-3"
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
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
                onMouseEnter={() => link.hasMegaMenu && setActiveMegaMenu("immigration")}
                onMouseLeave={() => link.hasMegaMenu && setActiveMegaMenu(null)}
              >
                <Link
                  href={link.link}
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-[#2D3E75]"
                >
                  {link.name}
                  {link.hasMegaMenu && (
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>
                {link.hasMegaMenu && <div className="absolute top-full left-0 h-8 w-full" />}
              </div>
            ))}
          </div>

          {/* Right: CTA + Mobile Trigger */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 bg-gradient-to-tr from-violet-600 to-blue-600 pt-2 pr-6 pb-2 pl-6 text-sm font-medium tracking-tight text-white ring-1 ring-white/10 transition-all duration-300"
              style={{
                borderColor: "rgba(255, 255, 255, 0.3)",
                cursor: "pointer",
                transform: "scale(1)",
              }}
            >
              <div
                className="shine-effect"
                style={{
                  content: '""',
                  position: "absolute",
                  width: 100,
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 70%)",
                  top: 0,
                  left: "-100px",
                  opacity: "0.6",
                  pointerEvents: "none",
                  animation: "auto ease 0s 1 normal none running none",
                }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="rocket"
                className="lucide lucide-rocket h-4 w-4"
                style={{ transform: "translateX(0px)" }}
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
              Contact Us
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n    @keyframes shine {\n      0% { left: -100px; }\n      60% { left: 100%; }\n      to { left: 100%; }\n    }\n  ",
                }}
              />
            </Link>

            {/* Mobile Sheet Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition-colors hover:bg-zinc-50 xl:hidden">
                  <Menu size={20} />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                showCloseButton={false}
                className="w-full border-l border-zinc-100 bg-white p-0 text-zinc-900 sm:max-w-sm"
              >
                <div className="flex h-full flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5">
                    <NavbarLogo />
                    <SheetClose asChild>
                      <button className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700">
                        <X size={18} />
                      </button>
                    </SheetClose>
                  </div>

                  {/* Navigation */}
                  <div className="flex-1 overflow-y-auto px-4 py-6">
                    <p className="mb-3 px-2 text-[10px] font-bold tracking-[0.18em] text-zinc-400 uppercase">Menu</p>
                    <nav className="flex flex-col">
                      {navLinks.map((link) =>
                        link.hasMegaMenu ? (
                          <Accordion key={link.name} type="single" collapsible>
                            <AccordionItem value="services" className="border-none">
                              <AccordionTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:no-underline [&>svg]:hidden">
                                <span>{link.name}</span>
                                <ChevronRight
                                  size={15}
                                  className="text-zinc-400 transition-transform duration-200 group-data-[state=open]:rotate-90"
                                />
                              </AccordionTrigger>

                              <AccordionContent className="pt-1 pb-2">
                                <Accordion type="multiple" className="space-y-0.5">
                                  {immigrationMegaMenu.map((category) => (
                                    <AccordionItem key={category.title} value={category.title} className="border-none">
                                      <AccordionTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-bold text-zinc-800 transition-colors hover:bg-zinc-50 hover:no-underline [&>svg]:hidden">
                                        <span>{category.title}</span>
                                        <ChevronRight
                                          size={14}
                                          className="shrink-0 text-zinc-400 transition-transform duration-200 group-data-[state=open]:rotate-90"
                                        />
                                      </AccordionTrigger>
                                      <AccordionContent className="pb-1 pl-3">
                                        <div className="border-l border-zinc-100 pl-3">
                                          {category.items.map((item, idx) =>
                                            "subtitle" in item ? (
                                              <div key={idx} className="mt-1 mb-2">
                                                <p className="mb-1 px-1 text-[9px] font-semibold tracking-widest text-zinc-400 uppercase">
                                                  {item.subtitle}
                                                </p>
                                                {item.items?.map((subItem, sIdx) => (
                                                  <SheetClose asChild key={sIdx}>
                                                    <Link
                                                      href={subItem.link}
                                                      className="flex items-center justify-between rounded-md px-2 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                                                    >
                                                      {subItem.name}
                                                      <ArrowUpRight size={13} className="shrink-0 text-zinc-300" />
                                                    </Link>
                                                  </SheetClose>
                                                ))}
                                              </div>
                                            ) : (
                                              <SheetClose asChild key={idx}>
                                                <Link
                                                  href={item.link || "#"}
                                                  className="flex items-center justify-between rounded-md px-2 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                                                >
                                                  {item.name}
                                                  <ArrowUpRight size={13} className="shrink-0 text-zinc-300" />
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
                        ) : (
                          <SheetClose asChild key={link.name}>
                            <Link
                              href={link.link}
                              className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                            >
                              {link.name}
                              <ChevronRight size={15} className="text-zinc-300" />
                            </Link>
                          </SheetClose>
                        )
                      )}
                    </nav>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-zinc-100 p-5">
                    <SheetClose asChild>
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <a
                          href="https://cal.com/globalworkgate/30min?overlayCalendar=true"
                          className="font-geist inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-blue-800"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                            <line x1="16" x2="16" y1="2" y2="6" />
                            <line x1="8" x2="8" y1="2" y2="6" />
                            <line x1="3" x2="21" y1="10" y2="10" />
                          </svg>
                          Book Consultation
                        </a>
                        <a
                          href="https://wa.me/2348170000169"
                          target="_blank"
                          className="font-geist text-primary inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-medium transition-all hover:bg-zinc-50"
                        >
                          <IconBrandWhatsapp className="text-green-600" />
                          WhatsApp Chat
                        </a>
                      </div>
                    </SheetClose>
                    <div className="mt-4 flex items-center gap-4">
                      <a
                        href="https://wa.me/971529075570"
                        className="flex items-center gap-1.5 text-xs text-zinc-400 transition-colors hover:text-zinc-700"
                      >
                        <IconBrandWhatsapp size={14} />
                        WhatsApp
                      </a>
                      <span className="h-3 w-px bg-zinc-200" />
                      <a
                        href="mailto:sales@globalworkgate.com"
                        className="flex items-center gap-1.5 text-xs text-zinc-400 transition-colors hover:text-zinc-700"
                      >
                        <Mail size={13} />
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
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
            className="absolute right-0 left-0 hidden max-h-[80vh] overflow-y-auto border-t border-gray-100 bg-white shadow-2xl xl:block"
            onMouseEnter={() => setActiveMegaMenu("immigration")}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="mx-auto grid max-w-7xl grid-cols-6 gap-8 px-8 py-10">
              {immigrationMegaMenu.map((category) => (
                <div key={category.title} className="flex flex-col gap-4">
                  <h3 className="border-b border-gray-100 pb-3 text-[11px] font-black tracking-widest text-[#2D3E75] uppercase">
                    {category.title}
                  </h3>
                  <div className="flex flex-col gap-1.5">
                    {category.items.map((item, idx) =>
                      "subtitle" in item ? (
                        <div key={idx} className="mt-3 first:mt-0">
                          <p className="mb-1.5 text-[9px] font-bold tracking-wider text-gray-400 uppercase">
                            {item.subtitle}
                          </p>
                          <div className="flex flex-col gap-1 border-l-2 border-gray-100 pl-2.5">
                            {item.items?.map((subItem, sIdx) => (
                              <Link
                                key={sIdx}
                                href={subItem.link}
                                className="rounded px-1.5 py-1 text-sm text-gray-500 transition-colors hover:bg-gray-50 hover:text-[#2D3E75]"
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
                          className="rounded px-1.5 py-1 text-sm text-gray-500 transition-colors hover:bg-gray-50 hover:text-[#2D3E75]"
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
