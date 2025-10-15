import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Users, Target, Award, Globe } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import logoTransparent from '../assets/logo-transparent-about.png';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#010214] via-black to-black text-[#EFE6D4]">
      {/* Navigation */}
      <Navbar />
      {/* Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About
              <span className="block bg-gradient-to-r from-[#FF6826] to-[#FFC06B] bg-clip-text text-transparent">ZON</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              We're revolutionizing data center efficiency with cutting-edge AI technology, 
              delivering unprecedented energy savings and performance optimization.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-20">
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8 text-[#FFC06B]" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                AI's rapid evolution creates a paradox: each advancement demands more energy, more infrastructure, more resources at an ever-accelerating pace. At ZON, we've stepped back from this to take a different approach and build something different—AI that makes AI better.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our patented technologies don't just participate in the AI revolution; they act as a lever that amplifies what's possible. We've developed tools that multiply the efficiencies and effectiveness of existing AI systems across their entire lifecycle—from the data centers that train and support AI to the applications that are used to deploy it. The result is exponential gains in energy efficiency and operational performance, without compromising utility.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This isn't about choosing between capability and sustainability. It's about building intelligence that compounds itself—where every breakthrough in AI accelerates through our technology, becoming more efficient, more accessible, more practical. As AI continues its accelerated evolution, we've designed our approach to ride that wave: the faster AI advances, the more our leverage matters.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We're solving for a moving target. And we're built on technologies designed to keep pace.
              </p>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-br from-[#010214]/70 to-[#CB2F19]/35 p-8 rounded-2xl border border-[#CB2F19]/30">
              <h3 className="text-2xl font-bold mb-6 text-center">ZON Impact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                       <div className="text-center">
                         <div className="text-4xl font-bold text-[#FF6826] mb-2">35%+</div>
                         <div className="text-[#EFE6D4]/70">Energy Reduction</div>
                       </div>
                       <div className="text-center">
                         <div className="text-4xl font-bold text-[#FFC06B] mb-2">50%+</div>
                         <div className="text-[#EFE6D4]/70">Cost Savings</div>
                       </div>
                       <div className="text-center">
                         <div className="text-4xl font-bold text-[#CB2F19] mb-2">40%</div>
                         <div className="text-gray-300">Capacity Increase</div>
                       </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-300">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#010214]/70 p-8 rounded-xl border border-[#CB2F19]/30 hover:border-[#FF6826]/40 transition-all">
                <Award className="w-12 h-12 text-[#FFC06B] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible with AI technology, 
                  developing solutions that set new industry standards.
                </p>
              </div>

              <div className="bg-[#010214]/70 p-8 rounded-xl border border-[#CB2F19]/30 hover:border-[#FF6826]/40 transition-all">
                <Users className="w-12 h-12 text-[#FF6826] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Partnership</h3>
                <p className="text-gray-300">
                  We work closely with our clients as trusted partners, understanding 
                  their unique challenges and delivering tailored solutions.
                </p>
              </div>

              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-green-500/30 transition-all">
                <Globe className="w-12 h-12 text-[#FFC06B] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
                <p className="text-gray-300">
                  Environmental responsibility is at the core of our mission, 
                  helping reduce the carbon footprint of digital infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#010214]/70 to-[#CB2F19]/35 p-12 rounded-2xl border border-[#CB2F19]/30">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data Center?</h2>
            <p className="text-xl text-[#EFE6D4]/80 mb-8 max-w-3xl mx-auto">Join the growing number of organizations that trust ZON to optimize their infrastructure and reduce operational costs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/products"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Explore Solutions
              </Link>
              <Link 
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#010214] border-t border-[#CB2F19]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Logo and Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <img src={logoTransparent} alt="ZON" className="h-8 w-auto" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Pioneering next-generation AI & energy technologies to revolutionize data center operations and media processing efficiency.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4 mt-6">
                <a href="#" className="w-10 h-10 bg-[#010214]/80 hover:bg-[#FF6826]/30 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-[#EFE6D4]/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#010214]/80 hover:bg-[#FF6826]/30 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-[#EFE6D4]/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#010214]/80 hover:bg-[#FF6826]/30 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-[#EFE6D4]/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">ZON Energy™</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">SEER Intel Media™</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Partners</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">White Papers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Legal Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Security</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Compliance</a>
              </div>
              <p className="text-gray-500 text-sm">© 2024 ZON. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;