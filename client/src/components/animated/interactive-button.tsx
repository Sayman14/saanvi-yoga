import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface InteractiveButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  animationType?: "bounce" | "pulse" | "glow" | "scale";
}

export default function InteractiveButton({
  children,
  onClick,
  variant = "default",
  size = "default",
  className = "",
  disabled = false,
  type = "button",
  animationType = "scale"
}: InteractiveButtonProps) {
  const animations = {
    bounce: {
      whileHover: { 
        scale: 1.1, 
        y: -5,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      },
      whileTap: { scale: 0.95, y: 0 }
    },
    pulse: {
      whileHover: { 
        scale: 1.05,
        boxShadow: "0 0 20px rgba(255, 107, 53, 0.4)",
        transition: { 
          boxShadow: { 
            repeat: Infinity, 
            duration: 1.5, 
            ease: "easeInOut" 
          } 
        }
      },
      whileTap: { scale: 0.98 }
    },
    glow: {
      whileHover: { 
        scale: 1.05,
        boxShadow: "0 0 25px rgba(255, 107, 53, 0.6)",
        backgroundColor: "rgba(255, 107, 53, 0.9)",
        transition: { duration: 0.3 }
      },
      whileTap: { scale: 0.95 }
    },
    scale: {
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 }
    }
  };

  return (
    <motion.div
      {...animations[animationType]}
      className="inline-block"
    >
      <Button
        onClick={onClick}
        variant={variant}
        size={size}
        disabled={disabled}
        type={type}
        className={`transition-all duration-300 ${className}`}
      >
        {children}
      </Button>
    </motion.div>
  );
}