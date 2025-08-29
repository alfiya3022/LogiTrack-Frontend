// src/components/RecentSearches.jsx
import React from "react";
import { useTracking } from "../../context/TrackingContext";

const RecentSearches = () => {
  const { recentSearches, trackShipment, loading } = useTracking();

  const handleRetrack = async (trackingId) => {
    try {
      await trackShipment(trackingId);
    } catch (error) {
      console.error("Retrack failed:", error);
    }
  };

  if (recentSearches.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md mx-auto">
        <h2 className="text-lg font-semibold text-gray-900">Recent Searches</h2>
        <p className="text-sm text-gray-500 mb-4">
          Your recently tracked shipments will appear here.
        </p>
        <div className="text-center py-4">
          <div className="text-2xl mb-2">🔍</div>
          <p className="text-gray-400 text-sm">No recent searches</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold text-gray-900">Recent Searches</h2>
      <p className="text-sm text-gray-500 mb-4">
        Quick access to your previously tracked shipments.
      </p>

      <ul className="space-y-4">
        {recentSearches.map((search, index) => (
          <li key={index} className="flex justify-between items-start group">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{search.id}</p>
              <p className="text-xs text-gray-500">{search.description}</p>
              <p className="text-xs text-gray-400">
                {new Date(search.searchDate).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={() => handleRetrack(search.id)}
              disabled={loading}
              className="opacity-0 group-hover:opacity-100 text-purple-600 hover:text-purple-800 transition-all text-sm font-medium"
            >
              Track
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
