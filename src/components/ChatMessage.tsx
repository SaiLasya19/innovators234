import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import type { Msg } from "@/lib/chat-stream";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: Msg;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex gap-3 animate-fade-in", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <Bot className="w-4 h-4 text-primary-foreground" />
        </div>
      )}
      <div
        className={cn(
          "max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-chat-user text-chat-user-foreground rounded-br-md"
            : "bg-chat-ai text-chat-ai-foreground rounded-bl-md"
        )}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="prose prose-sm dark:prose-invert max-w-none prose-p:my-1 prose-headings:my-2 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5 prose-code:bg-secondary prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-pre:bg-secondary prose-pre:rounded-lg">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
          <User className="w-4 h-4 text-secondary-foreground" />
        </div>
      )}
    </div>
  );
}
