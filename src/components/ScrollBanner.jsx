import React, { useEffect, useState } from "react";
import PopupForm from "./PopupForm";

const ScrollBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#hero");
    const footer = document.querySelector("footer");

    const handleScroll = () => {
      const heroRect = hero?.getBoundingClientRect();
      const footerRect = footer?.getBoundingClientRect();

      const heroVisible =
        heroRect &&
        heroRect.bottom > 0 &&
        heroRect.top < window.innerHeight / 1.5;
      const footerVisible =
        footerRect &&
        footerRect.top < window.innerHeight &&
        footerRect.bottom > 0;

      if (heroVisible || footerVisible) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      {/* Capsule Container */}
      <div className="relative w-[92vw] sm:w-[88vw] md:w-[80vw] max-w-4xl overflow-hidden rounded-full shadow-lg border border-gray-100">
        {/* Responsive Slash Background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(  #015A4D 100%)",
          }}
        ></div>

        {/* CONTENT */}
        <div className="relative flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-2 sm:py-3">
          {/* LEFT TEXT */}
          <div className="w-full sm:w-[55%] text-center sm:text-left">
            <h2 className="text-[12px] sm:text-sm md:text-base lg:text-lg font-extrabold leading-snug text-gray-100">
              TURN ₹49 INTO YOUR DROPSHIPPING SUCCESS!
            </h2>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full sm:w-[45%] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-2 sm:mt-0">
            <PopupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollBanner;
