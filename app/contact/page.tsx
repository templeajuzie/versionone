import React from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

const Contact = () => {
  return (
    <div>
      <Header />

      <>
        <style>
          {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                    * {
                        font-family: "Poppins", sans-serif;
                    }
                `}
        </style>

        <section className="flex items-center justify-center px-4 py-12">
          <div className="grid w-full max-w-7xl items-center md:grid-cols-2 md:gap-10 lg:gap-20">
            <div className="p-5">
              <h1 className="mb-3 text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-start">
                Get in touch
              </h1>
              <p className="mx-auto mb-8 max-w-[400px] text-center text-sm/6 leading-relaxed text-gray-600 md:mx-0 md:text-start">
                Have a question or idea? Our approachable team would love to connect and support you.
              </p>

              <form>
                <div className="mb-5 grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block text-sm text-gray-500">First name</label>
                    <input
                      type="text"
                      placeholder="David"
                      className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm transition-colors outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-gray-500">Last name</label>
                    <input
                      type="text"
                      placeholder="Andrew"
                      className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm transition-colors outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="mb-2 block text-sm text-gray-500">Email id</label>
                  <input
                    type="email"
                    placeholder="david@company.com"
                    className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm transition-colors outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="mb-5">
                  <label className="mb-2 block text-sm text-gray-500">Phone number</label>
                  <div className="flex overflow-hidden rounded-lg border border-gray-300 transition-colors focus-within:border-indigo-500">
                    <select className="cursor-pointer border-r border-gray-300 bg-white px-3 py-3 text-sm text-gray-500 outline-none">
                      <option>US</option>
                      <option>UK</option>
                      <option>IN</option>
                      <option>CA</option>
                    </select>
                    <input type="tel" placeholder="+1 342 123-456" className="flex-1 px-3 py-3 text-sm outline-none" />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="mb-2 block text-sm text-gray-500">Message</label>
                  <textarea
                    rows={4}
                    className="w-full resize-y rounded-lg border border-gray-300 px-3 py-3 text-sm transition-colors outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="mb-6 flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-5 w-5 cursor-pointer rounded-[5px] text-gray-300 accent-indigo-500"
                  />
                  <label className="cursor-pointer text-sm text-gray-500">
                    You agree to our <span className="underline">terms</span> and{" "}
                    <span className="underline">privacy policy</span>.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 py-3.5 text-sm text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(99,102,241,0.3)]"
                >
                  Send message
                </button>
              </form>
            </div>

            <div className="relative hidden min-h-[662px] w-full max-w-[520px] flex-col justify-between overflow-hidden rounded-3xl p-10 md:flex">
              <img
                src={"https://i.pinimg.com/736x/ed/1c/5a/ed1c5a086f9d3db8a21c35582ad98601.jpg"}
                alt="3D shapes"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative z-10 mt-auto">
                <p className="mb-5 max-w-[400px] text-sm/6 text-white">
                  Stop spending hours recreating layouts - with <strong>PrebuiltUI</strong> you can copy, customize and
                  launch stunning UIs in minutes.
                </p>
                <p className="mb-4 text-right text-sm text-white">━ Emily Rodriguez</p>

                <div className="flex items-center justify-end gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-white"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-white"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-gray-400"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <Footer />
    </div>
  );
};

export default Contact;
