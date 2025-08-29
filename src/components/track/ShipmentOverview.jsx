// src/components/ShipmentOverview.jsx
import React from "react";
import { useTracking } from "../../context/TrackingContext";

const ShipmentOverview = () => {
  const { currentShipment, loading } = useTracking();

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md mx-auto mb-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!currentShipment) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md mx-auto mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Shipment Overview</h2>
        <p className="text-sm text-gray-500 mb-4">
          Enter a tracking ID to view shipment details
        </p>
        <div className="text-center py-8">
          <div className="text-4xl mb-2">📦</div>
          <p className="text-gray-400 text-sm">No shipment selected</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md mx-auto mb-6">
      <h2 className="text-lg font-semibold text-gray-900">Shipment Overview</h2>
      <p className="text-sm text-gray-500">
        Key details for tracking ID:{" "}
        <span className="text-gray-800 font-medium">{currentShipment.id}</span>
      </p>

      <div className="mt-4 space-y-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <span className="text-gray-500">Status:</span>
          <span className={`font-semibold ${
            currentShipment.status === 'In Transit' ? 'text-purple-800' :
            currentShipment.status === 'Delivered' ? 'text-green-600' :
            'text-orange-600'
          }`}>
            {currentShipment.status}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Origin:</span>
          <span className="font-medium">{currentShipment.origin}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Destination:</span>
          <span className="font-medium">{currentShipment.destination}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Current Location:</span>
          <span className="font-medium">{currentShipment.currentLocation}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">ETA:</span>
          <span className="font-medium">{currentShipment.eta}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Progress:</span>
          <span className="font-medium">{currentShipment.progress}%</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-purple-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${currentShipment.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-4">
        <a
          href="#history"
          className="text-purple-800 text-sm font-medium hover:underline"
        >
          &gt; View Detailed Progress
        </a>
      </div>
    </div>
  );
};

export default ShipmentOverview;
