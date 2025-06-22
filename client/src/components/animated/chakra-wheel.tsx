import { motion } from "framer-motion";

interface ChakraWheelProps {
  size?: number;
  className?: string;
  speed?: number;
}

export default function ChakraWheel({ size = 120, className = "", speed = 20 }: ChakraWheelProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        className="chakra-glow"
      >
        {/* Outer ring */}
        <circle
          cx="60"
          cy="60"
          r="55"
          fill="none"
          stroke="url(#chakraGradient)"
          strokeWidth="2"
          opacity="0.6"
        />
        
        {/* Inner petals */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M60,60 L${60 + 40 * Math.cos((i * 45 * Math.PI) / 180)},${60 + 40 * Math.sin((i * 45 * Math.PI) / 180)} 
                L${60 + 30 * Math.cos(((i + 1) * 45 * Math.PI) / 180)},${60 + 30 * Math.sin(((i + 1) * 45 * Math.PI) / 180)} Z`}
            fill="url(#petalGradient)"
            opacity="0.7"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        
        {/* Center circle */}
        <motion.circle
          cx="60"
          cy="60"
          r="15"
          fill="url(#centerGradient)"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        
        <defs>
          <radialGradient id="chakraGradient">
            <stop offset="0%" stopColor="hsl(180, 85%, 60%)" />
            <stop offset="50%" stopColor="hsl(320, 75%, 75%)" />
            <stop offset="100%" stopColor="hsl(260, 80%, 50%)" />
          </radialGradient>
          
          <linearGradient id="petalGradient">
            <stop offset="0%" stopColor="hsl(45, 100%, 70%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(35, 100%, 65%)" stopOpacity="0.4" />
          </linearGradient>
          
          <radialGradient id="centerGradient">
            <stop offset="0%" stopColor="hsl(50, 100%, 75%)" />
            <stop offset="100%" stopColor="hsl(35, 100%, 65%)" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}