import React from 'react';

// Import Header Component
import Navbar from '../components/common/Navbar';

// Import KPI Cards
import TotalShipmentsCard from '../components/dashboard/TotalShipmentsCard';
import OnTimeDeliveryCard from '../components/dashboard/OnTimeDeliveryCard';
import AverageDeliveryCard from '../components/dashboard/AverageDeliveryCard';
import ActiveAlertsCard from '../components/dashboard/ActiveAlertsCard';

// Import Chart Components  
import ShipmentVolumeChart from '../components/dashboard/ShipmentVolumeChart';
import DeliveryPerformanceChart from '../components/dashboard/DeliveryPerformanceChart';
import DelayLikelihoodChart from '../components/dashboard/DelayLikelihoodChart';
import RouteOptimizationChart from '../components/dashboard/RouteOptimizationChart';
import ShipmentStatusChart from '../components/dashboard/ShipmentStatusChart';
import GeospatialDensityMap from '../components/dashboard/GeospatialDensityMap';

// Import Table Component
import PredictiveDeliveryTable from '../components/dashboard/PredictiveDeliveryTable';

// Import Footer Component
import Footer from '../components/common/Footer';

const AIDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />
      
      {/* Registered User Welcome Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold">Welcome to LogiTrack AI Dashboard</h1>
                <p className="text-purple-100 text-sm">Advanced analytics and predictive insights for service providers</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-purple-100">Last updated: 2 minutes ago</p>
              <p className="text-xs text-purple-200">AI predictions refreshed every 15 minutes</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Dashboard Content */}
      <div className="px-6 py-8">
        {/* Dashboard Title and Description */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">AI-Powered Logistics Intelligence</h2>
          <p className="text-gray-600 text-lg">
            Real-time insights, predictive analytics, and optimization recommendations for your logistics operations.
          </p>
        </div>

        {/* KPI Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <TotalShipmentsCard />
          <OnTimeDeliveryCard />
          <AverageDeliveryCard />
          <ActiveAlertsCard />
        </div>

        {/* AI Predictions Section */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600">🔮</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">AI Insights & Alerts</h3>
                  <p className="text-sm text-gray-500">Proactive recommendations from our AI engine</p>
                </div>
              </div>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                Live Updates
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-blue-600">📊</span>
                  <span className="text-sm font-medium text-blue-800">Volume Prediction</span>
                </div>
                <p className="text-xs text-blue-700">Expected 15% increase in shipments next week</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-orange-600">⚠️</span>
                  <span className="text-sm font-medium text-orange-800">Delay Alert</span>
                </div>
                <p className="text-xs text-orange-700">3 shipments at risk of weather delays</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-green-600">💰</span>
                  <span className="text-sm font-medium text-green-800">Cost Optimization</span>
                </div>
                <p className="text-xs text-green-700">Route changes can save $2,400 this week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid - 2 Rows x 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* First Row */}
          <ShipmentVolumeChart />
          <DeliveryPerformanceChart />
          <DelayLikelihoodChart />
          
          {/* Second Row */}
          <RouteOptimizationChart />
          <ShipmentStatusChart />
          <GeospatialDensityMap />
        </div>

        {/* Predictive Delivery Table - Full Width */}
        <div className="mb-8">
          <PredictiveDeliveryTable />
        </div>

        {/* Service Provider Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition text-left">
                📦 Add New Shipment
              </button>
              <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition text-left">
                📊 Generate Report
              </button>
              <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition text-left">
                🔄 Bulk Update Status
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Support & Resources</h3>
            <div className="space-y-3">
              <a href="#" className="block text-purple-800 hover:text-purple-600 transition">
                📖 API Documentation
              </a>
              <a href="#" className="block text-purple-800 hover:text-purple-600 transition">
                💬 Contact Support
              </a>
              <a href="#" className="block text-purple-800 hover:text-purple-600 transition">
                🎯 Feature Requests
              </a>
              <a href="#" className="block text-purple-800 hover:text-purple-600 transition">
                📱 Mobile App
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AIDashboard;
