import { motion } from "framer-motion";

interface YogiFigureProps {
  pose?: "meditation" | "warrior" | "tree" | "lotus";
  size?: number;
  className?: string;
}

export default function YogiFigure({ pose = "meditation", size = 150, className = "" }: YogiFigureProps) {
  const poses = {
    meditation: {
      body: "M75,40 Q75,35 75,30 Q75,25 80,25 Q85,25 85,30 Q85,35 85,40 L85,80 Q85,85 80,85 Q75,85 75,80 Z",
      arms: "M75,50 Q65,45 55,50 Q50,55 55,60 Q65,55 75,60 M85,50 Q95,45 105,50 Q110,55 105,60 Q95,55 85,60",
      legs: "M75,80 Q70,90 65,100 Q60,110 65,120 M85,80 Q90,90 95,100 Q100,110 95,120"
    },
    warrior: {
      body: "M75,40 Q75,35 75,30 Q75,25 80,25 Q85,25 85,30 Q85,35 85,40 L85,80 Q85,85 80,85 Q75,85 75,80 Z",
      arms: "M75,50 Q60,40 45,45 Q40,50 45,55 Q60,50 75,60 M85,50 Q100,35 115,40 Q120,45 115,50 Q100,45 85,60",
      legs: "M75,80 Q60,90 45,95 Q40,100 45,105 M85,80 Q90,90 95,100 Q100,110 95,120"
    },
    tree: {
      body: "M75,40 Q75,35 75,30 Q75,25 80,25 Q85,25 85,30 Q85,35 85,40 L80,80 Q80,85 80,85 Q80,85 80,80 Z",
      arms: "M75,50 Q70,35 75,30 Q80,25 85,30 Q90,35 85,50 Q80,45 80,50",
      legs: "M80,80 Q80,90 80,100 Q80,110 80,120 M75,85 Q85,85 85,85"
    },
    lotus: {
      body: "M75,40 Q75,35 75,30 Q75,25 80,25 Q85,25 85,30 Q85,35 85,40 L85,70 Q85,75 80,75 Q75,75 75,70 Z",
      arms: "M75,55 Q70,50 75,45 Q80,50 85,45 Q90,50 85,55 Q80,60 75,55",
      legs: "M75,75 Q65,80 60,85 Q70,90 80,85 Q90,90 100,85 Q95,80 85,75"
    }
  };

  const currentPose = poses[pose];

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 140"
        className="breathing-effect"
      >
        {/* Aura/Energy field */}
        <motion.ellipse
          cx="80"
          cy="70"
          rx="70"
          ry="65"
          fill="none"
          stroke="url(#auraGradient)"
          strokeWidth="1"
          opacity="0.3"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        
        {/* Head */}
        <motion.circle
          cx="80"
          cy="25"
          r="12"
          fill="url(#skinGradient)"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        
        {/* Body */}
        <motion.path
          d={currentPose.body}
          fill="url(#clothingGradient)"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        
        {/* Arms */}
        <motion.path
          d={currentPose.arms}
          fill="none"
          stroke="url(#skinGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.5,
          }}
        />
        
        {/* Legs */}
        <motion.path
          d={currentPose.legs}
          fill="none"
          stroke="url(#skinGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
          }}
        />
        
        {/* Chakra points */}
        {[
          { x: 80, y: 25, color: "hsl(260, 80%, 50%)" }, // Crown
          { x: 80, y: 30, color: "hsl(180, 85%, 60%)" }, // Third eye
          { x: 80, y: 40, color: "hsl(320, 75%, 75%)" }, // Throat
          { x: 80, y: 55, color: "hsl(45, 100%, 70%)" }, // Heart
          { x: 80, y: 70, color: "hsl(35, 100%, 65%)" }, // Solar plexus
        ].map((chakra, i) => (
          <motion.circle
            key={i}
            cx={chakra.x}
            cy={chakra.y}
            r="2"
            fill={chakra.color}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        
        <defs>
          <radialGradient id="auraGradient">
            <stop offset="0%" stopColor="hsl(180, 85%, 60%)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(320, 75%, 75%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(260, 80%, 50%)" stopOpacity="0.1" />
          </radialGradient>
          
          <linearGradient id="skinGradient">
            <stop offset="0%" stopColor="hsl(35, 40%, 75%)" />
            <stop offset="100%" stopColor="hsl(35, 30%, 65%)" />
          </linearGradient>
          
          <linearGradient id="clothingGradient">
            <stop offset="0%" stopColor="hsl(45, 100%, 70%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(35, 100%, 65%)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}