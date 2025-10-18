import React from "react";

const Results = () => {
  return (
    <section
      className="relative w-full py-16 px-6 flex flex-col items-center text-center bg-gradient-to-b from-white via-emerald-50 to-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/bgpista.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Headings */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Proven Results from Our Mentors
      </h2>
      <p className="text-emerald-700 text-lg font-semibold mb-12">
        See the Numbers: Our Mentors' E-commerce Dashboards
      </p>

      {/* Dashboards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl w-full mb-8">
        {["1", "2", "3", "4"].map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1"
          >
            <img
              src={`/dashboard${item}.png`}
              alt="Dashboard"
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Info Badges */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <span
          className="border
        bg-emerald-700 border-emerald-600 text-white font-medium px-5 py-2 rounded-full text-sm"
        >
          ₹12.5 Lakhs in 30 Days
        </span>
        <span
          className="border
        bg-emerald-700 border-emerald-600 text-white font-medium px-5 py-2 rounded-full text-sm"
        >
          7-Figure Store Revenue
        </span>
      </div>

      {/* CTA Button */}
      <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-transform hover:-translate-y-0.5">
        Join the Masterclass Now!
      </button>
    </section>
  );
};

export default Results;
