import React from 'react';

const ActiveAlertsCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">Active Alerts (ARR)</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">35</p>
          <p className="text-xs text-orange-600 mt-1">Needs attention</p>
        </div>
        <div className="p-3 bg-orange-50 rounded-full">
          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ActiveAlertsCard;