"use client";

import * as React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function PromptInput({
  value,
  onChange,
  placeholder = "Enter your prompt here...",
  disabled = false,
}: PromptInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="prompt" className="text-base font-medium">
        Describe the code you want to generate
      </Label>
      <Textarea
        id="prompt"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="min-h-[150px] text-base resize-y"
      />
      <p className="text-sm text-muted-foreground">
        Be specific about programming language, frameworks, and functionality.
      </p>
    </div>
  );
}