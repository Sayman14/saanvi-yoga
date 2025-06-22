import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Clock, RefreshCw, AlertCircle, DollarSign, Calendar, Mail } from "lucide-react";
import FloatingElements from "@/components/animated/floating-elements";
import { Link } from "wouter";

export default function CancellationPolicy() {
  const policies = [
    {
      icon: Clock,
      title: "Standard Cancellation",
      timeframe: "4+ hours before session",
      fee: "No charge",
      description: "Full refund or free rescheduling available",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: AlertCircle,
      title: "Late Cancellation", 
      timeframe: "2-4 hours before session",
      fee: "50% session fee",
      description: "Partial charge applies, rescheduling available",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      icon: RefreshCw,
      title: "Last Minute Cancellation",
      timeframe: "Less than 2 hours",
      fee: "75% session fee", 
      description: "Limited rescheduling options available",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: DollarSign,
      title: "No-Show",
      timeframe: "No cancellation",
      fee: "Full session fee",
      description: "Emergency exceptions considered case-by-case",
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    }
  ];

  const exceptions = [
    {
      title: "Medical Emergencies",
      description: "Sudden illness or injury affecting you or immediate family members",
      icon: "🏥"
    },
    {
      title: "Weather Conditions",
      description: "Severe weather making travel unsafe (in-person sessions only)",
      icon: "🌧️"
    },
    {
      title: "Technical Issues",
      description: "Internet or platform failures beyond your control (online sessions)",
      icon: "💻"
    },
    {
      title: "Work Emergencies",
      description: "Unavoidable urgent work situations (with documentation)",
      icon: "⚡"
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
              Cancellation <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Policy</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We understand that life can be unpredictable. Our flexible cancellation policy 
              is designed to be fair while respecting everyone's time and commitment.
            </motion.p>

            <motion.div 
              className="flex items-center justify-center space-x-4 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                <span>Effective: January 2025</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cancellation Policies */}
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
              Cancellation <span className="text-orange-600">Timeline</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The earlier you cancel, the more flexible we can be with refunds and rescheduling
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`p-6 ${policy.bgColor} ${policy.borderColor} border hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full`}>
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${policy.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <policy.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{policy.title}</h3>
                    <p className="text-sm font-medium text-gray-700 mb-2">{policy.timeframe}</p>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-gray-900">{policy.fee}</span>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">{policy.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Cancel */}
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
              How to <span className="text-orange-600">Cancel</span>
            </h2>
            <p className="text-lg text-gray-600">
              Multiple convenient ways to cancel or reschedule your session
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "📱",
                title: "Online Portal",
                description: "Log into your account and manage bookings 24/7",
                steps: ["Log into your account", "Go to 'My Bookings'", "Select session", "Click 'Cancel'"]
              },
              {
                icon: "📞",
                title: "Phone Call",
                description: "Call us directly for immediate assistance",
                steps: ["Call +91 9971410725", "Provide booking details", "Request cancellation", "Receive confirmation"]
              },
              {
                icon: "✉️",
                title: "Email",
                description: "Send a cancellation request via email",
                steps: ["Email help@saanviyoga.live", "Include booking details", "State cancellation reason", "Await confirmation"]
              }
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{method.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </div>
                  
                  <ol className="space-y-2">
                    {method.steps.map((step, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <span className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-semibold mr-3 mt-0.5 flex-shrink-0">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Exceptions */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Emergency <span className="text-orange-600">Exceptions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand that genuine emergencies happen. These situations may qualify for fee waivers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exceptions.map((exception, index) => (
              <motion.div
                key={exception.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300 h-full text-center">
                  <div className="text-4xl mb-4">{exception.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{exception.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{exception.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
              <AlertCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Documentation</h3>
              <p className="text-gray-600 mb-4">
                For emergency exceptions, please provide appropriate documentation when possible 
                (medical certificate, weather alert, etc.) to expedite the waiver process.
              </p>
              <p className="text-sm text-gray-500">
                All emergency requests are reviewed individually with compassion and understanding.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
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
              Important <span className="text-orange-600">Details</span>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Sessions</h3>
                <div className="space-y-3 text-gray-600">
                  <p>• Package sessions follow the same cancellation timeline as individual bookings</p>
                  <p>• Unused sessions in packages can be transferred to family members</p>
                  <p>• Package expiration dates remain unchanged regardless of cancellations</p>
                  <p>• Refunds for packages are prorated based on remaining unused sessions</p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Refund Processing</h3>
                <div className="space-y-3 text-gray-600">
                  <p>• Eligible refunds are processed within 3-5 business days</p>
                  <p>• Refunds are returned to the original payment method used</p>
                  <p>• Bank processing times may add 2-7 additional business days</p>
                  <p>• You'll receive email confirmation once the refund is initiated</p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Rescheduling Options</h3>
                <div className="space-y-3 text-gray-600">
                  <p>• Free rescheduling available for cancellations made 4+ hours in advance</p>
                  <p>• Paid rescheduling options available for late cancellations</p>
                  <p>• New session must be booked within 30 days of original date</p>
                  <p>• Subject to instructor availability and scheduling constraints</p>
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
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Need Help with Cancellation?</h2>
              </div>
              <p className="text-lg text-orange-100 mb-6">
                Have questions about our cancellation policy or need assistance with your booking?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Support
                  </motion.button>
                </Link>
                <motion.a
                  href="tel:+919971410725"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}