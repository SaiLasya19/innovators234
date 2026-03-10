import { Sparkles } from "lucide-react";

const suggestions = [
  "Explain quantum computing in simple terms",
  "Write a Python function to sort a list",
  "What are the latest trends in AI?",
  "Help me brainstorm startup ideas",
];

interface WelcomeScreenProps {
  onSuggestionClick: (text: string) => void;
}

export function WelcomeScreen({ onSuggestionClick }: WelcomeScreenProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 animate-fade-in">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
        <Sparkles className="w-8 h-8 text-primary" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Innovators AI</h1>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        Your intelligent assistant powered by Google Gemini. Ask anything to get started.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg w-full">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => onSuggestionClick(s)}
            className="text-left text-sm px-4 py-3 rounded-xl border border-border bg-surface-elevated hover:bg-muted transition-colors"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
