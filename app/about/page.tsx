import React from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

const About = () => {
  return (
    <div>
      <Header />
      <div className="my-30">
        <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        <section className="flex flex-col items-center justify-center gap-10 max-md:px-4 md:flex-row">
          <div className="relative shrink-0 overflow-hidden rounded-2xl shadow-2xl shadow-indigo-600/40">
            <img
              className="w-full max-w-md rounded-2xl object-cover"
              src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
              alt=""
            />
            <div className="absolute bottom-8 left-8 flex max-w-72 items-center gap-1 rounded-xl bg-white p-4">
              <div className="flex shrink-0 -space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                  alt="image"
                  className="z-1 size-9 rounded-full border-[3px] border-white transition hover:-translate-y-1"
                />
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                  alt="image"
                  className="z-[2] size-9 rounded-full border-[3px] border-white transition hover:-translate-y-1"
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                  alt="image"
                  className="z-[3] size-9 rounded-full border-[3px] border-white transition hover:-translate-y-1"
                />
                <div className="z-[4] flex size-9 items-center justify-center rounded-full border-[3px] border-white bg-indigo-600 text-xs text-white transition hover:-translate-y-1">
                  50+
                </div>
              </div>
              <p className="text-sm font-medium text-slate-800">Join our developer community</p>
            </div>
          </div>
          <div className="max-w-lg text-sm text-slate-600">
            <h1 className="text-xl font-semibold text-slate-700 uppercase">What we do?</h1>
            <div className="h-[3px] w-24 rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
            <p className="mt-8">
              PrebuiltUI helps you build faster by transforming your design vision into fully functional,
              production-ready UI components.{" "}
            </p>
            <p className="mt-4">
              Whether you{`'`}re launching a SaaS app, landing page, or dashboard, our collection of Tailwind CSS
              components is crafted to boost your development speed and improve user experience.
            </p>
            <p className="mt-4">
              From UI design systems to automation-ready layouts, PrebuiltUI empowers you to build beautifully and scale
              effortlessly.
            </p>
            <a
              href="#"
              className="mt-8 flex w-max items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-[#8A7DFF] px-8 py-3 text-white transition hover:-translate-y-0.5"
            >
              <span>Read more</span>
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
