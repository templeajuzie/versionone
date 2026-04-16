import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesSnipet from "@/components/Services";
import React from "react";

const Services = () => {
  return (
    <div>
      <Header />
      <div className="">
        <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

        <div className="relative mx-auto max-w-5xl px-4">
          <div className="absolute -z-50 size-[400px] -top-10 -left-20 aspect-square rounded-full bg-indigo-500/30 blur-3xl"></div>

          <div className="my-20">
            <h1 className="text-3xl font-semibold text-center mx-auto">
              Our Services
            </h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
              A visual collection of our most recent works - each piece crafted
              with intention, emotion, and style.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-10">
            <div className="md:col-span-2">
              <img
                alt="features showcase"
                src="https://i.pinimg.com/736x/af/85/f4/af85f4dda2777b40253c02d87fee9e80.jpg"
              />
            </div>
            <div className="md:col-span-1">
              <img
                alt="features showcase"
                className="hover:-translate-y-0.5 transition duration-300"
                src="https://i.pinimg.com/736x/af/85/f4/af85f4dda2777b40253c02d87fee9e80.jpg"
              />
              <h3 className="text-[24px]/7.5 text-slate-800 font-medium mt-6">
                Better design with highest revenue and profits{" "}
              </h3>
              <p className="text-slate-600 mt-2">
                PrebuiltUI empowers you to build beautifully and scale
                effortlessly.
              </p>
              <a
                href="/"
                className="group flex items-center gap-2 mt-4 text-indigo-600 hover:text-indigo-700 transition"
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
                  className="lucide lucide-arrow-up-right size-5 group-hover:translate-x-0.5 transition duration-300"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid border rounded-lg max-w-6xl mx-auto border-gray-200/70 grid-cols-1 divide-y divide-gray-200/70 lg:grid-cols-3 lg:divide-x lg:divide-y-0 my-30">
        <div className="flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14">
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
            <h2 className="font-medium text-base">AI Layout Generator</h2>
          </div>
          <p className="text-gray-500 text-sm/6 max-w-72">
            Automatically creates a complete website layout from a single
            prompt.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14">
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
            <h2 className="font-medium text-base">AI Content Writer</h2>
          </div>
          <p className="text-gray-500 text-sm/6 max-w-72">
            Generates high-quality headlines, text, and call-to-actions
            instantly.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14">
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
            <h2 className="font-medium text-base">Performance Optimization</h2>
          </div>
          <p className="text-gray-500 text-sm/6 max-w-72">
            Ensures fast load speed, clean code, and high PageSpeed scores.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
