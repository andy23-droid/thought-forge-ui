import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Sparkles, RefreshCw, Copy, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContextGeneratorProps {
  onAuthRequired: () => void;
}

export function ContextGenerator({ onAuthRequired }: ContextGeneratorProps) {
  const [idea, setIdea] = useState("");
  const [generatedContext, setGeneratedContext] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!idea.trim()) {
      toast({
        description: "Please enter your idea first.",
        variant: "destructive",
      });
      return;
    }

    // Trigger auth required for demo purposes
    onAuthRequired();
  };

  const handleRefine = () => {
    if (!generatedContext) return;
    
    setIsGenerating(true);
    // Simulate refinement
    setTimeout(() => {
      setGeneratedContext(prev => prev + "\n\nRefined version with enhanced details...");
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContext);
    toast({
      description: "Context copied to clipboard!",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Input Section */}
      <Card className="p-8 bg-gradient-card border-border/50">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Share Your Idea</h2>
            <p className="text-muted-foreground">
              Describe your concept and let AI generate rich context around it
            </p>
          </div>
          
          <div className="space-y-4">
            <Textarea
              placeholder="Enter your idea here... (e.g., 'A mobile app that helps people find local hiking trails based on their fitness level')"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="min-h-[120px] text-base bg-background/50 border-border focus:border-primary/50 resize-none"
            />
            
            <div className="flex justify-center">
              <Button
                onClick={handleGenerate}
                size="xl"
                variant="gradient"
                disabled={isGenerating}
                className="min-w-[200px]"
              >
                <Sparkles className="w-5 h-5" />
                Generate Context
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Output Section */}
      {generatedContext && (
        <Card className="p-8 bg-gradient-card border-border/50">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">Generated Context</h3>
              <div className="flex gap-2">
                <Button
                  onClick={handleRefine}
                  variant="glow"
                  size="sm"
                  disabled={isGenerating}
                >
                  <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                  Refine
                </Button>
                <Button onClick={handleCopy} variant="secondary" size="sm">
                  <Copy className="w-4 h-4" />
                  Copy
                </Button>
                <Button variant="secondary" size="sm">
                  <Download className="w-4 h-4" />
                  Export
                </Button>
              </div>
            </div>
            
            <div className="bg-background/50 rounded-lg p-6 border border-border/50">
              <pre className="whitespace-pre-wrap text-foreground font-mono text-sm leading-relaxed">
                {generatedContext}
              </pre>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}