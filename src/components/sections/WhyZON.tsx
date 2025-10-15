import React from 'react';
import { Lightbulb, TrendingUp, Shield, Award, Users, Globe } from 'lucide-react';

export const WhyZON: React.FC = () => {
  const reasons = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: "Uniquely Innovative AI Technologies",
      description: "We stay at the forefront of AI advancements, delivering cutting-edge solutions that redefine what's possible in data center optimization.",
      highlight: "Innovation Leader"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#FF6826]" />,
      title: "Significant Cost Savings",
      description: "Our products are designed to dramatically reduce operational costs, energy consumption, and resource requirements, delivering exceptional ROI.",
      highlight: "50%+ Cost Reduction"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Scalability & Performance",
      description: "Our solutions scale seamlessly to meet evolving needs while continuously improving performance and operational efficiency.",
      highlight: "Future-Proof Technology"
    }
  ];

  const stats = [
    { icon: <Award className="w-6 h-6 text-orange-400" />, label: "Patents", value: "12+" },
    { icon: <Users className="w-6 h-6 text-purple-400" />, label: "AI Models", value: "30+" },
    { icon: <Globe className="w-6 h-6 text-[#FFC06B]" />, label: "Vertical Markets", value: "50+" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Partner with
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ZON?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just provide solutions – we revolutionize how businesses think about 
            data center operations and media processing efficiency.
          </p>
        </div>

        {/* Main reasons */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Highlight badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 mb-4">
                  <span className="text-xs text-blue-300 font-medium">
                    {reason.highlight}
                  </span>
                </div>

                <div className="mb-6 p-4 bg-gray-800/50 rounded-lg w-fit">
                  {reason.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-300">Solid AI Base</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission statement */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Mission
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              To lead the Energy Revolution by developing groundbreaking AI technologies that 
              optimize data center operations, reduce environmental impact, and empower businesses 
              to achieve unprecedented efficiency and sustainability.
            </p>

            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-full">
              <Award className="w-5 h-5 text-[#FF6826] mr-2" />
              <span className="text-[#FFC06B] font-medium">
                Driving Efficiency, Sustainability, and Growth Across Industries
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};