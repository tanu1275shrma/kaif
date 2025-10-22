import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow bg-gradient-to-r from-[#062E33] to-[#00A36C] text-white flex flex-col items-center justify-center px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-yellow-400">
          Contact Us
        </h1>

        <div className="max-w-4xl text-left space-y-5 leading-relaxed text-lg">
          <p>
            We’re happy to connect with students, parents, and educators. For
            questions about our CBSE programs, admissions, or educational
            services, our team is here to assist.
          </p>

          <p>
            <strong>Address:</strong> Civil Lines, Washim, Maharashtra
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <span className="font-bold text-yellow-400">+91 89837 49765</span>
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@waghsiredupro.in"
              className="font-bold text-yellow-400 hover:underline"
            >
              support@waghsiredupro.in
            </a>
          </p>

          <p>
            <strong>Office Hours:</strong> Monday to Saturday, 9:00 AM – 6:00 PM
            (Closed on Sundays)
          </p>

          <p>We look forward to supporting your educational journey.</p>
        </div>
      </div>

      {/* Footer (Always Visible) */}
      <Footer />
    </div>
  );
};

export default Contact;
