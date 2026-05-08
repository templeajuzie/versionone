import React from "react";

const Hero = () => {
  return (
    <main className="mt-20 flex flex-col items-center justify-between bg-white px-4 pb-20 max-md:gap-20 md:flex-row md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col items-start">
        <h1 className="mt-4 max-w-[610px] text-center text-4xl leading-tight font-semibold text-neutral-900 md:text-5xl lg:text-left lg:text-[52px]/16">
          Automation that delivers real results
        </h1>
        <p className="mx-auto mt-4 max-w-md text-center text-base/7 text-neutral-600 md:mx-0 lg:text-left">
          No complexity. No noise. Just clean, reliable automation to boost your team’s efficiency.
        </p>

        <div className="mx-auto mt-6 flex h-13 w-full max-w-[440px] items-center gap-2 overflow-hidden rounded-full border border-neutral-300 md:mx-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-full w-full bg-transparent pl-6 text-sm text-neutral-600 outline-none"
            required
          />
          <button
            type="submit"
            className="mr-1.5 h-10 w-56 cursor-pointer rounded-full bg-indigo-600 text-sm text-slate-50 hover:bg-indigo-600"
          >
            Subscribe now
          </button>
        </div>

        {/* Avatars + Stars */}
        <div className="mx-auto mt-10 flex items-center lg:mx-0">
          <div className="flex -space-x-3 pr-3">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
              alt="user3"
              className="size-9 rounded-full border border-slate-50 object-cover transition hover:-translate-y-0.5"
            />
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="user1"
              className="size-9 rounded-full border border-slate-50 object-cover transition hover:-translate-y-0.5"
            />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="user2"
              className="size-9 rounded-full border border-slate-50 object-cover transition hover:-translate-y-0.5"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
              alt="user3"
              className="size-9 rounded-full border border-slate-50 object-cover transition hover:-translate-y-0.5"
            />
          </div>

          <div>
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star fill-[#FF8F20] text-transparent"
                    aria-hidden="true"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                ))}
            </div>
            <p className="text-xs text-neutral-600">Used by 10,000+ users</p>
          </div>
        </div>
      </div>
      <img
        src="https://i.pinimg.com/736x/3e/7d/d5/3e7dd5d5c1b97db6fe0b8efa430507f3.jpg"
        className="h-[50vh] w-full rounded-lg object-cover px-2 transition-all duration-300 sm:max-w-md md:max-w-2xl lg:max-w-lg 2xl:max-w-xl"
      />
    </main>
  );
};

export default Hero;
