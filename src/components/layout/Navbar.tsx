import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Mail } from 'lucide-react';
import logoTransparent from '../../assets/logo-transparent.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMobileNavClick = (path: string) => {
    setIsOpen(false); // Close mobile menu
    
    // Check if we're already on the target page
    if (window.location.pathname === path) {
      // If on same page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If different page, navigate and scroll to top after a brief delay
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          {/* Logo - Left */}
          <Link to="/" className="absolute left-0 flex items-center">
            <img src={logoTransparent} alt="ZON" className="h-6 w-auto" />
          </Link>

                 {/* Desktop Navigation - Center */}
                 <div className="hidden md:flex items-center space-x-8">
                   <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer">Home</Link>
                   <Link to="/products" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer">Products</Link>
                   <Link to="/solutions" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer">Solutions</Link>
                   <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer">About</Link>
                   <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer">Contact</Link>
                 </div>

          {/* Right Icons - Search and Contact */}
          <div className="hidden md:flex items-center space-x-4 absolute right-0">
            <button className="text-white hover:text-gray-300 transition-colors p-2">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-white hover:text-gray-300 transition-colors p-2">
              <Mail className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-0">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
                 <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-lg border-t border-gray-800">
                   <Link to="/" onClick={() => handleMobileNavClick('/')} className="block px-3 py-3 text-white hover:text-gray-300 font-medium">Home</Link>
                   <Link to="/products" onClick={() => handleMobileNavClick('/products')} className="block px-3 py-3 text-white hover:text-gray-300 font-medium">Products</Link>
                   <Link to="/solutions" onClick={() => handleMobileNavClick('/solutions')} className="block px-3 py-3 text-white hover:text-gray-300 font-medium">Solutions</Link>
                   <Link to="/about" onClick={() => handleMobileNavClick('/about')} className="block px-3 py-3 text-white hover:text-gray-300 font-medium">About</Link>
                   <Link to="/contact" onClick={() => handleMobileNavClick('/contact')} className="block px-3 py-3 text-white hover:text-gray-300 font-medium">Contact</Link>
              
              {/* Mobile Icons */}
              <div className="flex items-center space-x-4 px-3 py-3 border-t border-gray-700 mt-2">
                <button className="text-white hover:text-gray-300 transition-colors p-2">
                  <Search className="h-5 w-5" />
                </button>
                <button className="text-white hover:text-gray-300 transition-colors p-2">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};