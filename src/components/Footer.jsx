import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F5B700] text-green-950 border-t border-[#002147]/20 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-start text-sm md:text-base font-semibold pt-4 pb-2 space-y-2 md:space-y-0">
        {/* Left Side */}
        <p className="text-center md:text-left leading-tight">
          © 2025 <span className="font-bold">Kaiq Group</span> — All Rights
          Reserved
        </p>

        {/* Right Side */}
        <div className="flex space-x-5">
          <a href="#" className="hover:underline transition-all">
            Terms
          </a>
          <a href="#" className="hover:underline transition-all">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
