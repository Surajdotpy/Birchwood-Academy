import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, BookOpen, Users, Award, Heart, Star, GraduationCap, Sparkles } from "lucide-react";

export default function Footer() {
  const floatingIcons = [
    { icon: BookOpen, delay: 0, x: 20, y: 30 },
    { icon: GraduationCap, delay: 1, x: 80, y: 20 },
    { icon: Star, delay: 2, x: 150, y: 40 },
    { icon: Heart, delay: 3, x: 220, y: 25 },
    { icon: Award, delay: 4, x: 290, y: 35 },
    { icon: Sparkles, delay: 5, x: 360, y: 30 },
  ];

  const achievements = [
    { number: "25+", label: "Years of Excellence", icon: Award },
    { number: "2000+", label: "Happy Students", icon: Users },
    { number: "98%", label: "Success Rate", icon: Star },
    { number: "150+", label: "Expert Faculty", icon: GraduationCap },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -25, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <motion.div
          className="absolute bottom-32 left-1/3 w-20 h-20 bg-green-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Educational Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute top-16 opacity-5"
            style={{ left: `${item.x}px` }}
            animate={{
              y: [item.y, item.y - 20, item.y],
              rotate: [0, 10, -10, 0],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay
            }}
          >
            <item.icon size={40} />
          </motion.div>
        ))}

        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Achievement Stats Banner */}
      <motion.div 
        className="relative z-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-b border-white/10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-3 group-hover:shadow-lg group-hover:shadow-blue-400/25"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <achievement.icon size={24} className="text-white" />
                </motion.div>
                <motion.h4 
                  className="text-2xl font-bold text-blue-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                >
                  {achievement.number}
                </motion.h4>
                <p className="text-gray-300 text-sm">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo + Tagline */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap size={24} className="text-white" />
              </motion.div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Birchwood Academy
                </h2>
                <p className="text-blue-300 text-sm">Excellence in Education</p>
              </div>
            </motion.div>
            
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Where learning blends with creativity. A new-age school shaping
              confident, curious, and compassionate young minds in the heart of Pithoragarh.
            </p>

            <motion.div
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                <Sparkles size={16} />
                Our Mission
              </h4>
              <p className="text-gray-300 text-sm italic">
                "Nurturing young minds to become tomorrow's leaders through innovative education, 
                character building, and holistic development."
              </p>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="font-bold text-xl mb-6 text-blue-300 flex items-center gap-2">
              <BookOpen size={20} />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Mission & Vision", href: "/mission-vision" },
                { name: "Academics", href: "/academics" },
                { name: "Admissions", href: "/admissions" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="font-bold text-xl mb-6 text-blue-300 flex items-center gap-2">
              <Phone size={20} />
              Get in Touch
            </h3>
            
            <div className="space-y-4">
              <motion.div 
                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Near Mall Road, Pithoragarh<br />
                    Uttarakhand, India - 262501
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <Phone size={18} className="text-blue-400" />
                <p className="text-gray-300 text-sm">+91 98765 43210</p>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <Mail size={18} className="text-blue-400" />
                <p className="text-gray-300 text-sm">info@birchwoodacademy.com</p>
              </motion.div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-blue-300 font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, color: "hover:bg-blue-600" },
                  { icon: Instagram, color: "hover:bg-pink-600" },
                  { icon: Linkedin, color: "hover:bg-blue-700" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <motion.div 
        className="relative z-10 bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <motion.h3 
              className="text-2xl font-bold text-blue-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Stay Updated with Birchwood Academy
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get the latest news, events, and educational insights delivered to your inbox
            </motion.p>
            <motion.div 
                            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={16} />
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div 
        className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-gray-400 text-sm text-center md:text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              © {new Date().getFullYear()} Birchwood Academy. All rights reserved.
            </motion.p>
            
        
          </div>
        </div>
      </motion.div>

      {/* Floating Action Button - Back to Top */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl z-50"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ↑
        </motion.div>
      </motion.button>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      {/* Animated Stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </footer>
  );
}