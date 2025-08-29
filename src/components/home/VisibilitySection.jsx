import React from "react";
import visibilityImage from "../../assets/visibility.jpeg";

const VisibilitySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Complete Supply Chain Visibility
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Gain complete transparency across your supply chain with our
            intuitive tracking interface. Whether you're a parcel receiver checking 
            a single shipment or a service provider managing hundreds of deliveries, 
            LogiTrack provides the visibility you need.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-800 rounded-full"></span>
              <span className="text-gray-700">Real-time location updates for all users</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-800 rounded-full"></span>
              <span className="text-gray-700">Advanced analytics for registered accounts</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-800 rounded-full"></span>
              <span className="text-gray-700">Consolidated dashboard for fleet management</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src={visibilityImage}
            alt="Visibility Dashboard"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default VisibilitySection;
