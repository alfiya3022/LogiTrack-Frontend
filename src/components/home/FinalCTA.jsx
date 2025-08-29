import React from "react";
import { Link } from "react-router-dom";

const FinalCTA = () => (
  <section className="bg-purple-800 text-white py-20 text-center">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-4">
        Ready to Transform Your Logistics?
      </h2>
      <p className="text-lg mb-8">
        Start tracking shipments instantly, or unlock AI-powered insights with a free account.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/track"
          className="inline-block bg-white text-purple-800 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition text-lg"
        >
          Quick Track
        </Link>
        <Link
          to="/register"
          className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-800 px-8 py-3 rounded-md font-semibold transition text-lg"
        >
          Get AI Analysis
        </Link>
      </div>
    </div>
  </section>
);

export default FinalCTA;
