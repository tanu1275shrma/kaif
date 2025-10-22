import React from "react";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow bg-gradient-to-r from-[#062E33] to-[#00A36C] text-white flex flex-col items-center justify-center px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-yellow-400">
          Terms and Conditions
        </h1>

        <div className="max-w-4xl text-left space-y-5 leading-relaxed text-lg">
          <h2 className="text-2xl text-center font-bold">
            SIR G Group – Terms & Conditions
          </h2>

          <p>
            <strong>Acceptance:</strong> By accessing and using our website, you
            agree to comply with these terms and conditions.
          </p>

          <p>
            <strong>Content Ownership:</strong> All content, materials, and
            information on this site are owned by Waghsir EduPro and are for
            personal and educational use only.
          </p>

          <p>
            <strong>Restrictions:</strong> Users may not copy, reproduce,
            distribute, or modify any content without prior written consent.
          </p>

          <p>
            <strong>Accuracy & Liability:</strong> We strive for accuracy, but
            Waghsir EduPro is not liable for errors, technical issues, or any
            losses arising from website use.
          </p>

          <p>
            <strong>Updates:</strong> We reserve the right to update or change
            terms at any time without prior notice. Continued use of the website
            implies acceptance of updated terms.
          </p>

          <p>
            <strong>Contact:</strong> For queries, reach us at{" "}
            <a
              href="mailto:support@waghsiredupro.in"
              className="font-bold text-yellow-400 hover:underline"
            >
              support@waghsiredupro.in
            </a>{" "}
            or{" "}
            <span className="font-bold text-yellow-400">+91 89837 49765</span>.
          </p>
        </div>
      </div>

      {/* Footer (Always Visible) */}
      <Footer />
    </div>
  );
};

export default Terms;
