import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from './layout/Navbar';
import heroVideo from '../assets/hero-video.mp4';
import heroVideoShort from '../assets/hero-video-short.mp4';
import logoTransparent from '../assets/logo-transparent.png';

type PlaybackMode = 'initial' | 'replay' | 'navigation-return';

const VideoLanding: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showContent, setShowContent] = useState(() => {
    const isDirectNavigation = sessionStorage.getItem('isDirectNavigation') === 'true';
    const hasBeenHereBefore = sessionStorage.getItem('hasVisitedHome') === 'true';
    const hasVideoPlayedOnce = sessionStorage.getItem('hasVideoPlayedOnce') === 'true';
    
    return isDirectNavigation && hasBeenHereBefore && hasVideoPlayedOnce;
  });
  
  const [showNavigation, setShowNavigation] = useState(() => {
    const isDirectNavigation = sessionStorage.getItem('isDirectNavigation') === 'true';
    const hasBeenHereBefore = sessionStorage.getItem('hasVisitedHome') === 'true';
    const hasVideoPlayedOnce = sessionStorage.getItem('hasVideoPlayedOnce') === 'true';
    
    return isDirectNavigation && hasBeenHereBefore && hasVideoPlayedOnce;
  });
  const [hasVideoEnded, setHasVideoEnded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // Initialize state based on session storage immediately (desktop only for navigation-return)
  const [playbackMode, setPlaybackMode] = useState<PlaybackMode>(() => {
    // Always use initial mode on mobile
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    
    if (isMobileDevice) {
      return 'initial'; // Always initial on mobile
    }
    
    // Desktop logic for navigation-return
    const isDirectNavigation = sessionStorage.getItem('isDirectNavigation') === 'true';
    const hasBeenHereBefore = sessionStorage.getItem('hasVisitedHome') === 'true';
    const hasVideoPlayedOnce = sessionStorage.getItem('hasVideoPlayedOnce') === 'true';
    
    if (isDirectNavigation && hasBeenHereBefore && hasVideoPlayedOnce) {
      return 'navigation-return';
    }
    return 'initial';
  });
  
  // Separate state for video source to force re-render (desktop only)
  const [videoSource, setVideoSource] = useState(() => {
    // Always use full video on mobile
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    
    if (isMobileDevice) {
      return heroVideo; // Always full video on mobile
    }
    
    // Desktop logic for short video
    const isDirectNavigation = sessionStorage.getItem('isDirectNavigation') === 'true';
    const hasBeenHereBefore = sessionStorage.getItem('hasVisitedHome') === 'true';
    const hasVideoPlayedOnce = sessionStorage.getItem('hasVideoPlayedOnce') === 'true';
    
    if (isDirectNavigation && hasBeenHereBefore && hasVideoPlayedOnce) {
      return heroVideoShort;
    }
    return heroVideo;
  });
  
  const [isNavigationReturn, setIsNavigationReturn] = useState(() => {
    const isDirectNavigation = sessionStorage.getItem('isDirectNavigation') === 'true';
    const hasBeenHereBefore = sessionStorage.getItem('hasVisitedHome') === 'true';
    const hasVideoPlayedOnce = sessionStorage.getItem('hasVideoPlayedOnce') === 'true';
    
    return isDirectNavigation && hasBeenHereBefore && hasVideoPlayedOnce;
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  const location = useLocation();

  // Detect mobile and navigation context on component mount
  useEffect(() => {
    // Detect mobile device
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    setIsMobile(isMobileDevice);
    
    const isDirectNavigation = sessionStorage.getItem('isDirectNavigation') === 'true';
    const hasBeenHereBefore = sessionStorage.getItem('hasVisitedHome') === 'true';
    const hasVideoPlayedOnce = sessionStorage.getItem('hasVideoPlayedOnce') === 'true';
    
    console.log('Navigation detection:', {
      isDirectNavigation,
      hasBeenHereBefore,
      hasVideoPlayedOnce,
      isMobileDevice
    });
    
    // Clear the navigation flag immediately
    sessionStorage.removeItem('isDirectNavigation');
    
    if (isDirectNavigation && hasBeenHereBefore && hasVideoPlayedOnce) {
      console.log('Setting playback mode to navigation-return');
      setPlaybackMode('navigation-return');
      setIsNavigationReturn(true);
      // Immediately show content and navigation for navigation returns
      setShowContent(true);
      setShowNavigation(true);
    } else {
      console.log('Setting playback mode to initial');
      setPlaybackMode('initial');
      sessionStorage.setItem('hasVisitedHome', 'true');
      
      // On mobile, show content immediately to prevent loading spinner
      if (isMobileDevice) {
        console.log('Mobile device detected - showing content immediately');
        setShowContent(true);
        setShowNavigation(true);
        
        // Also set a timeout to ensure content shows even if video fails
        setTimeout(() => {
          if (!isVideoLoaded) {
            console.log('Mobile timeout - forcing content to show');
            setShowContent(true);
            setShowNavigation(true);
          }
        }, 3000);
      }
    }
  }, []);

  // Handle video timing for animations and end state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      
      // Add a small delay for mobile devices
      setTimeout(() => {
        if (playbackMode === 'navigation-return') {
          // For navigation returns, play the short video from the beginning
          console.log('Navigation return - playing short video');
          video.play().catch((error) => {
            console.log('Video play failed:', error);
            // If autoplay fails, just show content
            setShowContent(true);
            setShowNavigation(true);
          });
        } else if (playbackMode === 'initial') {
          // For initial visits, start playing from the beginning
          console.log('Initial visit - starting video playback');
          video.play().catch((error) => {
            console.log('Video play failed:', error);
            // If autoplay fails, just show content
            setShowContent(true);
            setShowNavigation(true);
          });
        } else if (playbackMode === 'replay') {
          // For replay mode, start playing immediately
          console.log('Replay mode - starting video playback');
          video.currentTime = 0;
          video.play().catch((error) => {
            console.log('Video play failed:', error);
            // If autoplay fails, just show content
            setShowContent(true);
            setShowNavigation(true);
          });
        }
      }, 100);
    };

    const handlePlay = () => {
      if (playbackMode === 'navigation-return') {
        console.log('Navigation return - allowing short video to play');
        // Allow short video to play normally
      } else if (playbackMode === 'replay') {
        console.log('Replay mode - allowing video to play');
        // Allow replay to play normally
      } else if (playbackMode === 'initial') {
        console.log('Initial mode - allowing video to play');
        // Allow initial play
      } else {
        console.log('Unexpected play event - pausing video');
        video.pause();
      }
    };

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;
      
      if (playbackMode === 'navigation-return') {
        // For navigation returns, content and navigation are already visible
        // Video is static, so no need to handle time updates
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
      // Mark that video has played once
      sessionStorage.setItem('hasVideoPlayedOnce', 'true');
      // Ensure content is shown when video ends
      setShowContent(true);
      setShowNavigation(true);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('play', handlePlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleVideoEnd);
    
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [showContent, showNavigation, playbackMode]);

  // No aggressive video control needed - let it play from 75%

  console.log('Rendering with playbackMode:', playbackMode);
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Video Background - MOBILE OPTIMIZED */}
      <video
        key={videoSource} // Force re-render when video source changes
        ref={videoRef}
        src={videoSource}
        autoPlay={false}
        muted
        playsInline
        preload={isMobile ? "none" : "auto"}
        controls={false}
        loop={false}
        webkit-playsinline="true"
        x5-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="false"
        onLoadStart={() => {
          console.log('Video loading with src:', videoSource === heroVideoShort ? 'SHORT VIDEO' : 'FULL VIDEO');
        }}
        onLoadedData={() => {
          console.log('Video loaded successfully, playbackMode:', playbackMode);
        }}
        onError={(e) => {
          console.error('Video error:', e);
        }}
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
                console.log('Replay button clicked - replaying original full video');
                
                // Immediately hide text with no transition
                setShowContent(false);
                setHasVideoEnded(false);
                setShowNavigation(false);
                setPlaybackMode('replay');
                setIsNavigationReturn(false);
                
                // Always replay the original full video
                setVideoSource(heroVideo);
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