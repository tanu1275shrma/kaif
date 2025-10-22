import React from "react";
import Footer from "../components/Footer";

const Refund = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow bg-gradient-to-r from-[#062E33] to-[#00A36C] text-white flex flex-col items-center justify-center px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-yellow-400">
          Refund and Cancellation Policy
        </h1>

        <div className="max-w-4xl text-left space-y-5 leading-relaxed text-lg">
          <p>
            <strong>Non-Refundable Payments:</strong> All payments for
            admission, course registration, or educational services are
            non-refundable and non-transferable.
          </p>

          <p>
            <strong>Review Before Payment:</strong> Students are encouraged to
            review course details carefully before making any payment.
          </p>

          <p>
            <strong>Exceptional Cases:</strong> Refunds may be considered in
            cases of duplicate transactions or technical errors, subject to
            verification and approval by our administration team.
          </p>

          <p>
            <strong>Request Timeline:</strong> Refund or cancellation requests
            must be made within 7 working days of the transaction.
          </p>

          <p>
            <strong>How to Request:</strong> Contact us at{" "}
            <a
              href="mailto:support@skillsfavour.com"
              className="font-bold text-yellow-400 hover:underline"
            >
              support@skillsfavour.com
            </a>{" "}
            or <span className="font-bold text-yellow-400">+91 9997919492</span>
          </p>

          <p>
            <strong>Final Decision:</strong> The management of Skills Favour
            holds the final authority on all refund and cancellation decisions.
          </p>
        </div>
      </div>

      {/* Footer (Always Visible) */}
      <Footer />
    </div>
  );
};

export default Refund;
