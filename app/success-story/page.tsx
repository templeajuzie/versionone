import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const results = [
  ["10,000+", "clients supported"],
  ["50+", "destinations"],
  ["98%", "success rate"],
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <main>
        <section className="bg-zinc-950 px-6 pt-44 pb-24 text-white md:pt-52 md:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">Success stories</p>
              <h1 className="text-5xl leading-[0.95] font-black tracking-tight md:text-7xl">
                Real journeys.
                <br />
                Life-changing outcomes.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
                Meet the professionals, families, and entrepreneurs who turned global ambitions into a new chapter with
                clear, expert immigration guidance.
              </p>
            </div>

            <div className="mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-3">
              {results.map(([value, label]) => (
                <div key={label} className="bg-zinc-950 p-7">
                  <p className="text-3xl font-black text-white">{value}</p>
                  <p className="mt-1 text-sm text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 md:grid-cols-[1fr_auto] md:p-14">
            <div>
              <div className="mb-5 flex items-center gap-2 text-sm font-bold text-emerald-600">
                <CheckCircle2 size={18} />
                Your story can be next
              </div>
              <h2 className="text-primary text-3xl font-black tracking-tight md:text-5xl">
                Ready to make your move?
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-zinc-500">
                Tell us where you want to go. We’ll assess your profile and map the clearest route forward.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-sm font-bold text-white transition-transform duration-150 active:scale-[0.97]"
            >
              Start your journey
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
