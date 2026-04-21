import Link from "next/link";
import React from "react";
import { NavbarLogo } from "./ui/resizable-navbar";

const Footer = () => {
  const sections = [
    {
      title: "Popular Destinations",
      links: [
        { label: "London", href: "#" },
        { label: "Paris", href: "#" },
        { label: "New York", href: "#" },
        { label: "Tokyo", href: "#" },
        { label: "Dubai", href: "#" },
        { label: "Owerri", href: "#" },
        { label: "Nairobi", href: "#" },
        { label: "Warri", href: "#" },
        { label: "Lagos", href: "#" },
        { label: "Abuja", href: "#" },
        { label: "Port Harcourt", href: "#" },
        { label: "Enugu", href: "#" },
        { label: "Benin City", href: "#" },
        { label: "Ibadan", href: "#" },
        { label: "Kano", href: "#" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { label: "Hotel Booking", href: "#" },
        { label: "Flight Search", href: "#" },
        { label: "Trains & Rails", href: "#" },
        { label: "Car Rental", href: "#" },
        { label: "Vacation Packages", href: "#" },
        { label: "Activities & Tours", href: "#" },
        { label: "Cruise Deals", href: "#" },
        { label: "Travel Insurance", href: "#" },
        { label: "Group Travel", href: "#" },
        { label: "Business Travel", href: "#" },
      ],
    },
    {
      title: "About VersionOne",
      links: [
        { label: "Company Info", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Newsroom", href: "#" },
        { label: "Investor Relations", href: "#" },
        { label: "Sustainability", href: "#" },
        { label: "Partner with Us", href: "#" },
        { label: "Affiliate Program", href: "#" },
        { label: "Travel Guides", href: "#" },
        { label: "Rewards Program", href: "#" },
        { label: "Community", href: "#" },
      ],
    },
    {
      title: "Support & Legal",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Manage Booking", href: "#" },
        { label: "Refund Policy", href: "#" },
        { label: "Accessibility", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Security Info", href: "#" },
        { label: "Legal Notices", href: "#" },
        { label: "Sitemap", href: "#" },
        { label: "Travel Advice", href: "#" },
        { label: "Feedback", href: "#" },
        { label: "Mobile App", href: "#" },
        { label: "Gift Cards", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-blue-900 text-white pt-8 pb-4 relative overflow-hidden px-4 md:px-6">
      {/* Dynamic Background SVG */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg
          className="absolute -bottom-20 -left-20 w-full h-full rotate-12 opacity-20"
          viewBox="0 0 68 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.141 0C13.4854 0 10.9387 1.04871 9.06091 2.91543L2.93268 9.00761C1.05492 10.8743 0 13.4061 0 16.0461C0 21.5435 4.48289 26 10.0128 26C12.6684 26 15.2152 24.9512 17.0929 23.0845L21.3319 18.8705C21.3319 18.8705 21.3319 18.8706 21.3319 18.8705L33.6827 6.59239C34.5795 5.70086 35.7958 5.2 37.0641 5.2C39.1874 5.2 40.9876 6.57576 41.6117 8.47953L45.5096 4.60457C43.7314 1.83589 40.6134 0 37.0641 0C34.4085 0 31.8617 1.04871 29.984 2.91543L13.3943 19.4076C12.4974 20.2992 11.2811 20.8 10.0128 20.8C7.37176 20.8 5.23077 18.6716 5.23077 16.0461C5.23077 14.7852 5.73459 13.5761 6.63139 12.6845L12.7596 6.59239C13.6564 5.70086 14.8727 5.2 16.141 5.2C18.2645 5.2 20.0645 6.57582 20.6887 8.47965L24.5866 4.60466C22.8084 1.83595 19.6904 0 16.141 0Z"
            fill="white"
          />
          <path
            d="M34.3188 19.4076C33.422 20.2992 32.2056 20.8 30.9373 20.8C28.8143 20.8 27.0143 19.4246 26.39 17.5211L22.4922 21.396C24.2705 24.1643 27.3883 26 30.9373 26C33.5929 26 36.1397 24.9512 38.0175 23.0845L54.6072 6.59239C55.504 5.70086 56.7203 5.2 57.9886 5.2C60.6297 5.2 62.7707 7.32839 62.7707 9.95393C62.7707 11.2148 62.2669 12.4239 61.37 13.3155L55.2419 19.4076C54.345 20.2992 53.1287 20.8 51.8604 20.8C49.7372 20.8 47.9371 19.4243 47.3129 17.5207L43.4151 21.3957C45.1933 24.1642 48.3112 26 51.8604 26C54.516 26 57.0628 24.9512 58.9405 23.0845L65.0687 16.9924C66.9465 15.1257 68.0014 12.5939 68.0014 9.95393C68.0014 4.45652 63.5186 0 57.9886 0C55.333 0 52.7863 1.04871 50.9085 2.91543L34.3188 19.4076Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent shadow-[0_0_50px_rgba(37,99,235,0.3)]" />

      <div className="max-w-7xl mx-auto px-2relative z-10">
        {/* Top Section: Newsletter & Branding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="w-fit px-2 py-0.5 bg-white rounded-lg">
              <NavbarLogo />
            </div>
            <p className="text-blue-50 max-w-sm text-sm leading-relaxed mt-6">
              Your trusted partner for effortless travel. From luxury hotels to
              global flights, we make every journey extraordinary.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">
              Stay updated with travel deals
            </h3>
            <div className="flex gap-2 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-blue-400/20 border border-blue-400 placeholder:text-blue-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all text-white"
              />
              <button className="bg-white hover:bg-blue-50 text-blue-600 font-bold px-6 py-3 rounded-xl transition-all shadow-lg active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-16 border-b border-blue-400/30">
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-blue-100 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-blue-200 text-xs">
            © {new Date().getFullYear()} VersionOne Travel. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="p-2 bg-blue-400/20 hover:bg-blue-400/40 text-white rounded-full transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="p-2 bg-blue-400/20 hover:bg-blue-400/40 text-white rounded-full transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
