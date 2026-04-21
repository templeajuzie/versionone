"use client";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import TravelHero from "@/components/TravelHero";
import SupportFloating from "@/components/SupportFloating";
import PromoCarousel from "@/components/PromoCarousel";
import InspirationSection from "@/components/InspirationSection";
import PlacesYouMayLike from "@/components/PlacesYouMayLike";
import Testimonials from "@/components/Testimonials";
import GallerySnippet from "@/components/GallerySnippet";
import ContactSnipet from "@/components/Home/ContactSnipet.";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main className="">
        <TravelHero />

        {/* Main Content Area with Premium Overlap */}
        <div className="max-w-7xl mx-auto -mt-30 sm:-mt-30 md:-mt-30 relative z-20 flex flex-col gap-16 md:gap-24 px-4 md:px-6 lg:px-8">
          <InspirationSection />
        </div>
        <div className="flex flex-col gap-20 max-w-7xl mx-auto mb-20 px-4 md:px-6 lg:px-8">
          {/* <PromoCarousel /> */}
          <PlacesYouMayLike />
          <Testimonials />
          <ContactSnipet />
          <GallerySnippet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
