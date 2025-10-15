import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, ArrowRight, Star, Zap, Database, CheckCircle, TrendingUp, Shield, Clock } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';

const ZONEnergy: React.FC = () => {
  const features = [
    "AI-driven auto-optimization",
    "Real-time energy monitoring and optimization",
    "Machine Learning optimized maintenance alerts",
    "Carbon footprint reduction",
    "Seamless integration",
    "Applies most advanced adaptive AI to improve performance"
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#FF6826]" />,
      title: "Energy Reduction",
      value: "35%+",
      description: "Dramatically reduce energy consumption while maintaining peak performance"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#FFC06B]" />,
      title: "Cost Savings",
      value: "50%+",
      description: "Significant operational cost reductions through intelligent optimization"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#CB2F19]" />,
      title: "Capacity Increase",
      value: "40%",
      description: "Enhanced processing capacity without additional infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#010214] via-black to-black text-[#EFE6D4]">
      {/* Navigation */}
      <Navbar />
      
      {/* Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#FF6826]/15 text-[#FF6826] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Battery className="w-4 h-4" />
              Energy Optimization
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 px-8">
              <span className="text-white">ZON </span>
              <span className="bg-gradient-to-r from-[#FF6826] to-[#FFC06B] bg-clip-text text-transparent">Energy</span><span className="bg-gradient-to-r from-[#FF6826] to-[#FFC06B] bg-clip-text text-transparent font-normal">™</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Sustainable Power for Data Centers
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Self-optimizing AI-driven operational and energy efficiency technologies that perform beyond all currently available market standards and technologies.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Transform Your Energy Efficiency</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-[#010214]/70 to-[#CB2F19]/35 p-8 rounded-2xl border border-[#CB2F19]/30 text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <div className="text-4xl font-bold text-[#FF6826] mb-2">{benefit.value}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Advanced AI technology for maximum efficiency</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-[#010214]/50 rounded-xl border border-gray-800">
                  <CheckCircle className="w-6 h-6 text-[#FF6826] flex-shrink-0" />
                  <span className="text-[#EFE6D4]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How ZON Energy Works</h2>
              <p className="text-xl text-gray-300">Intelligent optimization through advanced AI</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6826]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-[#FF6826]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Data Collection</h3>
                <p className="text-gray-300">Continuous monitoring of energy consumption patterns and system performance metrics</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFC06B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-[#FFC06B]" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI Analysis</h3>
                <p className="text-gray-300">Advanced machine learning algorithms analyze data to identify optimization opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#CB2F19]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Battery className="w-8 h-8 text-[#CB2F19]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Auto-Optimization</h3>
                <p className="text-gray-300">Automatic implementation of energy-saving measures with real-time adjustments</p>
              </div>
            </div>
          </div>

          {/* Bottom Line Savings Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Savings to Your Bottom Line</h2>
              <p className="text-xl text-gray-300">Real results that directly impact your profitability</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#010214]/70 to-[#FF6826]/35 p-8 rounded-2xl border border-[#FF6826]/30 text-center">
                <div className="text-5xl font-bold text-[#FF6826] mb-2">35%+</div>
                <div className="text-xl font-semibold text-white mb-2">Energy Cost Reduction</div>
                <div className="text-gray-300">Direct savings on your monthly energy bills</div>
              </div>
              <div className="bg-gradient-to-br from-[#010214]/70 to-[#FFC06B]/35 p-8 rounded-2xl border border-[#FFC06B]/30 text-center">
                <div className="text-5xl font-bold text-[#FFC06B] mb-2">50%+</div>
                <div className="text-xl font-semibold text-white mb-2">Operational Cost Savings</div>
                <div className="text-gray-300">Reduced maintenance and operational expenses</div>
              </div>
              <div className="bg-gradient-to-br from-[#010214]/70 to-[#CB2F19]/35 p-8 rounded-2xl border border-[#CB2F19]/30 text-center">
                <div className="text-5xl font-bold text-[#CB2F19] mb-2">40%</div>
                <div className="text-xl font-semibold text-white mb-2">Capacity Increase</div>
                <div className="text-gray-300">More output without additional infrastructure costs</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#010214]/70 to-[#CB2F19]/35 p-12 rounded-2xl border border-[#CB2F19]/30">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Energy Usage?</h2>
            <p className="text-xl text-[#EFE6D4]/80 mb-8 max-w-3xl mx-auto">
              Join industry leaders who trust ZON Energy to reduce their energy consumption by 35%+ while maintaining peak performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Get Started Today
              </Link>
              <Link 
                to="/products"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZONEnergy;
