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
              Ready to get started? Reach out today for a free consultation and let’s create something amazing together.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="font-geist inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-medium text-white"
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
                  <path d="M16 19h6" className="" />
                  <path d="M16 2v4" className="" />
                  <path d="M19 16v6" className="" />
                  <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" className="" />
                  <path d="M3 10h18" className="" />
                  <path d="M8 2v4" className="" />
                </svg>
                Schedule Appointment
              </a>
              <a
                href="#"
                className="font-geist inline-flex items-center justify-center gap-2 rounded-xl border bg-green-700 px-5 py-3 text-sm font-medium text-white"
              >
                <IconBrandWhatsapp />
                WhatsApp Chat
              </a>
            </div>
            {/* Steps */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/20 bg-white p-4 shadow-sm">
                <div className="font-geist flex items-center gap-2 text-sm font-medium">
                  <span className="font-geist inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-50/15 text-[#000000]/50 ring-1 ring-slate-950/10">
                    01
                  </span>
                  Book online
                </div>
                <p className="font-geist mt-2 text-xs text-black/60">
                  Schedule in 60 seconds with our easy booking system.
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white p-4 shadow-sm">
                <div className="font-geist flex items-center gap-2 text-sm font-medium">
                  <span className="font-geist inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-50/15 text-[#000000]/50 ring-1 ring-slate-950/10">
                    02
                  </span>
                  We Deliver
                </div>
                <p className="font-geist mt-2 text-xs text-black/60">We get the job done at the right time</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white p-4 shadow-sm">
                <div className="font-geist flex items-center gap-2 text-sm font-medium">
                  <span className="font-geist inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-50/15 text-[#000000]/50 ring-1 ring-slate-950/10">
                    03
                  </span>
                  You relax
                </div>
                <p className="font-geist mt-2 text-xs text-black/60">
                  The feeling you get when you trust the right team
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm">
              <img
                src="https://i.pinimg.com/1200x/33/11/ff/3311ff50ba0718a066c3b4d59d1ae10f.jpg"
                alt="Clean modern kitchen"
                className="h-80 w-full object-cover sm:h-[28rem]"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <div className="font-geist inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/70 px-3 py-2 text-xs text-black/80 backdrop-blur">
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
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" className="" />
                    <path d="m9 11 3 3L22 4" className="" />
                  </svg>
                  Deep cleaned to perfection
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
