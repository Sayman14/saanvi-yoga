import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, MessageSquare, Send, Star, Heart, CheckCircle } from "lucide-react";
import ContactForm from "@/components/contact-form";
import InteractiveButton from "@/components/animated/interactive-button";
import ParallaxSection from "@/components/animated/parallax-section";
import ScrollReveal from "@/components/animated/scroll-reveal";
import FloatingElements from "@/components/animated/floating-elements";
import ChakraWheel from "@/components/animated/chakra-wheel";
import LotusPetals from "@/components/animated/lotus-petals";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9971410725", "Available 9 AM - 7 PM"],
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["help@saanviyoga.live", "Response within 24 hours"],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Online & In-Person Sessions", "Delhi NCR, India"],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    icon: Clock,
    title: "Schedule",
    details: ["Monday - Saturday", "6 AM - 8 PM IST"],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  }
];

const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://instagram.com/saanviyoga", 
    label: "Instagram", 
    color: "hover:text-pink-500",
    bg: "hover:bg-pink-50"
  },
  { 
    icon: Facebook, 
    href: "https://facebook.com/saanviyoga", 
    label: "Facebook", 
    color: "hover:text-blue-500",
    bg: "hover:bg-blue-50"
  },
  { 
    icon: Youtube, 
    href: "https://youtube.com/@saanviyoga", 
    label: "YouTube", 
    color: "hover:text-red-500",
    bg: "hover:bg-red-50"
  }
];

const features = [
  {
    icon: CheckCircle,
    title: "Quick Response",
    description: "We respond to all inquiries within 24 hours"
  },
  {
    icon: Heart,
    title: "Personal Care", 
    description: "Every student receives personalized attention"
  },
  {
    icon: Star,
    title: "Expert Guidance",
    description: "Get advice from certified yoga professionals"
  }
];

export default function Contact() {
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
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Connect <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">With Us</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Begin your transformative yoga journey today. Whether you're seeking wellness guidance, 
              booking sessions, or exploring corporate programs, we're here to support every step of your way.
            </motion.p>

            {/* Features */}
            <motion.div 
              className="grid md:grid-cols-3 gap-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Get In <span className="text-orange-600">Touch</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ready to start your yoga journey? We're here to help you every step of the way.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className={`p-6 ${info.bgColor} ${info.borderColor} border hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md`}>
                          <info.icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className={`text-sm ${i === 0 ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="pt-8 border-t border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 ${social.color} ${social.bg} transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 opacity-10">
                <ChakraWheel size={80} />
              </div>
              <div className="absolute -bottom-4 -left-4 opacity-15">
                <LotusPetals count={5} />
              </div>
              
              <Card className="p-8 bg-gradient-to-br from-white to-orange-50 shadow-2xl border-0 relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                  <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>
                <ContactForm />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-orange-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our yoga services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What should I bring to my first yoga class?",
                answer: "Just bring yourself and comfortable clothing! We provide yoga mats, blocks, and other props. For online sessions, having a yoga mat is recommended but not required."
              },
              {
                question: "Do I need prior experience to join classes?",
                answer: "Not at all! Our classes welcome all levels, from complete beginners to advanced practitioners. Each session includes modifications to suit your current ability."
              },
              {
                question: "How do I book a session?",
                answer: "You can book through our website, call us directly, or send us a message. We'll help you choose the perfect class for your needs and schedule."
              },
              {
                question: "What is your cancellation policy?",
                answer: "All consultation bookings are non-refundable. This policy ensures our instructors' time is valued and maintains our commitment to quality service. Emergency situations will be considered on a case-by-case basis."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-white hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Yoga Journey?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join our community of mindful practitioners and discover the transformative power of yoga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <InteractiveButton
                animationType="pulse"
                className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 text-lg"
              >
                Book Your First Class
              </InteractiveButton>
              <InteractiveButton
                animationType="glow"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 text-lg"
              >
                View Our Services
              </InteractiveButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}