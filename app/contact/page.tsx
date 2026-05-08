/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { 
  CheckCircle2, 
  Clock, 
  Loader2, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Phone, 
  Send, 
  XCircle,
  ArrowRight,
  Globe
} from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string[]>>;

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "Skilled Immigration",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrors({});
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.issues) {
          setErrors(data.issues);
          setStatus("idle");
        } else {
          setErrorMsg(data.error || "Something went wrong. Please try again.");
          setStatus("error");
        }
        return;
      }

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full bg-transparent border-b py-3 text-sm transition-all focus:outline-none ${
      errors[field] 
        ? "border-red-400 focus:border-red-500" 
        : "border-zinc-200 focus:border-zinc-900"
    }`;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-[#FAFAFA] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <Header />

      <main className="relative overflow-hidden pt-40 pb-24">
        {/* Abstract Background Element */}
        <div className="pointer-events-none absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-[0.03]">
          <Globe size={800} strokeWidth={0.5} />
        </div>

        <motion.div 
          className="mx-auto max-w-7xl px-6 lg:px-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <div className="mb-24 max-w-3xl">
            <motion.span 
              variants={itemVariants}
              className="mb-4 inline-block text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase"
            >
              Contact Us
            </motion.span>
            <motion.h1 
              variants={itemVariants}
              className="mb-8 text-5xl font-light tracking-tight md:text-7xl"
            >
              Let's start your <br />
              <span className="font-medium text-[#2D3E75]">global journey.</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg leading-relaxed text-zinc-500 md:text-xl"
            >
              Expert guidance for your immigration needs. Reach out to our 
              dedicated consultants for a personalized strategy.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-24 lg:grid-cols-12">
            {/* Left: Contact Info & Details */}
            <div className="lg:col-span-4 lg:pr-12">
              <motion.div variants={itemVariants} className="space-y-16">
                {/* Office */}
                <div className="group">
                  <p className="mb-4 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Headquarters</p>
                  <p className="text-sm font-medium leading-loose text-zinc-600">
                    Al Ghaith Tower, 17th Floor <br />
                    Hamdan Street, Abu Dhabi, UAE
                  </p>
                  <a 
                    href="#" 
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-zinc-900 underline-offset-4 hover:underline"
                  >
                    View on Map <ArrowRight size={14} />
                  </a>
                </div>

                {/* Direct Reach */}
                <div className="space-y-10">
                  <div className="group">
                    <p className="mb-4 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Email Us</p>
                    <a 
                      href="mailto:Versiononeinvestment@gmail.com" 
                      className="text-lg font-medium text-zinc-900 transition-colors hover:text-[#2D3E75]"
                    >
                      Versiononeinvestment@gmail.com
                    </a>
                  </div>

                  <div className="group">
                    <p className="mb-4 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Call or WhatsApp</p>
                    <a 
                      href="https://wa.me/2348170000169" 
                      className="flex items-center gap-3 text-lg font-medium text-zinc-900 transition-colors hover:text-green-600"
                    >
                      <IconBrandWhatsapp size={20} className="text-green-500" />
                      +234 817 000 0169
                    </a>
                  </div>
                </div>

                {/* Social Links Snippet */}
                <div className="pt-8 border-t border-zinc-100">
                  <div className="flex gap-6">
                    {["LinkedIn", "Instagram", "Facebook"].map((social) => (
                      <a key={social} href="#" className="text-xs font-bold tracking-wider text-zinc-400 uppercase transition-colors hover:text-zinc-900">
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: The Form */}
            <div className="lg:col-span-8">
              <motion.div 
                variants={itemVariants}
                className="relative rounded-2xl bg-white p-8 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.03)] ring-1 ring-zinc-100 md:p-16"
              >
                {status === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="mb-6 rounded-full bg-green-50 p-4 text-green-500">
                      <CheckCircle2 size={48} strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 text-2xl font-medium text-zinc-900">Inquiry Received</h3>
                    <p className="max-w-xs text-sm text-zinc-500">
                      Thank you for reaching out. A consultant will review your case and contact you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="mt-8 text-xs font-bold tracking-widest text-zinc-900 underline underline-offset-8 uppercase"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Johnathan Doe"
                          className={inputClass("name")}
                          disabled={status === "loading"}
                        />
                        {errors.name && <p className="mt-1 text-[10px] text-red-500">{errors.name[0]}</p>}
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={inputClass("email")}
                          disabled={status === "loading"}
                        />
                        {errors.email && <p className="mt-1 text-[10px] text-red-500">{errors.email[0]}</p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+234 ..."
                          className={inputClass("phone")}
                          disabled={status === "loading"}
                        />
                        {errors.phone && <p className="mt-1 text-[10px] text-red-500">{errors.phone[0]}</p>}
                      </div>

                      {/* Service */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Interest</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={inputClass("service")}
                          disabled={status === "loading"}
                        >
                          <option>Skilled Immigration</option>
                          <option>Work Permits</option>
                          <option>Permanent Residency</option>
                          <option>Business Immigration</option>
                          <option>Job Seeker Visa</option>
                          <option>Visit / Tourist Visa</option>
                          <option>Spousal Work Permit</option>
                          <option>Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-1 md:col-span-2">
                        <label className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">How can we help?</label>
                        <textarea
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Describe your goals..."
                          className={inputClass("message")}
                          disabled={status === "loading"}
                        ></textarea>
                        {errors.message && <p className="mt-1 text-[10px] text-red-500">{errors.message[0]}</p>}
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-between gap-8 pt-4 md:flex-row">
                      <p className="text-[10px] leading-relaxed text-zinc-400 md:max-w-[240px]">
                        By clicking submit, you agree to our data processing policies. We respect your privacy.
                      </p>
                      
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-zinc-900 px-10 py-5 text-sm font-bold text-white transition-all hover:bg-zinc-800 disabled:opacity-50 md:w-auto"
                      >
                        {status === "loading" ? (
                          <Loader2 size={20} className="animate-spin" />
                        ) : (
                          <>
                            Request Strategy Session
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>

                    {status === "error" && errorMsg && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 flex items-center gap-2 text-xs text-red-500"
                      >
                        <XCircle size={14} />
                        {errorMsg}
                      </motion.div>
                    )}
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
