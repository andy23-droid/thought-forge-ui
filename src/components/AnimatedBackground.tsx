import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const { resolvedTheme } = useTheme();
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; speed: number }>>([]);
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number; intensity: number }>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay mounting to prevent animation glitches on page load
    const mountTimer = setTimeout(() => {
      setMounted(true);
      
      // Generate enhanced bubbles with more variety
      const newBubbles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 120 + 40,
        delay: Math.random() * 8 + 1, // Add minimum delay to prevent instant start
        speed: Math.random() * 4 + 6,
      }));
      setBubbles(newBubbles);

      // Generate more diverse stars for galaxy effect
      const newStars = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 4 + 0.5, // Add minimum delay
        intensity: Math.random() * 0.8 + 0.2,
      }));
      setStars(newStars);
    }, 200);

    return () => clearTimeout(mountTimer);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {isDark ? (
        <>
          {/* Galaxy stars with twinkling effect */}
          {stars.map((star) => (
            <motion.div
              key={`star-${star.id}`}
              className="absolute bg-white rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: '2px',
                height: '2px',
              }}
              animate={{
                opacity: [star.intensity * 0.3, star.intensity, star.intensity * 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Galaxy nebula bubbles with enhanced motion */}
          {bubbles.map((bubble) => (
            <motion.div
              key={`dark-bubble-${bubble.id}`}
              className="absolute rounded-full"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                background: `radial-gradient(circle, 
                  hsl(217 91% 60% / 0.15) 0%, 
                  hsl(271 91% 65% / 0.1) 40%, 
                  transparent 70%)`,
                filter: 'blur(20px)',
              }}
              animate={{
                y: [0, -30, 0],
                x: [-15, 15, -15],
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: bubble.speed,
                repeat: Infinity,
                delay: bubble.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Additional cosmic dust particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute bg-primary/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      ) : (
        <>
          {/* Light mode floating elements */}
          {bubbles.slice(0, 12).map((bubble) => (
            <motion.div
              key={`light-bubble-${bubble.id}`}
              className="absolute rounded-full"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                background: `radial-gradient(circle, 
                  hsl(217 91% 60% / 0.08) 0%, 
                  hsl(271 91% 65% / 0.05) 50%, 
                  transparent 80%)`,
                filter: 'blur(15px)',
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-12, 12, -12],
                opacity: [0.03, 0.12, 0.03],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: bubble.speed + 2,
                repeat: Infinity,
                delay: bubble.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Light mode soft particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`light-particle-${i}`}
              className="absolute bg-accent/5 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 3}px`,
                height: `${Math.random() * 8 + 3}px`,
              }}
              animate={{
                y: [0, -15, 0],
                x: [0, 8, 0],
                opacity: [0, 0.2, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: Math.random() * 6 + 8,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}