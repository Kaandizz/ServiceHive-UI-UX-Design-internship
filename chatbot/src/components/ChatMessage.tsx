import { useState, useEffect } from "react";
import { User, Bot, Check, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MessageProps {
  content: string;
  sender: "user" | "bot";
  timestamp?: Date;
  status?: "sending" | "sent" | "error";
  isTyping?: boolean;
}

export const ChatMessage = ({ content, sender, timestamp, status, isTyping }: MessageProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (isTyping) {
    return (
      <div className="flex items-start gap-3 mb-4 animate-fade-in-up">
        <div className="avatar-ai">
          <Bot size={16} />
        </div>
        <div className="typing-indicator bg-card border rounded-2xl rounded-bl-md shadow-chat">
          <div className="flex space-x-1">
            <div className="typing-dot animate-typing" style={{ animationDelay: "0ms" }}></div>
            <div className="typing-dot animate-typing" style={{ animationDelay: "200ms" }}></div>
            <div className="typing-dot animate-typing" style={{ animationDelay: "400ms" }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-start gap-3 mb-4 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        sender === "user" ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar */}
      <div className={cn(
        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
        sender === "user" 
          ? "bg-gradient-ai text-primary-foreground shadow-md" 
          : "avatar-ai"
      )}>
        {sender === "user" ? <User size={16} /> : <Bot size={16} />}
      </div>

      {/* Message Content */}
      <div className={cn(
        "max-w-[80%] animate-message-in",
        sender === "user" ? "flex flex-col items-end" : "flex flex-col items-start"
      )}>
        <div className={cn(
          "px-4 py-3 rounded-2xl shadow-chat break-words",
          sender === "user" 
            ? "chat-bubble-user" 
            : "chat-bubble-bot"
        )}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
        </div>

        {/* Timestamp and Status */}
        <div className={cn(
          "flex items-center gap-1 mt-1 text-xs text-muted-foreground",
          sender === "user" ? "flex-row-reverse" : "flex-row"
        )}>
          {timestamp && (
            <span>
              {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          )}
          {sender === "user" && status && (
            <div className="flex items-center">
              {status === "sending" && <Clock size={12} className="text-muted-foreground" />}
              {status === "sent" && <Check size={12} className="text-success" />}
              {status === "error" && <span className="text-destructive">!</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};