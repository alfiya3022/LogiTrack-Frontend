import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import VisibilitySection from "../components/home/VisibilitySection";
import PredictionSection from "../components/home/PredictionSection";
import Testimonial from "../components/home/Testimonial";
import FinalCTA from "../components/home/FinalCTA";
import Footer from "../components/common/Footer";
import BackToTop from "../components/common/BackToTop";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <VisibilitySection />
        <PredictionSection />
        <Testimonial />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
