import React from 'react';

const GuidingPrinciples = () => {
  const principles = [
    {
      icon: "🤖",
      title: "AI-First Innovation",
      description: "We leverage cutting-edge AI to predict delays, optimize routes, and enhance decision-making."
    },
    {
      icon: "🎯",
      title: "Universal Accessibility", 
      description: "From quick guest tracking to advanced analytics - logistics intelligence for everyone."
    },
    {
      icon: "👥",
      title: "Service Provider Focus",
      description: "Registered users get enterprise-grade AI tools for comprehensive logistics management."
    },
    {
      icon: "📊",
      title: "Data-Driven Insights",
      description: "Real-time analytics and predictive modeling deliver measurable operational improvements."
    },
    {
      icon: "⚡",
      title: "Real-Time Intelligence",
      description: "Live tracking updates and instant AI predictions keep you ahead of disruptions."
    },
    {
      icon: "🔒",
      title: "Trust & Transparency",
      description: "Secure, reliable tracking with complete visibility across your entire supply chain."
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Guiding Principles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built on the foundation of intelligent logistics and user-centric design
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-100 group-hover:bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <span className="text-2xl">{principle.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {principle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuidingPrinciples;
