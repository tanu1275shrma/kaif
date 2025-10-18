import React from "react";
import { XCircle, CheckCircle } from "lucide-react";

const Regret = () => {
  return (
    <section
      className="relative w-full h-screen flex justify-center items-center bg-emerald-50 overflow-hidden"
      style={{
        backgroundImage: "url('/images/bgpista.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 via-white to-emerald-200"></div>

      {/* Glassmorphism Box */}
      <div className="relative max-w-6xl w-[95%] backdrop-blur-xl bg-white/40 border border-emerald-300 rounded-3xl shadow-lg p-6 md:p-8 z-10 flex flex-col justify-between h-[90vh]">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-700">
            ⚠️ Don’t Let This Be Your Biggest Regret!
          </h2>
        </div>

        {/* Two Columns */}
        <div className="flex flex-col lg:flex-row justify-center gap-4 flex-grow">
          {/* Left Card */}
          <div className="flex-1 bg-white/70 backdrop-blur-md border border-red-700 rounded-2xl p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-red-600 mb-3 text-center">
              What If You Don’t Join This Webinar?
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <XCircle className="text-red-500 w-4 h-4 mt-1 mr-2" />
                Missing out on the easiest way to start a profitable online
                business.
              </li>
              <li className="flex items-start">
                <XCircle className="text-red-500 w-4 h-4 mt-1 mr-2" />
                Continuing to waste money testing random products without a
                proven system.
              </li>
              <li className="flex items-start">
                <XCircle className="text-red-500 w-4 h-4 mt-1 mr-2" />
                Staying stuck in confusion — not knowing which niche or supplier
                works.
              </li>
              <li className="flex items-start">
                <XCircle className="text-red-500 w-4 h-4 mt-1 mr-2" />
                Watching others build their stores while you overthink your
                first step.
              </li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="flex-1 bg-white/70 backdrop-blur-md border border-emerald-900 rounded-2xl p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-green-600 mb-3 text-center">
              What If You Join This Webinar?
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <CheckCircle className="text-emerald-500 w-4 h-4 mt-1 mr-2" />
                Learn a step-by-step roadmap to build your dropshipping business
                from scratch.
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-emerald-500 w-4 h-4 mt-1 mr-2" />
                Discover winning products and suppliers trusted by top 1%
                sellers.
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-emerald-500 w-4 h-4 mt-1 mr-2" />
                Understand ads that bring consistent sales — not just clicks.
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-emerald-500 w-4 h-4 mt-1 mr-2" />
                Get expert insights to launch, scale, and automate profitably in
                2025.
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-4">
          <p className="text-[#0B3C41] text-lg mb-2">
            ⚡ Seats are closing fast — Don’t miss your chance to transform your
            online business.{" "}
            <span className="font-semibold text-emerald-600">
              Enrollment time is NOW.
            </span>
          </p>
          <button className="bg-[#0B3C41] text-white font-semibold px-6 py-2 rounded-full text-sm shadow-md transition-transform hover:-translate-y-0.5">
            Secure Your Spot Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Regret;
