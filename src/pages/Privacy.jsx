import React from "react";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow bg-gradient-to-r from-[#062E33] to-[#00A36C] text-white flex flex-col items-center justify-center px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-yellow-400">
          Privacy Policy
        </h1>

        <div className="max-w-4xl text-left space-y-5 leading-relaxed text-lg">
          <p>
            We value your <strong>privacy</strong> and are committed to
            protecting your personal information.
          </p>

          <p>
            <strong>Data Collection:</strong> We collect basic details like your
            name, phone number, and email to respond to inquiries and improve
            our services.
          </p>

          <p>
            <strong>Data Security:</strong> Your information is kept secure and
            is never shared or sold to third parties.
          </p>

          <p>
            <strong>Cookies:</strong> Our website may use cookies to enhance
            your experience. You can manage them through your browser settings.
          </p>

          <p>
            <strong>Contact Us:</strong> For any questions regarding privacy
            practices, reach us at{" "}
            <a
              href="mailto:support@skillsfavour.com"
              className="font-bold text-yellow-400 hover:underline"
            >
              support@skillsfavour.com
            </a>{" "}
            or{" "}
            <span className="font-bold text-yellow-400">+91 9997919492 </span>.
          </p>
        </div>
      </div>

      {/* Footer (Always Visible) */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
