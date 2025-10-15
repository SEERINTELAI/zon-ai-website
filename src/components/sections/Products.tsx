import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Film, ArrowRight, Zap, Database, Home } from 'lucide-react';
import { Navbar } from '../layout/Navbar';

export const Products: React.FC = () => {
  const products = [
    {
      icon: <Battery className="w-12 h-12 text-[#FF6826]" />,
      name: "ZON Energy™",
      tagline: "Sustainable Power for Data Centers",
      description: "Self-optimizing AI-driven operational and energy efficiency technologies that perform beyond all currently available market standards and technologies.",
      features: [
        "AI-driven auto-optimization",
        "Real-time energy monitoring and optimization",
        "Machine Learning optimized maintenance alerts",
        "Carbon footprint reduction",
        "Seamless integration",
        "Applies most advanced adaptive AI to improve performance"
      ],
      metrics: [
        { label: "Energy Reduction", value: "35%+", color: "text-[#FF6826]" },
        { label: "Cost Savings", value: "50%+", color: "text-[#FFC06B]" },
        { label: "Capacity Increase", value: "40%", color: "text-[#CB2F19]" }
      ],
      gradient: "from-[#CB2F19]/15 to-[#FF6826]/25"
    },
    {
      icon: <Film className="w-12 h-12 text-[#FF6826]" />,
      name: "SEER Intel Media™",
      tagline: "AI-Powered Data Intelligence",
      description: "Advanced multimedia data center optimization platform powered by the latest advances in AI, media and computer vision techniques.",
      features: [
        "Deep Learning plus Computer vision analytics",
        "Intelligent content processing and optimization",
        "Real-time data insights",
        "Automated quality control",
        "Multi-format compatibility",
        "Most advanced hybrid Deep Learning Compression available"
      ],
      metrics: [
        { label: "Processing Speed", value: "10x", color: "text-[#FF6826]" },
        { label: "Accuracy Rate", value: "99.7%", color: "text-[#FFC06B]" },
        { label: "Data Efficiency", value: "85%+", color: "text-[#CB2F19]" }
      ],
      gradient: "from-[#FFC06B]/20 to-[#FF6826]/20"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-[#010214] to-black">
      {/* Navigation */}
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#EFE6D4]">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FF6826]/15 text-[#FF6826] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Advanced AI Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ZON
            <span className="block bg-gradient-to-r from-[#FF6826] to-[#FFC06B] bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary AI technologies, we are redefining data center operations and revolutionizing multimedia processing capabilities.
          </p>
        </div>

        {/* Products Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${product.gradient} backdrop-blur-lg border border-gray-800 rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-500`}
            >
              {/* Product Card */}
              <div className="relative p-8 z-10">
                {/* Icon and Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 p-3 bg-gray-900/50 rounded-xl border border-gray-700">
                    {product.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-white mb-2">{product.name}</h3>
                    <p className="text-gray-400 font-medium">{product.tagline}</p>
                  </div>
                </div>

                {/* Brief Description */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {product.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-4 bg-[#010214]/70 rounded-xl border border-[#CB2F19]/30">
                      <div className={`text-2xl font-bold ${metric.color} mb-1`}>
                        {metric.value}
                      </div>
                      <div className="text-[#EFE6D4]/70 text-sm">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <div className="mt-8">
                  <Link
                    to={index === 0 ? "/products/zon-energy" : "/products/seer-intel-media"}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-full bg-[#FF6826] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#CB2F19] transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-[#010214]/70 to-[#CB2F19]/40 p-12 rounded-2xl border border-[#CB2F19]/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Explore Our Solutions?
            </h2>
            <p className="text-xl text-[#EFE6D4]/80 mb-8 max-w-2xl mx-auto">
              Discover how ZON's AI technologies can transform your operations and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/solutions"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                View Solutions
              </Link>
              <Link 
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};