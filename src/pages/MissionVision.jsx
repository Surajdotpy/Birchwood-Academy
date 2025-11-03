import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaHeart, FaStar, FaGraduationCap, FaUsers, FaLightbulb, FaHandsHelping, FaCheckCircle } from "react-icons/fa";

export default function MissionVisionPage() {
  const detailedValues = [
    {
      icon: <FaGraduationCap className="text-4xl text-blue-600" />,
      title: "Academic Excellence",
      description: "We maintain the highest standards of education, ensuring every student reaches their full potential through rigorous academics and innovative teaching methods.",
      details: [
        "Comprehensive curriculum aligned with national standards",
        "Regular assessments and personalized feedback",
        "Advanced learning resources and technology integration",
        "Preparation for competitive examinations"
      ],
      color: "blue"
    },
    {
      icon: <FaHeart className="text-4xl text-red-500" />,
      title: "Compassionate Care",
      description: "Every child is valued and nurtured in a supportive environment that promotes emotional well-being and personal growth.",
      details: [
        "Individual attention to each student's needs",
        "Counseling and mental health support",
        "Inclusive environment for all backgrounds",
        "Strong teacher-student relationships"
      ],
      color: "red"
    },
    {
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      title: "Innovation & Creativity",
      description: "We encourage creative thinking and innovation through modern teaching methodologies and cutting-edge facilities.",
      details: [
        "Project-based learning approaches",
        "STEM education and robotics programs",
        "Arts and creative expression opportunities",
        "Technology-enhanced learning environments"
      ],
      color: "yellow"
    },
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      title: "Community & Leadership",
      description: "Building responsible citizens who contribute positively to society through leadership and community service.",
      details: [
        "Student leadership development programs",
        "Community service initiatives",
        "Environmental awareness projects",
        "Cultural diversity celebration"
      ],
      color: "green"
    },
    {
      icon: <FaStar className="text-4xl text-purple-600" />,
      title: "Character Building",
      description: "Instilling strong moral values, ethics, and integrity that guide students throughout their lives.",
      details: [
        "Value-based education system",
        "Moral and ethical development",
        "Respect for diversity and inclusion",
        "Building confidence and self-esteem"
      ],
      color: "purple"
    },
    {
      icon: <FaHandsHelping className="text-4xl text-orange-500" />,
      title: "Holistic Development",
      description: "Nurturing all aspects of a child's development - intellectual, physical, emotional, and social.",
      details: [
        "Sports and physical fitness programs",
        "Arts, music, and cultural activities",
        "Life skills development",
        "Personality development workshops"
      ],
      color: "orange"
    }
  ];

  const missionPoints = [
    "Foster a love for learning and intellectual growth",
    "Develop critical thinking and problem-solving skills",
    "Instill strong moral values and ethical principles",
    "Prepare students for global citizenship and leadership",
    "Create an inclusive and supportive learning environment",
    "Encourage creativity and innovation in all endeavors"
  ];

  const visionPoints = [
    "Leading educational excellence in the region",
    "Innovation in teaching and learning methodologies",
    "Holistic development of every student",
    "Shaping future leaders and changemakers",
    "Building a sustainable and inclusive community",
    "Creating global citizens with local values"
  ];

  return (
    <section id="mission-vision" className="bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Page Title Section */}
      <div className="py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-green-600/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Mission & <span className="text-blue-600">Vision</span>
          </motion.h1>
          
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The foundation of excellence that drives everything we do at Birchwood Academy
          </motion.p>
        </div>
      </div>

      {/* Detailed Mission Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-blue-100 rounded-xl">
                  <FaBullseye className="text-4xl text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Mission</h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At Birchwood Academy, our mission is to provide world-class education that nurtures 
                intellectual curiosity, develops critical thinking, and instills strong moral values 
                in every student. We are committed to preparing our students to become responsible 
                global citizens who can make meaningful contributions to society.
              </p>
              
              <div className="space-y-4">
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Students learning together" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Empowering Young Minds</h3>
                  <p className="text-blue-100">Through innovative education and care</p>
                </div>
              </div>
              
              {/* Floating Stats */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">98%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Detailed Vision Section */}
      <div className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Modern school campus" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Future-Ready Campus</h3>
                  <p className="text-green-100">Modern facilities for modern education</p>
                </div>
              </div>
              
              {/* Floating Stats */}
              <motion.div
                className="absolute -top-6 -left-6 bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">2000+</p>
                  <p className="text-sm text-gray-600">Alumni</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-green-100 rounded-xl">
                  <FaEye className="text-4xl text-green-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Vision</h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To be the leading educational institution in Uttarakhand, recognized for academic 
                excellence, innovative teaching methods, and holistic development that shapes future 
                leaders and changemakers. We envision a world where our graduates make positive 
                impacts in their communities and beyond.
              </p>
              
              <div className="space-y-4">
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Detailed Core Values */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The fundamental principles that guide our educational approach and shape our school culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Background Gradient on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    value.color === 'blue' ? 'from-blue-50 to-blue-100' :
                    value.color === 'red' ? 'from-red-50 to-red-100' :
                    value.color === 'yellow' ? 'from-yellow-50 to-yellow-100' :
                    value.color === 'green' ? 'from-green-50 to-green-100' :
                    value.color === 'purple' ? 'from-purple-50 to-purple-100' :
                    'from-orange-50 to-orange-100'
                  }`}
                />
                
                <div className="relative z-10">
                  <motion.div
                                      className="mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    {value.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{value.description}</p>
                  
                  <ul className="space-y-3">
                    {value.details.map((detail, detailIndex) => (
                      <motion.li 
                        key={detailIndex} 
                        className="flex items-start gap-3 text-sm text-gray-500"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + detailIndex * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          value.color === 'blue' ? 'bg-blue-600' :
                          value.color === 'red' ? 'bg-red-600' :
                          value.color === 'yellow' ? 'bg-yellow-600' :
                          value.color === 'green' ? 'bg-green-600' :
                          value.color === 'purple' ? 'bg-purple-600' :
                          'bg-orange-600'
                        }`}></div>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Educational Philosophy Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Educational Philosophy
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We believe that education is not just about academic achievement, but about developing 
              the whole person - mind, body, and spirit.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <FaGraduationCap className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Academic Excellence</h3>
              <p className="text-blue-100">
                Rigorous curriculum designed to challenge and inspire students to reach their highest potential.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Character Development</h3>
              <p className="text-blue-100">
                Building strong moral foundations and ethical values that guide students throughout their lives.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community Impact</h3>
              <p className="text-blue-100">
                Preparing students to be active, responsible citizens who contribute positively to society.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600">
              Measuring our success through the achievements of our students and community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Years of Excellence", icon: "🏆" },
              { number: "2000+", label: "Successful Alumni", icon: "🎓" },
              { number: "150+", label: "Dedicated Faculty", icon: "👨‍🏫" },
              { number: "98%", label: "Success Rate", icon: "📈" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Be part of our journey to shape the future leaders of tomorrow. 
              Discover how Birchwood Academy can nurture your child's potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>📅</span>
                Schedule a Campus Visit
              </motion.button>
              
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const admissionsSection = document.getElementById('admissions');
                  if (admissionsSection) {
                    admissionsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>📄</span>
                Download Prospectus
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}