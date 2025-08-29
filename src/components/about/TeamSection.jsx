import React from 'react';
// Proper ES6 imports instead of require()
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';
import user5 from '../../assets/user5.png';
import user6 from '../../assets/user6.png';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Co-Founder",
      image: user1  // Use the imported variable
    },
    {
      name: "Dr. James Chen", 
      role: "CTO & Head of AI",
      image: user2
    },
    {
      name: "Maria Rodriguez",
      role: "Chief Operations Officer",
      image: user3
    },
    {
      name: "David Kim",
      role: "Lead AI Research Scientist",
      image: user4
    },
    {
      name: "Lisa Wang",
      role: "VP of Product Engineering",
      image: user5
    },
    {
      name: "Michael Thompson",
      role: "Head of Business Development",
      image: user6
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Visionary Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experts in AI, logistics, and technology working together to revolutionize supply chain management
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-purple-800 font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="w-full h-64 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl mb-4 block">🏢</span>
              <p className="text-gray-600 italic max-w-md">
                "Building the future of logistics through AI innovation and human expertise"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
