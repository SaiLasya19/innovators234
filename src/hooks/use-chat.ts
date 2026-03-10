import { useState, useRef, useCallback } from "react";
import { streamChat, type Msg } from "@/lib/chat-stream";
import { toast } from "sonner";

export function useChat() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const abortRef = useRef(false);

  const send = useCallback(async (input: string) => {
    if (!input.trim() || isLoading) return;
    const userMsg: Msg = { role: "user", content: input.trim() };
    const allMessages = [...messages, userMsg];
    setMessages(allMessages);
    setIsLoading(true);
    abortRef.current = false;

    let assistantSoFar = "";
    const upsertAssistant = (chunk: string) => {
      if (abortRef.current) return;
      assistantSoFar += chunk;
      setMessages(prev => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantSoFar } : m);
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      await streamChat({
        messages: allMessages,
        onDelta: upsertAssistant,
        onDone: () => setIsLoading(false),
        onError: (err) => {
          toast.error(err);
          setIsLoading(false);
        },
      });
    } catch (e) {
      console.error(e);
      toast.error("Failed to connect to AI service");
      setIsLoading(false);
    }
  }, [messages, isLoading]);

  const clearChat = useCallback(() => {
    setMessages([]);
  }, []);

  return { messages, isLoading, send, clearChat };
}
