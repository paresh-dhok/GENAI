"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import PromptInput from "./prompt-input";
import CodeOutput from "./code-output";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { generateCode } from "@/lib/api";

export default function CodeGenerator() {
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handlePromptChange = (value: string) => {
    setPrompt(value);
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt to generate code.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      const result = await generateCode(prompt);
      setGeneratedCode(result);
      toast({
        title: "Success",
        description: "Code generated successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <PromptInput 
          value={prompt} 
          onChange={handlePromptChange}
          placeholder="Create a React component that..."
          disabled={isGenerating}
        />
        <div className="mt-4 flex justify-end">
          <Button 
            onClick={handleGenerate} 
            disabled={isGenerating || !prompt.trim()}
            size="lg"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Code"
            )}
          </Button>
        </div>
      </Card>
      
      {(generatedCode || isGenerating) && (
        <Card className="p-6">
          <CodeOutput 
            code={generatedCode} 
            isLoading={isGenerating} 
          />
        </Card>
      )}
    </div>
  );
}