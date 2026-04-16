import React from "react";

const Hero = () => {
  return (
    <main className="bg-white flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* <div className="flex flex-col items-center md:items-start">
        <h1 className="text-center md:text-left text-4xl leading-[46px] md:text-5xl md:leading-[68px] font-semibold max-w-xl text-slate-900">
          AI-powered
          <br />
          influencer marketing made simple.
        </h1>
        <p className="text-center md:text-left text-sm text-slate-700 max-w-lg mt-2">
          Unlock smarter workflows with AI tools designed to boost productivity,
          simplify tasks and help you do more with less effort.
        </p>
        <div className="flex items-center gap-4 mt-8 text-sm">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 transition rounded-md px-7 h-11">
            Get started
          </button>
          <button className="flex items-center gap-2 border border-slate-600 active:scale-95 hover:bg-slate-50 transition text-slate-600 rounded-md px-6 h-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-video-icon lucide-video"
            >
              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
              <rect x={2} y={6} width={14} height={12} rx={2} />
            </svg>
            <span>Watch demo</span>
          </button>
        </div>
      </div> */}
      <div className="flex flex-col items-start">
    
        <h1 className="text-center lg:text-left text-neutral-900 text-4xl md:text-5xl lg:text-[52px]/16 leading-tight font-semibold max-w-[610px] mt-4">
          Automation that delivers real results
        </h1>
        <p className="text-center lg:text-left text-base/7 text-neutral-600 max-w-md mt-4 mx-auto md:mx-0">
          No complexity. No noise. Just clean, reliable automation to boost your
          team’s efficiency.
        </p>

        <div className="flex items-center border gap-2 border-neutral-300 h-13 max-w-[440px] w-full rounded-full overflow-hidden mt-6 mx-auto md:mx-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-full pl-6 outline-none text-sm bg-transparent text-neutral-600"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-600 w-56 h-10 rounded-full text-sm text-slate-50 cursor-pointer mr-1.5"
          >
            Subscribe now
          </button>
        </div>

        {/* Avatars + Stars */}
        <div className="flex items-center mt-10 mx-auto lg:mx-0">
          <div className="flex -space-x-3 pr-3">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
              alt="user3"
              className="size-9 object-cover rounded-full border border-slate-50 hover:-translate-y-0.5 transition"
            />
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="user1"
              className="size-9 object-cover rounded-full border border-slate-50 hover:-translate-y-0.5 transition"
            />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="user2"
              className="size-9 object-cover rounded-full border border-slate-50 hover:-translate-y-0.5 transition"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
              alt="user3"
              className="size-9 object-cover rounded-full border border-slate-50 hover:-translate-y-0.5 transition"
            />
          </div>

          <div>
            <div className="flex ">
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
                    className="lucide lucide-star text-transparent fill-[#FF8F20]"
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
        className="w-full px-2 md:max-w-2xl sm:max-w-md h-[50vh] rounded-3xl lg:max-w-lg 2xl:max-w-xl transition-all duration-300 object-cover"
      />
    </main>
  );
};

export default Hero;
