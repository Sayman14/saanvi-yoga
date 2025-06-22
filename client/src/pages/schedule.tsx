import { motion } from "framer-motion";
import { Calendar, Clock, Users, Star, MapPin, Video, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { useState } from "react";

const weeklySchedule = [
  {
    day: "Monday",
    classes: [
      {
        time: "7:00 AM - 8:00 AM",
        name: "Morning Hatha Yoga",
        level: "Beginner",
        type: "Online",
        instructor: "Sneh Chauhan",
        spots: 12,
        description: "Start your week with gentle stretches and breathing exercises"
      },
      {
        time: "6:00 PM - 7:00 PM", 
        name: "Vinyasa Flow",
        level: "Intermediate",
        type: "Online",
        instructor: "Sneh Chauhan",
        spots: 8,
        description: "Dynamic flow connecting breath with movement"
      }
    ]
  },
  {
    day: "Tuesday",
    classes: [
      {
        time: "8:00 AM - 9:00 AM",
        name: "Pranayama & Meditation",
        level: "All Levels",
        type: "Online",
        instructor: "Sneh Chauhan", 
        spots: 15,
        description: "Deep breathing techniques and mindfulness practice"
      }
    ]
  },
  {
    day: "Wednesday",
    classes: [
      {
        time: "7:00 AM - 8:00 AM",
        name: "Power Yoga",
        level: "Advanced",
        type: "Online",
        instructor: "Sneh Chauhan",
        spots: 6,
        description: "Strengthen and energize with challenging sequences"
      },
      {
        time: "7:30 PM - 8:30 PM",
        name: "Restorative Yoga",
        level: "All Levels", 
        type: "Online",
        instructor: "Sneh Chauhan",
        spots: 10,
        description: "Gentle poses for deep relaxation and stress relief"
      }
    ]
  },
  {
    day: "Thursday",
    classes: [
      {
        time: "8:00 AM - 9:00 AM",
        name: "Yin Yoga",
        level: "All Levels",
        type: "Online",
        instructor: "Sneh Chauhan",
        spots: 12,
        description: "Deep stretching with longer held poses"
      }
    ]
  },
  {
    day: "Friday",
    classes: [
      {
        time: "7:00 AM - 8:00 AM",
        name: "Morning Flow",
        level: "Intermediate",
        type: "Online",
        instructor: "Sneh Chauhan",
        spots: 8,
        description: "End your week with flowing movements and positivity"
      },
      {
        time: "6:30 PM - 7:30 PM",
        name: "Family Yoga",
        level: "All Levels",
        type: "Online", 
        instructor: "Sneh Chauhan",
        spots: 8,
        description: "Fun yoga session suitable for parents and children"
      }
    ]
  },
  {
    day: "Saturday",
    classes: [
      {
        time: "9:00 AM - 10:30 AM",
        name: "Weekend Workshop",
        level: "All Levels",
        type: "Online",
        instructor: "Sneh Chauhan",
        spots: 10,
        description: "Extended session with philosophy and advanced techniques"
      }
    ]
  },
  {
    day: "Sunday",
    classes: [
      {
        time: "8:00 AM - 9:00 AM",
        name: "Gentle Sunday Flow",
        level: "Beginner",
        type: "Online",
        instructor: "Sneh Chauhan",
        spots: 15,
        description: "Peaceful practice to prepare for the new week"
      }
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

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

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
            Class <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Schedule</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Join our regular online yoga classes designed for all levels. Find the perfect time 
            that fits your schedule and embark on your wellness journey.
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
            <Link href="/contact">
              <motion.button
                className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ask Questions
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
            <div>Live Interactive Classes</div>
            <div>Small Group Sessions</div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Grid */}
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
              Weekly <span className="text-orange-600">Schedule</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All classes are conducted online via secure video sessions with live interaction
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {weeklySchedule.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: dayIndex * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-orange-50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">{day.day}</h3>
                    <Calendar className="w-5 h-5 text-orange-500" />
                  </div>
                  
                  <div className="space-y-4">
                    {day.classes.map((yogaClass, classIndex) => (
                      <motion.div
                        key={classIndex}
                        className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-100"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{yogaClass.name}</h4>
                            <div className="flex items-center text-sm text-gray-600 mb-2">
                              <Clock className="w-4 h-4 mr-1" />
                              {yogaClass.time}
                            </div>
                          </div>
                          <Badge className={getLevelColor(yogaClass.level)}>
                            {yogaClass.level}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3">{yogaClass.description}</p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center">
                            <Video className="w-3 h-3 mr-1" />
                            {yogaClass.type}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {yogaClass.spots} spots
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              All classes are conducted online via secure video sessions. You'll receive 
              joining instructions after booking your preferred class.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <motion.button
                  className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Class
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