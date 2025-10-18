import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-[#062E33] text-white flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-16 py-10 lg:py-4
     min-h-screen overflow-hidden gap-6 lg:gap-12"
    >
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 text-center flex flex-col justify-center items-center">
        {/* HEADING */}
        <h1 className="font-extrabold leading-tight mt-6 text-4xl md:text-5xl">
          <span className="block whitespace-nowrap">Discover the Power of</span>
          <span className="block text-yellow-400 mt-2">DROPSHIPPING</span>
        </h1>

        {/* SUB-HEADING */}
        <p className="text-gray-100 text-sm md:text-lg leading-relaxed max-w-lg mt-3">
          Not sure where to begin with DropShipping? You're at right place.
          Hello! I'm Kaif - I will guide you step by step with proven strategies
          to level up your business the smarter way!
          <br />
          No fluff, no guesswork - just Clarity AND Growth.
        </p>

        {/* WEBINAR TITLE + RATING */}
        <div className="mt-6 text-center">
          <h3 className="text-yellow-400 text-xl md:text-2xl font-extrabold tracking-wide">
            INDIA's Ultimate Dropshipping Webinar
          </h3>
          <div className="inline-block rounded-xl px-4 py-1 border border-white text-white mt-3 text-base">
            Rated: <span className="font-bold text-yellow-400">4.9</span> |{" "}
            <span className="font-bold text-yellow-400">14,478 Reviews</span>
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {[
            { label: "DATE", value: "20th Oct" },
            { label: "TIME", value: "8:00 PM" },
            { label: "PLATFORM", value: "Zoom" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#0B3C41] border border-yellow-400/70 rounded-xl py-3 px-6 text-center w-[110px] md:w-36 shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300"
            >
              <p className="font-bold text-xs md:text-sm">{item.label}</p>
              <p className="text-yellow-400 text-sm md:text-lg font-semibold mt-1">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <button className="mt-6 bg-yellow-400 text-[#062E33] font-semibold text-base md:text-lg py-3 px-10 md:px-12 rounded-xl shadow-lg hover:bg-yellow-500 transition-all duration-300 animate-bounce-slow mx-auto mb-8">
          💥 Yes! I'm Ready to Master Dropshipping
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full lg:w-1/2 flex flex-col items-center relative mt-6 lg:mt-0">
        <p className="absolute -top-8 text-center text-yellow-400 font-serif italic text-lg md:text-2xl tracking-wide w-full">
          “Launch your store with ME”
        </p>

        <div className="relative mt-10 md:mt-4">
          <img
            src="/images/Nilji.png"
            alt="Speaker"
            className="rounded-2xl w-[240px] md:w-[360px] h-auto object-cover shadow-xl mx-auto"
          />
          <div className="absolute -inset-3 border-[3px] border-yellow-400 rounded-2xl pointer-events-none"></div>
          <p className="text-center text-yellow-400 font-semibold mt-3 text-base md:text-lg">
            Trained over 10,000+ students
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
