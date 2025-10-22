// Challenges.jsx - Brighter Version

import React from "react";
import PopupForm from "./PopupForm";

// Define the new, brighter colors
const BRIGHT_RED = "#CC0033"; // Vibrant Coral Red
const BRIGHT_GREEN = "#00A36C"; // Brilliant Seafoam Green

// Placeholder text remains the same
const placeholderText =
  "RTO Losses: Paying double for failed deliveries eats your entire profit margin.";

// Data structure
const data = {
  challenges: [
    placeholderText.split(". ")[0],

    "Slow Logistics: Long, unreliable shipping times leading to unhappy customers.",
    "Quality Risk: Inconsistent product quality and frequent inventory issues.",
  ],
  solutions: [
    "ZERO RTO GUARANTEE! No returns expense. Keep 100% of your shipping investment for successful sales.",
    "Express Delivery: Access fast channels for quick, consistent shipping (7-10 days).",
    "Full Automation: Automate fulfillment and tracking. Focus 100% on scaling.",
  ],
};

const Challenges = () => {
  return (
    <div
      className="p-8 md:p-12 lg:p-16 bg-white font-sans bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/bgpista.jpg')",
      }}
    >
      {/* --- Section Title --- */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-10 text-center tracking-wide">
        The Truth About Dropshipping :
        <br />
        <span className="text-red-700">Challenges </span>Vs.{" "}
        <span className="text-emerald-500"> Our Solutions</span>
      </h1>

      {/* --- Main Layout Container: Centered and Responsive Grid/Flex --- */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* --- 1. Challenges Section --- */}
        <div className="w-full lg:w-5/12">
          {/* Challenge Header (Bright Red Pill Shape) */}
          <div
            style={{ backgroundColor: BRIGHT_RED }}
            className="text-white text-xl font-bold py-2 px-6 rounded-full inline-block shadow-xl transform hover:scale-[1.02] transition duration-300 mb-6"
          >
            Challenges
          </div>

          {/* Challenge Content Box (Bright Red Border) */}
          <div
            style={{ borderColor: BRIGHT_RED }}
            className="border-4 p-6 rounded-xl space-y-4 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <ul className="list-none space-y-3 pl-0 font-medium">
              {data.challenges.map((item, index) => (
                <li key={index} className="flex items-start text-gray-800">
                  <span
                    style={{ color: BRIGHT_RED }}
                    className="mr-3 mt-1 text-lg font-extrabold"
                  >
                    •
                  </span>{" "}
                  {/* Custom bullet point */}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- 2. Center Graphic Section (Circular Flow) --- */}
        <div className="lg:w-2/12 flex justify-center items-center h-48 lg:h-auto my-6 lg:my-0">
          <div className="relative flex items-center justify-center w-36 h-36">
            {/* Outer Circular Flow Lines (Brighter colors) */}
            <div
              style={{
                borderTopColor: BRIGHT_RED,
                borderBottomColor: BRIGHT_GREEN,
              }}
              className="absolute w-full h-full border-4 border-r-transparent border-l-transparent rounded-full transform rotate-45 opacity-70 animate-spin-slow" // Added a subtle spin for dynamism
            ></div>

            {/* Main Circle (Bright Gradient) */}
            <div
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${BRIGHT_GREEN}, ${BRIGHT_RED})`,
              }}
              className="relative w-28 h-28 rounded-full flex items-center justify-center shadow-2xl"
            >
              {/* Inner Content (Placeholder T-arrow icon) */}
              <div className="text-white text-3xl font-bold p-2 bg-white/30 rounded-lg backdrop-blur-sm">
                <svg
                  className="w-8 h-8 rotate-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* --- 3. Opportunities Section --- */}
        <div className="w-full lg:w-5/12 order-last">
          {/* Opportunity Content Box (Bright Green Border) */}
          <div
            style={{ borderColor: BRIGHT_GREEN }}
            className="border-4 p-6 rounded-xl space-y-4 shadow-lg hover:shadow-2xl transition duration-300 mb-6"
          >
            <ul className="list-none space-y-3 pl-0 font-medium">
              {data.solutions.map((item, index) => (
                <li key={index} className="flex items-start text-gray-800">
                  <span
                    style={{ color: BRIGHT_GREEN }}
                    className="mr-3 mt-1 text-lg font-extrabold"
                  >
                    •
                  </span>{" "}
                  {/* Custom bullet point */}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Opportunity Header (Bright Green Pill Shape) */}
          <div className="flex justify-start lg:justify-end">
            <div
              style={{ backgroundColor: BRIGHT_GREEN }}
              className="text-white text-xl font-bold py-2 px-6 rounded-full inline-block shadow-xl transform hover:scale-[1.02] transition duration-300"
            >
              Solutions
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <PopupForm />
      </div>

      {/* Tailwind animation configuration for the spin (optional but cool) */}
      <style jsx="true">{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Challenges;
