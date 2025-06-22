import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { IdCard, Heart, Book, Globe, Award, Users, Clock, Target, Star, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const certifications = [
    {
      icon: IdCard,
      title: "Ministry of AYUSH Certified",
      description: "Government of India Recognition",
      year: "2019",
      details: "Official certification from India's Ministry of AYUSH, ensuring authentic traditional yoga practices."
    },
    {
      icon: Heart,
      title: "Art of Living Teacher",
      description: "Advanced Breathing & Meditation",
      year: "2020", 
      details: "Specialized training in pranayama and meditation for holistic transformation."
    },
    {
      icon: Book,
      title: "500+ Hour Yoga Alliance",
      description: "Advanced Teacher Training",
      year: "2021",
      details: "Comprehensive certification covering anatomy, philosophy, and advanced teaching methodologies."
    }
  ];

  const achievements = [
    { number: "150+", label: "Students Guided" },
    { number: "300+", label: "Online Sessions" },
    { number: "5+", label: "Years Experience" },
    { number: "4", label: "Certifications" }
  ];

  const philosophy = [
    {
      title: "Authentic Practice",
      description: "Rooted in traditional yoga philosophy while embracing modern teaching methods for accessibility.",
      icon: CheckCircle
    },
    {
      title: "Personal Growth",
      description: "Every student's journey is unique. I provide personalized guidance to help you discover your potential.",
      icon: Target
    },
    {
      title: "Holistic Wellness",
      description: "Yoga is more than physical poses - it's a complete system for mental, physical, and spiritual well-being.",
      icon: Heart
    },
    {
      title: "Continuous Learning",
      description: "As both teacher and eternal student, I continuously deepen my practice and knowledge to serve better.",
      icon: Book
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Instructor Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-orange-200 aspect-[3/4] flex items-center justify-center max-w-md mx-auto">
                <div className="text-center p-8">
                  <div className="w-40 h-40 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-7xl">🧘‍♀️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Sneh Chauhan</h3>
                  <p className="text-gray-600 mb-4">Certified Yoga Instructor</p>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">4.9/5 Student Rating</p>
                </div>
              </div>
            </motion.div>
            
            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Meet Your
                <span className="block bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                  Yoga Guide
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                I'm Sneh Chauhan, a passionate yoga instructor dedicated to helping you discover 
                the transformative power of authentic yoga practice. My journey began over 5 years ago, 
                and since then, I've had the privilege of guiding students worldwide.
              </motion.p>

              <motion.p 
                className="text-base text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                My approach combines traditional yoga wisdom with modern teaching methods, 
                ensuring that every student receives personalized attention and guidance 
                on their unique wellness journey.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                <Link href="/book">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book a Session
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 text-sm lg:text-base">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Certifications & <span className="text-orange-600">Training</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Committed to continuous learning and maintaining the highest standards in yoga instruction
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-xs font-semibold text-orange-600 bg-orange-100 rounded-full px-3 py-1 inline-block mb-3">
                      {cert.year}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-orange-600 font-medium text-sm mb-3">
                      {cert.description}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cert.details}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              My Teaching <span className="text-orange-600">Philosophy</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guiding principles that shape every class and interaction with students
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-orange-50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Journey Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              My <span className="text-orange-600">Journey</span>
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                My yoga journey began during a challenging period in my life when I was searching for 
                balance and inner peace. What started as a personal practice quickly became a passion 
                that I knew I had to share with others.
              </p>
              <p className="mb-6">
                Through years of dedicated study and practice, I've learned that yoga is not just 
                about physical poses - it's a complete system for living mindfully and cultivating 
                awareness in every moment.
              </p>
              <p className="mb-8">
                Today, I'm honored to guide students from around the world on their own transformative 
                journeys. Every class is an opportunity to create a safe, supportive space where 
                students can explore their potential and discover their inner strength.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Class Schedule
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-white transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}