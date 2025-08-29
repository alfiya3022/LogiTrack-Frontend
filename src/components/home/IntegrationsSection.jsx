import React from "react";

const integrations = [
  {
    name: "Shopify",
    category: "E-commerce",
    icon: "🛍️", // Replace with actual icon/logo
  },
  {
    name: "SAP",
    category: "ERP",
    icon: "💼", // Replace with actual icon/logo
  },
  {
    name: "Salesforce",
    category: "CRM",
    icon: "☁️", // Replace with actual icon/logo
  },
  {
    name: "QuickBooks",
    category: "Accounting",
    icon: "📊", // Replace with actual icon/logo
  },
  {
    name: "WooCommerce",
    category: "E-commerce",
    icon: "🛒", // Replace with actual icon/logo
  },
  {
    name: "Oracle",
    category: "ERP",
    icon: "🔄", // Replace with actual icon/logo
  },
];

const IntegrationsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Seamless Integrations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect LogiTrack with your favorite tools and platforms for a
            unified logistics experience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-center group cursor-pointer"
            >
              <div className="text-3xl mb-2">{integration.icon}</div>
              <div className="text-gray-900 font-medium mb-1">
                {integration.name}
              </div>
              <div className="text-purple-800 text-sm">
                {integration.category}
              </div>
              <div className="mt-2 text-xs text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More →
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-white text-purple-800 border-2 border-purple-800 px-6 py-2 rounded-md hover:bg-purple-50 transition-colors duration-300">
            <span>View All Integrations</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
