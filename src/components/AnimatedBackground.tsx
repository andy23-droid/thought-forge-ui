import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const { theme } = useTheme();
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate bubbles
    const newBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 50,
      delay: Math.random() * 6,
    }));
    setBubbles(newBubbles);

    // Generate stars for dark mode
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="galaxy-background">
      {theme === "dark" && (
        <>
          {/* Galaxy stars */}
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Galaxy bubbles */}
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: bubble.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      )}

      {theme === "light" && (
        <>
          {/* Light mode floating elements */}
          {bubbles.slice(0, 8).map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute rounded-full bg-gradient-to-r from-primary/10 to-accent/10"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
              }}
              animate={{
                y: [-15, 15, -15],
                x: [-8, 8, -8],
                opacity: [0.05, 0.15, 0.05],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: bubble.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}