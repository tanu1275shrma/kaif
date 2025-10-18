import React from "react";
import Hero from "./components/Hero";
import Stages from "./components/Stages";
import Learn from "./components/Learn";
import Regret from "./components/Regret";
import Mentor from "./components/Mentor";
import Results from "./components/Results";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ScrollBanner from "./components/ScrollBanner";

const App = () => {
  return (
    <div>
      <Hero />
      <ScrollBanner />
      <Learn />
      <Stages />
      <Regret />
      <Mentor />
      <Results />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
