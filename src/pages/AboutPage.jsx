import React from 'react';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/about/HeroSection';
import GuidingPrinciples from '../components/about/GuidingPrinciples';
import TeamSection from '../components/about/TeamSection';
import OptimizeSection from '../components/about/OptimizeSection';
import Footer from '../components/common/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <GuidingPrinciples />
      <TeamSection />
      <OptimizeSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
