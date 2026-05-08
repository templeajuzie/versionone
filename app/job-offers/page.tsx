import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

export default function JobOffersPage() {
  return (
    <main className="min-h-screen pt-32">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="mb-8 text-4xl font-bold text-[#2D3E75] uppercase">Job Offers</h1>
        <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-gray-100 bg-white p-8 text-gray-400 shadow-sm">
          Content for Job Offers is coming soon...
        </div>
      </div>
      <Footer />
    </main>
  );
}
