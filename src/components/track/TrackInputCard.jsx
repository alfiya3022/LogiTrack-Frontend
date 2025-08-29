// src/components/TrackInputCard.jsx
import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Truck } from "lucide-react";
import { useTracking } from "../../context/TrackingContext";

export default function TrackInputCard() {
  const [searchParams] = useSearchParams();
  const [trackingId, setTrackingId] = useState("");
  const [multipleIds, setMultipleIds] = useState("");
  const { trackShipment, loading, error, clearError } = useTracking();

  // Auto-populate from URL params (from home page quick track)
  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      setTrackingId(id);
      handleTrack(id);
    }
  }, [searchParams]);

  // Clear errors when input changes
  useEffect(() => {
    if (error) {
      clearError();
    }
  }, [trackingId, multipleIds, clearError]);

  const handleTrack = async (id = trackingId) => {
    if (!id.trim()) return;
    
    try {
      await trackShipment(id.trim());
    } catch (err) {
      console.error("Tracking failed:", err);
    }
  };

  const handleTrackAll = async () => {
    if (!multipleIds.trim()) return;
    
    const ids = multipleIds.split('\n').filter(id => id.trim());
    
    // Track first ID for now (in real app, you'd track all)
    if (ids.length > 0) {
      try {
        await trackShipment(ids[0].trim());
      } catch (err) {
        console.error("Tracking failed:", err);
      }
    }
  };

  const handleClear = () => {
    setTrackingId("");
    setMultipleIds("");
    clearError();
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Track Your Shipment
      </h2>
      <p className="text-gray-500 mb-4">Enter your tracking number below.</p>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-600 rounded-md p-3 text-sm">
          {error}
        </div>
      )}

      {/* Single shipment input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="e.g., LTK-1234567890"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-800"
          onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
        />
      </div>

      {/* Track button */}
      <button 
        onClick={() => handleTrack()}
        disabled={loading || !trackingId.trim()}
        className={`w-full bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2 transition ${
          loading || !trackingId.trim() ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            Tracking...
          </>
        ) : (
          <>
            <Truck size={18} />
            Track Shipment
          </>
        )}
      </button>

      {/* AI Feature Teaser */}
      <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
        <p className="text-sm text-purple-700 mb-2">
          🤖 Want AI-powered delivery predictions?
        </p>
        <Link 
          to="/register" 
          className="text-sm text-purple-800 font-medium hover:underline"
        >
          Create free account for AI insights →
        </Link>
      </div>

      {/* Multiple shipments */}
      <p className="text-gray-500 mt-6 mb-2">Or track multiple shipments</p>
      <textarea
        rows="3"
        placeholder="Enter tracking numbers, one per line..."
        value={multipleIds}
        onChange={(e) => setMultipleIds(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-800"
      />

      {/* Bottom buttons */}
      <div className="flex gap-4 mt-4">
        <button 
          onClick={handleTrackAll}
          disabled={loading || !multipleIds.trim()}
          className={`w-full border border-gray-300 rounded-md py-2 font-medium hover:bg-gray-100 transition ${
            loading || !multipleIds.trim() ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Track All
        </button>
        <button 
          onClick={handleClear}
          className="w-full border border-gray-300 rounded-md py-2 font-medium hover:bg-gray-100 transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
