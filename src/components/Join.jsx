import React from "react";

const Join = () => {
  const points = [
    {
      title: "Beginner with NO Experience",
      text: "If you are complete new beginner then you need a low-risk, step-by-step blueprint to start online.",
    },
    {
      title: "9-5 Income Seeker",
      text: "You want a profitable side income without quitting your job.",
    },
    {
      title: "Frustrated Ex-Dropshipper",
      text: "You've tried dropshipping before but were burned by hidden RTO charges, unreliable suppliers,slow shipping times.",
    },
    {
      title: "Existing E-commerce Seller",
      text: "You already sell online but want to test new product niches rapidly without holding inventory.",
    },
    {
      title: "Anyone Tired of Manual Overload",
      text: "You're sick of spending hours on tedious tasks like tracking orders, managing customer inquiries related to logistics .",
    },
    {
      title: "Seeking Financial Freedom",
      text: "You dream of a business that offers location independence, allows you to work on your own terms.",
    },
  ];

  return (
    <section className="bg-[#062E33] text-gray-100 py-16 sm:py-20 px-6 sm:px-10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
          Who Should Join
        </h2>
        <p className="text-yellow-400 font-bold mb-12 text-sm sm:text-base">
          Give your local accounting carrer a kick Start.
        </p>

        {/* === GRID 3x2 EQUAL CAPSULES === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {points.map((point, index) => (
            <div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-[#0f464d]
              rounded-full px-6 py-3 w-full max-w-[380px] h-[100px]
              shadow-[0_4px_16px_rgba(10,42,122,0.2)]
              hover:shadow-[0_6px_20px_rgba(10,42,122,0.35)]
              transition-all duration-300"
            >
              {/* Number Circle */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#062E33] font-bold text-base shadow-md flex-shrink-0">
                {index + 1}
              </div>

              {/* Text */}
              <div className="text-left text-white">
                <h3 className="text-sm sm:text-base text-yellow-400 font-semibold mb-0.5">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm opacity-90 leading-snug">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <button className="bg-yellow-500 text-emerald-900 border-2 border-white px-8 py-4 rounded-full font-semibold text-lg transition animate-bounce">
          This is Absolutely for Me!
        </button>
      </div>
    </section>
  );
};

export default Join;
