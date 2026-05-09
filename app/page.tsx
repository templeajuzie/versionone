"use client";

import Footer from "@/components/Footer";
import GallerySnippet from "@/components/GallerySnippet";
import { Header } from "@/components/Header";
import ContactSnipet from "@/components/Home/ContactSnipet.";
import InspirationSection from "@/components/InspirationSection";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import TravelHero from "@/components/TravelHero";

import About from "./about/page";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Header />
      <TravelHero />

      <div className="mx-auto my-20 flex max-w-7xl flex-col gap-28 px-4 md:px-6 lg:px-8">
        <About />
        <OurServices />
        <InspirationSection />
      </div>
      <Testimonials />
      <div className="mx-auto my-20 flex max-w-7xl flex-col gap-28 px-4 md:px-6 lg:px-8">
        <ContactSnipet />
        <GallerySnippet />
      </div>
      <Footer />
    </div>
  );
}
