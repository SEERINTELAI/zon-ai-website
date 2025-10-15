import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from './layout/Navbar';
import heroVideo from '../assets/hero-video.mp4';
import logoTransparent from '../assets/logo-transparent.png';

type PlaybackMode = 'initial' | 'replay' | 'navigation-return';

const VideoLanding: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const [hasVideoEnded, setHasVideoEnded] = useState(false);
  const [playbackMode, setPlaybackMode] = useState<PlaybackMode>('initial');
  const [isNavigationReturn, setIsNavigationReturn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const location = useLocation();

  // Detect navigation context on component mount
  useEffect(() => {
    const isDirectNavigation = sessionStorage.getItem('isDirectNavigation') === 'true';
    const hasBeenHereBefore = sessionStorage.getItem('hasVisitedHome') === 'true';
    
    if (isDirectNavigation && hasBeenHereBefore) {
      setPlaybackMode('navigation-return');
      setIsNavigationReturn(true);
      // Immediately show content and navigation for navigation returns
      setShowContent(true);
      setShowNavigation(true);
    } else {
      setPlaybackMode('initial');
      sessionStorage.setItem('hasVisitedHome', 'true');
    }
    
    // Clear the navigation flag
    sessionStorage.removeItem('isDirectNavigation');
  }, []);

  // Handle video timing for animations and end state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      
      if (playbackMode === 'navigation-return') {
        // For navigation returns, start from last 2 seconds
        const duration = video.duration;
        if (duration && duration > 2) {
          video.currentTime = duration - 2;
        }
      }
    };

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;
      
      if (playbackMode === 'navigation-return') {
        // For navigation returns, content and navigation are already visible
        return;
      }

      if (currentTime >= duration * 0.35 && !showContent) {
        setShowContent(true);
      }

      if (currentTime >= duration * 0.3 && !showNavigation) {
        setShowNavigation(true);
      }
    };

    const handleVideoEnd = () => {
      setHasVideoEnded(true);
      // Ensure content is shown when video ends
      setShowContent(true);
      setShowNavigation(true);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleVideoEnd);
    
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [showContent, showNavigation, playbackMode]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Video Background - MOBILE OPTIMIZED */}
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
        onError={() => {
          setVideoError(true);
          setIsVideoLoaded(true);
        }}
      />
      {/* Background Fallback for Video Errors */}
      {videoError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
      )}
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      {/* Navigation Menu */}
      {showNavigation && (
        <div className={`transition-all duration-[3000ms] ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}>
          <Navbar />
        </div>
      )}
      {/* Content Overlay - SIMPLE POSITIONING */}
      <div className="relative z-40 min-h-screen px-6 text-center text-white pt-32">
        {/* Main Content - MOBILE OPTIMIZED */}
        <div className={`transition-all duration-[3000ms] ease-in-out ${
          showContent 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`} style={{
          transition: playbackMode === 'replay' && !showContent ? 'none' : 'all 3000ms ease-in-out'
        }}>
          
          {/* Tagline - FIXED POSITION */}
          <h1 className="font-bold leading-tight tracking-wider uppercase text-center" style={{
            fontSize: 'clamp(0.875rem, 2.2vw, 1.75rem)',
            color: '#FFC06B',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            marginTop: '100px',
            lineHeight: '1.2',
            wordSpacing: '0.1em'
          }}>
            AI THAT MAKES AI BETTER
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
                const video = videoRef.current;
                if (video) {
                  // Immediately hide text with no transition
                  setShowContent(false);
                  setHasVideoEnded(false);
                  setShowNavigation(false);
                  setPlaybackMode('replay');
                  setIsNavigationReturn(false);
                  
                  // Reset video and play
                  video.currentTime = 0;
                  video.play();
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