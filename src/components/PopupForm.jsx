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
      {/* 🔘 Enroll Button */}
      <button
        onClick={openPopup}
        className="bg-gradient-to-r from-[#00A36C] to-[#062E33] text-white font-semibold px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Enroll Now
      </button>

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
