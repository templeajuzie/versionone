/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { immigrationMegaMenu } from "@/data/headerData";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  // Helper to flatten nested items from headerData
  const getFlattenedItems = (items: any[]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const flattened: any[] = [];
    items.forEach((item) => {
      if ("subtitle" in item) {
        item.items.forEach((subItem: any) => flattened.push(subItem));
      } else {
        flattened.push(item);
      }
    });
    return flattened;
  };

  const quickLinks = [
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "Services", link: "/services" },
    { name: "Blogs", link: "/blogs" },
    { name: "Privacy Policy", link: "/privacy" },
    { name: "Terms & Conditions", link: "/terms" },
  ];

  return (
    <div className="">
      <>
        {/* Transition Divider */}
        <div className="pointer-events-none relative z-0 h-40 w-full overflow-hidden bg-zinc-50 md:h-64">
          <svg
            viewBox="0 0 2880 320"
            className="absolute bottom-0 left-0 h-full w-[200%] transform-gpu"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6">
                  <animate
                    attributeName="stop-color"
                    values="#8b5cf6;#ec4899;#8b5cf6"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="50%" stopColor="#3b82f6">
                  <animate
                    attributeName="stop-color"
                    values="#3b82f6;#10b981;#3b82f6"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#06b6d4">
                  <animate
                    attributeName="stop-color"
                    values="#06b6d4;#8b5cf6;#06b6d4"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation={15} result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <path
              d="M 0 160 C 480 260, 960 60, 1440 160 C 1920 260, 2400 60, 2880 160 L 2880 320 L 0 320 Z"
              fill="url(#glowGrad)"
              filter="url(#glow)"
              opacity="0.4"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0,0"
                to="-1440,0"
                dur="18s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M 0 190 C 480 90, 960 290, 1440 190 C 1920 90, 2400 290, 2880 190 L 2880 320 L 0 320 Z"
              fill="url(#glowGrad)"
              filter="url(#glow)"
              opacity="0.7"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0,0"
                to="-1440,0"
                dur="14s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M 0 220 C 480 140, 960 320, 1440 220 C 1920 140, 2400 320, 2880 220 L 2880 320 L 0 320 Z"
              fill="#09090b"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0,0"
                to="-1440,0"
                dur="22s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </>

      <footer className="bg-black px-4 pt-16 pb-8 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Top Section: Logo & Contact */}
          {/* <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link href="/" className="mb-6 inline-block">
                <Image
                  src="/fly-high-logo.png"
                  alt="Fly High Abroad"
                  width={220}
                  height={60}
                  className="h-14 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-blue-100">
                Giving feathers to your dreams. We are your trusted partner for global migration and travel solutions.
                With years of experience and a high success rate, we make your transition smooth and effortless.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 text-sm text-blue-100">
                  <MapPin size={20} className="mt-1 flex-shrink-0 text-blue-400" />
                  <span>Al Ghaith Tower, 17th Floor Hamdan Street, Abu Dhabi, UAE</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-blue-100">
                  <Phone size={20} className="flex-shrink-0 text-blue-400" />
                  <span>+971 58 874 4312</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-blue-100">
                  <Mail size={20} className="flex-shrink-0 text-blue-400" />
                  <span>sales@flyhighabroad.ae</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-blue-100">
                  <IconBrandWhatsapp size={20} className="flex-shrink-0 text-green-400" />
                  <span>+971 52 907 5570</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <h4 className="mb-4 text-xl font-bold">Subscribe to our Newsletter</h4>
                <p className="mb-6 text-sm text-blue-100">
                  Get the latest immigration news and updates deliveblue to your inbox.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 rounded-lg bg-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button className="rounded-lg bg-blue-600 px-6 py-3 font-bold transition-colors hover:bg-blue-700">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          <section className="max-w-8xl mt-10">
            <div className="relative overflow-hidden rounded-lg bg-neutral-900 ring-1 ring-black/10">
              {/* Background */}
              {/* <div className="absolute inset-0">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60668e31-2150-424e-b292-05bfdda254e0_1600w.jpg"
                  alt="Abstract minimal background"
                  className="h-full w-full object-cover opacity-40"
                />
                <div className="via/50 absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent" />
              </div> */}
              {/* Content */}
              <div className="relative z-10 pt-5 pr-5 pb-5 pl-5 sm:p-8 md:p-12">
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                  {/* Form card */}
                  <div className="lg:col-span-5">
                    <div className="rounded-lg bg-white/90 p-4 shadow-lg ring-1 ring-black/10 backdrop-blur sm:p-5">
                      <div className="flex items-center justify-between">
                        <div className="">
                          <p className="text-[11px] text-neutral-500">Solace Support</p>
                          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                            Have a question?
                          </h3>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-white">
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
                            data-lucide="message-square"
                            className="lucide lucide-message-square h-4 w-4"
                          >
                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </div>
                      </div>
                      <form action="#" method="POST" className="mt-4 space-y-3">
                        <div className="">
                          <label htmlFor="ct-name" className="block text-xs text-neutral-600">
                            Your name<span className="text-neutral-400"> *</span>
                          </label>
                          <input
                            id="ct-name"
                            name="name"
                            type="text"
                            // requiblue=""
                            placeholder="Jane Doe"
                            className="mt-1 w-full rounded-lg bg-white py-2.5 pr-3 pl-3 text-sm ring-1 ring-black/10 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900"
                          />
                        </div>
                        <div className="">
                          <label htmlFor="ct-email" className="block text-xs text-neutral-600">
                            E‑mail<span className="text-neutral-400"> *</span>
                          </label>
                          <div className="relative mt-1">
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
                              data-lucide="mail"
                              className="lucide lucide-mail absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-400"
                            >
                              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                              <rect x={2} y={4} width={20} height={16} rx={2} />
                            </svg>
                            <input
                              id="ct-email"
                              name="email"
                              type="email"
                              // requiblue=""
                              placeholder="you@solace.com"
                              className="w-full rounded-lg bg-white py-2.5 pr-3 pl-9 text-sm ring-1 ring-black/10 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900"
                            />
                          </div>
                        </div>
                        <div className="">
                          <label htmlFor="ct-msg" className="block text-xs text-neutral-600">
                            Message
                          </label>
                          <textarea
                            id="ct-msg"
                            name="message"
                            rows={4}
                            placeholder="How can we help?"
                            className="mt-1 w-full resize-y rounded-lg bg-white py-2.5 pr-3 pl-3 text-sm ring-1 ring-black/10 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900"
                            defaultValue={""}
                          />
                        </div>
                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center rounded-lg bg-neutral-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                        >
                          Send message
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
                            data-lucide="arrow-right"
                            className="lucide lucide-arrow-right ml-2 h-4 w-4"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </button>
                        <p className="text-[11px] text-neutral-500">
                          By submitting, you agree to our Terms and Privacy Policy.
                        </p>
                      </form>
                    </div>
                  </div>
                  {/* Copy + highlights */}
                  <div className="lg:col-span-7">
                    <h2 className="text-5xl leading-[1.05] font-semibold tracking-tight text-white sm:text-6xl">
                      Let&lsquo;s talk.
                    </h2>
                    <p className="mt-4 max-w-2xl text-base text-neutral-200 sm:text-lg">
                      Tell us about your setup—support, bulk orders, or partnerships. We reply within one business day.
                    </p>
                    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-emerald-300 ring-1 ring-white/15 backdrop-blur">
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
                            data-lucide="clock-3"
                            className="lucide lucide-clock-3 h-4 w-4"
                          >
                            <path d="M12 6v6h4" />
                            <circle cx={12} cy={12} r={10} />
                          </svg>
                        </div>
                        <div className="">
                          <p className="text-sm font-medium text-white">Quick response</p>
                          <p className="text-xs text-neutral-300">Most messages receive a reply in under 24h.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-emerald-300 ring-1 ring-white/15 backdrop-blur">
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
                            data-lucide="route"
                            className="lucide lucide-route h-4 w-4"
                          >
                            <circle cx={6} cy={19} r={3} />
                            <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
                            <circle cx={18} cy={5} r={3} />
                          </svg>
                        </div>
                        <div className="">
                          <p className="text-sm font-medium text-white">Clear next steps</p>
                          <p className="text-xs text-neutral-300">We’ll follow up with a concise plan and timeline.</p>
                        </div>
                      </div>
                    </div>
                    {/* Direct contact card */}
                    <div className="mt-7">
                      <div className="inline-flex items-center gap-3 rounded-lg bg-white/95 p-3 shadow-lg ring-1 ring-black/10 backdrop-blur">
                        <img
                          src="data:image/jpeg;base64,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"
                          alt="Team lead"
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                        <div className="min-w-0">
                          <p className="text-[11px] leading-none text-neutral-500">Team Lead</p>
                          <p className="truncate font-medium tracking-tight text-neutral-900">Ava Kim</p>
                        </div>
                        <a
                          href="mailto:hello@solace.dev"
                          className="ml-1 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
                        >
                          Ask directly
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
                            data-lucide="message-circle"
                            className="lucide lucide-message-circle h-3.5 w-3.5"
                          >
                            <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mega Links Grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 border-t border-white/10 pt-16 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {immigrationMegaMenu.map((category) => (
              <div key={category.title} className="flex flex-col">
                <h4 className="mb-6 text-sm font-black text-blue-400">{category.title}</h4>
                <ul className="space-y-2.5">
                  {getFlattenedItems(category.items).map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.link}
                        className="inline-block text-sm text-blue-100 transition-all hover:translate-x-1 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Quick Links Column */}
            <div className="flex flex-col">
              <h4 className="mb-6 text-sm font-black text-blue-400">Quick Links</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.link}
                      className="inline-block text-sm text-blue-100 transition-all hover:translate-x-1 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-2 md:flex-row">
            <div className="flex items-center gap-1">
              <Link href="#" className="group rounded-full bg-white/5 p-3 transition-all hover:bg-blue-600">
                <IconBrandFacebook size={20} className="transition-transform group-hover:scale-110" />
              </Link>
              <Link href="#" className="group rounded-full bg-white/5 p-3 transition-all hover:bg-blue-600">
                <IconBrandInstagram size={20} className="transition-transform group-hover:scale-110" />
              </Link>
              <Link href="#" className="group rounded-full bg-white/5 p-3 transition-all hover:bg-blue-600">
                <IconBrandLinkedin size={20} className="transition-transform group-hover:scale-110" />
              </Link>
              <Link href="#" className="group rounded-full bg-white/5 p-3 transition-all hover:bg-blue-600">
                <IconBrandYoutube size={20} className="transition-transform group-hover:scale-110" />
              </Link>
            </div>

            <p className="text-sm text-blue-300">
              © {new Date().getFullYear()} Fly High Abroad. All rights reserved.
              <span className="mx-3 opacity-20">|</span>
              Designed with Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
