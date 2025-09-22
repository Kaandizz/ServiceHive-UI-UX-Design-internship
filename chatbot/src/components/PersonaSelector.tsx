import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Headphones, Building, Target, Zap, FileText } from "lucide-react";
import { ConversationFlow } from "./ConversationFlow";

export interface Persona {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
  color: string;
  use_cases: string[];
}

interface PersonaSelectorProps {
  onPersonaSelect: (persona: Persona) => void;
}

const personas: Persona[] = [
  {
    id: "cto",
    title: "CTO / Technical Leader",
    description: "Seeking API documentation, integration support, and technical troubleshooting",
    icon: <Code className="w-6 h-6" />,
    badge: "Technical",
    color: "bg-accent",
    use_cases: ["API Documentation", "Integration Support", "Technical Issues", "Architecture Guidance"]
  },
  {
    id: "manager",
    title: "Product Manager",
    description: "Looking to schedule demos, explore features, and understand pricing",
    icon: <Target className="w-6 h-6" />,
    badge: "Business",
    color: "bg-primary",
    use_cases: ["Product Demos", "Feature Exploration", "Pricing Information", "Use Case Analysis"]
  },
  {
    id: "support",
    title: "Support Team",
    description: "Need help with customer inquiries, account issues, and service questions",
    icon: <Headphones className="w-6 h-6" />,
    badge: "Support",
    color: "bg-success",
    use_cases: ["Customer Inquiries", "Account Issues", "Service Status", "Escalation"]
  },
  {
    id: "enterprise",
    title: "Enterprise Client",
    description: "Interested in enterprise solutions, custom implementations, and partnerships",
    icon: <Building className="w-6 h-6" />,
    badge: "Enterprise",
    color: "bg-warning",
    use_cases: ["Custom Solutions", "Enterprise Pricing", "Partnerships", "SLA Requirements"]
  }
];

export const PersonaSelector = ({ onPersonaSelect }: PersonaSelectorProps) => {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 mx-auto bg-gradient-ai rounded-full flex items-center justify-center mb-4 shadow-floating">
          <Zap className="w-8 h-8 text-primary-foreground" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-ai bg-clip-text text-transparent">
          Welcome to AI Service Assistant
        </h2>
        <p className="text-muted-foreground">
          I'm here to help! Please select your role so I can provide personalized assistance.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {personas.map((persona) => (
          <Card 
            key={persona.id} 
            className="cursor-pointer hover:scale-105 transition-all duration-200 hover:shadow-floating border-border/50 hover:border-primary/30"
            onClick={() => onPersonaSelect(persona)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${persona.color} text-white`}>
                  {persona.icon}
                </div>
                <Badge variant="secondary" className="text-xs">
                  {persona.badge}
                </Badge>
              </div>
              <CardTitle className="text-lg">{persona.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {persona.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  I can help with:
                </p>
                <div className="flex flex-wrap gap-1">
                  {persona.use_cases.slice(0, 3).map((useCase, index) => (
                    <Badge key={index} variant="outline" className="text-xs px-2 py-0.5">
                      {useCase}
                    </Badge>
                  ))}
                  {persona.use_cases.length > 3 && (
                    <Badge variant="outline" className="text-xs px-2 py-0.5">
                      +{persona.use_cases.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <ConversationFlow />
      </div>

      <div className="text-center mt-6">
        <Button 
          variant="outline" 
          onClick={() => onPersonaSelect({ 
            id: "general", 
            title: "General Inquiry", 
            description: "I have a general question or inquiry",
            icon: <Users className="w-6 h-6" />,
            badge: "General",
            color: "bg-secondary",
            use_cases: ["General Questions", "Information Request", "Other"]
          })}
          className="text-sm"
        >
          I have a general inquiry
        </Button>
      </div>
    </div>
  );
};