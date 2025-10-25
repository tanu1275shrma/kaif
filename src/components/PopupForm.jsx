import React from "react";

const PopupForm = () => {
  const paymentLink =
    "https://live.skillsfavour.com/payment-link/68fc8be867ee3b46ba6a357c";

  const handleClick = () => {
    window.open(paymentLink, "_blank");
  };

  return (
    <>
      {/* 🔘 Responsive Animated Enroll Button */}
      <button
        onClick={handleClick}
        className="
          w-full max-w-xs
          sm:max-w-sm
          md:max-w-md
          lg:max-w-lg
          bg-gradient-to-r from-[#00A36C] to-[#045D4C]
          text-white font-semibold
          px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4
          rounded-2xl
          shadow-[0_8px_20px_rgba(0,0,0,0.4)]
          hover:scale-105
          transition-all duration-300
          animate-bounce-slow
        "
      >
        Yes! I'm in for the Webinar
      </button>

      {/* 💫 Custom CSS */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.2s infinite;
        }
        button:hover {
          background: linear-gradient(90deg, #00B97C, #007855);
          box-shadow: 0 0 25px rgba(0, 163, 108, 0.8);
        }
      `}</style>
    </>
  );
};

export default PopupForm;
