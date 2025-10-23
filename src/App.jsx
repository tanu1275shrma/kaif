import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Hero from "./components/Hero";
import Stages from "./components/Stages";
import Learn from "./components/Learn";
import Regret from "./components/Regret";
import Mentor from "./components/Mentor";
import Results from "./components/Results";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ScrollBanner from "./components/ScrollBanner";
import Challenges from "./components/Challenges";
import Join from "./components/Join";
import ThankYou from "./components/Thankyou";
import PopupForm from "./components/PopupForm";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Shipping from "./pages/Shipping";
import Contact from "./pages/Contact";
import Error500 from "./pages/Error500";

//nooo addded

const App = () => {
  // ✅ Facebook Meta Pixel setup
  useEffect(() => {
    // Create and inject the script
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    // Initialize your pixel ID
    window.fbq("init", "1459056298504694");
    window.fbq("track", "PageView");
  }, []);

  return (
    <Router>
      <Routes>
        {/* 🏠 Main Landing Page */}
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <ScrollBanner />
              <Results />
              <Regret />
              <Learn />
              <Stages />
              <Challenges />
              <Join />
              <Mentor />
              <FAQ />
              <Footer />
            </div>
          }
        />

        {/* ✅ Thank You Redirects */}
        <Route path="/thankyou" element={<ThankYou />} />
        <Route
          path="/congratulations"
          element={<Navigate to="/thankyou" replace />}
        />

        {/* 🧾 Footer Policy Pages */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/500" element={<Error500 />} />
      </Routes>

      {/* ✅ NoScript fallback (for browsers with JS disabled) */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1459056298504694&ev=PageView&noscript=1"
          alt="fb pixel"
        />
      </noscript>
    </Router>
  );
};

export default App;
