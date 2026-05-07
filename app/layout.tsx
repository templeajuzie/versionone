import { TooltipProvider } from "@/components/ui/tooltip";
import { JobProvider } from "@/context/JobContext";
import { ReactQueryProvider } from "@/provider/QueryClientProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Version One | Travel and Explore the World",
  description:
    "Experience a new version of travel with Version One. From hidden gems to iconic landmarks, we curate the perfect journey for your next adventure.",
  openGraph: {
    type: "website",
    siteName: "Version One Travel",
    title: "Version One | Travel and Explore the World",
    description:
      "Experience a new version of travel with Version One. Discover destinations that stay with you forever.",
    locale: "en_US",
    images: [
      {
        url: "/OG-image.jpg",
        width: 1200,
        height: 630,
        alt: "Version One Travel - Explore the World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Version One | Travel and Explore the World",
    description:
      "Experience a new version of travel with Version One. Discover destinations that stay with you forever.",
    images: ["/OG-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReactQueryProvider>
          <JobProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </JobProvider>
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
