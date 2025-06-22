import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Play, Star, CheckCircle, Clock, Users, ArrowRight, Phone, Mail, MapPin, Heart, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useSmoothScroll } from "@/components/animated/smooth-scroll";
import { useToastNotification } from "@/components/ui/toast-notification";


export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { showToast, ToastContainer } = useToastNotification();
  
  useSmoothScroll();

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "150+", label: "Happy Students" },
    { number: "300+", label: "Classes Taught" },
    { number: "5+", label: "Years Experience" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  const features = [
    { icon: CheckCircle, title: "Certified Instructor", desc: "AYUSH & Art of Living certified" },
    { icon: Clock, title: "Flexible Scheduling", desc: "Multiple time slots available" },
    { icon: Users, title: "Small Groups", desc: "Personalized attention guaranteed" },
    { icon: Play, title: "Online Classes", desc: "Join from anywhere" }
  ];

  const services = [
    {
      title: "Hatha Yoga",
      description: "Gentle, foundational practice perfect for beginners and stress relief",
      price: "₹500",
      duration: "60 min",
      level: "Beginner",
      image: "🧘‍♀️"
    },
    {
      title: "Vinyasa Flow",
      description: "Dynamic sequences linking breath with movement for strength and flexibility",
      price: "₹750",
      duration: "75 min", 
      level: "Intermediate",
      image: "🌊"
    },
    {
      title: "Pranayama & Meditation",
      description: "Deep breathing techniques and mindfulness for mental clarity",
      price: "₹400",
      duration: "45 min",
      level: "All Levels",
      image: "🧘"
    }
  ];

  const testimonials = [
    {
      name: "Aradhana",
      role: "",
      text: "Sneh's classes have become the highlight of my week. Her gentle approach makes yoga accessible and enjoyable.",
      rating: 5,
      image: "https://cdn.discordapp.com/attachments/1385952396177575936/1385954168161959967/IMG_20250621_173650.png?ex=68589aa7&is=68574927&hm=510b7368a2389175a4c1856a579bbe4ce0c35e0279204d519a4a83f7c9563fce&"
    },
    {
      name: "Sachin",
      role: "", 
      text: "Started 3 months ago for back pain. The improvement has been remarkable with Sneh's personalized guidance.",
      rating: 5,
      image: "https://cdn.discordapp.com/attachments/1385952396177575936/1385952440595255356/IMG_20250621_172943.png?ex=6858990b&is=6857478b&hm=fabb24033204ab3d0ca9bfa2f44eb47f8217e9b8bbbed9368d8d7ccea92629d7&"
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Transform Your
                <span className="block bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                  Mind & Body
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Join authentic online yoga classes with certified instructor Sneh Chauhan. 
                Experience the perfect blend of traditional wisdom and modern convenience.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link href="/book">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => showToast("Welcome to your yoga journey!", "success")}
                  >
                    <Heart className="mr-2" size={20} />
                    Start Your Journey
                  </motion.button>
                </Link>
                <Link href="/schedule">
                  <motion.button
                    className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 text-lg flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Clock className="mr-2" size={20} />
                    View Schedule
                  </motion.button>
                </Link>
              </motion.div>
              
              {/* Trust indicators */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-6 mt-8 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
                <div>150+ Students</div>
                <div>AYUSH Certified</div>
              </motion.div>
            </motion.div>
            
            {/* Right Content - Animated Hero */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full"
            >
              {/* Animated Hero Section */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-orange-200 aspect-video md:aspect-[4/3]">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100"></div>
                
                {/* Main Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 md:p-8 text-center">
                  {/* Instructor Avatar */}
                  <motion.div 
                    className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                  >
                    <span className="text-4xl md:text-6xl">🧘‍♀️</span>
                  </motion.div>
                  
                  {/* Name and Title */}
                  <motion.h3 
                    className="text-xl md:text-2xl font-bold text-gray-800 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    Meet Sneh Chauhan
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 mb-4 text-sm md:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  >
                    Certified Yoga Instructor
                  </motion.p>
                  

                </div>

                {/* Floating Certification Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium shadow-md"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4, duration: 0.8 }}
                >
                  ✓ AYUSH Verified
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute bottom-4 left-4 w-6 h-6 md:w-8 md:h-8 bg-orange-200 rounded-full opacity-60"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute top-1/4 left-4 md:left-6 w-3 h-3 md:w-4 md:h-4 bg-yellow-300 rounded-full opacity-50"
                  animate={{ 
                    y: [-10, 10, -10],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Experience Badge */}
                <motion.div
                  className="absolute top-1/3 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2, duration: 0.8 }}
                >
                  <div className="text-xs font-bold text-orange-600">5+ Years</div>
                  <div className="text-xs text-gray-600">Experience</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-2 border-orange-300 rounded-full"
          />
        </div>
        <div className="absolute bottom-40 right-10 opacity-20">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 bg-orange-200 rounded-lg"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Saanvi Yoga?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with personalized online yoga instruction
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our <span className="text-orange-600">Classes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of carefully designed yoga practices
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-orange-50">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.image}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Level:</span>
                      <span className="font-medium">{service.level}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Price:</span>
                      <span className="text-2xl font-bold text-orange-600">{service.price}</span>
                    </div>
                  </div>
                  
                  <Link href="/book">
                    <motion.button
                      className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Now
                    </motion.button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <motion.button
                className="px-8 py-3 border-2 border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from our yoga community
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-orange-200"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Begin Your Yoga Journey?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of students who have transformed their lives through yoga. 
              Start your practice today with a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <motion.button
                  className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Consultation
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      

      <ToastContainer />
    </div>
  );
}