import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Mail, ChevronDown } from 'lucide-react';
import logoTransparent from '../../assets/logo-transparent.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isProductsOpen && !target.closest('.products-dropdown')) {
        setIsProductsOpen(false);
      }
    };

    if (isProductsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProductsOpen]);

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
          <Link to="/?return=true" onClick={() => {
            if (process.env.NODE_ENV === 'development') {
              console.log('🏠 Logo clicked - setting return visit flag');
            }
            sessionStorage.setItem('isDirectNavigation', 'true');
            sessionStorage.setItem('returnVisit', 'true');
          }} className="absolute left-0 flex items-center">
            <img src={logoTransparent} alt="ZON" className="h-8 w-auto" />
          </Link>

                 {/* Desktop Navigation - Center */}
                 <div className="hidden md:flex items-center space-x-8">
                   <Link to="/?return=true" onClick={() => {
                     if (process.env.NODE_ENV === 'development') {
                       console.log('🏠 Home link clicked - setting return visit flag');
                     }
                     sessionStorage.setItem('isDirectNavigation', 'true');
                     sessionStorage.setItem('returnVisit', 'true');
                     window.scrollTo({ top: 0, behavior: 'smooth' });
                   }} className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer">Home</Link>
                   
                   {/* Products Dropdown */}
                   <div className="relative products-dropdown">
                     <button
                       onClick={(e) => {
                         e.preventDefault();
                         e.stopPropagation();
                         setIsProductsOpen(!isProductsOpen);
                       }}
                       className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer flex items-center gap-1"
                     >
                       Products
                       <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                     </button>
                     {isProductsOpen && (
                       <div
                         className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-lg border border-gray-800 rounded-lg shadow-xl z-50"
                       >
                         <div className="py-2">
                           <Link
                             to="/products"
                             onClick={() => {
                               window.scrollTo({ top: 0, behavior: 'smooth' });
                               setIsProductsOpen(false);
                             }}
                             className="block px-4 py-3 text-white hover:bg-gray-800/50 transition-colors"
                           >
                             <div className="font-semibold">All Products</div>
                             <div className="text-sm text-gray-400">Overview of our solutions</div>
                           </Link>
                           <Link
                             to="/products/zon-energy"
                             onClick={() => {
                               window.scrollTo({ top: 0, behavior: 'smooth' });
                               setIsProductsOpen(false);
                             }}
                             className="block px-4 py-3 text-white hover:bg-gray-800/50 transition-colors"
                           >
                             <div className="font-semibold">ZON Energy™</div>
                             <div className="text-sm text-gray-400">Sustainable power for data centers</div>
                           </Link>
                           <Link
                             to="/products/seer-intel-media"
                             onClick={() => {
                               window.scrollTo({ top: 0, behavior: 'smooth' });
                               setIsProductsOpen(false);
                             }}
                             className="block px-4 py-3 text-white hover:bg-gray-800/50 transition-colors"
                           >
                             <div className="font-semibold">SEER Intel Media™</div>
                             <div className="text-sm text-gray-400">AI-powered data intelligence</div>
                           </Link>
                         </div>
                       </div>
                     )}
                   </div>
                   
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
                   <Link to="/?return=true" onClick={() => {
                     if (process.env.NODE_ENV === 'development') {
                       console.log('🏠 Mobile Home clicked - setting return visit flag');
                     }
                     sessionStorage.setItem('isDirectNavigation', 'true');
                     sessionStorage.setItem('returnVisit', 'true');
                     handleMobileNavClick('/?return=true');
                   }} className="block px-3 py-3 text-white hover:text-gray-300 font-medium">Home</Link>
                   
                   {/* Mobile Products Section */}
                   <div className="px-3 py-3">
                     <div className="text-white font-medium mb-2">Products</div>
                     <div className="ml-4 space-y-2">
                       <Link to="/products" onClick={() => handleMobileNavClick('/products')} className="block px-3 py-2 text-gray-300 hover:text-white text-sm">All Products</Link>
                       <Link to="/products/zon-energy" onClick={() => handleMobileNavClick('/products/zon-energy')} className="block px-3 py-2 text-gray-300 hover:text-white text-sm">ZON Energy™</Link>
                       <Link to="/products/seer-intel-media" onClick={() => handleMobileNavClick('/products/seer-intel-media')} className="block px-3 py-2 text-gray-300 hover:text-white text-sm">SEER Intel Media™</Link>
                     </div>
                   </div>
                   
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