import React from 'react';

const GeospatialDensityMap = () => {
  const regions = [
    { name: 'California', density: 95, color: '#EF4444' },
    { name: 'Texas', density: 88, color: '#F97316' },
    { name: 'New York', density: 75, color: '#EAB308' },
    { name: 'Florida', density: 62, color: '#22C55E' },
    { name: 'Others', density: 45, color: '#3B82F6' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Geospatial Shipment Density</h3>
        <div className="text-sm text-gray-500">Heat map representation of high-volume shipping regions</div>
      </div>
      
      {/* Simulated Map Area */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg mb-4 overflow-hidden">
        {/* Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-50"></div>
        
        {/* High Density Regions (simulated as colored areas) */}
        <div className="absolute top-4 left-8 w-16 h-12 bg-red-400 opacity-70 rounded-lg blur-sm"></div>
        <div className="absolute top-6 right-12 w-20 h-16 bg-orange-400 opacity-60 rounded-lg blur-sm"></div>
        <div className="absolute bottom-8 left-16 w-12 h-10 bg-yellow-400 opacity-50 rounded-lg blur-sm"></div>
        <div className="absolute bottom-12 right-8 w-14 h-14 bg-green-400 opacity-40 rounded-lg blur-sm"></div>
        
        {/* Overlay text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-gray-900">High Density Regions</div>
            <div className="text-sm text-gray-600">Interactive map coming soon</div>
          </div>
        </div>
      </div>
      
      {/* Density Legend */}
      <div className="space-y-3">
        {regions.map((region, index) => (
          <div key={region.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: region.color }}
              />
              <span className="text-sm font-medium text-gray-700">{region.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-20 bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-500" 
                  style={{ 
                    width: `${region.density}%`,
                    backgroundColor: region.color 
                  }}
                />
              </div>
              <span className="text-sm text-gray-600 w-8">{region.density}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeospatialDensityMap;