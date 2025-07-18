import { Button } from "@/components/ui/button";
import { Brain, Sparkles, Home } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";

interface HeaderProps {
  onSignIn: () => void;
  onSignUp: () => void;
  isAuthenticated: boolean;
  onSignOut?: () => void;
  onBackToHome?: () => void;
  showBackButton?: boolean;
}

export function Header({ onSignIn, onSignUp, isAuthenticated, onSignOut, onBackToHome, showBackButton }: HeaderProps) {
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            {showBackButton && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onBackToHome}
                className="mr-2"
              >
                <Home className="w-4 h-4" />
              </Button>
            )}
            <motion.div 
              className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg cursor-pointer"
              whileHover={{ 
                rotate: 360,
                transition: { duration: 0.6, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Brain className="w-6 h-6 text-primary-foreground" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ThoughtForge</h1>
              <p className="text-xs text-muted-foreground">AI Context Generator</p>
            </div>
          </div>
          
          <nav className="flex items-center space-x-4">
            <ThemeToggle />
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Pro Plan</span>
                </div>
                <Button variant="ghost" onClick={onSignOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" onClick={onSignIn}>
                  Sign In
                </Button>
                <Button variant="gradient" onClick={onSignUp}>
                  Sign Up
                </Button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}