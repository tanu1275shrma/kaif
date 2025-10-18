import React from "react";
import { CheckCircle } from "lucide-react";

const Learn = () => {
  const topics = [
    {
      title: "Find Winning Products That Actually Sell",
      points: [
        "Discover the secret formula.",
        "Avoid common product mistakes.",
      ],
    },
    {
      title: "Build a Store That Converts Visitors into Buyers",
      points: [
        "Step-by-step Shopify setup.",
        "Learn psychology behind design.",
      ],
    },
    {
      title: "Master Ads That Bring Real Sales (Not Just Clicks)",
      points: [
        "Understand how Facebook, Instagram & TikTok ads work.",
        "Learn proven ad strategies & writing ad copies.",
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
      points: ["Budget your first $100–$200 wisely.", "Avoid fake guru traps."],
    },
    {
      title: "Step-by-Step Roadmap to Launch Your First Store",
      points: [
        "Clear 7-day action plan.",
        "Connect everything — checklist + kit.",
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
          What You’ll Learn in This{" "}
          <span className="text-green-600"> Dropshipping Webinar</span>
        </h2>
        <p className="text-[#0B3C41] text-base md:text-lg">
          Unlock the Secrets to E-commerce Success.
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
            <ul className="list-disc font-semibold list-inside text-green-900  text-sm space-y-1">
              {topic.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-[#0B3C41] text-white px-8 py-4 rounded-full font-semibold text-lg transition">
          Claim Your Free Spot Now!
        </button>
      </div>
    </section>
  );
};

export default Learn;
