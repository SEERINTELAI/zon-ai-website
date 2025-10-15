import React from 'react';
import { Link } from 'react-router-dom';
import { Film, ArrowRight, Star, Zap, Database, CheckCircle, Eye, Brain, Cpu } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';

const SEERIntelMedia: React.FC = () => {
  const features = [
    "Deep Learning plus Computer vision analytics",
    "Intelligent content processing and optimization",
    "Real-time data insights",
    "Automated quality control",
    "Multi-format compatibility",
    "Most advanced hybrid Deep Learning Compression available"
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-[#FF6826]" />,
      title: "Processing Speed",
      value: "10x",
      description: "Dramatically faster multimedia processing with AI acceleration"
    },
    {
      icon: <Eye className="w-8 h-8 text-[#FFC06B]" />,
      title: "Accuracy Rate",
      value: "99.7%",
      description: "Industry-leading precision in content analysis and optimization"
    },
    {
      icon: <Database className="w-8 h-8 text-[#CB2F19]" />,
      title: "Data Efficiency",
      value: "85%+",
      description: "Superior compression and storage optimization capabilities"
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
            <div className="inline-flex items-center gap-2 bg-[#FFC06B]/15 text-[#FFC06B] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Film className="w-4 h-4" />
              AI-Powered Data Intelligence
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 px-8">
              <span className="text-white">SEER Intel </span>
              <span className="bg-gradient-to-r from-[#FF6826] to-[#FFC06B] bg-clip-text text-transparent">Media</span><span className="bg-gradient-to-r from-[#FF6826] to-[#FFC06B] bg-clip-text text-transparent font-normal">™</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              AI-Powered Data Intelligence
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Advanced multimedia data center optimization platform powered by the latest advances in AI, media and computer vision techniques.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Revolutionary Media Processing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-[#010214]/70 to-[#FFC06B]/35 p-8 rounded-2xl border border-[#FFC06B]/30 text-center">
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
              <h2 className="text-3xl font-bold mb-4">Advanced Capabilities</h2>
              <p className="text-xl text-gray-300">Cutting-edge AI technology for multimedia optimization</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-[#010214]/50 rounded-xl border border-gray-800">
                  <CheckCircle className="w-6 h-6 text-[#FFC06B] flex-shrink-0" />
                  <span className="text-[#EFE6D4]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How SEER Intel Media Works</h2>
              <p className="text-xl text-gray-300">Intelligent multimedia processing through advanced AI</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6826]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Film className="w-8 h-8 text-[#FF6826]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Content Analysis</h3>
                <p className="text-gray-300">Advanced computer vision algorithms analyze multimedia content for optimization opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFC06B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-[#FFC06B]" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI Processing</h3>
                <p className="text-gray-300">Deep learning models process and optimize content with unprecedented accuracy and speed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#CB2F19]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-[#CB2F19]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Optimized Output</h3>
                <p className="text-gray-300">Deliver highly optimized multimedia content with superior quality and efficiency</p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Perfect For</h2>
              <p className="text-xl text-gray-300">Ideal solutions for modern multimedia challenges</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Video Streaming Platforms",
                "Content Management Systems",
                "Media Production Houses",
                "Data Center Operations",
                "Cloud Storage Providers",
                "Broadcasting Networks",
                "E-learning Platforms",
                "Social Media Platforms"
              ].map((useCase, index) => (
                <div key={index} className="bg-[#010214]/50 p-4 rounded-xl border border-gray-800 text-center">
                  <span className="text-[#EFE6D4]">{useCase}</span>
                </div>
              ))}
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
                <div className="text-5xl font-bold text-[#FF6826] mb-2">10x</div>
                <div className="text-xl font-semibold text-white mb-2">Processing Speed</div>
                <div className="text-gray-300">Faster content delivery means reduced infrastructure costs</div>
              </div>
              <div className="bg-gradient-to-br from-[#010214]/70 to-[#FFC06B]/35 p-8 rounded-2xl border border-[#FFC06B]/30 text-center">
                <div className="text-5xl font-bold text-[#FFC06B] mb-2">99.7%</div>
                <div className="text-xl font-semibold text-white mb-2">Accuracy Rate</div>
                <div className="text-gray-300">Reduced errors mean less rework and lower operational costs</div>
              </div>
              <div className="bg-gradient-to-br from-[#010214]/70 to-[#CB2F19]/35 p-8 rounded-2xl border border-[#CB2F19]/30 text-center">
                <div className="text-5xl font-bold text-[#CB2F19] mb-2">85%+</div>
                <div className="text-xl font-semibold text-white mb-2">Data Efficiency</div>
                <div className="text-gray-300">Superior compression reduces storage and bandwidth costs</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#010214]/70 to-[#FFC06B]/35 p-12 rounded-2xl border border-[#FFC06B]/30">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Media Processing?</h2>
            <p className="text-xl text-[#EFE6D4]/80 mb-8 max-w-3xl mx-auto">
              Join industry leaders who trust SEER Intel Media to process multimedia content 10x faster with 99.7% accuracy.
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

export default SEERIntelMedia;
