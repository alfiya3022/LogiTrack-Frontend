// src/components/ShipmentHistory.jsx
import React from "react";
import { useTracking } from "../../context/TrackingContext";

const ShipmentHistory = () => {
  const { currentShipment, loading } = useTracking();

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto mt-10">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex space-x-4">
                <div className="w-3 h-3 bg-gray-200 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!currentShipment?.history) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          Shipment History
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Track a shipment to view its journey history
        </p>
        <div className="text-center py-8">
          <div className="text-4xl mb-2">📍</div>
          <p className="text-gray-400">No tracking history available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto mt-10" id="history">
      <h2 className="text-xl font-semibold text-gray-800 mb-1">
        Shipment History
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Detailed events for tracking ID:{" "}
        <span className="font-semibold text-gray-700">{currentShipment.id}</span>
      </p>

      <div className="relative pl-6 border-l border-gray-200">
        {currentShipment.history.map((event, index) => (
          <div key={index} className="mb-6 relative">
            {/* Dot */}
            <div className={`absolute -left-3 top-1.5 w-3 h-3 rounded-full border-2 border-white shadow-md ${
              index === 0 ? 'bg-green-500' : 'bg-purple-800'
            }`}></div>

            {/* Content */}
            <div className="ml-2">
              <h3 className="text-gray-800 font-medium">{event.title}</h3>
              <p className="text-gray-500 text-sm">{event.date}</p>
              <p className="text-gray-400 text-sm">{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipmentHistory;
