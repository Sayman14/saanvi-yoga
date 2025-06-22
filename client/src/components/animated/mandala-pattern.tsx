import { motion } from "framer-motion";

interface MandalaPatternProps {
  size?: number;
  className?: string;
}

export default function MandalaPattern({ size = 200, className = "" }: MandalaPatternProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="opacity-20"
      >
        {/* Outer ring */}
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="none"
          stroke="url(#mandalaGradient1)"
          strokeWidth="1"
        />
        
        {/* Secondary rings */}
        <circle
          cx="100"
          cy="100"
          r="75"
          fill="none"
          stroke="url(#mandalaGradient2)"
          strokeWidth="1"
        />
        
        <circle
          cx="100"
          cy="100"
          r="55"
          fill="none"
          stroke="url(#mandalaGradient3)"
          strokeWidth="1"
        />
        
        {/* Geometric patterns */}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i}>
            <motion.path
              d={`M100,100 L${100 + 80 * Math.cos((i * 30 * Math.PI) / 180)},${100 + 80 * Math.sin((i * 30 * Math.PI) / 180)}`}
              stroke="url(#mandalaGradient1)"
              strokeWidth="0.5"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
            
            {/* Petal shapes */}
            <motion.ellipse
              cx={100 + 60 * Math.cos((i * 30 * Math.PI) / 180)}
              cy={100 + 60 * Math.sin((i * 30 * Math.PI) / 180)}
              rx="8"
              ry="15"
              fill="url(#petalFill)"
              transform={`rotate(${i * 30} ${100 + 60 * Math.cos((i * 30 * Math.PI) / 180)} ${100 + 60 * Math.sin((i * 30 * Math.PI) / 180)})`}
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          </g>
        ))}
        
        {/* Center mandala */}
        <motion.circle
          cx="100"
          cy="100"
          r="20"
          fill="url(#centerMandala)"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        
        <defs>
          <radialGradient id="mandalaGradient1">
            <stop offset="0%" stopColor="hsl(45, 100%, 70%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(35, 100%, 65%)" stopOpacity="0.2" />
          </radialGradient>
          
          <radialGradient id="mandalaGradient2">
            <stop offset="0%" stopColor="hsl(320, 75%, 75%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(180, 85%, 60%)" stopOpacity="0.2" />
          </radialGradient>
          
          <radialGradient id="mandalaGradient3">
            <stop offset="0%" stopColor="hsl(180, 85%, 60%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(260, 80%, 50%)" stopOpacity="0.1" />
          </radialGradient>
          
          <radialGradient id="petalFill">
            <stop offset="0%" stopColor="hsl(50, 100%, 75%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(35, 100%, 65%)" stopOpacity="0.2" />
          </radialGradient>
          
          <radialGradient id="centerMandala">
            <stop offset="0%" stopColor="hsl(45, 100%, 70%)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(320, 75%, 75%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(260, 80%, 50%)" stopOpacity="0.3" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}