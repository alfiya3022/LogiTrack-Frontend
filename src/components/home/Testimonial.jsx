import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Testimonial() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Logistics Director, Global Freight Co.",
      text: "LogiTrack AI transformed our logistics. The real-time insights and predictive analytics are unmatched, giving us a significant competitive edge.",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Manager, SwiftDeliver",
      text: "Implementing LogiTrack AI was a game-changer. We've seen a measurable improvement in delivery times and customer satisfaction.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Emily White",
      role: "Supply Chain Head, Apex Solutions",
      text: "The predictive insights helped us avoid potential delays, allowing us to proactively manage our inventory and supply chain.",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#1E293B] mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-md text-left hover:shadow-lg transition-shadow duration-300">
            
              <p className="text-[#475569] mb-6 italic text-base leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 mt-4">
                <FaUserCircle className="text-4xl text-[#2563EB]"/>
                <div>
                  <p className="font-semibold text-sm text-[#0F172A]">{t.name}</p>
                  <p className="text-sm text-[#64748B]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
