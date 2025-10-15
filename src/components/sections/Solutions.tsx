import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Settings, 
  Shield, 
  Zap, 
  TrendingUp, 
  Database, 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Home,
  Cpu,
  Monitor,
  Server
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';

export const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Settings className="w-12 h-12 text-[#FF6826]" />,
      title: "AI-Driven Infrastructure Optimization",
      category: "Smart Operations",
      description: "Revolutionize your data center operations with intelligent automation that continuously optimizes performance, reduces energy consumption, and prevents costly downtime.",
      features: [
        "Real-time performance monitoring and optimization",
        "Predictive maintenance with 99.7% accuracy",
        "Automated resource allocation and scaling",
        "Energy consumption reduction up to 35%",
        "24/7 intelligent system monitoring"
      ],
      benefits: [
        { metric: "35%", label: "Energy Savings", color: "text-[#FF6826]" },
        { metric: "50%", label: "Cost Reduction", color: "text-[#FFC06B]" },
        { metric: "99.9%", label: "Uptime", color: "text-[#CB2F19]" }
      ],
      gradient: "from-[#CB2F19]/15 to-[#FF6826]/25"
    },
    {
      icon: <Shield className="w-12 h-12 text-[#CB2F19]" />,
      title: "Advanced AI Security\n& Compliance",
      category: "Data Protection",
      description: "Protect your critical infrastructure with enterprise-grade security solutions powered by state-of-the-art AI threat detection, precision analytics, and automated compliance monitoring.",
      features: [
        "AI-powered detection and optimization",
        "Automated compliance monitoring and reporting",
        "Zero-trust security architecture",
        "Real-time vulnerability assessment",
        "Advanced encryption and access controls"
      ],
      benefits: [
        { metric: "99.8%", label: "Threat Detection", color: "text-[#FF6826]" },
        { metric: "100%", label: "Compliance\nRate", color: "text-[#FFC06B]" },
        { metric: "24/7", label: "Monitoring", color: "text-[#CB2F19]" }
      ],
      gradient: "from-[#FF6826]/20 to-[#FFC06B]/20"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#FF6826]" />,
      title: "Intelligent Analytics & Insights",
      category: "Business Intelligence",
      description: "Transform raw data into actionable insights with advanced analytics that drive strategic decisions and identify optimization opportunities.",
      features: [
        "Real-time operational dashboards",
        "Predictive analytics and forecasting",
        "Custom reporting and KPI tracking",
        "Machine learning-powered insights",
        "Integration with existing BI tools"
      ],
      benefits: [
        { metric: "10x", label: "Faster Insights", color: "text-[#FF6826]" },
        { metric: "85%", label: "Data Accuracy", color: "text-[#FFC06B]" },
        { metric: "60%", label: "Time Savings", color: "text-[#CB2F19]" }
      ],
      gradient: "from-[#FF6826]/20 to-[#FFC06B]/20"
    },
    {
      icon: <Cloud className="w-12 h-12 text-[#FFC06B]" />,
      title: "Hybrid Cloud Management",
      category: "Cloud Solutions",
      description: "Seamlessly manage multi-cloud and hybrid environments with unified control, automated optimization, and intelligent workload distribution.",
      features: [
        "Multi-cloud orchestration and management",
        "Automated workload distribution",
        "Cost optimization across cloud providers",
        "Hybrid infrastructure monitoring",
        "Cloud migration and optimization services"
      ],
      benefits: [
        { metric: "40%", label: "Cloud Savings", color: "text-[#FF6826]" },
        { metric: "3x", label: "Deployment Speed", color: "text-[#FFC06B]" },
        { metric: "95%", label: "Efficiency Gain", color: "text-[#CB2F19]" }
      ],
      gradient: "from-[#FF6826]/20 to-[#CB2F19]/30"
    }
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "Assessment & Strategy",
      description: "Comprehensive infrastructure analysis and custom solution design",
      icon: <Monitor className="w-8 h-8" />
    },
    {
      step: "02", 
      title: "Implementation & Integration",
      description: "Seamless deployment with minimal disruption to operations",
      icon: <Server className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and 24/7 expert support",
      icon: <Cpu className="w-8 h-8" />
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-[#010214] to-black">
      {/* Navigation */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#EFE6D4]">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FF6826]/15 text-[#FF6826] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Enterprise Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ZON builds AI that makes AI better
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions designed to optimize, secure, and future-proof 
            your data center operations with measurable results.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${solution.gradient} backdrop-blur-lg border border-gray-800 rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-500`}
            >
              <div className="relative p-8 z-10">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 p-3 bg-gray-900/50 rounded-xl border border-gray-700">
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-400 font-medium mb-2">
                      {solution.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {solution.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#EFE6D4]/80 text-lg leading-relaxed mb-6">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-[#FFC06B]" />
                    Key Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#EFE6D4]/80">
                        <CheckCircle className="w-5 h-5 text-[#FF6826] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className="text-center p-3 bg-[#010214]/60 rounded-lg border border-[#CB2F19]/30">
                             <div className={`text-xl font-bold ${benefit.color} mb-1`}>
                               {benefit.metric}
                             </div>
                             <div className="text-[#EFE6D4]/70 text-xs">
                               {benefit.label}
                             </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-full bg-[#FF6826] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#FFC06B] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]" />
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-300">
              From assessment to optimization - we ensure seamless integration every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < implementationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#FF6826]/50 to-transparent z-0" />
                )}
                
                <div className="relative bg-[#010214]/80 backdrop-blur-lg border border-[#CB2F19]/30 rounded-xl p-8 text-center z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6826]/20 to-[#FFC06B]/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-700">
                    <div className="text-[#FF6826]">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6826] to-[#FFC06B] bg-clip-text text-transparent mb-4">
                    {step.step}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-[#EFE6D4]/80">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#010214]/70 to-[#CB2F19]/40 p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your Infrastructure?
            </h2>
            <p className="text-xl text-[#EFE6D4]/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations who trust ZON to deliver measurable results. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Start Your Journey
              </Link>
              <Link 
                to="/products"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};