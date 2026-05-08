import React from "react";

import { IconBrandWhatsapp } from "@tabler/icons-react";

const ContactSnipet = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="pt-2 pb-2">
            <h1 className="font-geist mt-5 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s talk
            </h1>
            <p className="font-geist mt-4 text-base text-black/70 sm:text-lg">
              Ready to start your global journey? Reach out today for a free immigration consultation and let our
              experts guide you to your new home.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
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
                href="#"
                className="font-geist text-primary inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-medium transition-all hover:bg-zinc-50"
              >
                <IconBrandWhatsapp className="text-green-600" />
                WhatsApp Chat
              </a>
            </div>
            {/* Steps */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-zinc-100 bg-white p-4 shadow-sm">
                <div className="font-geist flex items-center gap-2 text-sm font-medium">
                  <span className="font-geist text-primary inline-flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 ring-1 ring-blue-700/10">
                    01
                  </span>
                  Free Profile Assessment
                </div>
                <p className="font-geist mt-2 text-xs text-black/60">
                  Submit your details for a quick eligibility check.
                </p>
              </div>
              <div className="rounded-lg border border-zinc-100 bg-white p-4 shadow-sm">
                <div className="font-geist flex items-center gap-2 text-sm font-medium">
                  <span className="font-geist text-primary inline-flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 ring-1 ring-blue-700/10">
                    02
                  </span>
                  Expert Guidance
                </div>
                <p className="font-geist mt-2 text-xs text-black/60">Our certified consultants plan your path.</p>
              </div>
              <div className="rounded-lg border border-zinc-100 bg-white p-4 shadow-sm">
                <div className="font-geist flex items-center gap-2 text-sm font-medium">
                  <span className="font-geist text-primary inline-flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 ring-1 ring-blue-700/10">
                    03
                  </span>
                  Visa Approval
                </div>
                <p className="font-geist mt-2 text-xs text-black/60">
                  We handle the paperwork while you pack your bags.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=2000&auto=format&fit=crop"
                alt="Global Travel and Visa"
                className="h-80 w-full object-cover sm:h-[28rem]"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <div className="font-geist inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/70 px-3 py-2 text-xs font-medium text-black/80 backdrop-blur">
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
                    className="text-primary h-4 w-4"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Certified Immigration Experts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSnipet;
