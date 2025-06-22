import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LotusPetals from "./lotus-petals";
import ChakraWheel from "./chakra-wheel";
import MandalaPattern from "./mandala-pattern";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  component: "lotus" | "chakra" | "mandala";
  delay: number;
}

export default function DynamicBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const createElements = () => {
      const newElements: FloatingElement[] = [];
      for (let i = 0; i < 8; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 40 + Math.random() * 60,
          component: ["lotus", "chakra", "mandala"][Math.floor(Math.random() * 3)] as any,
          delay: Math.random() * 2
        });
      }
      setElements(newElements);
    };

    createElements();
  }, []);

  const renderComponent = (element: FloatingElement) => {
    const props = { size: element.size, className: "opacity-10" };
    switch (element.component) {
      case "lotus":
        return <LotusPetals count={3} {...props} />;
      case "chakra":
        return <ChakraWheel speed={15} {...props} />;
      case "mandala":
        return <MandalaPattern {...props} />;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        >
          {renderComponent(element)}
        </motion.div>
      ))}
    </div>
  );
}