import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import LotusPetals from "@/components/animated/lotus-petals";
import ChakraWheel from "@/components/animated/chakra-wheel";
import MandalaPattern from "@/components/animated/mandala-pattern";
import YogiFigure from "@/components/animated/yogi-figure";
import IncenseSmoke from "@/components/animated/incense-smoke";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const rotate = useTransform(scrollY, [0, 300], [0, 180]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden indian-gradient-bg temple-pattern-bg">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-10 sm:top-20 left-4 sm:left-10 opacity-20"
        >
          <ChakraWheel size={60} className="sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
        </motion.div>
        <motion.div
          style={{ y: y2, rotate }}
          className="absolute top-20 sm:top-40 right-4 sm:right-20 opacity-15"
        >
          <MandalaPattern size={50} className="sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
        </motion.div>
        <motion.div
          style={{ y: y1 }}
          className="absolute bottom-20 sm:bottom-32 left-1/4 opacity-25"
        >
          <LotusPetals count={3} className="sm:scale-125" />
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute top-40 sm:top-60 right-2 sm:right-10 opacity-20"
        >
          <IncenseSmoke count={2} className="scale-75 sm:scale-100" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight"
            >
              <span className="text-earthen-brown">Transform Your</span><br />
              <span className="text-gradient">Mind & Soul</span><br />
              <span className="text-xs sm:text-sm font-normal text-gray-600 mt-1 sm:mt-2 block">Through Authentic Yoga</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 text-gray-600 leading-relaxed px-2 sm:px-0"
            >
              Experience authentic <span className="text-saffron font-semibold">yoga</span> instruction with Sneh Chauhan, certified by Ministry of AYUSH and Art of Living. Transform your mind, body, and spirit through traditional practices adapted for modern life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center"
            >
              <Link href="/services">
                <Button
                  size="lg"
                  className="indian-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full w-full sm:w-auto touch-target"
                >
                  Get Started
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="meditation-focus px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full text-saffron w-full sm:w-auto touch-target"
                >
                  Explore Classes
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Simple Yogi Figure */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative flex justify-center items-center"
          >
            <div className="indian-card p-8 rounded-3xl gentle-float namaste-hover">
              <YogiFigure pose="meditation" size={200} />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-saffron to-marigold rounded-full gentle-float shadow-lg flex items-center justify-center">
                <span className="text-white text-xs">🕉</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}