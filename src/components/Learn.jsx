import React from "react";
import { CheckCircle } from "lucide-react";

const Learn = () => {
  const topics = [
    {
      title: "The “Winning Product” Secret",
      points: [
        "Discover untapped 6-figure niches fast.",
        "Use my 3-step formula to pick daily winners.",
      ],
    },
    {
      title: "Build a Store That Prints Sales",
      points: [
        "Copy my proven Shopify setup that converts.",
        "Learn design tricks that make people click Buy Now.",
      ],
    },
    {
      title: "Master Ads That Bring Real Cash",
      points: [
        "Unlock ad formulas for Facebook and others.",
        "Write ad copies that make people pull out their cards.",
      ],
    },
    {
      title: "Automate & Scale — Earn While You Sleep",
      points: [
        "Use top automation tools.",
        "Delegate repetitive work affordably.",
      ],
    },
    {
      title: "Avoid the 5 Costly Mistakes Most Beginners Make",
      points: [
        "Budget your first price wisely.",
        "Use my cheat codes to grow without wasting cash.",
      ],
    },
    {
      title: "Launch Your Store in 7 Days",
      points: [
        "Clear 7-day action plan.",
        "Connect everything — checklist + templates ready to go live.",
      ],
    },
  ];

  return (
    <section
      className="w-full bg-[#b8e8ae] py-16 px-4 md:px-10 lg:px-20"
      style={{
        backgroundImage: "url('/images/bgpista.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C41] mb-2">
          What You’ll Learn Inside This{" "}
          <span className="text-green-600"> Dropshipping Webinar</span>
        </h2>
        <p className="text-[#0B3C41] text-base md:text-lg">
          Discover proven systems that turn beginners into profitable store
          owners — fast.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start mb-3">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <CheckCircle className="text-green-600 w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#0B3C41]">
                {topic.title}
              </h3>
            </div>
            <ul className="list-disc pl-5 font-semibold text-green-900 text-sm space-y-1">
              {topic.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition animate-bounce">
          Claim Your Free Spot Now!
        </button>
      </div>
    </section>
  );
};

export default Learn;
