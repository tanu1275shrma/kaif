import React from "react";
import PopupForm from "./PopupForm";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-[#062E33] text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-5 min-h-screen overflow-hidden"
    >
      {/* LEFT SIDE */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-4">
        {/* HEADING */}
        <h1 className="font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl xl:text-6xl max-w-3xl">
          {/* Mobile View — line breaks */}
          <span className="block sm:hidden">Unlock the Secret to</span>
          <span className="block sm:hidden">Building a Profitable</span>
          <span className="block sm:hidden text-yellow-400">
            DROPSHIPPING Empire!
          </span>

          {/* Desktop View — normal inline */}
          <span className="hidden sm:block">
            Unlock the Secret to Building a Profitable
          </span>
          <span className="hidden sm:block">
            <span className="text-yellow-400"> DROPSHIPPING </span>Empire!
          </span>
        </h1>

        {/* SUBHEADING */}
        <p className="text-gray-100 text-base md:text-md leading-relaxed max-w-2xl">
          Ready to escape confusion and finally start earning from your online
          store?
          <br /> In this exclusive session, I’ll hand you battle-tested
          strategies that my top students used to go from ₹0 to 7 figures —
          without guesswork, endless trial & error, or fake promises.
          <br />
          Just clarity, proven steps, and real success — built for YOU.
        </p>

        {/* WEBINAR TITLE */}
        <div className="mt-4 flex flex-col items-center lg:items-start w-full">
          <h3 className="text-yellow-400 text-xl md:text-2xl font-extrabold tracking-wide text-center lg:text-left">
            In India’s #1 Dropshipping Masterclass
          </h3>
        </div>

        {/* DETAILS — 2x2 GRID */}
        <div className="mt-2 grid grid-cols-2 gap-4 w-full max-w-xs sm:max-w-md md:max-w-lg place-items-center">
          {[
            { label: "DATE", value: "31th Oct" },
            { label: "TIME", value: "8:00 PM" },
            { label: "PLATFORM", value: "Zoom" },
            { label: "LANGUAGE", value: "English | Hindi" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#0B3C41] border border-yellow-400/70 rounded-xl py-2 px-2 text-center w-full shadow-lg
              transition-all duration-300 
              md:hover:shadow-[0_0_15px_#FFD700]
              shadow-[0_0_15px_#FFD700] md:shadow-none
              hover:scale-105"
            >
              <p className="font-bold text-xs md:text-sm">{item.label}</p>
              <p className="text-yellow-400 text-sm md:text-lg font-semibold mt-1">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-[45%] flex flex-col items-center mt-20 lg:mt-0">
        <p className="text-yellow-400 font-serif italic text-base md:text-xl lg:text-2xl tracking-wide text-center mb-4">
          “Launch your 7-Figure Store — Now!”
        </p>

        <div className="relative mt-2">
          <img
            src="/images/hero.png"
            alt="Speaker"
            className="rounded-2xl w-[260px] md:w-[360px] lg:w-[420px] h-auto object-cover shadow-xl"
          />
          <div className="absolute -inset-3 border-[3px] border-yellow-400 rounded-2xl pointer-events-none"></div>
        </div>

        <p className="text-center text-yellow-400 font-semibold mt-6 text-sm md:text-lg px-4">
          Trained Over 10,000+ Students Who Are Now Running Their Own Online
          Businesses
        </p>

        <PopupForm />
      </div>
    </section>
  );
};

export default Hero;
