export function TypingIndicator() {
  return (
    <div className="flex gap-3 animate-fade-in">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-primary-foreground animate-pulse-glow" />
      </div>
      <div className="bg-chat-ai rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5 items-center">
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-pulse-glow" style={{ animationDelay: "0ms" }} />
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-pulse-glow" style={{ animationDelay: "300ms" }} />
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-pulse-glow" style={{ animationDelay: "600ms" }} />
      </div>
    </div>
  );
}
