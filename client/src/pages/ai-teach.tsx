import { motion } from "framer-motion";
import { Bot, Sparkles, Clock, Bell, Mail, Calendar, Check, Star, Crown, Brain, Zap, Target, Users, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import YogiFigure from "@/components/animated/yogi-figure";
import ChakraWheel from "@/components/animated/chakra-wheel";
import LotusPetals from "@/components/animated/lotus-petals";
import MandalaPattern from "@/components/animated/mandala-pattern";
import ScrollReveal from "@/components/animated/scroll-reveal";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Guidance",
    description: "Personalized yoga sessions adapted to your skill level and preferences using advanced machine learning",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Zap,
    title: "Real-time Corrections",
    description: "Instant feedback on your poses using computer vision and motion tracking technology",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: Target,
    title: "Adaptive Learning",
    description: "AI learns your patterns and customizes sequences for maximum benefit and growth",
    color: "from-orange-600 to-red-500"
  },
  {
    icon: Users,
    title: "Community Insights",
    description: "Learn from global yoga community data while maintaining your personal privacy",
    color: "from-yellow-500 to-orange-500"
  }
];

const aiCapabilities = [
  {
    title: "Pose Recognition",
    description: "Advanced computer vision analyzes your body alignment in real-time",
    progress: 95
  },
  {
    title: "Personalization Engine",
    description: "Machine learning creates unique sequences based on your progress",
    progress: 88
  },
  {
    title: "Voice Coaching",
    description: "Natural language processing provides encouraging, personalized guidance",
    progress: 92
  },
  {
    title: "Biometric Integration",
    description: "Connects with wearables to optimize sessions based on your vital signs",
    progress: 78
  }
];

const subscriptionTiers = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    icon: Star,
    popular: false,
    features: [
      "5 AI sessions per month",
      "Basic pose corrections",
      "Community support",
      "Mobile app access",
      "Basic progress tracking"
    ],
    limitations: [
      "Limited session duration (15 mins)",
      "Standard poses only",
      "Ads between sessions"
    ]
  },
  {
    name: "Premium",
    price: "₹499",
    period: "month",
    icon: Sparkles,
    popular: true,
    features: [
      "Unlimited AI sessions",
      "Advanced pose corrections",
      "Personalized routines",
      "HD video quality",
      "Detailed analytics",
      "Priority support",
      "Offline mode",
      "Custom meditation tracks"
    ],
    limitations: []
  },
  {
    name: "Pro",
    price: "₹899",
    period: "month",
    icon: Crown,
    popular: false,
    features: [
      "Everything in Premium",
      "1-on-1 virtual sessions",
      "Custom AI trainer personality",
      "Advanced biometric tracking",
      "Nutrition guidance",
      "Sleep & recovery insights",
      "Family sharing (up to 4 users)",
      "Early access to new features"
    ],
    limitations: []
  }
];

export default function AITeach() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <ChakraWheel size={80} className="opacity-20" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-10"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <LotusPetals count={3} className="opacity-20" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <MandalaPattern size={120} className="opacity-10" />
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Bot className="mr-2" size={16} />
                Revolutionary Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                AI Yoga{" "}
                <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Instructor
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Experience the future of personalized yoga guidance with cutting-edge AI technology. 
                Get real-time feedback, customized sequences, and interactive sessions designed just for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Play className="mr-2" size={20} />
                  Watch Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-orange-200 text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-full"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-1">1000+</div>
                  <div className="text-sm text-gray-600">Poses</div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <div className="flex justify-center mb-6">
                    <YogiFigure pose="meditation" size={120} />
                  </div>
                  
                  {/* AI Interface Mockup */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                        <Bot className="text-white" size={20} />
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-2xl p-3">
                        <p className="text-sm text-gray-700">Perfect! Your warrior pose alignment is excellent. Try holding for 5 more breaths.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 justify-end">
                      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-3 max-w-xs">
                        <p className="text-sm text-white">Show me the next pose</p>
                      </div>
                      <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 text-xs font-bold">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-4 shadow-lg"
                >
                  <Sparkles className="text-white" size={24} />
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl p-4 shadow-lg"
                >
                  <Brain className="text-white" size={24} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative z-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Revolutionary AI Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience yoga instruction powered by advanced artificial intelligence 
                that adapts, learns, and grows with your practice
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <Card className="overflow-hidden border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}>
                        <feature.icon className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* AI Capabilities */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  AI Development Progress
                </h3>
                <p className="text-lg text-gray-600">
                  See how our cutting-edge technology is taking shape
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {aiCapabilities.map((capability, index) => (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {capability.title}
                      </h4>
                      <span className="text-sm font-medium text-orange-600">
                        {capability.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-orange-500 to-amber-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${capability.progress}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                    <p className="text-gray-600 text-sm">
                      {capability.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Subscription Tiers */}
      <section className="py-20 px-4 relative z-10 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose Your AI Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Start with our free tier and unlock the full potential of AI-powered yoga as your practice evolves
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {subscriptionTiers.map((tier, index) => (
              <ScrollReveal key={tier.name} delay={index * 0.1}>
                <div className="relative">
                  {tier.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2 text-sm font-medium shadow-lg">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <Card className={`overflow-hidden border-0 shadow-2xl bg-white hover:shadow-3xl transition-all duration-500 h-full ${
                    tier.popular ? 'scale-105 ring-2 ring-orange-200' : 'hover:scale-105'
                  }`}>
                    <CardContent className="p-8">
                      <div className="text-center mb-8">
                        <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 ${
                          tier.name === 'Free' ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                          tier.name === 'Premium' ? 'bg-gradient-to-r from-orange-500 to-amber-500' :
                          'bg-gradient-to-r from-amber-600 to-yellow-600'
                        } shadow-lg`}>
                          <tier.icon className="text-white" size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          {tier.name}
                        </h3>
                        <div className="mb-6">
                          <span className="text-5xl font-bold text-gray-900">
                            {tier.price}
                          </span>
                          <span className="text-gray-600 text-lg ml-2">
                            /{tier.period}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4 mb-8">
                        {tier.features.map((feature, featureIndex) => (
                          <motion.div 
                            key={feature} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + featureIndex * 0.1 }}
                          >
                            <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                              <Check className="text-green-600" size={14} />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                        
                        {tier.limitations.length > 0 && (
                          <div className="pt-6 border-t border-gray-100">
                            <h4 className="font-medium text-gray-600 mb-4 text-sm uppercase tracking-wide">
                              Limitations
                            </h4>
                            {tier.limitations.map((limitation, limitIndex) => (
                              <motion.div 
                                key={limitation} 
                                className="flex items-start mb-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + limitIndex * 0.1 }}
                              >
                                <span className="text-gray-400 mr-3 mt-1">•</span>
                                <span className="text-gray-500 text-sm">{limitation}</span>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>

                      <Button 
                        className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                          tier.popular 
                            ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl' 
                            : tier.name === 'Free'
                            ? 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white'
                            : 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white shadow-lg hover:shadow-xl'
                        }`}
                        disabled={true}
                      >
                        {tier.name === 'Free' ? 'Get Started Free' : 'Coming Soon'}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-gray-700 mb-4 text-lg">
                All plans include a 7-day free trial of Premium features
              </p>
              <p className="text-gray-500">
                Cancel anytime • No hidden fees • Secure payment • 24/7 Support
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Notify Me Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-12 text-center text-white relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <MandalaPattern size={300} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/20 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8"
                  >
                    <Mail className="text-white" size={40} />
                  </motion.div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold mb-6">
                    Join the AI Revolution
                  </h3>
                  <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                    Be among the first to experience revolutionary AI yoga instruction. 
                    Get exclusive early access, beta testing opportunities, and launch updates.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
                    <Input 
                      placeholder="Enter your email address"
                      className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/70 focus:bg-white/20"
                    />
                    <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 font-semibold rounded-xl">
                      Join Waitlist
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-8 text-white/80 text-sm">
                    <div className="flex items-center">
                      <Check className="mr-2" size={16} />
                      Early Access
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2" size={16} />
                      Exclusive Updates
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2" size={16} />
                      No Spam
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 relative z-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Start Your Yoga Journey Today
              </h3>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                While you wait for our AI instructor, dive into our current offerings and 
                connect with our experienced human instructors who are ready to guide your practice.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="text-white" size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Explore Current Classes
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover our comprehensive range of yoga classes, from beginner-friendly 
                    sessions to advanced practices. Find the perfect class for your level and schedule.
                  </p>
                  <Link href="/services">
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-xl font-semibold">
                      Browse Classes
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Connect With Us
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Have questions about our AI instructor or current offerings? 
                    Our team is here to help you find the perfect yoga solution for your needs.
                  </p>
                  <Link href="/contact">
                    <Button 
                      variant="outline" 
                      className="border-2 border-orange-200 text-orange-700 hover:bg-orange-50 px-8 py-3 rounded-xl font-semibold"
                    >
                      Get In Touch
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}