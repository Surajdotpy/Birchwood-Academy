import { useState, useEffect } from "react";
import { ChevronDown, Phone, Mail, MapPin, Menu, X } from "lucide-react";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = scrolled ? 80 : 120; // Adjust based on header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu and dropdowns after navigation
      setMobileMenuOpen(false);
      setAboutOpen(false);
      setAcademicsOpen(false);
    }
  };

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Reset dropdown states when opening/closing mobile menu
    setAboutOpen(false);
    setAcademicsOpen(false);
  };

  // Handle mobile dropdown toggles (only for mobile)
  const toggleMobileAbout = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setAboutOpen(!aboutOpen);
    setAcademicsOpen(false); // Close other dropdown
  };

  const toggleMobileAcademics = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setAcademicsOpen(!academicsOpen);
    setAboutOpen(false); // Close other dropdown
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 transition-all duration-300">
        {/* Top Info Bar */}
        <div className={`bg-blue-900 text-white text-sm transition-all duration-300 ${
          scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center py-2 gap-2">
              <p className="hidden lg:block font-medium animate-pulse">
                🌟 Join with us and be a part of the success
              </p>
              <div className="flex flex-wrap gap-4 text-xs md:text-sm">
                <a 
                  href="tel:+919876543210"
                  className="flex items-center gap-1 hover:text-yellow-300 transition-colors cursor-pointer"
                >
                  <Phone size={14} />
                  <span>+91 98765 43210</span>
                </a>
                <a 
                  href="mailto:support@birchwoodacademy.com"
                  className="flex items-center gap-1 hover:text-yellow-300 transition-colors cursor-pointer"
                >
                  <Mail size={14} />
                  <span>support@birchwoodacademy.com</span>
                </a>
                <a 
                  href="https://maps.google.com/?q=Pithoragarh,Uttarakhand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-yellow-300 transition-colors cursor-pointer"
                >
                  <MapPin size={14} />
                  <span>Pithoragarh, Uttarakhand</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className={`bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-sm'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3 md:py-4">
              
              {/* Logo */}
              <div 
                onClick={() => scrollToSection('home')}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="text-3xl animate-bounce group-hover:animate-pulse">
                  🎓
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl md:text-2xl font-bold text-blue-800 group-hover:text-blue-600 transition-colors">
                    Birchwood Academy
                  </h1>
                  <p className="text-xs text-gray-600 hidden sm:block">
                    Excellence in Education
                  </p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
                
                {/* Home */}
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="hover:text-blue-800 transition-all duration-300 hover:scale-105 relative group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>

                {/* About Dropdown */}
                <li 
                  className="relative group"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <button className="flex items-center gap-1 hover:text-blue-800 transition-all duration-300 hover:scale-105">
                    About 
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 ${aboutOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {/* About Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 z-50 ${
                    aboutOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    <div className="py-2">
                      <button 
                        onClick={() => scrollToSection('/About/AboutUs')}
                        className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-all duration-200 hover:pl-6"
                      >
                        About Us
                      </button>
                      <button 
                        onClick={() => scrollToSection('principal')}
                        className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-all duration-200 hover:pl-6"
                      >
                        👨‍💼 Principal's Message
                      </button>
                      <button 
                        onClick={() => scrollToSection('faculty')}
                        className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-all duration-200 hover:pl-6"
                      >
                        👥 Our Team
                      </button>
                    </div>
                  </div>
                </li>

                {/* Academics Dropdown */}
                <li 
                  className="relative group"
                  onMouseEnter={() => setAcademicsOpen(true)}
                  onMouseLeave={() => setAcademicsOpen(false)}
                >
                  <button className="flex items-center gap-1 hover:text-blue-800 transition-all duration-300 hover:scale-105">
                    Academics 
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 ${academicsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {/* Academics Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 z-50 ${
                    academicsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    <div className="py-2">
                      <button 
                        onClick={() => scrollToSection('curriculum')}
                        className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-all duration-200 hover:pl-6"
                      >
                        📚 Curriculum
                      </button>
                      <button 
                        onClick={() => scrollToSection('methodology')}
                        className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-all duration-200 hover:pl-6"
                      >
                        🎓 Teaching Methodology
                      </button>
                      <button 
                        onClick={() => scrollToSection('programs')}
                        className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-all duration-200 hover:pl-6"
                      >
                        🏆 Programs
                      </button>
                    </div>
                  </div>
                </li>

                {/* Other Menu Items */}
                {[
                  { id: 'admissions', label: 'Admissions' },
                  { id: 'gallery', label: 'Gallery' },
                  { id: 'events', label: 'Events' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => scrollToSection(item.id)}
                      className="hover:text-blue-800 transition-all duration-300 hover:scale-105 relative group"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 group-hover:w-full transition-all duration-300"></span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="hidden md:flex items-center gap-4">
                <button 
                  onClick={() => scrollToSection('admissions')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                >
                  Apply Now
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="lg:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="relative p-3 text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-300 z-50"
                  aria-label="Toggle mobile menu"
                  aria-expanded={mobileMenuOpen}
                >
                  <div className="relative w-6 h-6">
                    <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                      mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                    }`}></span>
                    <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                      mobileMenuOpen ? 'opacity-0' : ''
                    }`}></span>
                    <span className={`absolute top-5 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                      mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                    }`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 z-50 lg:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🎓</div>
              <div>
                <h2 className="text-lg font-bold text-blue-800">Birchwood Academy</h2>
                <p className="text-xs text-gray-600">Excellence in Education</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto py-6 px-6">
            <div className="space-y-4">
              
              <button 
                onClick={() => scrollToSection('home')}
                              className="flex items-center gap-3 w-full text-left py-3 px-4 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <span className="text-xl">🏠</span>
                <span className="font-medium">Home</span>
              </button>

              {/* Mobile About Section */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={toggleMobileAbout}
                  className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📖</span>
                    <span className="font-medium">About</span>
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-300 ${aboutOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  aboutOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-gray-50 px-4 py-2 space-y-2">
                    <button 
                      onClick={() => scrollToSection('mission')}
                      className="flex items-center gap-3 w-full text-left py-2 text-sm text-gray-600 hover:text-blue-800 hover:bg-blue-100 rounded px-2 transition-colors duration-300"
                    >
                      <span>🎯</span>
                      <span>About Us</span>
                    </button>
                    <button 
                      onClick={() => scrollToSection('principal')}
                      className="flex items-center gap-3 w-full text-left py-2 text-sm text-gray-600 hover:text-blue-800 hover:bg-blue-100 rounded px-2 transition-colors duration-300"
                    >
                      <span>👨‍💼</span>
                      <span>Principal's Message</span>
                    </button>
                    <button 
                      onClick={() => scrollToSection('faculty')}
                      className="flex items-center gap-3 w-full text-left py-2 text-sm text-gray-600 hover:text-blue-800 hover:bg-blue-100 rounded px-2 transition-colors duration-300"
                    >
                      <span>👥</span>
                      <span>Our Team</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Academics Section */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={toggleMobileAcademics}
                  className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🎓</span>
                    <span className="font-medium">Academics</span>
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-300 ${academicsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  academicsOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-gray-50 px-4 py-2 space-y-2">
                    <button 
                      onClick={() => scrollToSection('curriculum')}
                      className="flex items-center gap-3 w-full text-left py-2 text-sm text-gray-600 hover:text-blue-800 hover:bg-blue-100 rounded px-2 transition-colors duration-300"
                    >
                      <span>📚</span>
                      <span>Curriculum</span>
                    </button>
                    <button 
                      onClick={() => scrollToSection('methodology')}
                      className="flex items-center gap-3 w-full text-left py-2 text-sm text-gray-600 hover:text-blue-800 hover:bg-blue-100 rounded px-2 transition-colors duration-300"
                    >
                      <span>🎓</span>
                      <span>Teaching Methodology</span>
                    </button>
                    <button 
                      onClick={() => scrollToSection('programs')}
                      className="flex items-center gap-3 w-full text-left py-2 text-sm text-gray-600 hover:text-blue-800 hover:bg-blue-100 rounded px-2 transition-colors duration-300"
                    >
                      <span>🏆</span>
                      <span>Programs</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Other Menu Items */}
              {[
                { id: 'admissions', label: 'Admissions', icon: '📝' },
                { id: 'gallery', label: 'Gallery', icon: '🖼️' },
                { id: 'events', label: 'Events', icon: '📅' },
                { id: 'contact', label: 'Contact', icon: '📞' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-3 w-full text-left py-3 px-4 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-300"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="border-t border-gray-200 p-6 space-y-4">
            {/* Mobile CTA Button */}
            <button 
              onClick={() => scrollToSection('admissions')}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg transform flex items-center justify-center gap-2"
            >
              <span>🎓</span>
              <span>Apply Now</span>
            </button>

            {/* Mobile Contact Info */}
            <div className="text-center text-sm text-gray-600 space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Phone size={14} />
                <a href="tel:+919876543210" className="hover:text-blue-800 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail size={14} />
                <a href="mailto:support@birchwoodacademy.com" className="hover:text-blue-800 transition-colors">
                  support@birchwoodacademy.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin size={14} />
                <span>Pithoragarh, Uttarakhand</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}