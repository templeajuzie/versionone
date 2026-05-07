"use client";

import React from "react";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare
} from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <h1 className="text-4xl font-black text-[#2D3E75] mb-6">Get in <span className="text-[#D32F2F]">Touch</span></h1>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Have questions about your immigration process? Our expert consultants are here to help you navigate through every step.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-2xl text-[#D32F2F]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D3E75] mb-1">Our Location</h3>
                    <p className="text-gray-600 text-sm">Al Ghaith Tower, 17th Floor Hamdan Street, Abu Dhabi, UAE</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D3E75] mb-1">Phone Numbers</h3>
                    <p className="text-gray-600 text-sm">+971 52 907 5570 (WhatsApp)</p>
                    <p className="text-gray-600 text-sm">+971 58 874 4312 (Sales)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-2xl text-green-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D3E75] mb-1">Email Support</h3>
                    <p className="text-gray-600 text-sm">sales@flyhighabroad.ae</p>
                    <p className="text-gray-600 text-sm">info@flyhighabroad.ae</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-50 p-3 rounded-2xl text-purple-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D3E75] mb-1">Working Hours</h3>
                    <p className="text-gray-600 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 bg-gray-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#2D3E75] mb-8 flex items-center gap-3">
                <MessageSquare className="text-red-500" />
                Send us a Message
              </h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#2D3E75] uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#2D3E75] uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#2D3E75] uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Enter phone number" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#2D3E75] uppercase tracking-wider">Service of Interest</label>
                  <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
                    <option>Skilled Immigration</option>
                    <option>Work Permits</option>
                    <option>Permanent Residency</option>
                    <option>Business Immigration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-[#2D3E75] uppercase tracking-wider">Your Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="How can we help you?" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl active:scale-95">
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
