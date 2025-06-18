import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { StartupForm } from '@/components/StartupForm';
import { RecommendationResults } from '@/components/RecommendationResults';
import { EnhancedBackgroundElements } from '@/components/EnhancedBackgroundElements';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Rocket, Target, Users, TrendingUp, Lightbulb, ArrowRight, CheckCircle, Zap, Clock, Shield, Database, BarChart3, Activity, Sparkles, Calendar, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface StartupFormData {
  startupName: string;
  website: string;
  industry: string;
  teamSize: string;
  currentChannels: string[];
  objective: string;
  longTermGoal: string;
  budget: number;
  icp: string;
  competitors: string;
}

const Strategy = () => {
  const [formData, setFormData] = useState<StartupFormData | null>(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = (data: StartupFormData) => {
    console.log('Form submitted with data:', data);
    setFormData(data);
    setShowResults(true);
  };

  const handleStartOver = () => {
    setFormData(null);
    setShowResults(false);
  };

  const processSteps = [
    {
      step: "01",
      title: "Share Your Vision",
      description: "Tell us about your startup, goals, and current situation through our intelligent form.",
      icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "AI Analysis",
      description: "Our advanced AI processes your data against millions of startup patterns and market insights.",
      icon: <Brain className="h-6 w-6 sm:h-8 sm:w-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Strategic Insights",
      description: "Receive personalized recommendations, growth strategies, and actionable next steps.",
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Execute & Scale",
      description: "Implement the strategies with our guidance and accelerate your startup's growth.",
      icon: <Rocket className="h-6 w-6 sm:h-8 sm:w-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "Personalized Strategy",
      description: "AI-crafted strategies tailored specifically to your startup's unique situation and market.",
      icon: <Target className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />,
      metric: "100%"
    },
    {
      title: "Instant Results",
      description: "Get comprehensive strategic recommendations in minutes, not months.",
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />,
      metric: "5 min"
    },
    {
      title: "Proven Success",
      description: "Based on data from over 10,000 successful startup journeys and outcomes.",
      icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />,
      metric: "10K+"
    },
    {
      title: "Risk Mitigation",
      description: "Identify and avoid common pitfalls that cause 90% of startup failures.",
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400" />,
      metric: "90%"
    }
  ];

  if (showResults) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden">
        <EnhancedBackgroundElements />
        <div className="relative z-10">
          <RecommendationResults 
            formData={formData!} 
            onStartOver={handleStartOver} 
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden particles-bg">
      <EnhancedBackgroundElements />
      <Header />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="section-spacing container-custom text-center">
          <Badge className="bg-green-500/20 text-green-300 border-green-400/30 mb-6 sm:mb-8 px-4 sm:px-6 py-2 text-sm sm:text-base glass-card animate-pulse-slow scroll-reveal">
            <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            AI Strategy Generator
          </Badge>
          
          <h1 className="text-hero font-bold text-white mb-6 sm:mb-8 leading-tight scroll-reveal shimmer">
            Get Your AI-Powered
            <br />
            <span className="text-gradient animate-gradient">
              Growth Strategy
            </span>
          </h1>
          
          <p className="text-body text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed scroll-reveal">
            Answer a few questions about your startup and receive a comprehensive, AI-generated growth strategy tailored specifically to your business needs and market conditions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 scroll-reveal">
            <Button 
              onClick={() => document.getElementById('strategy-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-2xl hover-lift group"
            >
              <span className="flex items-center">
                Start Strategy Analysis
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Link to="/features">
              <Button className="btn-secondary px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl hover-lift">
                <Activity className="mr-3 h-5 w-5" />
                Explore Features
              </Button>
            </Link>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="section-spacing bg-gradient-to-r from-black/30 to-green-900/10 energy-grid">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="glass-card rounded-2xl overflow-hidden hover-lift group scroll-reveal">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-black/50 to-green-900/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">{benefit.metric}</div>
                    <h3 className="text-card-title font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-small text-gray-300 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16 scroll-reveal">
              <h2 className="text-section-title font-bold text-white mb-6 sm:mb-8">
                How It Works
                <br />
                <span className="text-gradient">Simple & Effective</span>
              </h2>
              <p className="text-body text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our AI-powered process transforms your startup information into actionable growth strategies in just four simple steps.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group relative scroll-reveal hover-lift">
                  <div className="relative mb-6 sm:mb-8">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-card-title font-bold text-white mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-small text-gray-300 leading-relaxed">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-green-400/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy Form */}
        <section id="strategy-form" className="section-spacing bg-gradient-to-r from-green-900/10 to-black/30">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-8 sm:mb-12 scroll-reveal">
              <h2 className="text-section-title font-bold text-white mb-6 sm:mb-8">
                Start Your
                <br />
                <span className="text-gradient">AI Strategy Analysis</span>
              </h2>
              <p className="text-body text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Complete the form below to receive your personalized AI-generated growth strategy and actionable recommendations.
              </p>
            </div>

            <Card className="glass-card rounded-3xl overflow-hidden shadow-2xl scroll-reveal">
              <CardContent className="p-6 sm:p-8">
                <StartupForm onSubmit={handleFormSubmit} />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-spacing">
          <div className="container-custom text-center scroll-reveal">
            <h2 className="text-section-title font-bold text-white mb-6 sm:mb-8">
              Questions?
              <br />
              <span className="text-gradient">We're Here to Help</span>
            </h2>
            <p className="text-body text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
              Our team of experts is available 24/7 to help you get the most out of your AI-generated strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link to="/contact">
                <Button className="btn-primary px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-2xl hover-lift group">
                  <span className="flex items-center">
                    Contact Support
                    <Users className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Button className="btn-secondary px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl hover-lift">
                <Calendar className="mr-3 h-5 w-5" />
                Schedule Call
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Strategy;
