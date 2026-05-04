"use client";

import Footer from "@/components/Footer";
import GallerySnippet from "@/components/GallerySnippet";
import { Header } from "@/components/Header";
import ContactSnipet from "@/components/Home/ContactSnipet.";
import InspirationSection from "@/components/InspirationSection";
import PlacesYouMayLike from "@/components/PlacesYouMayLike";
import PromoCarousel from "@/components/PromoCarousel";
import SupportFloating from "@/components/SupportFloating";
import Testimonials from "@/components/Testimonials";
import TravelHero from "@/components/TravelHero";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main className="">
        <TravelHero />

        {/* Main Content Area with Premium Overlap */}
        <div className="relative z-20 mx-auto -mt-30 flex max-w-7xl flex-col gap-16 px-4 sm:-mt-30 md:-mt-30 md:gap-24 md:px-6 lg:px-8">
          <InspirationSection />
        </div>
        <div className="mx-auto mb-20 flex max-w-7xl flex-col gap-20 px-4 md:px-6 lg:px-8">
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
