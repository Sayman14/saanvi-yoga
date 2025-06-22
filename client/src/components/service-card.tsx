import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import YogiFigure from "@/components/animated/yogi-figure";
import ChakraWheel from "@/components/animated/chakra-wheel";
import LotusPetals from "@/components/animated/lotus-petals";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  pose: "meditation" | "warrior" | "tree" | "lotus";
  index: number;
  isCorporate?: boolean;
}

export default function ServiceCard({ title, description, price, pose, index, isCorporate = false }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="indian-card transition-all duration-300 overflow-hidden bg-white border-2 border-transparent hover:border-saffron group gentle-float namaste-hover">
        {/* Indian Yoga Header */}
        <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-sandalwood via-namaste-cream to-temple-beige overflow-hidden">
          <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
            <ChakraWheel size={40} speed={20} />
          </div>
          <div className="absolute bottom-3 left-3 opacity-25 group-hover:opacity-50 transition-opacity duration-300">
            <LotusPetals count={3} />
          </div>
          <div className="relative z-10">
            <YogiFigure pose={pose} size={120} className="gentle-float" />
          </div>
          <div className="absolute top-2 right-8 w-3 h-3 bg-gradient-to-r from-saffron to-marigold rounded-full gentle-float shadow-lg"></div>
        </div>
        
        <CardContent className="p-6">
          <h3 className="font-semibold text-xl text-earthen-brown mb-3">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
          
          <div className="pt-4 border-t border-temple-beige">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-saffron to-marigold bg-clip-text text-transparent">{price}</span>
            </div>
            
            {isCorporate ? (
              <div className="space-y-2">
                <Link href="/cost-calculator">
                  <Button 
                    size="sm"
                    className="w-full indian-button text-white rounded-full mb-2"
                  >
                    Cost Calculator
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="sm"
                    variant="outline"
                    className="w-full border-orange-300 text-orange-600 hover:bg-orange-50 rounded-full"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            ) : (
              <Link href="/book">
                <Button 
                  size="sm"
                  className="w-full indian-button text-white rounded-full"
                >
                  Book Now
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
