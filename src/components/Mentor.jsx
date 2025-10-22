import React from "react";

const Mentor = () => {
  return (
    <section
      className="w-full  py-14 px-6 flex flex-col items-center text-center
     md:p-12 lg:p-16 bg-white font-sans bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/bgpista.jpg')",
      }}
    >
      {/* Top Heading */}
      <h2
        className="text-3xl md:text-4xl text-underlined
       font-bold text-emerald-900 mb-10"
      >
        Meet Your <span className="text-emerald-900">Dropshipping Mentor</span>
      </h2>

      {/* Main Container */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="/images/hero.png"
            alt="Mentor"
            className="rounded-3xl w-[220px] border border-yellow-400 md:w-[320px] lg:w-[480px] object-cover shadow-lg"
          />
        </div>

        {/* Right: Text Section */}
        <div className="flex flex-col items-center text-center md:items-center">
          <h3 className="text-emerald-900 text-2xl md:text-3xl font-extrabold mb-1">
            M R Choudhary
          </h3>
          <p className="text-emerald-700 font-lg font-semibold mb-2">
            The E-commerce Growth Expert
          </p>

          {/* Green Line Centered */}
          <div className="h-1 w-16 bg-yellow-400 mb-4 rounded-full"></div>

          <p className="text-emerald-900 text-sm md:text-base font-lg font-semibold leading-relaxed mb-6 max-w-md">
            Hi, I’m <span className="text-emerald-900">a</span>{" "}
            <span className="text-yellow-400">
              7-figure E-Commerce entrepreneur
            </span>{" "}
            dropshipping coach. Over the past 5 years, I’ve helped more than
            <span className="text-yellow-400">10,000+</span> students launch
            profitable online stores using my proven systems. I’ll teach you how
            to find winning products, build converting stores, and scale
            effortlessly with automation — even if you’re starting from{" "}
            <span className="text-yellow-400">zero</span>.
          </p>

          <div className="text-center mt-12">
            <button className="bg-gray-100 border-2 border-emerald-900  text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg transition animate-bounce">
              Let's Connect Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
