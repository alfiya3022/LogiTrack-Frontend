import React from 'react';

const ShipmentStatusChart = () => {
  const data = [
    { status: 'In Transit', value: 65, color: '#3B82F6' },
    { status: 'Delivered', value: 28, color: '#10B981' },
    { status: 'Pending', value: 5, color: '#F59E0B' },
    { status: 'Delayed', value: 2, color: '#EF4444' }
  ];
  
  const total = data.reduce((sum, item) => sum + item.value, 0);

  // Calculate angles for pie chart
  let cumulativePercentage = 0;
  const dataWithAngles = data.map(item => {
    const startAngle = (cumulativePercentage * 360) / 100;
    const endAngle = ((cumulativePercentage + item.value) * 360) / 100;
    cumulativePercentage += item.value;
    return { ...item, startAngle, endAngle };
  });

  const createPath = (centerX, centerY, radius, startAngle, endAngle) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", centerX, centerY, 
      "L", start.x, start.y, 
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Shipment Status Distribution</h3>
        <div className="text-sm text-gray-500">Breakdown of current shipment statuses</div>
      </div>
      
      <div className="flex items-center justify-between">
        {/* Donut Chart */}
        <div className="relative">
          <svg width="160" height="160" viewBox="0 0 160 160" className="transform -rotate-90">
            {dataWithAngles.map((item, index) => (
              <path
                key={item.status}
                d={createPath(80, 80, 60, item.startAngle, item.endAngle)}
                fill={item.color}
                stroke="white"
                strokeWidth="2"
              />
            ))}
            {/* Inner circle for donut effect */}
            <circle cx="80" cy="80" r="35" fill="white" />
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">{total}%</span>
            <span className="text-xs text-gray-500">Total</span>
          </div>
        </div>
        
        {/* Legend */}
        <div className="space-y-3 ml-6">
          {data.map((item, index) => (
            <div key={item.status} className="flex items-center space-x-3">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-700">{item.status}</div>
                <div className="text-xs text-gray-500">{item.value}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShipmentStatusChart;