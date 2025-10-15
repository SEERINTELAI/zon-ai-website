import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './layout/Navbar';
import heroVideo from '../assets/hero-video.mp4';
import logoTransparent from '../assets/logo-transparent.png';

const VideoLanding: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const [hasVideoEnded, setHasVideoEnded] = useState(false);
  const [isReturnVisit, setIsReturnVisit] = useState(false);
  const [isReplaying, setIsReplaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const location = useLocation();

  // Check if this is a return visit and show content immediately
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedHome');
    const isDirectNavigation = sessionStorage.getItem('isDirectNavigation');
    const returnVisitFlag = sessionStorage.getItem('returnVisit');
    const urlParams = new URLSearchParams(window.location.search);
    const urlReturnVisit = urlParams.get('return');
    
    console.log('🔍 Session check:', { hasVisited, isDirectNavigation, returnVisitFlag, urlReturnVisit });
    console.log('🔍 Current URL:', window.location.href);
    console.log('🔍 Referrer:', document.referrer);
    console.log('🔍 All sessionStorage:', Object.keys(sessionStorage).reduce((acc, key) => {
      acc[key] = sessionStorage.getItem(key);
      return acc;
    }, {} as Record<string, string | null>));
    
    // More robust return visit detection with multiple fallbacks
    const isReturnVisit = hasVisited && (isDirectNavigation || returnVisitFlag || urlReturnVisit === 'true');
    
    if (isReturnVisit) {
      // This is a return visit - show content immediately and start video at last 4 seconds
      console.log('🎯 RETURN VISIT DETECTED - Starting video at last 4 seconds');
      setIsReturnVisit(true);
      setShowContent(true);
      setShowNavigation(true);
      setIsVideoLoaded(true);
      
      // Clear the return visit flags after using them
      sessionStorage.removeItem('returnVisit');
      sessionStorage.removeItem('isDirectNavigation');
      
      // Clean up URL parameter
      if (urlReturnVisit) {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.delete('return');
        window.history.replaceState({}, '', newUrl.toString());
      }
    } else {
      // First visit - normal behavior
      console.log('🆕 FIRST VISIT - Normal video behavior');
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        // Mobile - show navigation immediately, let video control text fade
        setShowNavigation(true);
        setIsVideoLoaded(true);
      } else {
        // Desktop - normal behavior with 3-second fallback
        const fallback = setTimeout(() => {
          setShowContent(true);
          setShowNavigation(true);
          setIsVideoLoaded(true);
        }, 3000);
        
        return () => clearTimeout(fallback);
      }
    }
    
    // Mark that we've visited home
    sessionStorage.setItem('hasVisitedHome', 'true');
  }, []);

  // Video handling with return visit support
  useEffect(() => {
    const video = videoRef.current;
    console.log('Video ref:', video, 'isReturnVisit:', isReturnVisit);
    
    if (video) {
      const handleLoadedMetadata = () => {
        console.log('Video metadata loaded, duration:', video.duration);
        
        // If this is a return visit, start video at last 4 seconds
        if (isReturnVisit) {
          const duration = video.duration;
          const startTime = Math.max(0, duration - 4);
          console.log('🎬 Setting video to start at:', startTime, 'seconds');
          video.currentTime = startTime;
        }
      };

      const handleLoadedData = () => {
        console.log('Video loaded successfully');
        setIsVideoLoaded(true);
        video.play().catch((error) => {
          console.log('Video play failed:', error);
          // If autoplay fails, show content anyway
          setShowContent(true);
          setShowNavigation(true);
        });
      };

      const handleTimeUpdate = () => {
        const duration = video.duration;
        const currentTime = video.currentTime;

        // For return visits, content is already shown, so skip this logic
        if (!isReturnVisit && currentTime >= duration * 0.35 && !showContent && !showNavigation) {
          setShowContent(true);
          setShowNavigation(true);
        }
      };

      const handleVideoEnd = () => {
        setHasVideoEnded(true);
        setShowContent(true);
        setShowNavigation(true);
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', handleVideoEnd);
      
      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [showContent, showNavigation, isReturnVisit]);

  // No aggressive video control needed - let it play from 75%

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Black background fallback */}
      <div className="absolute inset-0 bg-black" />
      {/* Video Background */}
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay={true}
        muted
        playsInline
        preload="auto"
        controls={false}
        loop={false}
        onError={(e) => {
          console.error('Video error:', e);
          setIsVideoLoaded(true);
          setShowContent(true);
          setShowNavigation(true);
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      {/* Navigation Menu */}
      {showNavigation && (
        <div className={`transition-all ${isReplaying ? 'duration-0' : 'duration-[3000ms]'} ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}>
          <Navbar />
        </div>
      )}
      {/* Content Overlay - SIMPLE POSITIONING */}
      <div className="relative z-40 min-h-screen px-6 text-center text-white pt-32">
        {/* Main Content - MOBILE OPTIMIZED */}
        <div className={`transition-all ${isReplaying ? 'duration-0' : 'duration-[3000ms]'} ease-in-out ${
          showContent 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`}>
          
          {/* Tagline - FIXED POSITION */}
          <h1 className="font-bold leading-tight tracking-wider uppercase text-center" style={{
            fontSize: 'clamp(0.875rem, 2.2vw, 1.75rem)',
            color: '#FFC06B',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            marginTop: '100px',
            lineHeight: '1.2',
            wordSpacing: '0.1em'
          }}>
            ZON builds AI that makes AI better
          </h1>

          {/* Logo - FIXED POSITION */}
          <div className="flex justify-center" style={{ marginTop: '20px' }}>
            <img
              src={logoTransparent}
              alt="ZON"
              className="w-auto"
              style={{
                height: 'clamp(11.4rem, 20.5vw, 17.1rem)',
                maxHeight: '79.8vh'
              }}
            />
          </div>

          {/* Description - FIXED POSITION */}
          <p className="text-white max-w-4xl mx-auto leading-relaxed text-center" style={{
            fontSize: 'clamp(0.875rem, 2.2vw, 1.5rem)',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            marginTop: '20px',
            lineHeight: '1.6',
            padding: '0 1rem'
          }}>
            Revolutionary AI technology that transforms how businesses operate, optimize, and scale.
          </p>

          {/* Statistics - FIXED POSITION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" style={{ marginTop: '20px', padding: '0 1rem' }}>
            <div className="text-center">
              <div className="font-bold text-[#FF6826] mb-3" style={{
                fontSize: 'clamp(1.5rem, 4.5vw, 2.75rem)',
                lineHeight: '1.1',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>35%+</div>
              <div className="text-white uppercase tracking-wider font-medium" style={{
                fontSize: 'clamp(0.7rem, 1.4vw, 0.95rem)',
                lineHeight: '1.3',
                textShadow: '0 1px 1px rgba(0, 0, 0, 0.3)'
              }}>ENERGY REDUCTION</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-[#FFC06B] mb-3" style={{
                fontSize: 'clamp(1.5rem, 4.5vw, 2.75rem)',
                lineHeight: '1.1',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>50%+</div>
              <div className="text-white uppercase tracking-wider font-medium" style={{
                fontSize: 'clamp(0.7rem, 1.4vw, 0.95rem)',
                lineHeight: '1.3',
                textShadow: '0 1px 1px rgba(0, 0, 0, 0.3)'
              }}>COST SAVINGS</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-[#CB2F19] mb-3" style={{
                fontSize: 'clamp(1.5rem, 4.5vw, 2.75rem)',
                lineHeight: '1.1',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>40%</div>
              <div className="text-white uppercase tracking-wider font-medium" style={{
                fontSize: 'clamp(0.7rem, 1.4vw, 0.95rem)',
                lineHeight: '1.3',
                textShadow: '0 1px 1px rgba(0, 0, 0, 0.3)'
              }}>CAPACITY INCREASE</div>
            </div>
          </div>
        </div>


        {/* Logo reveal removed - using single logo in content */}

        {/* Video replay prompt when video has ended */}
        {hasVideoEnded && (
          <div className="absolute top-20 left-6">
            <button 
              onClick={() => {
                // Set replaying state FIRST for instant transition
                setIsReplaying(true);
                
                // Fade out content immediately - no delay
                setShowContent(false);
                setShowNavigation(false);
                setHasVideoEnded(false);
                
                // Reset video and play
                const video = videoRef.current;
                if (video) {
                  video.currentTime = 0;
                  video.play();
                  
                  // Wait for video to reach the timing point, then fade back in
                  const checkTiming = () => {
                    const duration = video.duration;
                    const currentTime = video.currentTime;
                    
                    if (currentTime >= duration * 0.35) {
                      setIsReplaying(false); // Reset replaying state first
                      setShowContent(true); // Show content with proper transition
                      setShowNavigation(true); // Show navigation at the same time
                    } else if (currentTime < duration * 0.35) {
                      // Keep checking until we reach the timing point
                      requestAnimationFrame(checkTiming);
                    }
                  };
                  
                  // Start checking timing after a brief delay
                  setTimeout(checkTiming, 100);
                }
              }}
              className="bg-white/20 backdrop-blur-lg text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-2 animate-pulse-glow animate-gentle-bounce text-sm md:text-base"
            >
              ▶ Replay Video
            </button>
          </div>
        )}
      </div>
      {/* Loading State */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center z-20">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mb-4" />
          <p className="text-white text-lg">Loading video...</p>
        </div>
      )}
      
    </div>
  );
};

export default VideoLanding;