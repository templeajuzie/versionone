export default function LearnMore() {
  return (
    <>
      <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
            
                * {
                    font-family: "Poppins", sans-serif;
                }
            `}</style>
      <div className="px-4 py-20">
        <div className="relative mx-auto flex h-fit w-full max-w-5xl flex-col items-center justify-between overflow-hidden rounded-lg bg-linear-to-b from-violet-100 to-[#FFE8E9] px-6 pt-20 md:flex-row md:items-center md:p-18">
          <div className="mb-8 flex-1 px-2 text-center md:mt-4 md:mb-0 md:pl-5 md:text-left">
            <h1 className="text-3xl font-medium text-balance text-gray-900 md:text-4xl/12">
              Meet the team Shaping the future.
            </h1>
            <p className="mx-auto mt-3 max-w-full text-sm/6 text-gray-700 md:mx-0 md:max-w-sm">
              Our diverse team of engineers and designers are dedicated to building AI agents that simplify work and
              empower businesses.
            </p>
            <button className="mt-6 cursor-pointer rounded-full bg-white px-6 py-2.5 text-sm text-gray-700 hover:bg-gray-50 md:mt-8 md:px-8 md:py-3">
              Join our team
            </button>
          </div>

          <div className="-mb-6 w-full shrink-0 md:mt-4 md:-mr-18 md:-mb-23 md:w-auto">
            {/* <img
              className="w-full md:w-[490px] h-auto rounded-tr-3xl md:rounded-tr-none rounded-br-none md:rounded-br-3xl rounded-bl-none"
              src="https://i.pinimg.com/736x/af/85/f4/af85f4dda2777b40253c02d87fee9e80.jpg"
              alt="meeting image"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
