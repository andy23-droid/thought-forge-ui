import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Brain, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <div className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">AI-Powered Context Generation</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Transform Ideas into
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Rich Context</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Give us your concept and watch as AI generates comprehensive context, background information, 
              and detailed insights to bring your ideas to life.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={onGetStarted}
              size="xl" 
              variant="gradient" 
              className="min-w-[200px]"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="xl" variant="glow">
              Watch Demo
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 bg-gradient-card border-border/50 text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Smart Analysis</h3>
              <p className="text-muted-foreground text-sm">
                Advanced AI analyzes your ideas and generates relevant context automatically
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Instant Results</h3>
              <p className="text-muted-foreground text-sm">
                Get comprehensive context generated in seconds, not hours of research
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Refinement Tools</h3>
              <p className="text-muted-foreground text-sm">
                Fine-tune and refine the generated context to match your exact needs
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}