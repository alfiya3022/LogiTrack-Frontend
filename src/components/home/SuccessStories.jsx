import React from "react";

const successStories = [
  {
    company: "Global Logistics Co.",
    industry: "Transportation",
    results: {
      timeReduction: "35%",
      costSaving: "28%",
      efficiency: "45%",
    },
    quote: "LogiTrack's AI predictions have transformed our delivery accuracy.",
    logo: "/logos/global-logistics.png", // Add actual logo path
  },
  {
    company: "FastTrack Shipping",
    industry: "E-commerce",
    results: {
      timeReduction: "42%",
      costSaving: "31%",
      efficiency: "52%",
    },
    quote:
      "Real-time tracking and AI insights helped us optimize our entire fleet.",
    logo: "/logos/fasttrack.png", // Add actual logo path
  },
  {
    company: "Tech Distribution Inc.",
    industry: "Technology",
    results: {
      timeReduction: "38%",
      costSaving: "25%",
      efficiency: "40%",
    },
    quote:
      "The predictive analytics have been a game-changer for our operations.",
    logo: "/logos/tech-dist.png", // Add actual logo path
  },
];

const SuccessStories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {story.company}
                </h3>
                <span className="text-sm text-purple-800 font-medium">
                  {story.industry}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-800">
                    {story.results.timeReduction}
                  </div>
                  <div className="text-xs text-gray-600">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-800">
                    {story.results.costSaving}
                  </div>
                  <div className="text-xs text-gray-600">Cost Reduced</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-800">
                    {story.results.efficiency}
                  </div>
                  <div className="text-xs text-gray-600">Efficiency Gain</div>
                </div>
              </div>
              <blockquote className="italic text-gray-600 text-sm mb-4">
                "{story.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
