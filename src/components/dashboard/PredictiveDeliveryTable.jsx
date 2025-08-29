import React from 'react';

const PredictiveDeliveryTable = () => {
  const shipments = [
    {
      id: 'LTK6764520',
      status: 'In Transit',
      origin: 'New York, USA',
      destination: 'Los Angeles, USA',
      eta: '2024-03-15',
      predictedDelay: 'None',
      aiConfidence: '94%'
    },
    {
      id: 'LTK9563485',
      status: 'At Risk',
      origin: 'Shanghai, China',
      destination: 'Hamburg, Germany',
      eta: '2024-03-16',
      predictedDelay: '3 days',
      aiConfidence: '87%'
    },
    {
      id: 'LTK9066777',
      status: 'Delivered',
      origin: 'London, UK',
      destination: 'Paris, France',
      eta: '2024-03-12',
      predictedDelay: 'None',
      aiConfidence: '99%'
    },
    {
      id: 'LTK8751244',
      status: 'In Transit',
      origin: 'Tokyo, Japan',
      destination: 'Sydney, Australia',
      eta: '2024-03-18',
      predictedDelay: 'None',
      aiConfidence: '91%'
    },
    {
      id: 'LTK8887563',
      status: 'Warning',
      origin: 'Dubai, UAE',
      destination: 'Cairo, Egypt',
      eta: '2024-03-20',
      predictedDelay: '1 day',
      aiConfidence: '78%'
    },
    {
      id: 'LTK9344566',
      status: 'In Transit',
      origin: 'São Paulo, Brazil',
      destination: 'Miami, FL, USA',
      eta: '2024-03-17',
      predictedDelay: 'None',
      aiConfidence: '92%'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Transit':
        return 'bg-blue-100 text-blue-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'At Risk':
        return 'bg-red-100 text-red-800';
      case 'Warning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDelayColor = (delay) => {
    if (delay === 'None') return 'text-green-600 font-medium';
    return 'text-red-600 font-medium';
  };

  const getConfidenceColor = (confidence) => {
    const percent = parseInt(confidence);
    if (percent >= 90) return 'text-green-600';
    if (percent >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-purple-600">🤖</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">AI-Enhanced Delivery Predictions</h3>
            <p className="text-sm text-gray-500">Machine learning predictions with confidence scores</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            AI Active
          </span>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tracking ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                AI Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Route
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ETA
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                AI Prediction
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Confidence
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {shipments.map((shipment, index) => (
              <tr key={shipment.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-purple-600">
                  {shipment.id}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(shipment.status)}`}>
                    {shipment.status}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="text-sm text-gray-900">{shipment.origin}</div>
                  <div className="text-xs text-gray-500">↓ {shipment.destination}</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {shipment.eta}
                </td>
                <td className={`px-4 py-4 whitespace-nowrap text-sm ${getDelayColor(shipment.predictedDelay)}`}>
                  {shipment.predictedDelay === 'None' ? '✅ On Time' : `⚠️ +${shipment.predictedDelay}`}
                </td>
                <td className={`px-4 py-4 whitespace-nowrap text-sm font-medium ${getConfidenceColor(shipment.aiConfidence)}`}>
                  {shipment.aiConfidence}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PredictiveDeliveryTable;
