import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => {
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

        {/* 🙌 Thank You Page */}
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;
