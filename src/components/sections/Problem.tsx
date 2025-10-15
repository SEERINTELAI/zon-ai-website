import React from 'react';
import { AlertTriangle, TrendingUp, Zap, DollarSign } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: "High Energy Consumption",
      description: "Data centers consume massive amounts of energy, contributing to escalating operational costs and environmental concerns."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-orange-400" />,
      title: "Escalating Operational Costs",
      description: "Rising energy prices and maintenance costs are putting tremendous pressure on data center profitability."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      title: "Limited Capacity",
      description: "Existing infrastructure struggles to meet growing data demands, leading to performance bottlenecks and service limitations."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Environmental Impact",
      description: "The carbon footprint of traditional data centers is becoming increasingly unsustainable for the planet."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Critical Challenges
            <span className="block text-red-400">Facing Data Centers Today</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Traditional data center operations are plagued by inefficiencies that threaten 
            both business sustainability and environmental responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="mb-4 p-3 bg-gray-800/50 rounded-lg w-fit">
                  {problem.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {problem.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-red-600/20 border border-red-500/30 rounded-full">
            <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
            <span className="text-red-300 font-medium">
              These challenges demand revolutionary solutions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};