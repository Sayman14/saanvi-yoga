import { motion } from "framer-motion";

interface IncenseSmokeProps {
  count?: number;
  className?: string;
}

export default function IncenseSmoke({ count = 3, className = "" }: IncenseSmokeProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 30}%`,
            bottom: "10%",
          }}
        >
          {/* Incense stick */}
          <div className="w-1 h-16 bg-gradient-to-t from-amber-800 to-amber-600 opacity-60" />
          
          {/* Smoke trail */}
          {Array.from({ length: 8 }).map((_, j) => (
            <motion.div
              key={j}
              className="absolute w-2 h-2 rounded-full opacity-40"
              style={{
                left: "50%",
                bottom: `${60 + j * 8}px`,
                background: `linear-gradient(45deg, hsl(45, 40%, 85%), hsl(45, 30%, 90%))`,
              }}
              animate={{
                x: [0, Math.sin(j) * 15, Math.cos(j) * 20, Math.sin(j + 1) * 10],
                y: [0, -10 - j * 5, -20 - j * 8, -30 - j * 10],
                scale: [0.8, 1.2, 1.5, 0.3],
                opacity: [0.6, 0.4, 0.2, 0],
              }}
              transition={{
                duration: 4 + j * 0.3,
                repeat: Infinity,
                delay: j * 0.2 + i * 1,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}