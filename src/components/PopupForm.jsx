import React, { useState, useEffect } from "react";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Load external script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://ns.myprofunnels.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // ✅ Functions to open/close popup
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  // ✅ Detect Thank You redirect inside iframe
  useEffect(() => {
    if (!isOpen) return;

    const checkRedirect = setInterval(() => {
      const iframe = document.getElementById("inline-RqmnUu7PdjXUi9CubFdg");
      if (iframe) {
        try {
          const currentURL = iframe.contentWindow.location.href;
          if (currentURL.includes("thankyou")) {
            window.location.href = "/thankyou";
          }
        } catch (err) {
          // ignore CORS errors silently
        }
      }
    }, 1000);

    return () => clearInterval(checkRedirect);
  }, [isOpen]);

  return (
    <>
      {/* 🔘 Animated Enroll Button */}
      <button
        onClick={openPopup}
        className="bg-gradient-to-r from-[#00A36C] to-[#045D4C] text-white font-semibold px-10 py-4 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:scale-110 transition-all duration-300 animate-bounce-slow"
      >
        Yes! I'm in for the Webinar
      </button>

      <style>{`
        /* 💫 Custom bounce animation */
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
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

      {/* 🪟 Popup Form */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#00000080] backdrop-blur-[8px] flex justify-center items-center z-50 p-4 transition-all duration-300">
          <div className="relative bg-[#071C2F] rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform scale-100 transition-transform duration-300">
            {/* ❌ Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 bg-red-500 text-white text-lg px-2 py-1 rounded-full hover:bg-red-600 z-10"
            >
              ✖
            </button>

            {/* ✅ Embedded External Form */}
            <iframe
              src="https://ns.myprofunnels.com/widget/form/RqmnUu7PdjXUi9CubFdg"
              style={{
                width: "100%",
                height: "460px",
                border: "none",
                borderRadius: "12px",
              }}
              id="inline-RqmnUu7PdjXUi9CubFdg"
              title="webinar funnel"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
