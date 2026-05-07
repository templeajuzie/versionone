import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  Globe2,
  Landmark,
  Lightbulb,
  MapPin,
  Shield,
  TrendingUp,
  Users,
  Wallet,
  Target,
  Star,
} from "lucide-react";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Commercial Investment Programs (Worldwide) | Fly High Abroad",
  description:
    "Gain global residency through active commercial investments. Explore business investment visas, enterprise schemes, and job-creation programs worldwide.",
};

/* ─────────────── DATA ─────────────── */

const programTypes = [
  { icon: Briefcase, title: "Commercial Investment Visa" },
  { icon: Building2, title: "Business Investment Programs" },
  { icon: Lightbulb, title: "Enterprise Investment Schemes" },
  { icon: Users, title: "Job Creation Investment Programs" },
  { icon: Landmark, title: "Corporate Investment Residency" },
];

const applicationSteps = [
  "Choose destination country and investment route",
  "Prepare business or investment plan",
  "Show proof of funds and source of wealth",
  "Make qualifying commercial investment",
  "Submit visa/residency application",
  "Attend interview or business assessment (if required)",
  "Receive visa/residency approval",
];

const benefits = [
  { icon: TrendingUp, label: "Residency through active business investment" },
  { icon: Wallet, label: "Opportunity to generate income and profits" },
  { icon: Globe2, label: "Access to global markets" },
  { icon: Users, label: "Family inclusion (spouse & children)" },
  { icon: Star, label: "High return on investment potential" },
  { icon: Shield, label: "Pathway to permanent residency and citizenship" },
];

const countries = [
  { name: "United States", flag: "🇺🇸" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Portugal", flag: "🇵🇹" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "United Arab Emirates", flag: "🇦🇪" },
];

const audience = [
  { icon: Briefcase, label: "Investors seeking active business involvement" },
  { icon: Globe2, label: "Entrepreneurs expanding internationally" },
  { icon: Target, label: "High-net-worth individuals" },
  { icon: CheckCircle2, label: "Applicants targeting residency through commercial ventures" },
];

const sideNav = [
  { href: "#overview", label: "Overview" },
  { href: "#program-types", label: "Types of Programs" },
  { href: "#how-to-apply", label: "How to Apply" },
  { href: "#timeline", label: "Processing Timeline" },
  { href: "#benefits", label: "Key Benefits" },
  { href: "#countries", label: "Countries" },
  { href: "#who", label: "Who Should Apply" },
];

/* ─────────────── PAGE ─────────────── */

export default function CommercialInvestmentPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-28">

        {/* ── PAGE HEADER BAR ── */}
        <div className="border-b border-gray-100 bg-[#f7f9ff]">
          <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center gap-1.5 text-[11px] font-medium text-gray-400">
              <Link href="/" className="hover:text-[#2D3E75] transition-colors">Home</Link>
              <ChevronRight size={11} />
              <Link href="/services" className="hover:text-[#2D3E75] transition-colors">Services</Link>
              <ChevronRight size={11} />
              <Link href="/services/business" className="hover:text-[#2D3E75] transition-colors">Business</Link>
              <ChevronRight size={11} />
              <span className="text-[#2D3E75]">Commercial Investment</span>
            </nav>

            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#2D3E75]/8 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#2D3E75]">
                  <Globe2 size={11} /> Business Immigration
                </span>
                <h1 className="text-3xl font-black tracking-tight text-gray-900 md:text-4xl">
                  Commercial Investment Programs
                  <span className="ml-3 text-sm font-semibold text-gray-400">(Worldwide)</span>
                </h1>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-amber-50 px-4 py-2 text-sm">
                <Clock size={14} className="text-amber-500" />
                <span className="font-semibold text-amber-700">4 – 16 weeks</span>
                <span className="text-amber-500/60">avg. processing</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── BODY: SIDEBAR + CONTENT ── */}
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">

            {/* ── STICKY SIDEBAR ── */}
            <aside className="w-full shrink-0 lg:w-56">
              <div className="sticky top-28">
                {/* On-page nav */}
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">On This Page</p>
                <nav className="flex flex-col gap-0.5">
                  {sideNav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-500 transition-all hover:bg-[#2D3E75]/6 hover:text-[#2D3E75]"
                    >
                      <span className="h-1 w-1 rounded-full bg-gray-300 transition-colors group-hover:bg-[#2D3E75]" />
                      {item.label}
                    </a>
                  ))}
                </nav>

                {/* Contact card */}
                <div className="mt-8 rounded-2xl bg-[#2D3E75] p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-200">Need help?</p>
                  <p className="mt-1 text-sm font-semibold leading-snug">Speak to an investment advisor</p>
                  <Link
                    href="/contact"
                    id="sidebar-cta"
                    className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-amber-400"
                  >
                    Book Consultation <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </aside>

            {/* ── MAIN CONTENT ── */}
            <div className="min-w-0 flex-1 space-y-14">

              {/* OVERVIEW */}
              <section id="overview">
                <SectionLabel>Overview</SectionLabel>
                <div className="prose-custom mt-4 rounded-2xl border border-gray-100 bg-gray-50 p-7">
                  <p className="text-base leading-relaxed text-gray-700">
                    A <strong className="text-gray-900">Commercial Investment Program</strong> is a strategic
                    pathway that allows individuals to gain residency by making active commercial
                    investments—such as establishing, acquiring, or investing in businesses that contribute
                    to the economy and create jobs.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-gray-600">
                    Unlike passive investment routes, these programs reward genuine commercial
                    participation. Investors not only secure residency rights for themselves and their
                    families but also retain the opportunity to generate income and grow their business
                    in a new market.
                  </p>
                </div>
              </section>

              {/* TYPES OF PROGRAMS */}
              <section id="program-types">
                <SectionLabel>Types of Programs</SectionLabel>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {programTypes.map(({ icon: Icon, title }) => (
                    <div
                      key={title}
                      className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm transition-all hover:border-[#2D3E75]/20 hover:shadow-md"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2D3E75]/8">
                        <Icon size={17} className="text-[#2D3E75]" />
                      </div>
                      <p className="text-sm font-semibold text-gray-800">{title}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* HOW TO APPLY */}
              <section id="how-to-apply">
                <SectionLabel>How to Apply</SectionLabel>
                <div className="mt-4 space-y-2">
                  {applicationSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 rounded-xl border border-transparent px-5 py-4 transition-colors hover:border-gray-100 hover:bg-gray-50"
                    >
                      {/* Step number */}
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2D3E75] text-[11px] font-black text-white">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <p className="pt-0.5 text-sm leading-relaxed text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* PROCESSING TIMELINE */}
              <section id="timeline">
                <SectionLabel>Processing Timeline</SectionLabel>
                <div className="mt-4 overflow-hidden rounded-2xl border border-amber-200 bg-amber-50">
                  <div className="flex items-center gap-4 border-b border-amber-200 px-6 py-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-amber-600">Average worldwide</p>
                      <p className="text-2xl font-black text-amber-800">4 – 16 Weeks</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 divide-y divide-amber-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    {[
                      { phase: "Document Prep", range: "1 – 3 wks" },
                      { phase: "Application Review", range: "2 – 8 wks" },
                      { phase: "Approval", range: "1 – 5 wks" },
                    ].map((item) => (
                      <div key={item.phase} className="px-6 py-4 text-center">
                        <p className="text-xs font-medium text-amber-600">{item.phase}</p>
                        <p className="mt-1 text-lg font-black text-amber-800">{item.range}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* KEY BENEFITS */}
              <section id="benefits">
                <SectionLabel>Key Benefits</SectionLabel>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {benefits.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
                    >
                      <Icon size={17} className="shrink-0 text-[#2D3E75]" />
                      <p className="text-sm text-gray-700">{label}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* COUNTRIES */}
              <section id="countries">
                <SectionLabel>Countries Offering Commercial Investment Programs</SectionLabel>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {countries.map((c) => (
                    <div
                      key={c.name}
                      className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-white py-5 text-center shadow-sm transition-all hover:border-[#2D3E75]/20 hover:shadow-md"
                    >
                      <span className="text-3xl">{c.flag}</span>
                      <p className="text-xs font-semibold text-gray-700">{c.name}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* WHO SHOULD APPLY */}
              <section id="who">
                <SectionLabel>Who Should Apply</SectionLabel>
                <div className="mt-4 space-y-3">
                  {audience.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2D3E75]/8">
                        <Icon size={17} className="text-[#2D3E75]" />
                      </div>
                      <p className="text-sm text-gray-700">{label}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CLOSING NOTE + CTA */}
              <section>
                <div className="rounded-2xl border border-[#2D3E75]/15 bg-[#f7f9ff] px-7 py-8">
                  <p className="text-base font-semibold italic leading-relaxed text-[#2D3E75]">
                    &ldquo;Invest smart, grow globally, and secure your future through commercial opportunities.&rdquo;
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      id="page-cta-apply"
                      className="inline-flex items-center gap-2 rounded-full bg-[#2D3E75] px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#1a2a5c] active:scale-95"
                    >
                      Start Your Application <ArrowUpRight size={15} />
                    </Link>
                    <Link
                      href="/contact"
                      id="page-cta-contact"
                      className="inline-flex items-center gap-2 rounded-full border border-[#2D3E75]/30 px-6 py-3 text-sm font-semibold text-[#2D3E75] transition-all hover:bg-[#2D3E75]/8"
                    >
                      Speak to an Advisor
                    </Link>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}

/* ─────────────── HELPERS ─────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-5 w-1 rounded-full bg-[#2D3E75]" />
      <h2 className="text-[11px] font-black uppercase tracking-widest text-[#2D3E75]">{children}</h2>
      <div className="h-px flex-1 bg-gray-100" />
    </div>
  );
}
