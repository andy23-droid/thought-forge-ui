import { Button } from "@/components/ui/button";
import { Brain, Sparkles } from "lucide-react";

interface HeaderProps {
  onSignIn: () => void;
  onSignUp: () => void;
  isAuthenticated: boolean;
  onSignOut?: () => void;
}

export function Header({ onSignIn, onSignUp, isAuthenticated, onSignOut }: HeaderProps) {
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ThoughtForge</h1>
              <p className="text-xs text-muted-foreground">AI Context Generator</p>
            </div>
          </div>
          
          <nav className="flex items-center space-x-4">
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