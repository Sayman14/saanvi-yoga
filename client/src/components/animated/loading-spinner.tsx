import { motion } from "framer-motion";
import ChakraWheel from "./chakra-wheel";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  message?: string;
  className?: string;
}

export default function LoadingSpinner({ 
  size = "md", 
  message = "Loading...",
  className = "" 
}: LoadingSpinnerProps) {
  const sizes = {
    sm: 40,
    md: 60,
    lg: 80
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex flex-col items-center justify-center space-y-4 ${className}`}
    >
      <div className="relative">
        <ChakraWheel 
          size={sizes[size]} 
          speed={25} 
          className="text-orange-500" 
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        </motion.div>
      </div>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`text-gray-600 font-medium ${textSizes[size]}`}
      >
        {message}
      </motion.p>
    </motion.div>
  );
}