import React, { useState } from "react";
import { Check } from "lucide-react";

const stagesData = [
  {
    id: 1,
    title: "Stage 1: Discover (Find Your Winners)",
    points: [
      "Spot products that have strong market validation",
      "Skip the guesswork with proven research methods",
      "Avoid the products that drain your ad budget",
    ],
  },
  {
    id: 2,
    title: "Stage 2: Launch (Build Your Store)",
    points: [
      "Build a converting store using proven templates",
      "Set up order fulfillment that runs automatically",
      "Launch with the essential apps that matter",
    ],
  },
  {
    id: 3,
    title: "Stage 3: Profit (Scale Your Store)",
    points: [
      "Run Meta ads that bring in sales daily",
      "Create bundles and upsells from your bestseller",
      "Scale profitably with tested strategies",
    ],
  },
];

const Stages = () => {
  const [activeStage, setActiveStage] = useState(1);

  return (
    <div className="bg-[#062E33] text-white py-16 px-4">
      <h2 className="text-center text-4xl font-bold mb-12">
        Your <span className="text-yellow-400">3 Stages</span> to Your Success
      </h2>

      {/* Step Navigation */}
      <div className="flex flex-col items-center">
        <div className="relative flex justify-between w-full max-w-3xl mb-12">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400 transform -translate-y-1/2 z-0"></div>
          <div
            className="absolute top-1/2 left-0 h-1 bg-yellow-500 transform -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${((activeStage - 1) / 2) * 100}%` }}
          ></div>

          {stagesData.map((stage) => (
            <div
              key={stage.id}
              className="relative z-10 flex flex-col items-center cursor-pointer"
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
        <div className="bg-[#a6e1b1] max-w-2xl w-full rounded-2xl p-8 shadow-lg border border-yellow-400 text-center">
          <h3 className="text-[#062E33] text-2xl font-bold mb-4">
            {stagesData[activeStage - 1].title}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-900 text-left sm:text-center md:text-left">
            {stagesData[activeStage - 1].points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stages;
