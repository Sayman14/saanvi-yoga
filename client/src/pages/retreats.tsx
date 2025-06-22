import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Calendar, MapPin, Users, Clock, Mountain, Sunrise } from "lucide-react";
import YogiFigure from "@/components/animated/yogi-figure";
import ChakraWheel from "@/components/animated/chakra-wheel";
import MandalaPattern from "@/components/animated/mandala-pattern";
import LotusPetals from "@/components/animated/lotus-petals";
import IncenseSmoke from "@/components/animated/incense-smoke";

const retreats = [
  {
    title: "Himalayan Sunrise Retreat",
    description: "A transformative 7-day virtual retreat exploring ancient Himalayan yoga traditions with daily sunrise meditation sessions.",
    duration: "7 Days",
    dates: "March 15-21, 2024",
    price: "₹12,000",
    location: "Online from the Himalayas",
    pose: "meditation" as const,
    highlights: ["Daily Sunrise Meditation", "Pranayama Mastery", "Vedic Philosophy", "Sacred Chanting"]
  },
  {
    title: "Chakra Awakening Journey",
    description: "Deep dive into the seven chakras through specialized yoga sequences, meditation, and energy healing practices.",
    duration: "5 Days",
    dates: "April 10-14, 2024",
    price: "₹8,500",
    location: "Virtual Sanctuary",
    pose: "lotus" as const,
    highlights: ["Chakra Balancing", "Crystal Meditation", "Sound Healing", "Energy Cleansing"]
  },
  {
    title: "Monsoon Mindfulness",
    description: "Embrace the rejuvenating energy of the monsoon season with gentle yoga flows and mindfulness practices.",
    duration: "3 Days",
    dates: "July 20-22, 2024",
    price: "₹5,500",
    location: "Online Sacred Space",
    pose: "tree" as const,
    highlights: ["Rain Meditation", "Emotional Release", "Nature Connection", "Inner Peace"]
  }
];

const benefits = [
  {
    icon: Mountain,
    title: "Spiritual Elevation",
    description: "Connect with ancient wisdom and elevate your consciousness through sacred practices"
  },
  {
    icon: Sunrise,
    title: "Dawn Awakening", 
    description: "Experience the transformative power of sunrise meditation and breathwork"
  },
  {
    icon: Users,
    title: "Sacred Community",
    description: "Join like-minded souls on a journey of collective spiritual growth"
  },
  {
    icon: Clock,
    title: "Timeless Teachings",
    description: "Learn practices that have been passed down through generations of yogis"
  }
];

export default function Retreats() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 relative min-h-screen flex items-center justify-center overflow-hidden mandala-bg">
        <div className="absolute inset-0 silk-gradient" />
        <LotusPetals count={12} />
        <IncenseSmoke count={3} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="font-poppins font-bold text-4xl lg:text-6xl chakra-gradient devanagari-inspired">
                Sacred Retreats
              </h1>
              <p className="font-inter text-xl text-gray-700 leading-relaxed">
                Embark on transformative virtual retreats that blend ancient wisdom with modern convenience. Experience profound spiritual growth from the comfort of your sacred space.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="glass-card hover:shadow-2xl transform hover:scale-105 transition-all duration-300 chakra-glow text-gray-900 font-semibold rounded-full devanagari-inspired"
                >
                  🕉️ Join a Retreat
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="glassmorphism border-2 font-semibold rounded-full hover:glass-card transition-all duration-300 text-gray-800 devanagari-inspired"
                >
                  🧘‍♀️ Learn More
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <MandalaPattern size={350} className="absolute inset-0 opacity-20" />
                <div className="glass-card p-8 rounded-3xl relative">
                  <YogiFigure pose="meditation" size={200} className="breathing-effect" />
                  
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${20 + Math.cos(i * Math.PI / 3) * 80}%`,
                        top: `${50 + Math.sin(i * Math.PI / 3) * 60}%`,
                      }}
                    >
                      <ChakraWheel size={30} speed={20 + i * 5} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sandalwood-beige/20 to-lotus-pink/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl mb-6 chakra-gradient devanagari-inspired">
              Sacred Benefits
            </h2>
            <p className="font-inter text-lg text-gray-700 max-w-2xl mx-auto">
              Discover the profound transformations that await you on these spiritual journeys
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass-card text-center p-6 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 rangoli-pattern opacity-5" />
                  <CardContent className="p-0 relative">
                    <div className="w-16 h-16 glassmorphism rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-8 w-8 text-saffron-yellow" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 devanagari-inspired">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retreats Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 silk-gradient opacity-30" />
        <MandalaPattern size={500} className="absolute top-0 right-0 opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl mb-6 chakra-gradient devanagari-inspired">
              Upcoming Retreats
            </h2>
            <p className="font-inter text-lg text-gray-700 max-w-2xl mx-auto">
              Choose your path to spiritual awakening and inner transformation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {retreats.map((retreat, index) => (
              <motion.div
                key={retreat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="glass-card hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden relative group">
                  {/* Animated Header */}
                  <div className="relative h-56 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 rangoli-pattern opacity-20" />
                    <div className="absolute top-2 right-2">
                      <ChakraWheel size={35} speed={15} />
                    </div>
                    
                    <LotusPetals count={4} className="opacity-30" />
                    <YogiFigure pose={retreat.pose} size={140} className="breathing-effect" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-poppins font-semibold text-xl chakra-gradient devanagari-inspired">
                      {retreat.title}
                    </h3>
                    
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {retreat.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1 text-saffron-yellow" />
                        <span>{retreat.dates}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1 text-lotus-pink" />
                        <span>{retreat.duration}</span>
                      </div>
                      <div className="flex items-center col-span-2">
                        <MapPin className="h-3 w-3 mr-1 text-turquoise-blue" />
                        <span>{retreat.location}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm devanagari-inspired">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {retreat.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-2 py-1 glassmorphism text-xs rounded-full text-gray-700"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-gradient font-semibold text-lg devanagari-inspired">
                        {retreat.price}
                      </span>
                      <Button 
                        size="sm"
                        className="glassmorphism hover:glass-card text-gray-800 rounded-full transition-all duration-300 chakra-glow group-hover:scale-110 devanagari-inspired"
                      >
                        🕉️ Reserve
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-turquoise-blue/10 to-deep-purple/10" />
        <LotusPetals count={8} />
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-poppins font-bold text-4xl mb-6 chakra-gradient devanagari-inspired">
              Begin Your Sacred Journey
            </h2>
            <p className="font-inter text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards profound transformation. Join thousands who have discovered their inner light through our guided retreat experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="glass-card hover:shadow-2xl transform hover:scale-105 transition-all duration-300 chakra-glow text-gray-900 font-semibold rounded-full devanagari-inspired"
                >
                  🕉️ Book Your Retreat
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="glassmorphism border-2 font-semibold rounded-full hover:glass-card transition-all duration-300 text-gray-800 devanagari-inspired"
                >
                  🧘‍♀️ Explore Classes
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}