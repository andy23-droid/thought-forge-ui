import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
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

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Strategist",
      company: "TechFlow Inc.",
      content: "ContextGen transformed how we approach content planning. What used to take hours of research now happens in minutes with incredibly detailed results.",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Research Director",
      company: "Innovation Labs",
      content: "The depth and accuracy of context generation is remarkable. It's like having a team of researchers at your fingertips, available 24/7.",
      avatar: "MJ",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Manager",
      company: "Growth Studio",
      content: "Our campaign planning efficiency increased by 300%. The AI understands context nuances that even our best strategists sometimes miss.",
      avatar: "ER",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Product Manager",
      company: "StartupCo",
      content: "From idea validation to market research, ContextGen provides comprehensive insights that help us make better product decisions faster.",
      avatar: "DK",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Academic Researcher",
      company: "University Labs",
      content: "The research capabilities are outstanding. It helps me explore topics from angles I hadn't considered, speeding up my literature reviews significantly.",
      avatar: "LT",
      rating: 5
    },
    {
      name: "James Wright",
      role: "Business Analyst",
      company: "ConsultPro",
      content: "Client presentations are now backed by rich, comprehensive context. Our clients are impressed with the depth of insights we can provide.",
      avatar: "JW",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex justify-center">
              <div className="bg-primary/10 border border-primary/20 rounded-full px-4 py-2 backdrop-blur-sm">
                <span className="text-sm text-primary font-medium">Testimonials</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their workflow with ContextGen
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
              className="group"
            >
              <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 h-full">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <motion.div 
                    className="flex justify-between items-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Quote className="w-8 h-8 text-primary/30" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          <Star className="w-4 h-4 fill-primary text-primary" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border/30">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <Avatar className="w-10 h-10">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}