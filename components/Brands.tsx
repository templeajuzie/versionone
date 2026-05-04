const Brands = () => {
  const companiesLogo = [
    {
      name: "Framer",
      logo: "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg",
    },
    {
      name: "Huawei",
      logo: "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg",
    },
    {
      name: "Instagram",
      logo: "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg",
    },
    {
      name: "Microsoft",
      logo: "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg",
    },
    {
      name: "Walmart",
      logo: "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg",
    },
  ];
  return (
    <>
      <style>
        {`
                .marquee-inner {
                    animation: marqueeScroll 15s linear infinite;
                }

                .marquee-inner-testimonials {
                    animation: marqueeScroll 35s linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}
      </style>
      <h3 className="pb-14 text-center text-base font-medium text-slate-400">
        Trusting by leading brands, including —
      </h3>
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden select-none">
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />

        <div className="marquee-inner mx-auto flex max-w-5xl will-change-transform">
          {[...companiesLogo, ...companiesLogo].map((company, index) => (
            <img key={index} className="mx-11" src={company.logo} alt={company.name} />
          ))}
        </div>

        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent md:w-40" />
      </div>
    </>
  );
};

export default Brands;
