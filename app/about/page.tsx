import About from "@/components/About";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="mx-auto flex max-w-7xl flex-col px-4 pt-40 pb-20 md:px-6 lg:px-8">
        <About />
      </main>
      <Footer />
    </div>
  );
}
