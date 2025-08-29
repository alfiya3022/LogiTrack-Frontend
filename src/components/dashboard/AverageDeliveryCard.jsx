import React from 'react';

const AverageDeliveryCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">Average Delivery Time</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">2.8 Days</p>
          <p className="text-xs text-blue-600 mt-1">Reduced by 0.4 days</p>
        </div>
        <div className="p-3 bg-purple-50 rounded-full">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AverageDeliveryCard;