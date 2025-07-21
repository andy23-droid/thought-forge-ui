import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Brain, Sparkles, Users, Globe, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  const cardVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 12
      }
    }
  };

  const stats = [
    { label: "Active Users", value: "10K+", icon: Users },
    { label: "Contexts Generated", value: "50K+", icon: Brain },
    { label: "Countries", value: "25+", icon: Globe },
    { label: "Avg. Processing Time", value: "<30s", icon: Clock }
  ];

  return (
    <div className="relative min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Main Heading */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.div 
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 backdrop-blur-sm">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-sm text-primary font-medium">AI-Powered Context Generation</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
              variants={itemVariants}
            >
              Transform Ideas into
              <motion.span 
                className="bg-gradient-primary bg-clip-text text-transparent block md:inline"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {" "}Rich Context
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Harness the power of advanced AI to transform your simple ideas into comprehensive, 
              detailed contexts with background information, insights, and actionable intelligence. 
              Perfect for research, content creation, and strategic planning.
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="flex justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={onGetStarted}
                size="xl" 
                variant="gradient" 
                className="min-w-[200px] group"
              >
                Get Started
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="xl" variant="glow">
                <Star className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mt-16"
            variants={containerVariants}
          >
            {[
              {
                icon: Brain,
                title: "Smart Analysis",
                description: "Advanced AI analyzes your ideas and generates relevant context automatically with deep learning algorithms",
                color: "primary"
              },
              {
                icon: Zap,
                title: "Instant Results",
                description: "Get comprehensive context generated in seconds, not hours of research with lightning-fast processing",
                color: "accent"
              },
              {
                icon: Sparkles,
                title: "Refinement Tools",
                description: "Fine-tune and refine the generated context to match your exact needs with powerful editing tools",
                color: "primary"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
                className="group"
              >
                <Card className="p-6 bg-gradient-card border-border/50 text-center space-y-4 h-full hover:shadow-glow transition-all duration-300">
                  <motion.div 
                    className="flex justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`w-12 h-12 bg-${feature.color}/10 rounded-lg flex items-center justify-center group-hover:bg-${feature.color}/20 transition-colors`}>
                      <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                    </div>
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}