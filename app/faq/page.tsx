"use client";
import React from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const faqsData = [
    {
      question: "Lightning-Fast Performance",
      answer: "Built with speed — minimal load times and optimized rendering.",
    },
    {
      question: "Fully Customizable Components",
      answer: "Easily adjust styles, structure, and behavior to match your project needs.",
    },
    {
      question: "Responsive by Default",
      answer: "Every component are responsive by default — no extra CSS required.",
    },
    {
      question: "Tailwind CSS Powered",
      answer: "Built using Tailwind utility classes — no extra CSS or frameworks required.",
    },
    {
      question: "Dark Mode Support",
      answer: "All components come ready with light and dark theme support out of the box.",
    },
  ];
  return (
    <div className="">
      <Header />
      <div className="my-20">
        <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        <div className="flex flex-col items-center px-3 text-center text-slate-800">
          <p className="text-base font-medium text-slate-600">FAQ</p>
          <h1 className="mt-2 text-3xl font-semibold md:text-4xl">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-sm text-sm text-slate-500">
            Proactively answering FAQs boosts user confidence and cuts down on support tickets.
          </p>
          <div className="mt-6 flex w-full max-w-xl flex-col items-start gap-4 text-left">
            {faqsData.map((faq, index) => (
              <div key={index} className="flex w-full flex-col items-start">
                <div
                  className="flex w-full cursor-pointer items-center justify-between rounded border border-slate-200 bg-slate-50 p-4"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h2 className="text-sm">{faq.question}</h2>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#1D293D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className={`px-4 text-sm text-slate-500 transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[300px] translate-y-0 pt-4 opacity-100" : "max-h-0 -translate-y-2 opacity-0"}`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
