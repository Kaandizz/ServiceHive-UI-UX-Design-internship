import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitBranch, ArrowRight } from "lucide-react";

export const ConversationFlow = () => {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GitBranch className="w-5 h-5 text-primary" />
          Conversation Flow Diagram
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Mermaid Diagram */}
          <div className="bg-muted rounded-lg p-4">
            <h3 className="font-medium mb-4">Interactive Flow Map</h3>
            
            {/* Visual Flow Representation */}
            <div className="grid gap-4">
              {/* Start */}
              <div className="text-center">
                <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm">
                  User Arrives
                </div>
              </div>
              
              <ArrowRight className="mx-auto text-muted-foreground" size={20} />
              
              {/* Persona Selection */}
              <div className="text-center">
                <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm">
                  Persona Selection
                </div>
              </div>
              
              <ArrowRight className="mx-auto text-muted-foreground" size={20} />
              
              {/* Personas */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-center">
                {['CTO', 'Manager', 'Support', 'Enterprise', 'General'].map((persona) => (
                  <div key={persona} className="bg-accent text-accent-foreground px-3 py-1 rounded text-xs">
                    {persona}
                  </div>
                ))}
              </div>
              
              <ArrowRight className="mx-auto text-muted-foreground" size={20} />
              
              {/* Chat Interface */}
              <div className="text-center">
                <div className="inline-block bg-success text-success-foreground px-4 py-2 rounded-full text-sm">
                  Main Chat Interface
                </div>
              </div>
              
              <ArrowRight className="mx-auto text-muted-foreground" size={20} />
              
              {/* Resolution Paths */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-primary/10 text-primary px-3 py-2 rounded text-sm">
                  ✅ Issue Resolved
                  <br />↓<br />
                  Feedback Collection
                </div>
                <div className="bg-warning/10 text-warning px-3 py-2 rounded text-sm">
                  🔄 Needs Escalation
                  <br />↓<br />
                  Human Handoff
                </div>
                <div className="bg-destructive/10 text-destructive px-3 py-2 rounded text-sm">
                  ❌ Error/Timeout
                  <br />↓<br />
                  Error Handling
                </div>
              </div>
            </div>
          </div>
          
          {/* Flow Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium">Main Flow States:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Persona Selection Screen</li>
                <li>• Contextual Greeting</li>
                <li>• Interactive Chat Interface</li>
                <li>• Quick Reply Options</li>
                <li>• Follow-up Conversations</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Error Handling:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Timeout Detection</li>
                <li>• Escalation Requests</li>
                <li>• Technical Issues</li>
                <li>• Human Agent Connection</li>
                <li>• Feedback Collection</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};