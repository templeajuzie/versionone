"use client";

import React from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      <main className="pt-32 pb-20">
        <section className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col gap-16 lg:flex-row">
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <h1 className="mb-6 text-4xl font-black text-[#2D3E75]">
                Get in <span className="text-[#D32F2F]">Touch</span>
              </h1>
              <p className="mb-10 leading-relaxed text-gray-600">
                Have questions about your immigration process? Our expert consultants are here to help you navigate
                through every step.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-red-50 p-3 text-[#D32F2F]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-[#2D3E75]">Our Location</h3>
                    <p className="text-sm text-gray-600">Al Ghaith Tower, 17th Floor Hamdan Street, Abu Dhabi, UAE</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-primary rounded-lg bg-blue-50 p-3">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-[#2D3E75]">Phone Numbers</h3>
                    <p className="text-sm text-gray-600">+971 52 907 5570 (WhatsApp)</p>
                    <p className="text-sm text-gray-600">+971 58 874 4312 (Sales)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-green-50 p-3 text-green-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-[#2D3E75]">Email Support</h3>
                    <p className="text-sm text-gray-600">sales@flyhighabroad.ae</p>
                    <p className="text-sm text-gray-600">info@flyhighabroad.ae</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-purple-50 p-3 text-purple-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-[#2D3E75]">Working Hours</h3>
                    <p className="text-sm text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-8 shadow-sm md:p-12 lg:w-2/3">
              <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-[#2D3E75]">
                <MessageSquare className="text-red-500" />
                Send us a Message
              </h2>
              <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider text-[#2D3E75] uppercase">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider text-[#2D3E75] uppercase">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider text-[#2D3E75] uppercase">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider text-[#2D3E75] uppercase">
                    Service of Interest
                  </label>
                  <select className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none">
                    <option>Skilled Immigration</option>
                    <option>Work Permits</option>
                    <option>Permanent Residency</option>
                    <option>Business Immigration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold tracking-wider text-[#2D3E75] uppercase">Your Message</label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  ></textarea>
                </div>
                <div className="pt-4 md:col-span-2">
                  <button className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#D32F2F] py-4 font-bold text-white shadow-lg transition-all hover:bg-[#B71C1C] hover:shadow-sm active:scale-95">
                    <Send size={18} />
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
