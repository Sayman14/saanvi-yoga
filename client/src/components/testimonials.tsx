import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import ScrollReveal from "@/components/animated/scroll-reveal";

const testimonials = [
  {
    name: "Priya S.",
    role: "Teacher, Mumbai",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Sneh's classes help me start my mornings with peace. Her gentle guidance makes each session feel personal even though it's online."
  },
  {
    name: "Michael R.",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "I joined 3 months ago for back pain relief. Sneh's modifications and breathing techniques have really helped improve my posture."
  },
  {
    name: "Anjali M.",
    role: "Working Parent",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The weekend family sessions are wonderful. My 8-year-old daughter and I both look forward to our yoga time with Sneh."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 indian-gradient-bg temple-pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl mb-6 yoga-text-gradient">
              What Students Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our community of practitioners who have transformed their lives through yoga
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal 
              key={testimonial.name}
              direction="up"
              delay={0.1 * index}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="indian-card p-6 namaste-hover border-2 border-transparent hover:border-saffron group h-full">
                  <CardContent className="p-0">
                    <div className="mb-4">
                      <motion.div 
                        className="flex text-orange-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              delay: 0.6 + index * 0.1 + i * 0.1,
                              type: "spring",
                              stiffness: 200
                            }}
                          >
                            <Star className="h-5 w-5 fill-current" />
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                    <p className="text-gray-600 mb-6 italic group-hover:text-gray-700 transition-colors duration-300">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <motion.img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-orange-200"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
