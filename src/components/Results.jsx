import React from "react";
import PopupForm from "./PopupForm";

const Results = () => {
  const dashboards = [
    {
      img: "/images/3vdays.png",
      label: "₹28,000+ in Just 3 Days of Launch",
    },
    {
      img: "/images/7days.png",
      label: "Crossed ₹86,000+ in the First Week",
    },
    {
      img: "/images/15 days.png",
      label: "Hit ₹1 Lakh+ Milestone Within 15 Days",
    },
    {
      img: "/images/30 days.png",
      label: "Scaled Beyond ₹2 Lakh in Just One Month",
    },
  ];

  return (
    <section
      className="relative w-full py-16 px-6 flex flex-col items-center text-center bg-gradient-to-b from-white via-emerald-50 to-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/bgpista.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Headings */}
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-3">
        Students <span className="text-red-700 ">Success</span> Dashboard
      </h2>
      <p className="text-emerald-700 text-lg font-semibold mb-12">
        From Zero to 7 Figures — Students Dreams to Reality Dashboard
      </p>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl w-full mb-8">
        {dashboards.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1"
          >
            <img
              src={item.img}
              alt={`Dashboard ${index + 1}`}
              className="w-full object-cover"
            />
            {/* Green Button under each image */}
            <div className="flex justify-center py-4 bg-white">
              <span className="bg-emerald-700 text-white font-medium px-5 py-2 rounded-full text-sm sm:text-base shadow-md">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <PopupForm />
      </div>
    </section>
  );
};

export default Results;
