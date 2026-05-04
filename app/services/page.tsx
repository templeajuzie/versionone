import React from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import ServicesSnipet from "@/components/Services";
import Link from "next/link";

const Services = () => {
  return (
    <div>
      <Header />

      <div className="mx-auto mt-20 max-w-7xl px-2">
        <section className="pt-12 pb-12 lg:pt-16 lg:pb-16">
          <div className="mx-auto flex flex-col px-2 xl:px-0">
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center rounded-full bg-white px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-700 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)]">
                Introducing saaslandings
              </div>
              <div className="mt-6 bg-gradient-to-b from-slate-800 to-slate-600 bg-clip-text text-center text-3xl font-semibold text-transparent sm:mx-auto sm:w-2/3 md:w-1/2 lg:mt-9 lg:text-4xl lg:leading-tight xl:w-2/3">
                Exploring Trends, Innovations, Stories in the Dynamic World of SaaS
              </div>
              <p className="mt-4 text-center text-sm leading-normal font-medium text-slate-600 sm:mx-auto sm:w-2/3 md:w-1/2 lg:text-base lg:leading-normal xl:w-2/5">
                Discover the latest innovations, cutting-edge technologies, and forward-thinking ideas shaping the SaaS
                landscape
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  aria-label="Show active tab"
                  className="flex items-center justify-center rounded-full bg-slate-900 px-2.5 py-1 text-sm font-medium whitespace-nowrap text-white shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)]"
                >
                  Show all
                </button>
                <button
                  type="button"
                  aria-label="Show active tab"
                  className="flex items-center justify-center rounded-full bg-white px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-700 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)]"
                >
                  Tips &amp; Tricks
                </button>
                <button
                  type="button"
                  aria-label="Show active tab"
                  className="flex items-center justify-center rounded-full bg-white px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-700 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)]"
                >
                  Trends
                </button>
                <button
                  type="button"
                  aria-label="Show active tab"
                  className="flex items-center justify-center rounded-full bg-white px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-700 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)]"
                >
                  Insights
                </button>
                <button
                  type="button"
                  aria-label="Show active tab"
                  className="flex items-center justify-center rounded-full bg-white px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-700 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)]"
                >
                  Marketing
                </button>
              </div>
            </div>
            <div className="mt-6 grid gap-y-3 sm:mx-auto sm:w-2/3 md:w-1/2 md:px-4 lg:mx-0 lg:mt-12 lg:w-full lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6 lg:px-8">
              <article className="grid gap-x-6 gap-y-2 lg:gap-y-0 xl:grid-cols-[15.625rem_auto]">
                <figure className="relative w-full self-start rounded-2xl shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)]">
                  <img
                    className="h-40 w-full rounded-2xl object-cover object-left-top lg:h-48"
                    src="https://tailkits.com/ui/iframe/assets/img/bg-blog-1.png"
                    alt="Mastering Saas Landing Pages: 10 Essential Tips for Conversions"
                  />
                  <div className="absolute top-3 right-3 z-10 items-center justify-center rounded-full bg-white px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-700 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] xl:hidden">
                    Tips
                  </div>
                </figure>
                <div className="flex flex-col items-start p-4 xl:p-0">
                  <div className="hidden items-center justify-center rounded-full bg-white px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-700 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] xl:block">
                    Tips
                  </div>
                  <div className="xl:mt-2.5">
                    <a
                      className="font-bold text-neutral-700"
                      href="#"
                      title="Mastering Saas Landing Pages: 10 Essential Tips for Conversions"
                    >
                      Mastering Saas Landing Pages: 10 Essential Tips for Conversions
                    </a>
                    <p className="mt-2 text-sm font-medium text-neutral-500">
                      Linear is a tool to remove barriers. Powerful yet simple to use, it helps you to plan ahead,
                      linear is a tool to remove barriers.
                    </p>
                  </div>
                  <div className="mt-2.5 flex grow items-end">
                    <div className="flex flex-wrap items-center gap-1">
                      <div className="text-sm font-medium text-slate-600">Sarah Thompson</div>
                      <div className="flex items-center gap-x-1">
                        <span className="h-1 w-1 rounded-full bg-neutral-200" />
                        <time className="text-sm font-medium text-neutral-500">16 April 2023</time>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="grid gap-x-6 gap-y-2 lg:gap-y-0 xl:grid-cols-[15.625rem_auto]">
                <figure className="relative w-full self-start rounded-2xl shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)]">
                  <img
                    className="h-40 w-full rounded-2xl object-cover object-left-top lg:h-48"
                    src="https://tailkits.com/ui/iframe/assets/img/bg-blog-1.png"
                    alt="Designing Saas Landing Pages that Wow: Best Practices and Creative Strategies"
                  />
                  <div className="absolute top-3 right-3 z-10 items-center justify-center rounded-full bg-white px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-700 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] xl:hidden">
                    Trends
                  </div>
                </figure>
                <div className="flex flex-col items-start p-4 xl:p-0">
                  <div className="hidden items-center justify-center rounded-full bg-white px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-700 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] xl:block">
                    Trends
                  </div>
                  <div className="xl:mt-2.5">
                    <a
                      className="font-bold text-neutral-700"
                      href="#"
                      title="Designing Saas Landing Pages that Wow: Best Practices and Creative Strategies"
                    >
                      Designing Saas Landing Pages that Wow: Best Practices and Creative Strategies
                    </a>
                    <p className="mt-2 text-sm font-medium text-neutral-500">
                      Create visually stunning and highly effective landing pages for your Saas business
                    </p>
                  </div>
                  <div className="mt-2.5 flex grow items-end">
                    <div className="flex flex-wrap items-center gap-1">
                      <div className="text-sm font-medium text-slate-600">David Wilson</div>
                      <div className="flex items-center gap-x-1">
                        <span className="h-1 w-1 rounded-full bg-neutral-200" />
                        <time className="text-sm font-medium text-neutral-500">16 April 2023</time>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="grid gap-x-6 gap-y-2 lg:gap-y-0 xl:grid-cols-[15.625rem_auto]">
                <figure className="relative w-full self-start rounded-2xl shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)]">
                  <img
                    className="h-40 w-full rounded-2xl object-cover object-left-top lg:h-48"
                    src="https://tailkits.com/ui/iframe/assets/img/bg-blog-1.png"
                    alt="Cracking the Code: Writing Compelling Saas Landing Page Copy that Converts"
                  />
                  <div className="absolute top-3 right-3 z-10 items-center justify-center rounded-full bg-white px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-700 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] xl:hidden">
                    Trends
                  </div>
                </figure>
                <div className="flex flex-col items-start p-4 xl:p-0">
                  <div className="hidden items-center justify-center rounded-full bg-white px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-700 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] xl:block">
                    Trends
                  </div>
                  <div className="xl:mt-2.5">
                    <a
                      className="font-bold text-neutral-700"
                      href="#"
                      title="Cracking the Code: Writing Compelling Saas Landing Page Copy that Converts"
                    >
                      Cracking the Code: Writing Compelling Saas Landing Page Copy that Converts
                    </a>
                    <p className="mt-2 text-sm font-medium text-neutral-500">
                      Craft persuasive and conversion-focused copywriting for your Saas landing pages
                    </p>
                  </div>
                  <div className="mt-2.5 flex grow items-end">
                    <div className="flex flex-wrap items-center gap-1">
                      <div className="text-sm font-medium text-slate-600">Emily Roberts</div>
                      <div className="flex items-center gap-x-1">
                        <span className="h-1 w-1 rounded-full bg-neutral-200" />
                        <time className="text-sm font-medium text-neutral-500">16 April 2023</time>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="grid gap-x-6 gap-y-2 lg:gap-y-0 xl:grid-cols-[15.625rem_auto]">
                <figure className="relative w-full self-start rounded-2xl shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)]">
                  <img
                    className="h-40 w-full rounded-2xl object-cover object-left-top lg:h-48"
                    src="https://tailkits.com/ui/iframe/assets/img/bg-blog-1.png"
                    alt="User Experience Matters: Enhancing Landing Pages for Seamless Interactions"
                  />
                  <div className="absolute top-3 right-3 z-10 items-center justify-center rounded-full bg-white px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-700 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] xl:hidden">
                    Trends
                  </div>
                </figure>
                <div className="flex flex-col items-start p-4 xl:p-0">
                  <div className="hidden items-center justify-center rounded-full bg-white px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-700 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] xl:block">
                    Trends
                  </div>
                  <div className="xl:mt-2.5">
                    <a
                      className="font-bold text-neutral-700"
                      href="#"
                      title="User Experience Matters: Enhancing Landing Pages for Seamless Interactions"
                    >
                      User Experience Matters: Enhancing Landing Pages for Seamless Interactions
                    </a>
                    <p className="mt-2 text-sm font-medium text-neutral-500">
                      Improve user experience and boost conversions with optimized landing pages.
                    </p>
                  </div>
                  <div className="mt-2.5 flex grow items-end">
                    <div className="flex flex-wrap items-center gap-1">
                      <div className="text-sm font-medium text-slate-600">Michael Anderson</div>
                      <div className="flex items-center gap-x-1">
                        <span className="h-1 w-1 rounded-full bg-neutral-200" />
                        <time className="text-sm font-medium text-neutral-500">16 April 2023</time>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <div className="">
          <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

          <div className="relative mx-auto">
            <div className="absolute -top-10 -left-20 -z-50 aspect-square size-[400px] rounded-full bg-indigo-500/30 blur-3xl"></div>

            <div className="my-20">
              <h1 className="mx-auto text-center text-3xl font-semibold">Our Services</h1>
              <p className="mx-auto mt-2 max-w-lg text-center text-sm text-slate-500">
                A visual collection of our most recent works - each piece crafted with intention, emotion, and style.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
              <div className="md:col-span-2">
                <img
                  alt="features showcase"
                  src="https://i.pinimg.com/736x/af/85/f4/af85f4dda2777b40253c02d87fee9e80.jpg"
                />
              </div>
              <div className="md:col-span-1">
                <img
                  alt="features showcase"
                  className="transition duration-300 hover:-translate-y-0.5"
                  src="https://i.pinimg.com/736x/af/85/f4/af85f4dda2777b40253c02d87fee9e80.jpg"
                />
                <h3 className="mt-6 text-[24px]/7.5 font-medium text-slate-800">
                  Better design with highest revenue and profits{" "}
                </h3>
                <p className="mt-2 text-slate-600">
                  PrebuiltUI empowers you to build beautifully and scale effortlessly.
                </p>
                <Link
                  href="/"
                  className="group mt-4 flex items-center gap-2 text-indigo-600 transition hover:text-indigo-700"
                >
                  Learn more about the product
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right size-5 transition duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto my-30 grid max-w-6xl grid-cols-1 divide-y divide-gray-200/70 rounded-lg border border-gray-200/70 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          <div className="flex flex-col items-start gap-4 p-8 pb-14 transition duration-300 hover:bg-gray-50">
            <div className="flex items-center gap-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-layout-panel-top size-5"
                aria-hidden="true"
              >
                <rect width="18" height="7" x="3" y="3" rx="1"></rect>
                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
              </svg>
              <h2 className="text-base font-medium">AI Layout Generator</h2>
            </div>
            <p className="max-w-72 text-sm/6 text-gray-500">
              Automatically creates a complete website layout from a single prompt.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 p-8 pb-14 transition duration-300 hover:bg-gray-50">
            <div className="flex items-center gap-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-notebook-pen size-5"
                aria-hidden="true"
              >
                <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"></path>
                <path d="M2 6h4"></path>
                <path d="M2 10h4"></path>
                <path d="M2 14h4"></path>
                <path d="M2 18h4"></path>
                <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
              </svg>
              <h2 className="text-base font-medium">AI Content Writer</h2>
            </div>
            <p className="max-w-72 text-sm/6 text-gray-500">
              Generates high-quality headlines, text, and call-to-actions instantly.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 p-8 pb-14 transition duration-300 hover:bg-gray-50">
            <div className="flex items-center gap-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chart-spline size-5"
                aria-hidden="true"
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                <path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"></path>
              </svg>
              <h2 className="text-base font-medium">Performance Optimization</h2>
            </div>
            <p className="max-w-72 text-sm/6 text-gray-500">
              Ensures fast load speed, clean code, and high PageSpeed scores.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
