import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Users, Phone, Mail, MessageSquare, Star, CheckCircle, Heart, Target } from "lucide-react";
import { Link } from "wouter";
import BookingForm from "@/components/booking-form";
import InteractiveButton from "@/components/animated/interactive-button";
import FloatingElements from "@/components/animated/floating-elements";
import ChakraWheel from "@/components/animated/chakra-wheel";
import LotusPetals from "@/components/animated/lotus-petals";

const bookingOptions = [
  {
    icon: Calendar,
    title: "Consultation Form",
    description: "Fill out our consultation form below to get started",
    features: ["Quick and easy", "Detailed assessment", "Free consultation"],
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    icon: Phone,
    title: "Phone Consultation",
    description: "Call us directly for personalized scheduling and consultation",
    features: ["Personal consultation", "Custom scheduling", "Immediate support"],
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    icon: MessageSquare,
    title: "Chat Support",
    description: "Message us for quick consultation booking and questions",
    features: ["Quick responses", "Flexible timing", "Easy communication"],
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }
];

const sessionTypes = [
  {
    title: "Private Sessions",
    description: "One-on-one personalized yoga instruction",
    duration: "60-90 minutes",
    price: "₹1,500",
    icon: Target,
    benefits: [
      "Completely personalized practice",
      "Flexible scheduling",
      "Focused attention on your goals",
      "Customized modifications"
    ]
  },
  {
    title: "Group Classes",
    description: "Small group sessions with fellow practitioners",
    duration: "60 minutes",
    price: "₹750",
    icon: Users,
    benefits: [
      "Community support",
      "Cost-effective option",
      "Shared learning experience",
      "Motivation from peers"
    ]
  },
  {
    title: "Corporate Wellness",
    description: "Workplace yoga programs for teams",
    duration: "45-60 minutes",
    price: "₹2,000",
    icon: Heart,
    benefits: [
      "Stress reduction for teams",
      "Improved workplace wellness",
      "Flexible corporate scheduling",
      "Team building benefits"
    ]
  }
];

const steps = [
  {
    number: "01",
    title: "Choose Your Session",
    description: "Select from private, group, or corporate sessions based on your needs"
  },
  {
    number: "02",
    title: "Pick Your Time",
    description: "Choose a convenient time slot that fits your schedule"
  },
  {
    number: "03",
    title: "Confirm Details",
    description: "Provide your information and any special requirements"
  },
  {
    number: "04",
    title: "Start Your Journey",
    description: "Join your session and begin your transformation"
  }
];

export default function Book() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100"></div>
        <FloatingElements />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Under Development Notice */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-8 p-4 bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200 rounded-xl max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-orange-800 font-semibold text-lg">Under Development</span>
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-orange-700 text-sm">
                Online booking system is currently being developed. Please book a consultation below to get started!
              </p>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Book Your <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Consultation</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Begin your wellness journey with a personalized consultation. We'll discuss your goals, 
              assess your needs, and create a customized yoga plan designed just for you.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>150+ Happy Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500" />
                <span>AYUSH Certified</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Booking Options */}
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
              How to Book Your <span className="text-orange-600">Consultation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While our online booking system is under development, you can easily book a consultation through these options.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {bookingOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`p-6 ${option.bgColor} ${option.borderColor} border hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full`}>
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <option.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{option.description}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#consultation-form">
                <InteractiveButton
                  animationType="pulse"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation Now
                </InteractiveButton>
              </a>
              <Link href="/contact">
                <InteractiveButton
                  animationType="glow"
                  className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </InteractiveButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Session Types */}
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
              Session <span className="text-orange-600">Types</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the type of session that best fits your goals and preferences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {sessionTypes.map((session, index) => (
              <motion.div
                key={session.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-10">
                    <ChakraWheel size={60} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
                        <session.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{session.title}</h3>
                        <p className="text-sm text-gray-500">{session.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{session.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-orange-600">{session.price}</span>
                      <span className="text-gray-500 text-sm ml-2">per session</span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {session.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    <InteractiveButton
                      animationType="bounce"
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full py-3 hover:shadow-lg transition-all duration-300"
                    >
                      Book {session.title}
                    </InteractiveButton>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Steps */}
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
              Simple <span className="text-orange-600">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started is easy. Follow these simple steps to book your session.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-orange-500 transform -translate-x-1/2"></div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {step.number}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="consultation-form" className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Book Your Free <span className="text-orange-600">Consultation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the consultation form below and we'll get back to you within 24 hours to schedule your personalized session.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 opacity-10">
              <LotusPetals count={6} />
            </div>
            
            <Card className="p-8 bg-white shadow-2xl border-0 relative z-10">
              <BookingForm />
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Booking <span className="text-orange-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our booking process
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking at least 24-48 hours in advance to ensure your preferred time slot is available. However, we often accommodate same-day bookings based on availability."
              },
              {
                question: "What is your cancellation policy?",
                answer: "All consultation bookings are non-refundable. While we understand that circumstances may change, we maintain a strict no-refund policy to ensure our instructors' time is valued. Please consider your availability carefully before booking."
              },
              {
                question: "Do I need to bring anything?",
                answer: "For in-person sessions, just bring comfortable clothing and water. We provide all necessary equipment. For online sessions, you'll need a stable internet connection and a quiet space."
              },
              {
                question: "How do I prepare for my first session?",
                answer: "Come with an open mind and comfortable clothing. Avoid heavy meals 2-3 hours before practice. We'll discuss your goals and any physical limitations before we begin."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gray-50 hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cancellation Policy Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cancellation <span className="text-red-600">Policy</span>
            </h2>
            <p className="text-lg text-gray-600">
              Please read our policy carefully before booking
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white border-2 border-red-200 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No Refund Policy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All consultation bookings are <strong>non-refundable</strong>. This policy ensures our instructors' 
                    time is valued and allows us to maintain our commitment to providing quality service.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-red-800 mb-3">Important Points:</h4>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Payment is processed immediately upon booking confirmation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>No refunds will be issued for any reason, including missed appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Rescheduling may be available with 24-hour advance notice (subject to availability)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Emergency situations will be considered on a case-by-case basis</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">
                  By proceeding with your booking, you acknowledge and agree to this cancellation policy.
                </p>
                <Link href="/cancellation-policy">
                  <InteractiveButton 
                    variant="outline" 
                    className="border-red-200 text-red-600 hover:bg-red-50"
                  >
                    View Full Policy
                  </InteractiveButton>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}