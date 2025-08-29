import React from 'react';
import aboutImage from '../../assets/images/ai-analytics.jpg';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pioneering the{' '}
              <span className="text-primary-500">Future of Logistics</span>{' '}
              with AI
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At LogiTrack AI, our mission is to revolutionize supply chain management 
              through intelligent, real-time tracking and predictive analytics. We empower 
              businesses to achieve unparalleled efficiency, transparency, and control over 
              their global operations.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Real-time Visibility</h4>
                  <p className="text-gray-600">Complete transparency across your supply chain with intuitive tracking.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Predictive Intelligence</h4>
                  <p className="text-gray-600">AI-driven insights to forecast delays and optimize operations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Smart Optimization</h4>
                  <p className="text-gray-600">Intelligent route planning and cost reduction algorithms.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="AI Analytics Dashboard"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500 rounded-lg opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-500 rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

