import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#062E33] text-white flex flex-col-reverse  md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-0 min-h-screen overflow-hidden">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 text-center flex flex-col justify-center">
        {/* HEADING */}
        <h1 className="font-extrabold leading-tight mt-8 text-5xl md:text-5xl">
          <span className="block">Discover the Power of</span>
          <span className="block text-yellow-400 mt-1 ">DROPSHIPPING</span>
        </h1>

        {/* SUB-HEADING */}
        <p className="text-gray-100 text-base md:text-lg leading-relaxed max-w-lg mx-auto mt-3">
          Not sure where to begin with DropShipping? You're at right place.
          Hello! I'm Kaif - I will guiding you step by step with proven
          strategies to level up your bussiness the Smarter way!.
          <br />
          No fluff, no guesswork - just Clarity AND Growth.
        </p>

        {/* HEADING + TRANSPARENT DIV FOR RATING */}
        <h3 className="text-yellow-400 text-2xl md:text-3xl font-extrabold mt-5 tracking-wide whitespace-nowrap ">
          INDIA's Ultimate Dropshipping Webinar
          <br />
          <div className="inline-block  rounded-xl px-3 py-1 border border-white text-white mt-2">
            Rated: <span className="font-bold text-yellow-400">4.9</span> |{" "}
            <span className="font-bold text-yellow-400">14,478 Reviews</span>
          </div>
        </h3>

        {/* DETAILS SECTION */}
        <div className="mt-8 md:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 justify-items-center items-center">
            <div className="bg-[#0B3C41] border border-yellow-400/70 rounded-xl py-2 px-6 text-center w-40 md:w-44 shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300">
              <p className="font-bold text-sm md:text-base">DATE</p>
              <p className="text-yellow-400 text-base md:text-lg font-semibold mt-1">
                20th Oct
              </p>
            </div>

            <div className="bg-[#0B3C41] border border-yellow-400/70 rounded-xl py-2 px-6 text-center w-40 md:w-44 shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300">
              <p className="font-bold text-sm md:text-base">TIME</p>
              <p className="text-yellow-400 text-base md:text-lg font-semibold mt-1">
                8:00 PM
              </p>
            </div>

            <div className="bg-[#0B3C41] border border-yellow-400/70 rounded-xl py-2 px-6 text-center w-40 md:w-44 shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300">
              <p className="font-bold text-sm md:text-base">PLATFORM</p>
              <p className="text-yellow-400 text-base md:text-lg font-semibold mt-1">
                Zoom
              </p>
            </div>
          </div>
        </div>

        {/* CTA BUTTON */}
        <button className="mt-4 bg-yellow-400 text-[#062E33] font-semibold text-lg py-3 px-12 rounded-xl shadow-lg hover:bg-yellow-500 transition-all duration-300 animate-bounce-slow mx-auto mb-12">
          💥Yes! I'm Ready to Master Dropshipping
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-1/2 flex justify-center items-center md:justify-end mb-12 md:mb-0 relative">
        <p className="absolute -top-12 md:-top-8 left-28 mb-10 right-0 text-center text-yellow-400 font-serif italic text-xl tracking-wide whitespace-nowrap  md:text-3xl font-semibold  ">
          “Launch your store with ME”
        </p>

        <div className="mt-4 relative">
          <img
            src="/images/Nilji.png"
            alt="Speaker"
            className="rounded-2xl w-[300px] md:w-[380px] h-auto object-cover shadow-xl"
          />

          <div className="absolute -inset-3 border-[3px] border-yellow-400 rounded-2xl pointer-events-none"></div>

          <p className="text-center text-yellow-400 font-semibold mt-3 text-lg">
            Trained over 10,000+ students
          </p>
        </div>
      </div>
    </section>
  );
};

// Custom Animations
const style = document.createElement("style");
style.innerHTML = `
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  .animate-bounce-slow {
    animation: bounce-slow 1.8s infinite;
  }
`;
document.head.appendChild(style);

export default Hero;
