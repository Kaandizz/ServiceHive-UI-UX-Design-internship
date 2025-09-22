import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, MessageCircle, Mail, Phone, Clock, User } from "lucide-react";
import { useState } from "react";

interface ErrorHandoffProps {
  errorType: "timeout" | "not_understood" | "technical_issue" | "escalation_requested";
  onBackToChat: () => void;
  onSubmitHandoff: (details: HandoffDetails) => void;
}

export interface HandoffDetails {
  name: string;
  email: string;
  phone?: string;
  priority: "low" | "medium" | "high" | "urgent";
  description: string;
  preferredContact: "email" | "phone" | "chat";
}

export const ErrorHandoff = ({ errorType, onBackToChat, onSubmitHandoff }: ErrorHandoffProps) => {
  const [handoffDetails, setHandoffDetails] = useState<HandoffDetails>({
    name: "",
    email: "",
    phone: "",
    priority: "medium",
    description: "",
    preferredContact: "email"
  });

  const errorMessages = {
    timeout: {
      title: "Response Timeout",
      description: "I'm taking longer than usual to respond. Let me connect you with a human agent.",
      icon: <Clock className="w-6 h-6 text-warning" />
    },
    not_understood: {
      title: "I Need Help Understanding",
      description: "I'm having trouble understanding your request. A human agent can better assist you.",
      icon: <MessageCircle className="w-6 h-6 text-primary" />
    },
    technical_issue: {
      title: "Technical Difficulty",
      description: "I'm experiencing technical issues. Let me connect you with our support team.",
      icon: <AlertTriangle className="w-6 h-6 text-destructive" />
    },
    escalation_requested: {
      title: "Connecting to Human Agent",
      description: "As requested, I'll connect you with one of our specialists who can provide detailed assistance.",
      icon: <User className="w-6 h-6 text-success" />
    }
  };

  const currentError = errorMessages[errorType];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (handoffDetails.name && handoffDetails.email && handoffDetails.description) {
      onSubmitHandoff(handoffDetails);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in-up">
      {/* Error Status */}
      <Card className="border-border/50">
        <CardHeader className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 p-2 rounded-full bg-muted">
            {currentError.icon}
          </div>
          <CardTitle className="text-xl">{currentError.title}</CardTitle>
          <CardDescription className="text-base">
            {currentError.description}
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Handoff Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            Connect with Human Support
          </CardTitle>
          <CardDescription>
            Please provide your details so our team can assist you effectively.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name *
                </label>
                <Input
                  id="name"
                  value={handoffDetails.name}
                  onChange={(e) => setHandoffDetails(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your full name"
                  required
                  className="focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={handoffDetails.email}
                  onChange={(e) => setHandoffDetails(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@company.com"
                  required
                  className="focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number (Optional)
              </label>
              <Input
                id="phone"
                type="tel"
                value={handoffDetails.phone}
                onChange={(e) => setHandoffDetails(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="+1 (555) 123-4567"
                className="focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>

            {/* Priority Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Priority Level</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: "low", label: "Low", color: "bg-muted" },
                  { value: "medium", label: "Medium", color: "bg-primary" },
                  { value: "high", label: "High", color: "bg-warning" },
                  { value: "urgent", label: "Urgent", color: "bg-destructive" }
                ].map((priority) => (
                  <Badge
                    key={priority.value}
                    variant={handoffDetails.priority === priority.value ? "default" : "outline"}
                    className={`cursor-pointer transition-all duration-200 ${
                      handoffDetails.priority === priority.value ? priority.color : ""
                    }`}
                    onClick={() => setHandoffDetails(prev => ({ 
                      ...prev, 
                      priority: priority.value as HandoffDetails["priority"] 
                    }))}
                  >
                    {priority.label}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Preferred Contact Method */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Preferred Contact Method</label>
              <div className="flex gap-2">
                {[
                  { value: "email", label: "Email", icon: <Mail className="w-4 h-4" /> },
                  { value: "phone", label: "Phone", icon: <Phone className="w-4 h-4" /> },
                  { value: "chat", label: "Live Chat", icon: <MessageCircle className="w-4 h-4" /> }
                ].map((method) => (
                  <Button
                    key={method.value}
                    type="button"
                    variant={handoffDetails.preferredContact === method.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setHandoffDetails(prev => ({ 
                      ...prev, 
                      preferredContact: method.value as HandoffDetails["preferredContact"] 
                    }))}
                    className="flex items-center gap-2"
                  >
                    {method.icon}
                    {method.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Describe your inquiry *
              </label>
              <Textarea
                id="description"
                value={handoffDetails.description}
                onChange={(e) => setHandoffDetails(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Please describe what you need help with, including any specific details or context..."
                rows={4}
                required
                className="focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-gradient-ai hover:opacity-90 text-primary-foreground"
                disabled={!handoffDetails.name || !handoffDetails.email || !handoffDetails.description}
              >
                Connect with Agent
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onBackToChat}
                className="px-6"
              >
                Back to Chat
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Expected Response Time */}
      <Card className="bg-primary-light border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium text-primary">Expected Response Time</p>
              <p className="text-sm text-primary/70">
                Our team typically responds within 2-4 hours during business hours (9 AM - 6 PM EST)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};