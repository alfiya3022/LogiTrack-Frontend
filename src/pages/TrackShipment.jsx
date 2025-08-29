import React from "react";
import ShipmentStatusCard from "../components/track/ShipmentStatusCard";
import TrackInputCard from "../components/track/TrackInputCard";
import ShipmentOverview from "../components/track/ShipmentOverview";
import ShipmentHistory from "../components/track/ShipmentHistory";
import RecentSearch from "../components/track/RecentSearches";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

const TrackShipment = () => {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Guest User Banner */}
        <div className="bg-purple-50 border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex items-center justify-between text-sm">
            </div>
          </div>
        </div>

        {/* Main Layout Container */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Left Content Area - Map and History Section */}
          <div className="flex-1 lg:w-[65%] flex flex-col">
            {/* Map Area - ShipmentStatusCard */}
            <div className="flex-1 bg-white shadow-sm">
              <ShipmentStatusCard />
            </div>
            
            {/* Bottom History Section */}
            <div className="h-auto bg-white border-t border-gray-200 shadow-sm">
              <div className="p-6">
                <ShipmentHistory />
              </div>
            </div>
          </div>

          {/* Right Sidebar - Tracking Tools */}
          <div className="w-full lg:w-[35%] bg-white border-l border-gray-200 shadow-sm overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Track Your Shipment Input Form */}
              <div>
                <TrackInputCard />
              </div>

              {/* Shipment Overview Details */}
              <div>
                <ShipmentOverview />
              </div>

              {/* Recent Searches */}
              <div>
                <RecentSearch />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Newsletter Signup */}
        <div className="bg-white border-t border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackShipment;
