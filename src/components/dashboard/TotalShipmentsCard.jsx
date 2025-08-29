import React from 'react';

const TotalShipmentsCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">Total Shipments</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">18,234</p>
          <p className="text-xs text-gray-500 mt-1">Oct 25</p>
        </div>
        <div className="p-3 bg-blue-50 rounded-full">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TotalShipmentsCard;