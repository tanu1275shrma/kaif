import React, { useEffect, useState } from "react";

const ScrollBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.querySelector(".hero-section")?.offsetHeight || 600;
      const footer = document.querySelector("footer");
      const footerTop = footer ? footer.offsetTop : document.body.scrollHeight;
      const scrollY = window.scrollY + window.innerHeight;

      // Show banner after hero, hide when reaching footer
      if (window.scrollY > heroHeight - 100 && scrollY < footerTop - 50) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 bottom-4 z-50 transition-all duration-500 ${
        showBanner
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-full shadow-lg flex flex-col md:flex-row items-center justify-between gap-3 px-6 md:px-10 py-3 md:py-4 border border-emerald-900 w-[90vw] md:w-auto">
        <div className="text-center md:text-left text-sm md:text-lg font-semibold text-black">
          <p>
            <span className="text-emerald-800">Filling Fast </span>
            <span className="text-red-600 drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">
              Only 4 Seats Left
            </span>
          </p>
          <p className="italic text-sm text-black">
            Registrations will end{" "}
            <span className="text-red-600 font-bold">Soon!</span>
          </p>
        </div>

        <button className="bg-gradient-to-r from-emerald-600 to-emerald-900 text-white font-semibold rounded-full px-8 py-2 md:py-3 shadow-md hover:scale-105 transition-transform duration-300">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default ScrollBanner;
