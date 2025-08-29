import React from 'react';

const OnTimeDeliveryCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">On-Time Delivery Rate</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">97.2%</p>
          <p className="text-xs text-green-600 mt-1">↑ 2.3% vs last month</p>
        </div>
        <div className="p-3 bg-green-50 rounded-full">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OnTimeDeliveryCard;