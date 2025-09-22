import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface QuickReply {
  id: string;
  text: string;
  action: string;
}

interface QuickRepliesProps {
  replies: QuickReply[];
  onReplyClick: (reply: QuickReply) => void;
  className?: string;
}

export const QuickReplies = ({ replies, onReplyClick, className }: QuickRepliesProps) => {
  return (
    <div className={cn("flex flex-wrap gap-2 mb-4 animate-fade-in-up", className)}>
      {replies.map((reply, index) => (
        <Button
          key={reply.id}
          variant="outline"
          size="sm"
          onClick={() => onReplyClick(reply)}
          className={cn(
            "quick-reply-button animate-bounce-subtle text-xs h-8",
            "hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-ring focus:ring-offset-2"
          )}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {reply.text}
        </Button>
      ))}
    </div>
  );
};