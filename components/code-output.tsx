"use client";

import { useState, useEffect } from "react";
import { Copy, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface CodeOutputProps {
  code: string;
  isLoading?: boolean;
}

export default function CodeOutput({ code, isLoading = false }: CodeOutputProps) {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      toast({
        title: "Copied!",
        description: "Code copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy code to clipboard",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-medium">Generated Code</h3>
        {!isLoading && code && (
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1"
            onClick={copyToClipboard}
            disabled={isCopied || isLoading}
          >
            {isCopied ? (
              <>
                <Check className="h-4 w-4" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy</span>
              </>
            )}
          </Button>
        )}
      </div>
      
      <div
        className={cn(
          "rounded-md border font-mono text-sm overflow-hidden",
          isLoading && "min-h-[200px] flex items-center justify-center"
        )}
      >
        {isLoading ? (
          <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
            <Loader2 className="h-8 w-8 animate-spin" />
            <p>Generating code...</p>
          </div>
        ) : code ? (
          <pre className="p-4 overflow-auto max-h-[500px] whitespace-pre-wrap">
            <code>{code}</code>
          </pre>
        ) : (
          <div className="p-4 text-muted-foreground text-center">
            Your generated code will appear here.
          </div>
        )}
      </div>
    </div>
  );
}