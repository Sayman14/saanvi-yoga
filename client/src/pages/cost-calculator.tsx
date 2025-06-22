import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Users, Clock, Calendar, MapPin, CheckCircle, Star, TrendingUp } from "lucide-react";
import { useState } from "react";
import FloatingElements from "@/components/animated/floating-elements";
import ChakraWheel from "@/components/animated/chakra-wheel";
import { Link } from "wouter";

export default function CostCalculator() {
  const [sessionType, setSessionType] = useState("corporate");
  const [duration, setDuration] = useState(60);
  const [frequency, setFrequency] = useState("weekly");
  const [teamSize, setTeamSize] = useState(15);
  const [location, setLocation] = useState("online");

  const sessionTypes = [
    {
      id: "corporate",
      title: "Corporate Wellness",
      description: "Team yoga sessions for workplace wellness",
      basePrice: 2000,
      icon: "💼"
    },
    {
      id: "group",
      title: "Group Classes",
      description: "Small group sessions for communities",
      basePrice: 750,
      icon: "👥"
    },
    {
      id: "private",
      title: "Private Sessions",
      description: "One-on-one personalized instruction",
      basePrice: 1500,
      icon: "🧘‍♀️"
    }
  ];

  const durations = [30, 45, 60, 75, 90];
  const frequencies = [
    { id: "weekly", label: "Weekly", multiplier: 4 },
    { id: "biweekly", label: "Bi-weekly", multiplier: 2 },
    { id: "monthly", label: "Monthly", multiplier: 1 }
  ];

  const calculateCost = () => {
    const selectedType = sessionTypes.find(type => type.id === sessionType);
    if (!selectedType) return 0;

    let baseCost = selectedType.basePrice;
    
    // Duration adjustment
    const durationMultiplier = duration / 60;
    baseCost *= durationMultiplier;

    // Team size adjustment for corporate/group
    if (sessionType === "corporate" && teamSize > 20) {
      baseCost += (teamSize - 20) * 50;
    } else if (sessionType === "group" && teamSize > 8) {
      baseCost += (teamSize - 8) * 100;
    }

    // Location adjustment
    if (location === "onsite") {
      baseCost += 500; // Travel and setup fee
    }

    // Frequency discount
    const freqMultiplier = frequencies.find(f => f.id === frequency)?.multiplier || 1;
    const monthlyCost = baseCost * freqMultiplier;

    // Volume discount for monthly packages
    let discount = 0;
    if (freqMultiplier >= 4) discount = 0.15; // 15% for weekly
    else if (freqMultiplier >= 2) discount = 0.10; // 10% for bi-weekly

    return Math.round(monthlyCost * (1 - discount));
  };

  const savings = () => {
    const originalCost = calculateCost() / (1 - (frequency === "weekly" ? 0.15 : frequency === "biweekly" ? 0.10 : 0));
    return Math.round(originalCost - calculateCost());
  };

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
              Cost <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Calculator</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Get an instant estimate for your yoga program. Customize your requirements 
              and see transparent pricing for corporate wellness and group sessions.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>150+ Corporate Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Flexible Packages</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span>Volume Discounts</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Configure Your <span className="text-orange-600">Program</span>
                </h2>
              </div>

              {/* Session Type */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">Session Type</label>
                <div className="grid gap-4">
                  {sessionTypes.map((type) => (
                    <motion.div
                      key={type.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                        sessionType === type.id 
                          ? 'border-orange-500 bg-orange-50' 
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                      onClick={() => setSessionType(type.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{type.icon}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{type.title}</h3>
                          <p className="text-sm text-gray-600">{type.description}</p>
                          <p className="text-sm font-medium text-orange-600">From ₹{type.basePrice}/session</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Session Duration: {duration} minutes
                </label>
                <div className="flex flex-wrap gap-3">
                  {durations.map((dur) => (
                    <button
                      key={dur}
                      onClick={() => setDuration(dur)}
                      className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                        duration === dur
                          ? 'border-orange-500 bg-orange-500 text-white'
                          : 'border-gray-300 text-gray-700 hover:border-orange-300'
                      }`}
                    >
                      {dur}min
                    </button>
                  ))}
                </div>
              </div>

              {/* Team Size */}
              {(sessionType === "corporate" || sessionType === "group") && (
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    Team Size: {teamSize} people
                  </label>
                  <input
                    type="range"
                    min={sessionType === "corporate" ? "5" : "3"}
                    max={sessionType === "corporate" ? "50" : "15"}
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>{sessionType === "corporate" ? "5" : "3"}</span>
                    <span>{sessionType === "corporate" ? "50" : "15"}</span>
                  </div>
                </div>
              )}

              {/* Frequency */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">Frequency</label>
                <div className="grid grid-cols-3 gap-3">
                  {frequencies.map((freq) => (
                    <button
                      key={freq.id}
                      onClick={() => setFrequency(freq.id)}
                      className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                        frequency === freq.id
                          ? 'border-orange-500 bg-orange-50 text-orange-700'
                          : 'border-gray-300 text-gray-700 hover:border-orange-300'
                      }`}
                    >
                      <div className="text-sm font-medium">{freq.label}</div>
                      <div className="text-xs text-gray-500">{freq.multiplier}x/month</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">Location</label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "online", label: "Online", icon: "💻", extra: "" },
                    { id: "onsite", label: "On-site", icon: "🏢", extra: "+₹500" }
                  ].map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setLocation(loc.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        location === loc.id
                          ? 'border-orange-500 bg-orange-50 text-orange-700'
                          : 'border-gray-300 text-gray-700 hover:border-orange-300'
                      }`}
                    >
                      <div className="text-2xl mb-2">{loc.icon}</div>
                      <div className="font-medium">{loc.label}</div>
                      {loc.extra && <div className="text-xs">{loc.extra}</div>}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Cost Display */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 opacity-10">
                <ChakraWheel size={100} />
              </div>
              
              <Card className="p-8 bg-gradient-to-br from-white to-orange-50 shadow-2xl border-0 relative z-10 sticky top-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Estimate</h3>
                  <p className="text-gray-600">Monthly cost for your yoga program</p>
                </div>

                <div className="space-y-6">
                  {/* Cost Breakdown */}
                  <div className="bg-white rounded-xl p-6 border border-orange-100">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Base cost per session</span>
                        <span className="font-medium">₹{sessionTypes.find(t => t.id === sessionType)?.basePrice}</span>
                      </div>
                      
                      {duration !== 60 && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Duration adjustment</span>
                          <span className="font-medium">{duration > 60 ? '+' : '-'}{Math.abs(((duration/60) - 1) * 100).toFixed(0)}%</span>
                        </div>
                      )}
                      
                      {((sessionType === "corporate" && teamSize > 20) || (sessionType === "group" && teamSize > 8)) && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Extra participants</span>
                          <span className="font-medium">+₹{sessionType === "corporate" ? (teamSize - 20) * 50 : (teamSize - 8) * 100}</span>
                        </div>
                      )}
                      
                      {location === "onsite" && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">On-site fee</span>
                          <span className="font-medium">+₹500</span>
                        </div>
                      )}
                      
                      {frequency !== "monthly" && (
                        <div className="flex justify-between items-center text-green-600">
                          <span>Volume discount</span>
                          <span className="font-medium">-₹{savings()}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Total Cost */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">
                      ₹{calculateCost().toLocaleString()}
                    </div>
                    <div className="text-gray-600 mb-6">per month</div>
                    
                    {frequency !== "monthly" && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                        <div className="text-green-700 font-medium">You save ₹{savings()} per month!</div>
                        <div className="text-green-600 text-sm">with {frequency} sessions</div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl">
                        Get Detailed Quote
                      </Button>
                    </Link>
                    <Link href="/book">
                      <Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-50 py-3 rounded-xl">
                        Book Consultation
                      </Button>
                    </Link>
                  </div>

                  {/* Additional Info */}
                  <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-200">
                    <p>Prices are estimates. Final pricing may vary based on specific requirements.</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-orange-600">Programs</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive wellness solutions tailored to your organization's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Instructors",
                description: "AYUSH certified instructors with 500+ hour training and corporate experience"
              },
              {
                icon: Calendar,
                title: "Flexible Scheduling",
                description: "Sessions that fit your team's schedule, with easy rescheduling options"
              },
              {
                icon: TrendingUp,
                title: "Measurable Results",
                description: "Track wellness improvements with regular assessments and progress reports"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 h-full text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}