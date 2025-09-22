import { Chatbot } from "@/components/Chatbot";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Users, MessageCircle, Zap, CheckCircle, Star, Headphones, Code } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Hero Section */}
      <div className="bg-gradient-ai text-primary-foreground py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Service Chatbot Design
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Experience our intelligent conversational AI designed for seamless onboarding, 
            product exploration, and comprehensive client support across multiple personas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground hover:bg-white/30">
              <Users className="w-4 h-4 mr-2" />
              Multi-Persona Support
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground hover:bg-white/30">
              <MessageCircle className="w-4 h-4 mr-2" />
              Intelligent Conversations
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground hover:bg-white/30">
              <Zap className="w-4 h-4 mr-2" />
              Real-time Responses
            </Badge>
          </div>
        </div>
      </div>

      {/* Design Features */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-floating transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Persona-Based Design</CardTitle>
              <CardDescription>
                Tailored conversation flows for CTOs, Managers, Support Teams, and Enterprise clients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Code className="w-4 h-4 text-accent" />
                  <span>Technical Leader Support</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-warning" />
                  <span>Product Demo Flows</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Headphones className="w-4 h-4 text-success" />
                  <span>Support Escalation</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-floating transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>Modern Chat Interface</CardTitle>
              <CardDescription>
                Beautiful chat bubbles with typing indicators, quick replies, and micro-interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Accessible Design</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Mobile Responsive</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Smooth Animations</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-floating transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-success" />
              </div>
              <CardTitle>Smart Conversation Flow</CardTitle>
              <CardDescription>
                Error handling, human handoff, and feedback collection for optimal user experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Fallback Handling</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Human Agent Handoff</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Feedback System</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* UI Concept Note */}
        <Card className="mb-8 bg-primary-light border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">UI Concept & Design Rationale</CardTitle>
          </CardHeader>
          <CardContent className="text-primary/90">
            <p className="leading-relaxed">
              This chatbot interface leverages persona-based conversation design to deliver contextually relevant experiences. 
              The AI-blue accent palette (#3B82F6) creates trust and professionalism, while the clean typography ensures 
              accessibility across devices. Micro-interactions like typing indicators and message animations provide natural 
              conversation flow feedback. The quick-reply system reduces cognitive load, and the human handoff mechanism 
              ensures seamless escalation when AI capabilities are exceeded. The responsive design adapts to mobile and 
              desktop contexts while maintaining visual hierarchy and touch-friendly interaction targets for optimal accessibility.
            </p>
          </CardContent>
        </Card>

        {/* Main Chatbot Interface */}
        <div className="bg-white rounded-2xl shadow-floating overflow-hidden">
          <Chatbot />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-card border-t mt-12 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground mb-4">
            Assignment 2: AI Service Chatbot Design - UX Research, Persona Development & Modern UI Implementation
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>✅ Persona-based conversation flows</span>
            <span>✅ Modern chat interface design</span>
            <span>✅ Error handling & human handoff</span>
            <span>✅ Accessibility features</span>
            <span>✅ Micro-interactions & animations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;