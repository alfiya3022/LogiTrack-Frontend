import React from 'react';

const RouteOptimizationChart = () => {
  const data = [
    { period: 'Q1', savings: 85000 },
    { period: 'Q2', savings: 120000 },
    { period: 'Q3', savings: 95000 },
    { period: 'Q4', savings: 140000 }
  ];

  const maxSavings = Math.max(...data.map(d => d.savings));

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Route Optimization Savings</h3>
        <div className="text-sm text-gray-500">Cost savings achieved through route optimization</div>
      </div>
      
      <div className="space-y-4">
        <div className="text-2xl font-bold text-green-600 mb-2">$440K Total</div>
        
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={item.period} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">{item.period}</span>
                <span className="text-gray-900 font-semibold">
                  ${(item.savings / 1000).toFixed(0)}K
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-purple-600 h-4 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${(item.savings / maxSavings) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Additional metrics */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-blue-600">12%</div>
            <div className="text-xs text-gray-500">Avg Reduction</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-600">2.3M</div>
            <div className="text-xs text-gray-500">Miles Saved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteOptimizationChart;