"use client";

import React from "react";

import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Eye,
  Globe,
  Heart,
  MapPin,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Success Rate", value: "98%", icon: <Award size={20} className="text-amber-500" /> },
  { label: "Happy Clients", value: "10k+", icon: <Users size={20} className="text-blue-500" /> },
  { label: "Countries", value: "50+", icon: <Globe size={20} className="text-emerald-500" /> },
  { label: "Years of Expertise", value: "12+", icon: <CheckCircle2 size={20} className="text-violet-500" /> },
];

const values = [
  {
    title: "Integrity",
    desc: "We uphold the highest ethical standards, ensuring honesty and full transparency in every consultation, from assessment to visa approval.",
    icon: <Shield size={22} />,
    bg: "bg-blue-600",
  },
  {
    title: "Excellence",
    desc: "Our commitment to precision results in industry-leading approval rates. We don't just file applications — we build winning cases.",
    icon: <Star size={22} />,
    bg: "bg-violet-600",
  },
  {
    title: "Client-First",
    desc: "Your dreams are our priority. We tailor every immigration strategy to your unique professional background, lifestyle, and family goals.",
    icon: <Heart size={22} />,
    bg: "bg-rose-600",
  },
  {
    title: "Global Reach",
    desc: "From UAE to Canada, UK to Australia, our expertise spans over 50 destinations worldwide, giving you access to the best opportunities.",
    icon: <TrendingUp size={22} />,
    bg: "bg-emerald-600",
  },
];

const disciplines = [
  {
    number: "01",
    title: "Who We Are",
    headline: "A decade of turning immigration dreams into reality.",
    body: "Global Workgate is a premier immigration and global migration consultancy headquartered in Abu Dhabi, UAE. Founded on the principle that every person deserves a chance to build a better life abroad, we combine certified legal expertise with genuine human care.",
    img: "/images/stand1.jpg",
    tag: "About the Agency",
  },
  {
    number: "02",
    title: "What We Do",
    headline: "End-to-end immigration, from first call to flight day.",
    body: "We handle every step of your migration journey — profile assessment, document preparation, visa filing, and post-approval support. Whether it's a Skilled Worker Visa, Permanent Residency, or Golden Visa, our experts have navigated it all.",
    img: "/images/stand2.jpg",
    tag: "Our Services",
  },
  {
    number: "03",
    title: "Our Reach",
    headline: "50+ countries. Countless life-changing stories.",
    body: "From skilled professionals relocating to Canada to families seeking permanent residency in Europe, our global network and in-depth knowledge of immigration law gives our clients a decisive edge in their applications.",
    img: "/images/stand3.jpg",
    tag: "Global Impact",
  },
];

const About = () => {
  return (
    <div className="flex flex-col gap-24 md:gap-14">
      {/* ── HERO – WHO WE ARE ───────────────────────────────────── */}
      <section className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary text-3xl leading-[0.95] font-black tracking-tight sm:text-6xl lg:text-5xl"
            >
              Get to know
              <br />
              <span className="text-primary mr-2 italic">About Us</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-500"
            >
              Global Workgate is a premier immigration consultancy helping individuals, families, and businesses
              navigate global relocation with expert precision and genuine care. We specialize in Skilled Visas, Work
              Permits, Permanent Residency, and Business Immigration across 50+ countries.
            </motion.p>

            {/* Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.08 }}
                  className="rounded-lg border border-zinc-100 bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-50">{stat.icon}</div>
                  <div className="text-primary text-2xl font-black">{stat.value}</div>
                  <div className="mt-0.5 text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-[50vh] w-auto overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="https://i.pinimg.com/1200x/19/03/f8/1903f8ad1d75c5113366aa85cc867146.jpg"
                alt="Global Workgate — Global Aviation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            {/* Floating Quote */}
            {/* <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -left-6 w-72 rounded-lg border border-zinc-800 bg-zinc-900 p-7 shadow-2xl"
            >
              <p className="text-sm leading-relaxed text-zinc-300 italic">
                Our mission is to bridge the gap between where you are and where you deserve to be.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
                  FH
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Founder & CEO</p>
                  <p className="text-[10px] text-zinc-500">Global Workgate</p>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* ── THREE DISCIPLINES ────────────────────────────────────── */}
      <section className="relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-primary text-3xl leading-[0.95] font-black tracking-tight sm:text-6xl lg:text-5xl"
        >
          This is what we
          <br />
          <span className="text-primary mr-2 italic">Stand for...</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 mb-5 max-w-2xl text-lg leading-relaxed text-zinc-500"
        >
          At Global Workgate, our values are the foundation of every successful migration with unwavering commitment
          to 3 core principles:
        </motion.p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {disciplines.map((d, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="group"
            >
              <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-lg bg-zinc-100">
                <Image
                  src={d.img}
                  alt={d.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Top Tag */}
                <div className="absolute top-5 left-5">
                  <span className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-[10px] font-black tracking-widest text-white uppercase backdrop-blur-md">
                    {d.tag}
                  </span>
                </div>
                {/* Bottom Number */}
                <div className="absolute right-5 bottom-5 text-5xl leading-none font-black text-white/20">
                  {d.number}
                </div>
              </div>
              <div className="border-b border-zinc-100 pb-6">
                <p className="mb-3 text-[10px] font-bold tracking-[0.15em] text-zinc-400 uppercase">
                  {d.number} — {d.title}
                </p>
                <h3 className="group-hover:text-primary text-primary mb-4 text-xl leading-snug font-black tracking-tight transition-colors">
                  {d.headline}
                </h3>
                <p className="text-sm leading-7 text-zinc-500">{d.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────────── */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-xl bg-blue-600 p-10 text-white shadow-sm"
        >
          <div className="pointer-events-none absolute -top-8 -right-8 h-48 w-48 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -bottom-12 -left-8 h-64 w-64 rounded-full bg-white/5" />
          <div className="relative z-10">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-white/20 backdrop-blur-md">
              <Target size={26} />
            </div>
            <p className="mb-3 text-[10px] font-bold tracking-[0.15em] text-blue-200 uppercase">Our Mission</p>
            <h3 className="mb-6 text-4xl leading-tight font-black tracking-tight">
              Simplify the
              <br />
              path abroad.
            </h3>
            <p className="text-lg leading-relaxed text-blue-100/80">
              To provide world-class immigration solutions through transparency, certified expertise, and personalized
              guidance — making global migration accessible and stress-free for everyone.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 h-1 w-full translate-y-full transform bg-white/30 transition-transform duration-500 group-hover:translate-y-0" />
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="group relative overflow-hidden rounded-xl bg-zinc-900 p-10 text-white shadow-sm"
        >
          <div className="pointer-events-none absolute -top-8 -right-8 h-48 w-48 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -bottom-12 -left-8 h-64 w-64 rounded-full bg-blue-600/10" />
          <div className="relative z-10">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg border border-white/10 bg-white/10 backdrop-blur-md">
              <Eye size={26} className="text-blue-400" />
            </div>
            <p className="mb-3 text-[10px] font-bold tracking-[0.15em] text-zinc-500 uppercase">Our Vision</p>
            <h3 className="mb-6 text-4xl leading-tight font-black tracking-tight">
              The global
              <br />
              standard in migration.
            </h3>
            <p className="text-lg leading-relaxed text-zinc-400">
              To become the most trusted immigration partner worldwide — recognized for our unwavering commitment to
              client success, ethical practice, and life-changing outcomes.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── CORE VALUES ─────────────────────────────────────────── */}
      <section>
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] text-zinc-400 uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" /> What We Stand For
          </span>
          <h2 className="text-primary text-4xl font-black tracking-tight md:text-5xl">
            Our Core <span className="text-primary">Values</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-500">
            The principles that drive our culture and define every interaction we have with our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-xl border border-zinc-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-sm"
            >
              {/* <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full text-white ${val.bg}`}>
                {val.icon}
              </div> */}
              <h4 className="text-primary mb-3 text-xl font-black">{val.title}</h4>
              <p className="text-sm leading-7 text-zinc-500">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
