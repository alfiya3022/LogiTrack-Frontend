import React from "react";
import predictiveImg from "../../assets/predictive.jpeg";

const PredictionSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <img
          src={predictiveImg}
          alt="AI Predictive Analytics Dashboard"
          className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
        />
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          AI-Powered Predictive Insights
          <span className="block text-lg font-normal text-purple-800 mt-2">
            Available for Registered Users
          </span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          Transform from reactive to proactive logistics management. Our AI 
          analyzes vast datasets to predict delays, optimize routes, and help 
          you maintain exceptional customer satisfaction before issues arise.
        </p>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-purple-800 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-sm">🤖</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Delay Prediction</h4>
              <p className="text-gray-600">AI forecasts potential delays up to 48 hours in advance</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-purple-800 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-sm">📊</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Route Optimization</h4>
              <p className="text-gray-600">Smart algorithms reduce delivery time and costs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PredictionSection;
