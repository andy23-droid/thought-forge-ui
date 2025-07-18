import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ContextGenerator } from "@/components/ContextGenerator";
import { AuthModal } from "@/components/AuthModal";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showGenerator, setShowGenerator] = useState(false);
  const { toast } = useToast();

  const handleAuthRequired = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    } else {
      // Simulate context generation for authenticated users
      setTimeout(() => {
        toast({
          title: "Context Generated!",
          description: "Your AI-powered context has been created successfully.",
        });
      }, 2000);
    }
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setShowGenerator(true);
    toast({
      title: "Welcome!",
      description: "You're now signed in and ready to generate context.",
    });
  };

  const handleGetStarted = () => {
    setShowGenerator(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setShowGenerator(false);
    toast({
      description: "You've been signed out successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onSignIn={() => setShowAuthModal(true)}
        onSignUp={() => setShowAuthModal(true)}
        isAuthenticated={isAuthenticated}
        onSignOut={handleSignOut}
      />
      
      <main className="pb-16">
        {!showGenerator ? (
          <HeroSection onGetStarted={handleGetStarted} />
        ) : (
          <div className="container mx-auto px-4 py-16">
            <ContextGenerator onAuthRequired={handleAuthRequired} />
          </div>
        )}
      </main>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default Index;
