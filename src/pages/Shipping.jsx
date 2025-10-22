import React from "react";
import Footer from "../components/Footer";

const ShippingPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow bg-gradient-to-r from-[#062E33] to-[#00A36C] text-white flex flex-col items-center justify-center px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-yellow-400">
          Shipping Policy
        </h1>

        <div className="max-w-4xl text-left space-y-5 leading-relaxed text-lg">
          <p>
            <strong>There is no shipping policy</strong> because we provide the
            educational services online.
          </p>

          <p>
            <strong>Issues & Assistance:</strong> For lost, damaged, or other
            shipping issues, contact us promptly at{" "}
            <a
              href="mailto:support@waghsiredupro.in"
              className="font-bold text-yellow-400 hover:underline"
            >
              support@waghsiredupro.in
            </a>{" "}
            or{" "}
            <span className="font-bold text-yellow-400">+91 89837 49765</span>,
            and we will assist you.
          </p>
        </div>
      </div>

      {/* Footer (Always Visible) */}
      <Footer />
    </div>
  );
};

export default ShippingPolicy;
