import React from "react";
import {
  FaShippingFast,
  FaChartLine,
  FaMapMarkedAlt,
  FaBell,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast className="text-purple-800 text-3xl mb-4" />,
    title: "Real-time Tracking",
    description:
      "Monitor your shipments from origin to destination with precise location updates. Available for all users.",
  },
  {
    icon: <FaChartLine className="text-purple-800 text-3xl mb-4" />,
    title: "AI Predictive Analytics",
    description:
      "Leverage AI to forecast delivery times and predict potential delays. Exclusive to registered users.",
  },
  {
    icon: <FaMapMarkedAlt className="text-purple-800 text-3xl mb-4" />,
    title: "Smart Route Optimization",
    description:
      "Intelligent algorithms suggest the most efficient routes, saving time and costs for service providers.",
  },
  {
    icon: <FaBell className="text-purple-800 text-3xl mb-4" />,
    title: "Automated Alerts",
    description:
      "Receive instant notifications on shipment status changes and critical milestones via email/SMS.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Features</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Powerful features for both parcel receivers and service providers
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition-all text-left"
            >
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
