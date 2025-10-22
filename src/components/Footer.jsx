import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#b8ebbf] text-green-950 border-t border-[#002147]/20 mt-auto w-full">
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col items-center text-center space-y-4 text-sm md:text-base font-medium leading-relaxed">
        {/* Policy Links */}
        <p className="font-semibold text-green-900">
          <a href="/terms" className="hover:underline transition-all">
            Terms & Conditions
          </a>{" "}
          |{" "}
          <a href="/privacy" className="hover:underline transition-all">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/refund" className="hover:underline transition-all">
            Refund & Cancellation Policy
          </a>{" "}
          |{" "}
          <a href="/shipping" className="hover:underline transition-all">
            Shipping Policy
          </a>{" "}
          |{" "}
          <a href="/contact" className="hover:underline transition-all">
            Contact Us
          </a>
        </p>

        {/* Copyright */}
        <p className="text-green-900 font-semibold">
          Copyright © 2025 <span className="font-bold">SIR G Group</span> | All
          Rights Reserved
        </p>

        {/* Disclaimer */}
        <p className="text-green-950 text-xs md:text-sm max-w-3xl">
          This site is not a part of the Facebook website / Google Ads /
          Facebook Inc / Google Inc. Additionally, This site is NOT endorsed by
          Facebook / Google in any way. FACEBOOK is a trademark of FACEBOOK,
          Inc. Google Ads is a Trademark of Google Inc.
        </p>

        {/* Powered by */}
        <p className="font-semibold text-green-900">
          Powered By <span className="font-bold">MyProFunnels Ventures</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
