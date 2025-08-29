import React, { useState, useEffect } from 'react';

const ShipmentVolumeChart = ({ data: initialData, loading }) => {
  const [timeRange, setTimeRange] = useState('month'); // week, month, year
  const [showTrend, setShowTrend] = useState(true);
  const [animatedData, setAnimatedData] = useState([]);
  const [selectedBar, setSelectedBar] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const defaultData = [
    { month: 'Jan', value: 800 },
    { month: 'Feb', value: 900 },
    { month: 'Mar', value: 850 },
    { month: 'Apr', value: 1100 },
    { month: 'May', value: 1300 },
    { month: 'Jun', value: 1200 },
    { month: 'Jul', value: 1400 },
    { month: 'Aug', value: 1350 },
    { month: 'Sep', value: 1500 },
    { month: 'Oct', value: 1600 },
    { month: 'Nov', value: 1550 }
  ];

  const data = initialData || defaultData;
  const maxValue = Math.max(...data.map(d => d.value));

  // Animate data when it changes
  useEffect(() => {
    if (loading) return;

    const animate = async () => {
      const steps = 20;
      for (let i = 0; i <= steps; i++) {
        const progress = i / steps;
        const currentData = data.map(item => ({
          ...item,
          value: item.value * progress
        }));
        setAnimatedData(currentData);
        await new Promise(resolve => setTimeout(resolve, 20));
      }
    };

    animate();
  }, [data, loading]);

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all duration-300 ${isExpanded ? 'fixed inset-4 z-50 overflow-auto' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Shipment Volume Trend</h3>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isExpanded ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v7h7V4H4zm0 9v7h7v-7H4zm9-9v7h7V4h-7zm0 9v7h7v-7h-7z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              )}
            </svg>
          </button>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
          </select>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="showTrend"
              checked={showTrend}
              onChange={(e) => setShowTrend(e.target.checked)}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="showTrend" className="ml-2 text-sm text-gray-600">
              Show Trend
            </label>
          </div>
        </div>
      </div>

      <div className="relative">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-50 rounded-lg">
            <div className="animate-pulse space-y-4">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="h-3 w-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        ) : (
          <>
            {/* Growth indicator */}
            <div className="absolute top-0 right-0 p-2">
              {data.length >= 2 && (
                <div className={`flex items-center px-2 py-1 rounded-full text-sm ${
                  data[data.length - 1].value > data[data.length - 2].value
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  <span className="font-medium">
                    {((data[data.length - 1].value - data[data.length - 2].value) / data[data.length - 2].value * 100).toFixed(1)}%
                  </span>
                  <svg
                    className={`w-4 h-4 ml-1 ${
                      data[data.length - 1].value > data[data.length - 2].value ? 'text-green-600' : 'text-red-600'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        data[data.length - 1].value > data[data.length - 2].value
                          ? 'M5 10l7-7m0 0l7 7m-7-7v18'
                          : 'M19 14l-7 7m0 0l-7-7m7 7V3'
                      }
                    />
                  </svg>
                </div>
              )}
            </div>

            <div className="flex items-end justify-between h-48 mb-2">
              {animatedData.map((item, index) => (
                <div 
                  key={item.month} 
                  className="flex flex-col items-center flex-1 relative group"
                  onMouseEnter={() => setSelectedBar(index)}
                  onMouseLeave={() => setSelectedBar(null)}
                >
                  <div 
                    className={`w-full mx-1 bg-gradient-to-t transition-all duration-300 ${
                      selectedBar === index 
                        ? 'from-purple-600 to-purple-400 scale-105' 
                        : 'from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500'
                    } rounded-t-sm`}
                    style={{ height: `${(item.value / maxValue) * 100}%`, minHeight: '8px' }}
                  />
                  {selectedBar === index && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                      {item.value.toLocaleString()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* X-axis labels */}
        <div className="flex justify-between text-xs text-gray-500">
          {data.map(item => (
            <span key={item.month} className="flex-1 text-center">{item.month}</span>
          ))}
        </div>

        {/* Trend line overlay */}
        {showTrend && !loading && (
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-48" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polyline
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="0.5"
                strokeDasharray="2,2"
                points={data.map((item, index) => 
                  `${(index / (data.length - 1)) * 100},${100 - (item.value / maxValue) * 80}`
                ).join(' ')}
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShipmentVolumeChart;
