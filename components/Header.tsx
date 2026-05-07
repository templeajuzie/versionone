"use client";

import { useEffect, useState } from "react";



import { immigrationMegaMenu } from "@/data/headerData";
import { cn } from "@/lib/utils";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconBrandYoutube } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, Mail, Menu, Phone, Rocket, Sparkles } from "lucide-react";
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
    { name: "Blogs", link: "/blogs" },
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
              href="mailto:sales@flyhighabroad.ae"
              className="hidden items-center gap-1.5 transition-colors hover:text-blue-200 lg:flex"
            >
              <Mail size={13} />
              <span>sales@flyhighabroad.ae</span>
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
              href="#"
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
                <button className="group relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] xl:hidden">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Menu size={22} className="relative z-10 text-white" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                showCloseButton={false}
                className="w-full border-l border-white/10 bg-[#050816]/95 p-0 text-white backdrop-blur-3xl sm:max-w-md"
              >
                <div className="relative flex h-full flex-col overflow-hidden">
                  {/* Ambient Background */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-[-120px] right-[-80px] h-[300px] w-[300px] rounded-full bg-violet-600/20 blur-3xl" />
                    <div className="absolute bottom-[-100px] left-[-80px] h-[250px] w-[250px] rounded-full bg-blue-500/20 blur-3xl" />
                  </div>

                  {/* Header */}
                  <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-5">
                    <div>
                      <p className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">Navigation</p>
                      <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">Explore Fly High</h2>
                    </div>

                    <SheetClose asChild>
                      {/* <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:bg-white/[0.08]">
                        <X size={18} className="text-white/70" />
                      </button> */}
                    </SheetClose>
                  </div>

                  {/* Navigation */}
                  <div className="relative z-10 flex-1 overflow-y-auto px-4 py-6">
                    <div className="space-y-2">
                      {navLinks.map((link) =>
                        link.hasMegaMenu ? (
                          <Accordion
                            key={link.name}
                            type="single"
                            collapsible
                            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
                          >
                            <AccordionItem value="services" className="border-none">
                              <AccordionTrigger className="group px-5 py-4 text-left hover:no-underline">
                                <div className="flex items-center gap-3">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 ring-1 ring-white/10">
                                    <Sparkles className="h-4 w-4 text-violet-300" />
                                  </div>

                                  <div>
                                    <p className="text-base font-semibold text-white">{link.name}</p>
                                    <p className="text-xs text-white/40">Immigration & relocation</p>
                                  </div>
                                </div>
                              </AccordionTrigger>

                              <AccordionContent className="px-3 pb-3">
                                <div className="space-y-3">
                                  {immigrationMegaMenu.map((category) => (
                                    <div
                                      key={category.title}
                                      className="rounded-2xl border border-white/5 bg-white/[0.03] p-4"
                                    >
                                      <div className="mb-3 flex items-center justify-between">
                                        <h4 className="text-sm font-semibold text-white">{category.title}</h4>

                                        <div className="h-1 w-1 rounded-full bg-white/30" />
                                      </div>

                                      <div className="space-y-1">
                                        {category.items.map((item, idx) =>
                                          "subtitle" in item ? (
                                            <div key={idx} className="space-y-2 pt-2">
                                              <p className="px-2 text-[10px] font-semibold tracking-[0.18em] text-white/30 uppercase">
                                                {item.subtitle}
                                              </p>

                                              <div className="space-y-1">
                                                {item.items?.map((subItem, sIdx) => (
                                                  <SheetClose asChild key={sIdx}>
                                                    <Link
                                                      href={subItem.link}
                                                      className="group flex items-center justify-between rounded-xl px-3 py-3 transition-all duration-300 hover:bg-white/[0.06]"
                                                    >
                                                      <span className="text-sm text-white/75 transition-colors group-hover:text-white">
                                                        {subItem.name}
                                                      </span>

                                                      <ArrowUpRight className="h-4 w-4 text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/70" />
                                                    </Link>
                                                  </SheetClose>
                                                ))}
                                              </div>
                                            </div>
                                          ) : (
                                            <SheetClose asChild key={idx}>
                                              <Link
                                                href={item.link || "#"}
                                                className="group flex items-center justify-between rounded-xl px-3 py-3 transition-all duration-300 hover:bg-white/[0.06]"
                                              >
                                                <span className="text-sm text-white/75 transition-colors group-hover:text-white">
                                                  {item.name}
                                                </span>

                                                <ArrowUpRight className="h-4 w-4 text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/70" />
                                              </Link>
                                            </SheetClose>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ) : (
                          <SheetClose asChild key={link.name}>
                            <Link
                              href={link.link}
                              className="group flex items-center justify-between rounded-2xl border border-transparent bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06]"
                            >
                              <div>
                                <p className="text-base font-medium text-white">{link.name}</p>
                              </div>

                              <ArrowRight className="h-4 w-4 text-white/30 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                          </SheetClose>
                        )
                      )}
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="relative z-10 border-t border-white/10 p-5">
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-blue-600/10 to-transparent p-5 backdrop-blur-2xl">
                      <div className="mb-5 flex items-start justify-between">
                        <div>
                          <p className="text-lg font-semibold text-white">Ready to move abroad?</p>
                          <p className="mt-1 text-sm leading-relaxed text-white/50">
                            Speak with our team and start your relocation journey.
                          </p>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                          <Rocket className="h-5 w-5 text-white" />
                        </div>
                      </div>

                      <SheetClose asChild>
                        <Link
                          href="#"
                          className="flex h-12 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-[#050816] transition-all duration-300 hover:scale-[0.98]"
                        >
                          Contact Us
                        </Link>
                      </SheetClose>

                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {[IconBrandWhatsapp, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube].map(
                            (Icon, i) => (
                              <a
                                key={i}
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 hover:bg-white/[0.08] hover:text-white"
                              >
                                <Icon size={18} />
                              </a>
                            )
                          )}
                        </div>

                        <p className="text-[11px] text-white/30">© {new Date().getFullYear()}</p>
                      </div>
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
