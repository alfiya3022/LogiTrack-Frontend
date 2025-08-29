import React from 'react';

const DeliveryPerformanceChart = () => {
  const carriers = [
    { name: 'DHL', onTime: 95, delayed: 5 },
    { name: 'FedEx', onTime: 92, delayed: 8 },
    { name: 'UPS', onTime: 88, delayed: 12 },
    { name: 'USPS', onTime: 85, delayed: 15 },
    { name: 'Others', onTime: 78, delayed: 22 }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Delivery Performance by Carrier</h3>
        <div className="text-sm text-gray-500">On-time vs Delayed deliveries</div>
      </div>
      
      <div className="space-y-4">
        {carriers.map((carrier, index) => (
          <div key={carrier.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700">{carrier.name}</span>
              <span className="text-gray-500">{carrier.onTime}%</span>
            </div>
            <div className="flex w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-l-full" 
                style={{ width: `${carrier.onTime}%` }}
              />
              <div 
                className="bg-gradient-to-r from-purple-400 to-purple-500 h-3 rounded-r-full" 
                style={{ width: `${carrier.delayed}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-xs text-gray-600">On-Time</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Delayed</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPerformanceChart;