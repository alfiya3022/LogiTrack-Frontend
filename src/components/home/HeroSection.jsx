import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroBg from "../../assets/hero-bg.jpg";

const HeroSection = () => {
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();

  const handleQuickTrack = (e) => {
    e.preventDefault();
    if (trackingId.trim()) {
      // Navigate to track page with tracking ID as query parameter
      navigate(`/track?id=${encodeURIComponent(trackingId.trim())}`);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center h-[90vh]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center text-white flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-xl">
          Revolutionize Your Logistics with AI
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow">
          Gain real-time insights, predict delays, and optimize every shipment
          with <strong>LogiTrack AI's</strong> advanced tracking and analytics.
        </p>

        {/* Glass-morphism Tracking Box */}
        <div className="w-full max-w-2xl mb-8">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-lg font-semibold mb-4 text-white drop-shadow">
              Track Your Shipment Instantly
            </h3>
            <form onSubmit={handleQuickTrack} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter tracking ID (e.g., LTK-1234567890)"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-600 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent whitespace-nowrap"
              >
                Track Now
              </button>
            </form>
          </div>
        </div>

        {/* Updated CTA Buttons */}
        <div className="space-x-4">
          <Link
            to="/register"
            className="px-8 py-4 bg-purple-800 hover:bg-purple-700 transition rounded text-white font-bold shadow-lg text-lg"
          >
            Get AI Analysis
          </Link>
          <Link
            to="/about"
            className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition rounded text-white font-bold shadow-lg text-lg border border-white/30"
          >
            Learn More
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
