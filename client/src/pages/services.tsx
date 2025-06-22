import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Clock, Users, Target, Heart, Star, CheckCircle, Play, MessageSquare } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      title: "Hatha Yoga",
      subtitle: "Foundational Practice",
      description: "Gentle, slow-paced classes focusing on basic postures and breathing techniques. Perfect for beginners and those seeking stress relief.",
      price: "₹500",
      originalPrice: "₹650",
      duration: "60 minutes",
      level: "Beginner",
      maxStudents: 8,
      image: "🧘‍♀️",
      benefits: [
        "Improves flexibility and strength",
        "Reduces stress and anxiety", 
        "Better sleep quality",
        "Enhanced body awareness"
      ],
      features: [
        "Personalized modifications",
        "Breathing technique training",
        "Meditation guidance",
        "Progress tracking"
      ]
    },
    {
      title: "Vinyasa Flow",
      subtitle: "Dynamic Movement",
      description: "Dynamic sequences that link movement with breath. Build strength, flexibility, and mental focus through flowing transitions.",
      price: "₹750",
      originalPrice: "₹900",
      duration: "75 minutes",
      level: "Intermediate",
      maxStudents: 6,
      image: "🌊",
      benefits: [
        "Builds cardiovascular endurance",
        "Increases strength and flexibility",
        "Improves coordination",
        "Develops mental focus"
      ],
      features: [
        "Creative sequences",
        "Music-synchronized flow",
        "Advanced pose variations",
        "Core strengthening focus"
      ]
    },
    {
      title: "Pranayama & Meditation",
      subtitle: "Mindful Breathing",
      description: "Learn powerful breathing techniques and meditation practices for mental clarity, emotional balance, and spiritual growth.",
      price: "₹400",
      originalPrice: "₹550",
      duration: "45 minutes",
      level: "All Levels",
      maxStudents: 12,
      image: "🧘",
      benefits: [
        "Reduces stress and anxiety",
        "Improves mental clarity",
        "Better emotional regulation",
        "Enhanced sleep quality"
      ],
      features: [
        "Various breathing techniques",
        "Guided meditation",
        "Mindfulness practices",
        "Stress management tools"
      ]
    },
    {
      title: "Restorative Yoga",
      subtitle: "Deep Relaxation",
      description: "Gentle practice using props to support the body in passive poses, promoting deep relaxation and healing.",
      price: "₹600",
      originalPrice: "₹750",
      duration: "60 minutes",
      level: "All Levels",
      maxStudents: 10,
      image: "🕯️",
      benefits: [
        "Deep physical relaxation",
        "Nervous system restoration",
        "Improved sleep patterns",
        "Emotional healing"
      ],
      features: [
        "Supported poses with props",
        "Guided relaxation",
        "Aromatherapy integration",
        "Extended hold times"
      ]
    },
    {
      title: "Family Yoga",
      subtitle: "Together Practice",
      description: "Fun and engaging yoga sessions designed for families to practice together, building bonds and healthy habits.",
      price: "₹800",
      originalPrice: "₹1000",
      duration: "50 minutes",
      level: "All Ages",
      maxStudents: 8,
      image: "👨‍👩‍👧‍👦",
      benefits: [
        "Family bonding time",
        "Healthy habits for children",
        "Stress relief for parents",
        "Fun physical activity"
      ],
      features: [
        "Age-appropriate poses",
        "Interactive games",
        "Partner poses",
        "Story-based sequences"
      ]
    },
    {
      title: "Corporate Yoga",
      subtitle: "Workplace Wellness",
      description: "Specially designed classes for corporate teams to reduce workplace stress and improve productivity.",
      price: "₹2000",
      originalPrice: "₹2500",
      duration: "45 minutes",
      level: "All Levels",
      maxStudents: 20,
      image: "💼",
      benefits: [
        "Reduced workplace stress",
        "Improved team cohesion",
        "Better work-life balance",
        "Increased productivity"
      ],
      features: [
        "Desk-friendly exercises",
        "Stress relief techniques",
        "Team building elements",
        "Flexible scheduling"
      ]
    }
  ];

  const packages = [
    {
      name: "Starter Package",
      description: "Perfect for beginners",
      sessions: 4,
      validity: "1 Month",
      price: "₹1800",
      originalPrice: "₹2200",
      savings: "₹400",
      features: [
        "4 group sessions",
        "Basic assessment",
        "Progress tracking",
        "Email support"
      ]
    },
    {
      name: "Regular Package", 
      description: "Most popular choice",
      sessions: 8,
      validity: "2 Months",
      price: "₹3200",
      originalPrice: "₹4000",
      savings: "₹800",
      features: [
        "8 group sessions",
        "Detailed assessment",
        "Personalized modifications",
        "Priority support",
        "1 private session"
      ],
      popular: true
    },
    {
      name: "Premium Package",
      description: "Complete transformation",
      sessions: 16,
      validity: "4 Months", 
      price: "₹6000",
      originalPrice: "₹8000",
      savings: "₹2000",
      features: [
        "16 group sessions",
        "Comprehensive assessment",
        "Custom practice plan",
        "24/7 support",
        "3 private sessions",
        "Nutrition guidance"
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Services</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover the perfect yoga practice for your journey. From gentle beginners classes 
            to dynamic flows, find your path to wellness with personalized guidance.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/book">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Class
              </motion.button>
            </Link>
            <Link href="/schedule">
              <motion.button
                className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Schedule
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="flex items-center justify-center gap-8 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>4.9/5 Rating</span>
            </div>
            <div>150+ Happy Students</div>
            <div>AYUSH Certified</div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Choose Your <span className="text-orange-600">Practice</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each service is carefully designed to meet you where you are on your yoga journey
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-orange-50 overflow-hidden relative">
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Save ₹{parseInt(service.originalPrice.replace('₹', '')) - parseInt(service.price.replace('₹', ''))}
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{service.image}</div>
                    <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold mb-3">
                      {service.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Duration:</span>
                      <span className="font-medium flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-orange-500" />
                        {service.duration}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Level:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(service.level)}`}>
                        {service.level}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Max Students:</span>
                      <span className="font-medium flex items-center">
                        <Users className="w-4 h-4 mr-1 text-orange-500" />
                        {service.maxStudents}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Price:</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-orange-600">{service.price}</span>
                        <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Heart className="w-4 h-4 mr-2 text-red-500" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Corporate Yoga gets special buttons */}
                  {service.title === "Corporate Yoga" ? (
                    <div className="space-y-3">
                      <Link href="/cost-calculator">
                        <motion.button
                          className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Cost Calculator
                        </motion.button>
                      </Link>
                      <Link href="/contact">
                        <motion.button
                          className="w-full py-3 border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300 flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Contact Us
                        </motion.button>
                      </Link>
                    </div>
                  ) : (
                    <Link href="/book">
                      <motion.button
                        className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Book Now
                      </motion.button>
                    </Link>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
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
              Value <span className="text-orange-600">Packages</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Save more with our comprehensive packages designed for consistent practice
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <Card className={`p-8 h-full hover:shadow-xl transition-all duration-300 border-0 ${
                  pkg.popular ? 'bg-gradient-to-br from-orange-50 to-orange-100 ring-2 ring-orange-500' : 'bg-white'
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-orange-600">{pkg.price}</span>
                      <div className="text-lg text-gray-400 line-through">{pkg.originalPrice}</div>
                      <div className="text-sm font-semibold text-green-600">Save {pkg.savings}</div>
                    </div>
                    <div className="text-sm text-gray-500 mb-6">
                      {pkg.sessions} sessions • Valid for {pkg.validity}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/book">
                    <motion.button
                      className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
                        pkg.popular 
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl'
                          : 'border-2 border-orange-500 text-orange-600 hover:bg-orange-50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Choose Package
                    </motion.button>
                  </Link>
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
              Ready to Start Your Practice?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join our supportive community and experience the transformative power of yoga. 
              Book your first session today and begin your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <motion.button
                  className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your First Class
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ask Questions
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}