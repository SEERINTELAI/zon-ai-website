import React, { useRef } from 'react';
import { ArrowRight, Zap, Database, TrendingUp } from 'lucide-react';
import { ParticleField } from '../3d/ParticleField';
import { DataVisualization } from '../dataviz/DataVisualization';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-black/50 z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 mb-8">
            <Zap className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm text-blue-300">Pioneering Next Generation AI & Energy Technologies</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Data Center Operations
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionary AI-driven solutions that reduce energy consumption by <span className="text-blue-400 font-semibold">35%+</span>, 
            cut operating costs by <span className="text-purple-400 font-semibold">50%+</span>, and increase capacity by <span className="text-green-400 font-semibold">40%</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl">
              Experience the Future
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 flex items-center">
              <Database className="mr-2 w-5 h-5" />
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">35%+</div>
              <div className="text-gray-400">Energy Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50%+</div>
              <div className="text-gray-400">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-400">Capacity Increase</div>
            </div>
          </div>

          {/* Data Visualization */}
          <div className="mt-16 max-w-4xl mx-auto">
            <DataVisualization />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <TrendingUp className="w-6 h-6 text-zon-tan" />
        </div>
      </div>
    </section>
  );
};