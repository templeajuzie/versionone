import { Header } from '@/components/Header';
import Footer from '@/components/Footer';

export default function JobOffersPage() {
  return (
    <main className="min-h-screen pt-32">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-[#2D3E75] mb-8 uppercase">Job Offers</h1>
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 min-h-[400px] flex items-center justify-center text-gray-400">
          Content for Job Offers is coming soon...
        </div>
      </div>
      <Footer />
    </main>
  );
}
