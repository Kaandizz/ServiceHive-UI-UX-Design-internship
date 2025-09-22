import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Brain, 
  Zap, 
  BarChart3, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Sparkles,
  Bot,
  TrendingUp,
  Users,
  Globe
} from "lucide-react";
import aiHeroImage from "@/assets/ai-hero-image.jpg";
import aiWorkflowImage from "@/assets/ai-automation-workflow.jpg";
import aiAnalyticsImage from "@/assets/ai-analytics-dashboard.jpg";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const { toast } = useToast();
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Sent!",
      description: "We'll contact you within 24 hours to schedule your personalized demo.",
    });
    setDemoForm({ name: "", email: "", company: "", message: "" });
  };

  const features = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced ML algorithms that adapt and improve your business processes automatically"
    },
    {
      icon: Bot,
      title: "Natural Language Processing",
      description: "Understand and process human language for customer service and content analysis"
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and focus your team on high-value activities"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Make data-driven decisions with advanced forecasting and trend analysis"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with compliance for regulated industries"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuously optimize operations for maximum efficiency and ROI"
    }
  ];

  const useCases = [
    {
      industry: "Finance",
      icon: TrendingUp,
      description: "Fraud detection, risk assessment, and algorithmic trading solutions"
    },
    {
      industry: "Healthcare",
      icon: Shield,
      description: "Medical imaging analysis, drug discovery, and patient care optimization"
    },
    {
      industry: "Retail",
      icon: Users,
      description: "Personalized recommendations, inventory optimization, and demand forecasting"
    },
    {
      industry: "Manufacturing",
      icon: Bot,
      description: "Predictive maintenance, quality control, and supply chain optimization"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      company: "TechFlow",
      content: "Our automation processes improved by 400% after implementing their AI solutions. The ROI was immediate.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Operations Director",
      company: "GlobalCorp",
      content: "The predictive analytics have transformed how we make strategic decisions. Absolutely game-changing.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Head of Innovation",
      company: "InnovateLab",
      content: "Seamless integration and outstanding support. Their team truly understands enterprise needs.",
      rating: 5
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams getting started with AI",
      features: [
        "Up to 10,000 API calls/month",
        "Basic ML models",
        "Email support",
        "Standard integrations"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$899",
      period: "/month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Up to 100,000 API calls/month",
        "Advanced ML & NLP models",
        "Priority support",
        "Custom integrations",
        "Advanced analytics"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited API calls",
        "Custom model development",
        "24/7 dedicated support",
        "On-premise deployment",
        "SLA guarantees"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter scroll-smooth">
      {/* Add smooth scrolling globally */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @media (max-width: 768px) {
          .mobile-menu {
            display: none;
          }
          .mobile-menu.active {
            display: block;
          }
        }
      `}</style>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-primary animate-glow" />
            <span className="text-xl font-bold text-foreground">AI Solutions</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth relative group">
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-smooth relative group">
              Solutions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-smooth relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Button variant="outline" size="sm" className="hover:scale-105 transition-bounce">Sign In</Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-bounce shadow-glow">
              Request Demo
            </Button>
          </div>
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden hover:bg-muted"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              menu?.classList.toggle('hidden');
            }}
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
        {/* Mobile Navigation Menu */}
        <div id="mobile-menu" className="hidden md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors py-2">Features</a>
            <a href="#solutions" className="block text-muted-foreground hover:text-foreground transition-colors py-2">Solutions</a>
            <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-colors py-2">Pricing</a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full" size="sm">Sign In</Button>
              <Button className="w-full bg-gradient-primary hover:opacity-90" size="sm">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge variant="secondary" className="w-fit">
                <Sparkles className="h-4 w-4 mr-2" />
                AI-Powered Business Solutions
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Your Business with 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> AI Intelligence</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empower your organization with cutting-edge machine learning, NLP, and automation solutions. 
                Make smarter decisions, streamline workflows, and unlock unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-bounce text-lg px-8 shadow-glow"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 hover:scale-105 transition-bounce"
                  onClick={() => document.querySelector('[data-demo-section]')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  No setup required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src={aiHeroImage} 
                alt="AI Solutions Dashboard" 
                className="w-full h-auto rounded-2xl shadow-float animate-float"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold animate-glow">
                99.9% Uptime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Brain className="h-4 w-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Everything you need to <span className="text-primary">succeed with AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive suite of AI tools and services helps businesses of all sizes harness the power of artificial intelligence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="solutions" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Globe className="h-4 w-4 mr-2" />
              Industry Solutions
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              AI solutions for <span className="text-primary">every industry</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how leading companies across different sectors are transforming their operations with our AI solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-background border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="h-16 w-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{useCase.industry}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section - Bonus Feature */}
      <section className="py-20 px-4" data-demo-section>
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8 animate-fade-in">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Bot className="h-4 w-4 mr-2" />
              See It In Action
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Watch AI <span className="text-primary">transform workflows</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how our AI solutions automate complex business processes and deliver measurable results in minutes, not months.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="relative group animate-scale-in">
                <img 
                  src={aiWorkflowImage} 
                  alt="AI Workflow Automation" 
                  className="w-full h-64 object-cover rounded-xl shadow-card group-hover:shadow-float transition-all duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-gradient-primary shadow-glow">
                    <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="relative group animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <img 
                  src={aiAnalyticsImage} 
                  alt="AI Analytics Dashboard" 
                  className="w-full h-64 object-cover rounded-xl shadow-card group-hover:shadow-float transition-all duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-gradient-primary shadow-glow">
                    <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    View Analytics
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-accent mr-2" />
                3-minute setup process
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-accent mr-2" />
                Real-time results tracking
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-accent mr-2" />
                24/7 automated monitoring
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Star className="h-4 w-4 mr-2" />
              Customer Success
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Trusted by <span className="text-primary">industry leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our AI solutions have transformed businesses and delivered measurable results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic leading-relaxed">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge variant="secondary" className="w-fit mx-auto">
              <BarChart3 className="h-4 w-4 mr-2" />
              Simple Pricing
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Choose your <span className="text-primary">perfect plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Scale as you grow with flexible plans designed for every business size.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative bg-background border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-scale-in ${tier.popular ? 'ring-2 ring-primary shadow-glow' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <CardDescription className="text-base mt-2">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${tier.popular ? 'bg-gradient-primary hover:opacity-90 shadow-glow' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to transform your business with AI?
              </h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Schedule a personalized demo and see how our AI solutions can drive growth and efficiency for your organization.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 text-accent" />
                  <span>Personalized 30-minute consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 text-accent" />
                  <span>Custom solution recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 text-accent" />
                  <span>ROI analysis for your business</span>
                </div>
              </div>
            </div>
            <Card className="bg-background text-foreground animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl">Request Your Demo</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll contact you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDemoRequest} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Full Name"
                      value={demoForm.name}
                      onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Work Email"
                      value={demoForm.email}
                      onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <Input
                    placeholder="Company Name"
                    value={demoForm.company}
                    onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder="Tell us about your AI needs and challenges..."
                    value={demoForm.message}
                    onChange={(e) => setDemoForm({ ...demoForm, message: e.target.value })}
                    rows={4}
                  />
                  <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-accent" />
                <span className="text-xl font-bold">AI Solutions</span>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Empowering businesses with intelligent AI solutions for the future of work.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Machine Learning</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Natural Language Processing</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Automation</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Finance</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Healthcare</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Retail</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Manufacturing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">About</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2024 AI Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
};

export default Index;