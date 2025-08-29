import React from 'react';

const DelayLikelihoodChart = () => {
  const data = [
    { week: 'Week 1', low: 15, medium: 25, high: 10 },
    { week: 'Week 2', low: 20, medium: 30, high: 15 },
    { week: 'Week 3', low: 18, medium: 35, high: 12 },
    { week: 'Week 4', low: 25, medium: 40, high: 18 },
    { week: 'Week 5', low: 22, medium: 38, high: 14 }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Predicted Delay Likelihood</h3>
        <div className="text-sm text-gray-500">AI forecast for potential shipment delays</div>
      </div>
      
      <div className="relative">
        {/* Area Chart Simulation */}
        <div className="h-48 relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* High Risk Area */}
            <defs>
              <linearGradient id="highGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor:'#EF4444', stopOpacity:0.3}} />
                <stop offset="100%" style={{stopColor:'#EF4444', stopOpacity:0.1}} />
              </linearGradient>
            </defs>
            <path
              d={`M 0 80 Q 25 75 50 70 Q 75 65 100 68 L 100 100 L 0 100 Z`}
              fill="url(#highGradient)"
            />
            
            {/* Medium Risk Area */}
            <defs>
              <linearGradient id="mediumGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor:'#F59E0B', stopOpacity:0.4}} />
                <stop offset="100%" style={{stopColor:'#F59E0B', stopOpacity:0.1}} />
              </linearGradient>
            </defs>
            <path
              d={`M 0 50 Q 25 45 50 40 Q 75 35 100 38 L 100 68 Q 75 65 50 70 Q 25 75 0 80 Z`}
              fill="url(#mediumGradient)"
            />
            
            {/* Low Risk Area */}
            <defs>
              <linearGradient id="lowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor:'#10B981', stopOpacity:0.4}} />
                <stop offset="100%" style={{stopColor:'#10B981', stopOpacity:0.1}} />
              </linearGradient>
            </defs>
            <path
              d={`M 0 20 Q 25 15 50 10 Q 75 8 100 12 L 100 38 Q 75 35 50 40 Q 25 45 0 50 Z`}
              fill="url(#lowGradient)"
            />
          </svg>
        </div>
        
        {/* X-axis labels */}
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          {data.map(item => (
            <span key={item.week}>{item.week}</span>
          ))}
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Low Risk</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Medium Risk</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-xs text-gray-600">High Risk</span>
        </div>
      </div>
    </div>
  );
};

export default DelayLikelihoodChart;