import React from "react";
import { XCircle, CheckCircle } from "lucide-react";
import PopupForm from "./PopupForm";

const Regret = () => {
  return (
    <section className="relative bg-[#062E33] w-full min-h-screen flex justify-center items-center  overflow-hidden px-4 py-8 sm:px-6 md:px-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[#062E33]"></div>

      {/* Glassmorphism Box */}
      <div className="relative w-full max-w-6xl backdrop-blur-xl  border border-emerald-300 rounded-3xl shadow-lg p-5 sm:p-6 md:p-8 z-10 flex flex-col justify-between min-h-[85vh]">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 leading-snug">
            ⚠️ Don’t Let This Be Your “I Wish I Started Sooner” Moment!
          </h2>
        </div>

        {/* Two Columns */}
        <div className="flex flex-col lg:flex-row justify-center gap-5 flex-grow">
          {/* Left Card */}
          <div className="flex-1 bg-white/80 backdrop-blur-md border border-red-700 rounded-2xl p-4 sm:p-5 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold text-red-600 mb-3 text-center">
              ❌ What Happens If You Skip This Webinar?
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li className="flex items-start">
                <XCircle className="text-red-500 w-4 h-4 sm:w-5 sm:h-5 mt-1 mr-2 shrink-0" />
                <span>
                  Keep guessing what really works while others start earning.
                </span>
              </li>
              <li className="flex items-start">
                <XCircle className="text-red-500 w-4 h-4 sm:w-5 sm:h-5 mt-1 mr-2 shrink-0" />
                <span>
                  Keep wasting hours watching random YouTube videos that confuse
                  you more.
                </span>
              </li>
              <li className="flex items-start">
                <XCircle className="text-red-500 w-4 h-4 sm:w-5 sm:h-5 mt-1 mr-2 shrink-0" />
                <span>
                  Stay stuck wondering “Is this even for me?” instead of taking
                  your first win.
                </span>
              </li>
              <li className="flex items-start">
                <XCircle className="text-red-500 w-4 h-4 sm:w-5 sm:h-5 mt-1 mr-2 shrink-0" />
                <span>
                  Watch others share their results while you’re still planning
                  your “perfect start.”
                </span>
              </li>
              <li className="flex items-start">
                <XCircle className="text-red-500 w-4 h-4 sm:w-5 sm:h-5 mt-1 mr-2 shrink-0" />
                <span>
                  And the worst part? For just ₹49, you’ll lose access to the
                  roadmap that could’ve built your freedom.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="flex-1 bg-white/80 backdrop-blur-md border border-emerald-800 rounded-2xl p-4 sm:p-5 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold text-green-600 mb-3 text-center">
              ✅ What Happens When You Join This Webinar?
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li className="flex items-start">
                <CheckCircle className="text-emerald-500 w-4 h-4 sm:w-5 sm:h-5 mt-1 mr-2 shrink-0" />
                <span>
                  Discover a clear, step-by-step roadmap trusted by 7-figure
                  store owners.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-emerald-500 w-4 h-4 sm:w-5 sm:h-5 mt-1 mr-2 shrink-0" />
                <span>
                  Learn how to find & launch winning products without months of
                  testing.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-emerald-500 w-4 h-4 sm:w-5 sm:h-5 mt-1 mr-2 shrink-0" />
                <span>
                  See how our past attendees are now earning real profits —
                  because they learned exactly what to do, and what to avoid.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-emerald-500 w-4 h-4 sm:w-5 sm:h-5 mt-1 mr-2 shrink-0" />
                <span>
                  Find Out what’s been stopping your dropshipping success.
                </span>
              </li>

              <li className="flex items-start">
                <CheckCircle className="text-emerald-500 w-4 h-4 sm:w-5 sm:h-5 mt-1 mr-2 shrink-0" />
                <span>
                  Understand the ads that actually convert — not just bring
                  clicks.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-gray-100 text-sm sm:text-base md:text-lg mb-3 leading-relaxed">
            ⚡ Spots are filling up fast — This isn’t just another webinar. It’s
            your chance to finally stop guessing and start building something
            real.{" "}
            <span className="font-semibold text-gray-100">
              👉 Enroll now and make your “someday” happen today.
            </span>
          </p>
          <div className="text-center mt-12">
            <PopupForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regret;
