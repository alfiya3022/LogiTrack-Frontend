import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import trackImage from "../../assets/track.jpg";

const ShipmentStatusCard = () => {
  return (
    <div className="relative rounded-xl overflow-hidden w-full max-w-3xl mx-auto">
      <img
        src={trackImage}
        alt="Map showing shipment route"
        className="w-full h-110 object-cover object-center"
      />
      <div className="absolute bottom-0 left-0 w-full  p-2 flex flex-col justify-end">
        <div className="flex items-center space-x-2 mb-3">
          <span className="h-2 w-2 bg-pink-600 rounded-full" />
          <p className="text-lg font-semibold">In Transit</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
            Shanghai, China
          </span>
          <span className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
            New York, USA
          </span>
          <span className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
            ETA: Oct 26, 2024
          </span>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-purple-800 text-white px-4 py-2 rounded-md text-sm font-medium shadow hover:bg-purple-800">
            <FaShareAlt /> Share Tracking
          </button>
          <button className="flex items-center gap-2 border border-gray-400 text-gray-800 px-4 py-2 rounded-md text-sm font-medium shadow hover:bg-gray-100">
            <MdErrorOutline /> Report Issue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShipmentStatusCard;
