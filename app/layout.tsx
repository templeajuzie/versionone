import Chatbot from "@/components/Chatbot";
import { TooltipProvider } from "@/components/ui/tooltip";
import { JobProvider } from "@/context/JobContext";
import { ApplicationContextProvider } from "@/context/applicationContext";
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
  title: "Global Workgate | Your Gateway to Global Work & Immigration",
  description:
    "Global Workgate is your trusted partner for immigration, work permits, visas, and permanent residency. We help skilled professionals, businesses, and families relocate with confidence.",
  openGraph: {
    type: "website",
    siteName: "Global Workgate",
    title: "Global Workgate | Your Gateway to Global Work & Immigration",
    description:
      "Expert immigration services for work permits, visas, permanent residency, and business migration. Start your global journey with Global Workgate.",
    locale: "en_US",
    images: [
      {
        url: "/OG-image.jpg",
        width: 1200,
        height: 630,
        alt: "Global Workgate - Your Gateway to Global Work & Immigration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Workgate | Your Gateway to Global Work & Immigration",
    description:
      "Expert immigration services for work permits, visas, permanent residency, and business migration. Start your global journey with Global Workgate.",
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
            <ApplicationContextProvider>
              <TooltipProvider>{children}</TooltipProvider>
            </ApplicationContextProvider>
          </JobProvider>
        </ReactQueryProvider>
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
