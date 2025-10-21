import React, { useState } from "react";
import { Check } from "lucide-react";

const stagesData = [
  {
    id: 1,
    title: "Stage 1: Discover (Find Your Winners)",
    points: [
      "Spot trending products that people actually love.",
      "Use a proven system to find what sells — no guessing.",
      "Start strong with the right foundation for success.",
    ],
  },
  {
    id: 2,
    title: "Stage 2: Launch (Build Your Store)",
    points: [
      "Build a stunning, high-converting store in hours.",
      "Set up automation so your store runs smoothly.",
      "Use simple tools that make launching effortless.",
      "We create a Premium Shopify store for you.",
      "No extra costs — everything you need is included.",
    ],
  },
  {
    id: 3,
    title: "Stage 3: Profit (Scale Your Store)",
    points: [
      "Run smart ads that bring consistent daily sales.",
      "Turn one-time buyers into repeat loyal customers.",
      "Scale confidently with tested, repeatable strategies.",
      "Earn even while you sleep — your store never stops working.",
    ],
  },
];

const Stages = () => {
  const [activeStage, setActiveStage] = useState(1);

  return (
    <div className="bg-[#062E33] text-white py-16 px-4 flex flex-col items-center">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        The <span className="text-yellow-400">3 Proven</span> Stages to{" "}
        <span className="text-yellow-400">Build Store</span> that{" "}
        <span className="text-yellow-400">Sells Itself</span>
      </h2>

      {/* Step Navigation */}
      <div className="relative w-full max-w-4xl mb-12 flex justify-between items-center px-4">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-gray-500 -translate-y-1/2 z-0"></div>
        <div
          className="absolute top-1/2 left-0 h-[3px] bg-yellow-400 -translate-y-1/2 z-0 transition-all duration-500"
          style={{ width: `${((activeStage - 1) / 2) * 100}%` }}
        ></div>

        {stagesData.map((stage) => (
          <div
            key={stage.id}
            className="relative z-10 flex flex-col items-center cursor-pointer text-center"
            onClick={() => setActiveStage(stage.id)}
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full border-4 transition-all duration-300 ${
                activeStage === stage.id
                  ? "bg-yellow-400 border-white scale-110"
                  : stage.id < activeStage
                  ? "bg-yellow-400 border-white"
                  : "bg-[#062E33] border-yellow-400"
              }`}
            >
              {stage.id < activeStage ? (
                <Check size={28} color="white" strokeWidth={3} />
              ) : (
                <span
                  className={`font-bold text-xl ${
                    activeStage === stage.id ? "text-white" : "text-white"
                  }`}
                >
                  {stage.id}
                </span>
              )}
            </div>
            <span className="mt-2 text-sm font-semibold">
              {stage.title.split(":")[0]}
            </span>
          </div>
        ))}
      </div>

      {/* Stage Details */}
      <div className="bg-[#b7ebc0] border border-yellow-400 text-center rounded-2xl shadow-lg w-full max-w-2xl p-8 sm:p-10 transition-all duration-300">
        <h3 className="text-[#062E33] text-2xl md:text-3xl font-bold mb-4">
          {stagesData[activeStage - 1].title}
        </h3>
        <ul className="list-disc pl-6 sm:pl-10 space-y-2 text-gray-900 text-base sm:text-lg font-medium text-left sm:text-center md:text-left">
          {stagesData[activeStage - 1].points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stages;
