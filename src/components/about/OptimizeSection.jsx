import React from "react";
import { Link } from "react-router-dom";

const OptimizeSection = () => {
  return (
    <div className="bg-purple-800 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <p className="text-purple-200">Delivery Accuracy</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">2M+</div>
            <p className="text-purple-200">Shipments Tracked</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">45%</div>
            <p className="text-purple-200">Cost Reduction for Partners</p>
          </div>
        </div>

        {/* AI Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-purple-700 rounded-lg p-6 text-white hover:bg-purple-600 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              AI Delay Prediction
            </div>
            <p className="text-purple-100 text-sm">
              Machine learning algorithms predict potential delays up to 48 hours in advance
            </p>
            <div className="mt-3 text-xs text-purple-200">
              Available for registered users
            </div>
          </div>
          <div className="bg-purple-700 rounded-lg p-6 text-white hover:bg-purple-600 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="text-xl font-semibold mb-3 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Smart Route Optimization
            </div>
            <p className="text-purple-100 text-sm">
              AI-powered routing suggestions reduce delivery time and operational costs
            </p>
            <div className="mt-3 text-xs text-purple-200">
              Service provider exclusive
            </div>
          </div>
          <div className="bg-purple-700 rounded-lg p-6 text-white hover:bg-purple-600 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="text-xl font-semibold mb-3 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Real-Time Analytics
            </div>
            <p className="text-purple-100 text-sm">
              Live dashboards with performance metrics and actionable insights
            </p>
            <div className="mt-3 text-xs text-purple-200">
              Available to all users
            </div>
          </div>
        </div>

        {/* CTA Section with User Journey Focus */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Choose Your LogiTrack Experience
          </h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Start with free tracking or unlock the full power of AI-driven logistics intelligence
          </p>
          
          {/* Dual Path CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Guest Path */}
            <div className="bg-white rounded-lg p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📦</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Quick Tracking</h3>
                </div>
              </div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Real-time shipment location</li>
                <li>• Delivery status updates</li>
                <li>• Multiple tracking support</li>
              </ul>
              <Link
                to="/track"
                className="w-full bg-purple-800 text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-purple-700 inline-block text-center"
              >
                Track Shipment Now
              </Link>
            </div>

            {/* Registered Path */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-6 text-left text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-400 text-purple-800 px-3 py-1 text-xs font-bold rounded-bl-lg">
                AI POWERED
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🤖</span>
                <div>
                  <h3 className="text-lg font-semibold">AI Dashboard</h3>
                </div>
              </div>
              <ul className="text-sm text-purple-100 mb-4 space-y-1">
                <li>• AI delay predictions</li>
                <li>• Route optimization</li>
                <li>• Performance analytics</li>
              </ul>
              <Link
                to="/register"
                className="w-full bg-white text-purple-800 px-6 py-3 rounded-md font-medium transition-colors hover:bg-gray-100 inline-block text-center"
              >
                Get AI Dashboard For Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizeSection;
