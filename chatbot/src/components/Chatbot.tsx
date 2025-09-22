import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChatMessage, MessageProps } from "./ChatMessage";
import { QuickReplies, QuickReply } from "./QuickReplies";
import { PersonaSelector, Persona } from "./PersonaSelector";
import { ErrorHandoff, HandoffDetails } from "./ErrorHandoff";
import { Send, RotateCcw, ThumbsUp, ThumbsDown, Star, Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ChatState = "persona_selection" | "chatting" | "error_handoff" | "feedback";

interface ConversationFlow {
  [key: string]: {
    greeting: string;
    quick_replies: QuickReply[];
    follow_up_responses: { [key: string]: string };
  };
}

export const Chatbot = () => {
  const [chatState, setChatState] = useState<ChatState>("persona_selection");
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationId, setConversationId] = useState<string>("");
  const [feedback, setFeedback] = useState<{ rating?: number; helpful?: boolean }>({});
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  // Comprehensive conversation flows for each persona with contextual responses
  const conversationFlows: ConversationFlow = {
    cto: {
      greeting: "Hi! I'm here to help with technical questions. I can assist with API documentation, integration support, troubleshooting, and architecture guidance. What would you like to know?",
      quick_replies: [
        { id: "api-docs", text: "API Documentation", action: "show_api_docs" },
        { id: "integration", text: "Integration Help", action: "integration_support" },
        { id: "troubleshoot", text: "Troubleshooting", action: "technical_support" },
        { id: "architecture", text: "Architecture Guidance", action: "architecture_help" }
      ],
      follow_up_responses: {
        show_api_docs: "Great! Our API documentation is comprehensive and includes interactive examples. You can find:\n\n• RESTful API endpoints with detailed parameters\n• Authentication methods (API keys, OAuth)\n• SDKs for Python, JavaScript, Java, and more\n• Rate limiting and best practices\n\nWould you like me to guide you to specific sections or do you have questions about implementation?",
        integration_support: "I can help you integrate our AI services! Here's what I can assist with:\n\n• Step-by-step integration guides\n• Code examples in your preferred language\n• Webhook setup and testing\n• Error handling best practices\n\nWhat type of integration are you working on?",
        technical_support: "I'm here to help troubleshoot! Common issues I can help resolve:\n\n• Authentication errors\n• Rate limiting issues\n• Response format problems\n• Performance optimization\n\nCan you describe the specific issue you're experiencing?",
        architecture_help: "I can provide architecture guidance for:\n\n• Scalable AI service integration\n• Load balancing strategies\n• Caching implementations\n• Microservices patterns\n\nWhat's your current architecture setup and what challenges are you facing?"
      }
    },
    manager: {
      greeting: "Hello! I'm excited to help you explore our AI services. I can show you product demos, explain features, discuss pricing, and analyze use cases for your business. What interests you most?",
      quick_replies: [
        { id: "demo", text: "Schedule Demo", action: "schedule_demo" },
        { id: "features", text: "Explore Features", action: "show_features" },
        { id: "pricing", text: "Pricing Information", action: "pricing_info" },
        { id: "use-cases", text: "Use Cases", action: "analyze_use_cases" }
      ],
      follow_up_responses: {
        schedule_demo: "Perfect! I'd love to arrange a personalized demo for you. Our demos typically cover:\n\n• Live product walkthrough\n• Custom use case examples\n• Q&A session\n• Implementation timeline discussion\n\nWhat's the best way to reach you, and do you have any specific areas you'd like the demo to focus on?",
        show_features: "Our AI platform offers powerful features:\n\n🤖 **Natural Language Processing**\n- Advanced text analysis and understanding\n- Multi-language support\n\n🔮 **Predictive Analytics**\n- Real-time insights and forecasting\n- Custom model training\n\n⚡ **Real-time API**\n- Sub-second response times\n- 99.9% uptime SLA\n\nWhich feature would you like to explore in detail?",
        pricing_info: "We offer flexible pricing tiers to match your needs:\n\n🎯 **Starter**: $49/month\n- 10K API calls\n- Basic support\n\n🚀 **Professional**: $199/month\n- 100K API calls\n- Priority support\n- Custom integrations\n\n🏢 **Enterprise**: Custom pricing\n- Unlimited calls\n- Dedicated support\n- SLA guarantees\n\nWould you like to discuss which tier fits your expected usage?",
        analyze_use_cases: "Our AI services excel in various scenarios:\n\n📝 **Content Creation**\n- Automated writing and editing\n- SEO optimization\n\n🎯 **Customer Support**\n- Intelligent chatbots\n- Ticket classification\n\n📊 **Data Analysis**\n- Pattern recognition\n- Predictive modeling\n\nWhat industry or use case are you most interested in?"
      }
    },
    support: {
      greeting: "Hi there! I'm here to help with support inquiries, account issues, and service questions. I can also escalate complex issues to our human support team. How can I assist you today?",
      quick_replies: [
        { id: "account", text: "Account Issues", action: "account_help" },
        { id: "service-status", text: "Service Status", action: "check_status" },
        { id: "billing", text: "Billing Questions", action: "billing_help" },
        { id: "escalate", text: "Speak to Human", action: "escalate_to_human" }
      ],
      follow_up_responses: {
        account_help: "I can help with common account issues:\n\n• Password reset and login problems\n• API key regeneration\n• User permission management\n• Account settings updates\n\nWhat specific account issue are you experiencing?",
        check_status: "Let me check our service status for you:\n\n✅ **API Services**: Operational\n✅ **Dashboard**: Operational\n✅ **Documentation**: Operational\n✅ **Support System**: Operational\n\nAll systems are currently running smoothly. If you're experiencing issues, please let me know the details.",
        billing_help: "I can assist with billing inquiries:\n\n• Invoice questions and history\n• Payment method updates\n• Usage monitoring\n• Plan changes and upgrades\n\nWhat billing question can I help you with?",
        escalate_to_human: "I understand you'd like to speak with a human agent. Let me connect you with our support team who can provide personalized assistance."
      }
    },
    enterprise: {
      greeting: "Welcome! I specialize in enterprise solutions and can help with custom implementations, enterprise pricing, partnerships, and SLA requirements. What enterprise solution are you interested in?",
      quick_replies: [
        { id: "custom-solutions", text: "Custom Solutions", action: "custom_solutions" },
        { id: "enterprise-pricing", text: "Enterprise Pricing", action: "enterprise_pricing" },
        { id: "partnerships", text: "Partnerships", action: "partnership_info" },
        { id: "sla", text: "SLA Requirements", action: "sla_requirements" }
      ],
      follow_up_responses: {
        custom_solutions: "We excel at building custom enterprise solutions:\n\n🏗️ **Custom Model Development**\n- Domain-specific AI models\n- Private cloud deployment\n\n🔧 **Bespoke Integrations**\n- Legacy system integration\n- Custom API endpoints\n\n🛡️ **Enterprise Security**\n- On-premise deployment\n- Advanced encryption\n\nWhat type of custom solution are you considering?",
        enterprise_pricing: "Our enterprise pricing is designed for scale:\n\n💼 **Volume Discounts**\n- Significant savings at scale\n- Flexible payment terms\n\n📈 **Usage-Based Options**\n- Pay for what you use\n- Predictable monthly caps\n\n🤝 **Custom Agreements**\n- Multi-year contracts\n- Dedicated infrastructure\n\nShall I connect you with our enterprise sales team for a custom quote?",
        partnership_info: "We offer various partnership opportunities:\n\n🤝 **Technology Partners**\n- Joint solution development\n- Technical collaboration\n\n📊 **Reseller Programs**\n- Revenue sharing models\n- Sales support\n\n🌐 **Strategic Alliances**\n- Market expansion\n- Co-marketing opportunities\n\nWhat type of partnership interests you most?",
        sla_requirements: "Our enterprise SLAs include:\n\n⚡ **Performance Guarantees**\n- 99.99% uptime commitment\n- Sub-100ms response times\n\n🛠️ **Support Levels**\n- 24/7 dedicated support\n- 1-hour response time\n\n🔒 **Security & Compliance**\n- SOC 2 Type II certified\n- GDPR compliant\n\nWhat specific SLA requirements do you have?"
      }
    },
    general: {
      greeting: "Hello! I'm here to help with any questions about our AI services. Whether you're looking for information, want to learn more, or need assistance, I'm ready to help. What can I do for you?",
      quick_replies: [
        { id: "learn-more", text: "Learn More", action: "general_info" },
        { id: "get-started", text: "Get Started", action: "getting_started" },
        { id: "contact", text: "Contact Sales", action: "contact_sales" },
        { id: "support", text: "Need Support", action: "general_support" }
      ],
      follow_up_responses: {
        general_info: "Our AI platform provides cutting-edge artificial intelligence services:\n\n🧠 **Advanced AI Models**\n- State-of-the-art language processing\n- Computer vision capabilities\n- Predictive analytics\n\n🔌 **Easy Integration**\n- RESTful APIs\n- Multiple programming languages\n- Comprehensive documentation\n\nWhat aspect would you like to learn more about?",
        getting_started: "Getting started is easy! Here's how:\n\n1️⃣ **Sign Up**: Create your free account\n2️⃣ **Get API Keys**: Access your dashboard\n3️⃣ **Try Our APIs**: Start with our examples\n4️⃣ **Scale Up**: Upgrade as you grow\n\nWould you like me to guide you through any of these steps?",
        contact_sales: "I'd be happy to connect you with our sales team! They can help with:\n\n• Personalized product demos\n• Custom pricing quotes\n• Solution architecture\n• Implementation planning\n\nWhat's the best way to reach you?",
        general_support: "I can help you get the support you need:\n\n• Technical documentation\n• Community forums\n• Direct support tickets\n• Live chat with specialists\n\nWhat type of support are you looking for?"
      }
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (conversationId) {
      // Advanced conversation timeout simulation with escalation
      const timeout = setTimeout(() => {
        if (chatState === "chatting") {
          setChatState("error_handoff");
        }
      }, 300000); // 5-minute timeout for demo purposes
      return () => clearTimeout(timeout);
    }
  }, [conversationId, chatState]);

  const handlePersonaSelect = (persona: Persona) => {
    setSelectedPersona(persona);
    setConversationId(`conv_${Date.now()}_${persona.id}`);
    setChatState("chatting");
    
    // Add greeting message
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const flow = conversationFlows[persona.id];
        if (flow) {
          addBotMessage(flow.greeting, flow.quick_replies);
        }
      }, 2000);
    }, 500);
  };

  const addUserMessage = (content: string) => {
    const message: MessageProps = {
      content,
      sender: "user",
      timestamp: new Date(),
      status: "sent"
    };
    setMessages(prev => [...prev, message]);
  };

  const addBotMessage = (content: string, quickReplies?: QuickReply[]) => {
    const message: MessageProps = {
      content,
      sender: "bot",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
    
    if (quickReplies && quickReplies.length > 0) {
      // Show quick replies after a short delay
      setTimeout(() => {
        setMessages(prev => [...prev, {
          content: "", // Empty content for quick replies placeholder
          sender: "bot",
          timestamp: new Date()
        }]);
      }, 500);
    }
  };

  const handleSendMessage = async () => {
    if (!currentMessage.trim() || !selectedPersona) return;

    const userMessage = currentMessage.trim();
    setCurrentMessage("");
    addUserMessage(userMessage);

    // Simulate bot typing
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      
      // Simple response logic (in a real app, this would be AI-powered)
      let response = "I understand your question. Let me help you with that.";
      
      if (userMessage.toLowerCase().includes("help") || userMessage.toLowerCase().includes("support")) {
        response = "I'm here to help! Could you please provide more specific details about what you need assistance with?";
      } else if (userMessage.toLowerCase().includes("price") || userMessage.toLowerCase().includes("cost")) {
        response = "I'd be happy to discuss pricing with you. Our plans start at $49/month for basic usage. Would you like me to connect you with our sales team for a custom quote?";
      } else if (userMessage.toLowerCase().includes("demo")) {
        response = "Great! I can help you schedule a demo. Our demos are personalized and typically last 30 minutes. What's your preferred time and contact information?";
      }

      addBotMessage(response);
    }, 1500 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: QuickReply) => {
    addUserMessage(reply.text);
    
    if (!selectedPersona) return;

    const flow = conversationFlows[selectedPersona.id];
    if (flow && flow.follow_up_responses[reply.action]) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(flow.follow_up_responses[reply.action]);
      }, 1500);
    } else if (reply.action === "escalate_to_human") {
      setTimeout(() => {
        setChatState("error_handoff");
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleErrorHandoff = (details: HandoffDetails) => {
    toast({
      title: "Support Request Submitted",
      description: `Thank you ${details.name}. Our team will contact you via ${details.preferredContact} within 2-4 hours.`,
    });
    setChatState("feedback");
  };

  const handleRestart = () => {
    setMessages([]);
    setSelectedPersona(null);
    setCurrentMessage("");
    setIsTyping(false);
    setConversationId("");
    setFeedback({});
    setChatState("persona_selection");
  };

  const handleFeedback = (helpful: boolean) => {
    setFeedback(prev => ({ ...prev, helpful }));
    toast({
      title: "Thank you for your feedback!",
      description: "Your input helps us improve our service.",
    });
  };

  const handleRating = (rating: number) => {
    setFeedback(prev => ({ ...prev, rating }));
    toast({
      title: "Rating submitted",
      description: `Thank you for rating our service ${rating} star${rating !== 1 ? 's' : ''}!`,
    });
  };

  if (chatState === "persona_selection") {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <PersonaSelector onPersonaSelect={handlePersonaSelect} />
      </div>
    );
  }

  if (chatState === "error_handoff") {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <ErrorHandoff
          errorType="escalation_requested"
          onBackToChat={() => setChatState("chatting")}
          onSubmitHandoff={handleErrorHandoff}
        />
      </div>
    );
  }

  if (chatState === "feedback") {
    return (
      <div className="max-w-2xl mx-auto p-6 space-y-6 animate-fade-in-up">
        <Card>
          <CardContent className="pt-6 text-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">How was your experience?</h3>
              <p className="text-muted-foreground">Your feedback helps us improve our AI assistant.</p>
            </div>
            
            {/* Star Rating */}
            <div className="space-y-3">
              <p className="text-sm font-medium">Rate your experience:</p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button
                    key={star}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRating(star)}
                    className="p-1 hover:scale-110 transition-transform"
                  >
                    <Star 
                      className={`w-6 h-6 ${
                        feedback.rating && star <= feedback.rating 
                          ? "fill-warning text-warning" 
                          : "text-muted-foreground"
                      }`} 
                    />
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Helpful/Not Helpful */}
            <div className="space-y-3">
              <p className="text-sm font-medium">Was this conversation helpful?</p>
              <div className="flex justify-center gap-3">
                <Button
                  variant={feedback.helpful === true ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFeedback(true)}
                  className="flex items-center gap-2"
                >
                  <ThumbsUp className="w-4 h-4" />
                  Yes, helpful
                </Button>
                <Button
                  variant={feedback.helpful === false ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFeedback(false)}
                  className="flex items-center gap-2"
                >
                  <ThumbsDown className="w-4 h-4" />
                  Could be better
                </Button>
              </div>
            </div>
            
            <Button onClick={handleRestart} className="bg-gradient-ai text-primary-foreground">
              Start New Conversation
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 h-screen flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b bg-card rounded-t-xl shadow-sm">
        <div className="flex items-center gap-3">
          <div className="avatar-ai">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-semibold">AI Assistant</h3>
            <p className="text-sm text-muted-foreground">
              Specialized for {selectedPersona?.title}
            </p>
          </div>
          <Badge variant="secondary" className="ml-2">
            {selectedPersona?.badge}
          </Badge>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleRestart}
          className="flex items-center gap-2 text-xs"
        >
          <RotateCcw className="w-3 h-3" />
          Restart
        </Button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-chat-background">
        {messages.map((message, index) => (
          <div key={index}>
            <ChatMessage {...message} />
            {/* Show quick replies after bot messages */}
            {message.sender === "bot" && message.content === "" && selectedPersona && (
              <QuickReplies
                replies={conversationFlows[selectedPersona.id]?.quick_replies || []}
                onReplyClick={handleQuickReply}
              />
            )}
          </div>
        ))}
        
        {isTyping && <ChatMessage content="" sender="bot" isTyping />}
        <div ref={chatEndRef} />
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t bg-card rounded-b-xl">
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <Textarea
              ref={textareaRef}
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="chat-input"
              rows={1}
              disabled={isTyping}
            />
          </div>
          <Button
            onClick={handleSendMessage}
            disabled={!currentMessage.trim() || isTyping}
            className="bg-gradient-ai hover:opacity-90 text-primary-foreground p-3"
            size="sm"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};