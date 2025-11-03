import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { FaPlay, FaGraduationCap, FaUsers, FaAward, FaStar } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [navHeight, setNavHeight] = useState(120);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { scrollY } = useScroll();
  
  // Parallax effects - reduced for mobile
  const y = useTransform(scrollY, [0, 500], [0, windowSize.width < 768 ? 75 : 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Track window size for responsive behavior
  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  // Calculate navbar height dynamically
  useEffect(() => {
    const updateNavHeight = () => {
      const navbar = document.querySelector('header');
      if (navbar) {
        setNavHeight(navbar.offsetHeight);
      }
    };

    updateNavHeight();

    const handleScroll = () => {
      updateNavHeight();
    };

    const handleResize = () => {
      updateNavHeight();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Auto-rotating text slides
  const textSlides = [
    {
      subtitle: "Knowledge Meets Innovation",
      title: "Unleashing Potential,",
      highlight: "Fostering Excellence",
      description: "A new-age school in the heart of Pithoragarh, where curiosity meets creativity and every child's dream is nurtured with care and innovation."
    },
    {
      subtitle: "Excellence in Education",
      title: "Shaping Tomorrow's",
      highlight: "Leaders Today",
      description: "Empowering students with world-class education, cutting-edge facilities, and values that last a lifetime in the beautiful hills of Uttarakhand."
    },
    {
      subtitle: "Where Dreams Take Flight",
      title: "Building Bright",
      highlight: "Futures Together",
      description: "Join our community of learners, innovators, and achievers as we create an environment where every student can reach their full potential."
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % textSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [textSlides.length]);

  // Scroll to next section
  const scrollToNext = () => {
    const nextSection = document.getElementById('mission-vision');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative w-full flex items-center justify-center text-white overflow-hidden"
      style={{ 
        height: `calc(100vh - ${navHeight}px)`,
        marginTop: `${navHeight}px`,
        minHeight: windowSize.width < 768 ? '500px' : '600px'
      }}
    >
      {/* Background Video with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/videos/school-campus.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(37, 99, 235, 0.8), rgba(16, 185, 129, 0.6)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
      </motion.div>

      {/* Animated Particles - Responsive count */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(windowSize.width < 768 ? 10 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * (windowSize.width || 1200),
              y: Math.random() * (windowSize.height || 800),
            }}
            animate={{
              y: [null, -100, (windowSize.height || 800) + 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Dynamic Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/50 to-green-900/60"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(30, 64, 175, 0.7), rgba(124, 58, 237, 0.5), rgba(5, 150, 105, 0.6))",
            "linear-gradient(135deg, rgba(124, 58, 237, 0.7), rgba(5, 150, 105, 0.5), rgba(30, 64, 175, 0.6))",
            "linear-gradient(135deg, rgba(5, 150, 105, 0.7), rgba(30, 64, 175, 0.5), rgba(124, 58, 237, 0.6))"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Floating Achievement Cards - Responsive positioning */}
      <motion.div
        className="absolute top-2 sm:top-4 md:top-8 left-2 sm:left-4 md:left-10 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-white/20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        whileHover={{ scale: windowSize.width >= 768 ? 1.05 : 1.02, y: -5 }}
      >
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
          <FaAward className="text-yellow-400 text-sm sm:text-xl md:text-2xl" />
          <div>
            <p className="text-xs sm:text-xs md:text-sm font-semibold">Future Starts</p>
            <p className="text-xs text-gray-300">Here</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-12 sm:top-16 md:top-20 right-2 sm:right-4 md:right-10 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-white/20"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 1 }}
        whileHover={{ scale: windowSize.width >= 768 ? 1.05 : 1.02, y: -5 }}
      >
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
          <FaUsers className="text-green-400 text-sm sm:text-xl md:text-2xl" />
          <div>
            <p className="text-xs sm:text-xs md:text-sm font-semibold">200+</p>
            <p className="text-xs text-gray-300">Students</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 sm:bottom-16 md:bottom-24 left-2 sm:left-4 md:left-16 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-white/20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        whileHover={{ scale: windowSize.width >= 768 ? 1.05 : 1.02, y: -5 }}
      >
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
          <FaStar className="text-blue-400 text-sm sm:text-xl md:text-2xl" />
          <div>
            <p className="text-xs sm:text-xs md:text-sm font-semibold">99%</p>
            <p className="text-xs text-gray-300">Success Rate</p>
          </div>
        </div>
      </motion.div>

      {/* Main Hero Content */}
      <motion.div
        className="relative z-10 text-center px-3 sm:px-4 md:px-8 lg:px-12 max-w-6xl mx-auto"
        style={{ opacity }}
      >
        {/* Animated Subtitle */}
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="mb-3 sm:mb-4 md:mb-6"
        >
          <motion.p 
            className="uppercase tracking-wider sm:tracking-widest text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              {textSlides[currentSlide].subtitle}
            </span>
          </motion.p>

          {/* Main Title - Responsive font sizes */}
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {textSlides[currentSlide].title}
            </motion.span>
            <br />
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {textSlides[currentSlide].highlight}
            </motion.span>
          </motion.h1>

          {/* Description - Responsive text */}
          <motion.p 
            className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {textSlides[currentSlide].description}
          </motion.p>
        </motion.div>

        {/* Action Buttons - Responsive layout */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-6 sm:mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.button 
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 overflow-hidden w-full sm:w-auto max-w-xs"
            whileHover={{ scale: windowSize.width >= 768 ? 1.05 : 1.02, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToNext()}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <FaGraduationCap className="text-sm sm:text-base" />
              Explore Programs
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button 
                       className="group relative bg-transparent border-2 border-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 overflow-hidden w-full sm:w-auto max-w-xs"
            whileHover={{ scale: windowSize.width >= 768 ? 1.05 : 1.02, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <FaPlay className="text-sm sm:text-base" />
              Virtual Tour
            </span>
          </motion.button>
        </motion.div>

        {/* Stats Counter - Responsive grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          {[
            { number: "24/7", label: "Learning" },
            { number: "200+", label: "Happy Students" },
            { number: "20+", label: "Expert Teachers" },
            { number: "99%", label: "Success Rate" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: windowSize.width >= 768 ? 1.1 : 1.05 }}
            >
              <motion.h3 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 + index * 0.1 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-xs sm:text-sm text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Responsive positioning */}
      <motion.div
        className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        onClick={scrollToNext}
      >
        <motion.div
          className="flex flex-col items-center gap-1 md:gap-2 text-white/80 hover:text-white transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs md:text-sm font-medium hidden sm:block">Scroll to explore</span>
          <HiArrowDown className="text-lg sm:text-xl md:text-2xl" />
        </motion.div>
      </motion.div>

      {/* Slide Indicators - Responsive positioning */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
        {textSlides.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/40'
            }`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Animated Border Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 2 }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-green-500 via-purple-500 to-blue-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
      />

      {/* Floating Geometric Shapes - Hidden on mobile for performance */}
      {windowSize.width >= 640 && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 border-2 border-white/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          <motion.div
            className="absolute top-3/4 right-1/4 w-6 h-6 sm:w-10 sm:h-10 md:w-16 md:h-16 border-2 border-white/20"
            animate={{
              rotate: -360,
              y: [0, -20, 0],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {windowSize.width >= 768 && (
            <motion.div
              className="absolute top-1/2 right-1/6 w-6 h-6 md:w-12 md:h-12 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full"
              animate={{
                x: [0, 30, 0],
                y: [0, -30, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </>
      )}

      {/* Twinkling Stars Effect - Reduced count on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(windowSize.width < 768 ? 15 : 30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Loading Animation Overlay */}
      {!isVideoLoaded && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
          onAnimationComplete={() => setIsVideoLoaded(true)}
        >
          <motion.div
            className="text-center px-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-4 border-white/30 border-t-white rounded-full mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-white text-sm sm:text-base md:text-lg font-semibold">Welcome to Birchwood Academy</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}