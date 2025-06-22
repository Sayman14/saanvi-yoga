import { motion } from "framer-motion";

interface LotusPetalsProps {
  count?: number;
  className?: string;
}

export default function LotusPetals({ count = 5, className = "" }: LotusPetalsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, -10, -30, 0],
            x: [0, 10, -5, 15, 0],
            rotate: [0, 10, -5, 15, 0],
            opacity: [0.2, 0.6, 0.3, 0.8, 0.2],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-lotus-pink">
            <path d="M12 2L8 8L2 12L8 16L12 22L16 16L22 12L16 8L12 2Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}