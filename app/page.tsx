import Footer from "@/components/Footer";
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GallerySnippet from "@/components/Gallery";
import ServicesSnipet from "@/components/Services";
import Brands from "@/components/Brands";
import LearnMore from "@/components/LearnMore";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <div className="flex flex-col gap-y-10">
        <Brands />
        <ServicesSnipet />
        <GallerySnippet />
        <LearnMore />
        <Testimonials />
      </div>

      <Footer />
    </div>
  );
}
