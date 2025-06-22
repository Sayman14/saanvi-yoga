import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Eye, Lock, Database, UserCheck, Mail } from "lucide-react";
import FloatingElements from "@/components/animated/floating-elements";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal details: name, email, phone number, and emergency contact information",
        "Health information: medical conditions, injuries, and fitness level for safe instruction",
        "Session data: attendance, progress notes, and feedback to improve your experience",
        "Technical data: IP address, browser type, and usage patterns for website optimization"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide personalized yoga instruction and track your progress",
        "To communicate about sessions, schedules, and important updates",
        "To ensure your safety by considering health conditions and limitations",
        "To improve our services based on feedback and usage patterns"
      ]
    },
    {
      icon: Lock,
      title: "Information Security",
      content: [
        "All personal data is encrypted both in transit and at rest",
        "Access to your information is limited to authorized personnel only",
        "We use industry-standard security measures to protect your data",
        "Regular security audits ensure our systems remain protected"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "You can request access to all personal information we hold about you",
        "You may request corrections to any inaccurate or incomplete data",
        "You can request deletion of your personal information at any time",
        "You may opt out of non-essential communications while maintaining service access"
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
              Privacy <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Policy</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information when you use our yoga services.
            </motion.p>

            <motion.div 
              className="flex items-center justify-center space-x-4 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-orange-500" />
                <span>Last updated: January 2025</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
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
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
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

      {/* Additional Privacy Information */}
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
              Additional <span className="text-orange-600">Details</span>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Sharing</h3>
                <div className="space-y-3 text-gray-600">
                  <p>• We never sell, rent, or trade your personal information to third parties</p>
                  <p>• Health information is only shared with medical professionals when you provide consent</p>
                  <p>• Anonymous usage statistics may be shared with service providers for improvement purposes</p>
                  <p>• Legal disclosure may occur only when required by law or to protect safety</p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookies & Tracking</h3>
                <div className="space-y-3 text-gray-600">
                  <p>• We use essential cookies to ensure website functionality and security</p>
                  <p>• Analytics cookies help us understand how to improve user experience</p>
                  <p>• You can control cookie preferences through your browser settings</p>
                  <p>• No personal identification occurs through cookies without explicit consent</p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Retention</h3>
                <div className="space-y-3 text-gray-600">
                  <p>• Personal information is retained only as long as necessary for service provision</p>
                  <p>• Health records are maintained for 7 years as required by professional standards</p>
                  <p>• Account data is deleted within 30 days of account closure request</p>
                  <p>• Backup data is securely destroyed according to our retention schedule</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 sm:p-8 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">International Transfers</h3>
                <div className="space-y-3 text-gray-600">
                  <p>• Your data is primarily stored on secure servers within India</p>
                  <p>• Any international transfers comply with applicable data protection laws</p>
                  <p>• Adequate safeguards ensure protection equivalent to Indian privacy standards</p>
                  <p>• You will be notified of any significant changes to data storage locations</p>
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
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Privacy Questions?</h2>
              </div>
              <p className="text-lg text-orange-100 mb-6">
                If you have questions about this privacy policy or want to exercise your rights, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
                <motion.a
                  href="mailto:privacy@saanviyoga.live"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Email Privacy Team
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}