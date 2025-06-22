import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Scale, Shield, CheckCircle, AlertTriangle, Clock, Mail } from "lucide-react";
import FloatingElements from "@/components/animated/floating-elements";
import { Link } from "wouter";

export default function TermsConditions() {
  const sections = [
    {
      icon: CheckCircle,
      title: "Service Agreement",
      content: [
        "By booking a yoga session with Saanvi Yoga, you agree to these terms and conditions.",
        "All sessions are conducted by certified yoga instructors with appropriate qualifications.",
        "We reserve the right to modify our services and pricing with reasonable notice.",
        "Students must disclose any health conditions or injuries before participating."
      ]
    },
    {
      icon: Clock,
      title: "Booking & Cancellation",
      content: [
        "Sessions must be booked at least 4 hours in advance through our booking system.",
        "Cancellations made more than 4 hours before the session incur no charges.",
        "Late cancellations (less than 4 hours) may incur a 50% charge of the session fee.",
        "No-shows will be charged the full session fee unless due to emergency circumstances."
      ]
    },
    {
      icon: Shield,
      title: "Liability & Safety",
      content: [
        "Participants engage in yoga practice at their own risk and responsibility.",
        "Students must follow instructor guidance and inform of any discomfort immediately.",
        "Saanvi Yoga is not liable for injuries resulting from failure to follow instructions.",
        "We maintain appropriate insurance coverage for our instructional services."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Health Considerations",
      content: [
        "Yoga practice requires physical and mental readiness - consult your doctor if uncertain.",
        "Pregnant students must obtain medical clearance before participating in classes.",
        "Students with injuries or medical conditions must inform the instructor beforehand.",
        "We reserve the right to exclude participants if safety concerns arise."
      ]
    }
  ];

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
              Terms & <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Conditions</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Please read these terms carefully before using our yoga services. 
              By booking a session, you agree to these terms and conditions.
            </motion.p>

            <motion.div 
              className="flex items-center justify-center space-x-4 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="flex items-center">
                <Scale className="w-4 h-4 mr-2 text-orange-500" />
                <span>Last updated: January 2025</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-6 sm:p-8 bg-gradient-to-br from-white to-orange-50 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  
                  <ul className="space-y-4">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
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
              Additional <span className="text-orange-600">Information</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 sm:p-8 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Terms</h3>
                <div className="space-y-3 text-gray-600">
                  <p>• Payment is required at the time of booking for all sessions</p>
                  <p>• We accept all major credit cards and digital payment methods</p>
                  <p>• Package deals are non-refundable but can be transferred to family members</p>
                  <p>• Corporate bookings may be invoiced with NET-15 payment terms</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 sm:p-8 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Intellectual Property</h3>
                <div className="space-y-3 text-gray-600">
                  <p>• All yoga sequences and teaching materials are proprietary to Saanvi Yoga</p>
                  <p>• Recording of sessions is prohibited without written consent</p>
                  <p>• Students may not redistribute or teach our proprietary sequences</p>
                  <p>• Testimonials and feedback may be used for marketing with permission</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 sm:p-8 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Modifications</h3>
                <div className="space-y-3 text-gray-600">
                  <p>• These terms may be updated periodically with reasonable notice</p>
                  <p>• Continued use of our services constitutes acceptance of updated terms</p>
                  <p>• Major changes will be communicated via email to registered users</p>
                  <p>• Students can terminate services if they disagree with updated terms</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Questions About These Terms?</h2>
              </div>
              <p className="text-lg text-orange-100 mb-6">
                If you have any questions about these terms and conditions, please don't hesitate to contact us.
              </p>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}