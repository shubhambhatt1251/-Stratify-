import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Target, 
  Users, 
  Lightbulb, 
  Zap, 
  Award,
  TrendingUp,
  Globe,
  Shield,
  Rocket,
  Star,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { EnhancedBackgroundElements } from '@/components/EnhancedBackgroundElements';

const About = () => {
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

  const values = [
    {
      icon: <Brain className="h-6 w-6 text-green-400" />,
      title: "Innovation First",
      description: "We leverage cutting-edge AI technology to solve complex business challenges and drive unprecedented growth."
    },
    {
      icon: <Target className="h-6 w-6 text-blue-400" />,
      title: "Data-Driven Results",
      description: "Every recommendation is backed by comprehensive data analysis and proven methodologies."
    },
    {
      icon: <Users className="h-6 w-6 text-purple-400" />,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable results that transform your business."
    },
    {
      icon: <Shield className="h-6 w-6 text-cyan-400" />,
      title: "Trust & Security",
      description: "We maintain the highest standards of data security and confidentiality in all our operations."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & AI Strategy Lead",
      description: "Former McKinsey consultant with 15+ years in AI and strategic planning.",
      avatar: "🚀"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Data Science Head",
      description: "Ex-Google engineer specializing in machine learning and startup analytics.",
      avatar: "🎯"
    },
    {
      name: "Emma Thompson",
      role: "VP of Growth Strategy",
      description: "Serial entrepreneur with 3 successful exits and deep industry expertise.",
      avatar: "💡"
    },
    {
      name: "David Kim",
      role: "Head of Product",
      description: "Product visionary from Meta, focused on user experience and platform innovation.",
      avatar: "⚡"
    }
  ];

  const achievements = [
    {
      number: "500M+",
      label: "Data Points Analyzed",
      icon: <Brain className="h-5 w-5 text-green-400" />
    },
    {
      number: "10,000+",
      label: "Startups Served",
      icon: <Rocket className="h-5 w-5 text-blue-400" />
    },
    {
      number: "94%",
      label: "Success Rate",
      icon: <TrendingUp className="h-5 w-5 text-purple-400" />
    },
    {
      number: "50+",
      label: "Countries Reached",
      icon: <Globe className="h-5 w-5 text-cyan-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <EnhancedBackgroundElements />
      <Header />
      
      {/* Hero Section */}
      <section className="section-full container-custom relative pt-16">
        <div className="text-center relative z-10">
          <div className="scroll-reveal">
            <Badge className="glass-card text-green-300 border-green-400/30 mb-6 px-4 py-2 animate-pulse-slow">
              <Lightbulb className="mr-2 h-4 w-4 animate-float" />
              About Stratify AI
            </Badge>
          </div>
          
          <h1 className="text-hero font-bold text-white mb-6 leading-tight scroll-reveal text-glow shimmer">
            Revolutionizing Startup
            <br />
            <span className="text-gradient animate-gradient">
              Strategy with AI
            </span>
          </h1>
          
          <p className="text-body text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed scroll-reveal">
            We're on a mission to democratize strategic planning through artificial intelligence, 
            empowering entrepreneurs worldwide to make data-driven decisions that accelerate growth 
            and maximize success rates.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-spacing bg-gradient-to-r from-green-900/10 to-black/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h2 className="text-section-title font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-body text-gray-300 mb-6 leading-relaxed">
                At Stratify AI, we believe that every entrepreneur deserves access to world-class 
                strategic insights. Traditional consulting is expensive, time-consuming, and often 
                inaccessible to early-stage startups.
              </p>
              <p className="text-body text-gray-300 mb-8 leading-relaxed">
                Our AI-powered platform democratizes strategic planning, providing instant, 
                personalized recommendations that would typically cost thousands of dollars 
                and take weeks to develop.
              </p>
              <Link to="/strategy">
                <Button className="btn-primary px-8 py-3 rounded-xl hover-lift group">
                  <span className="flex items-center">
                    Experience Our Platform
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
            <div className="scroll-reveal">
              <div className="glass-ultra rounded-2xl p-8 data-visualization">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 glass-card rounded-xl flex items-center justify-center">
                        {achievement.icon}
                      </div>
                      <div className="text-2xl font-bold text-gradient mb-1">
                        {achievement.number}
                      </div>
                      <p className="text-small text-gray-300">{achievement.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-section-title font-bold text-white mb-4">
              Our Core
              <br />
              <span className="text-gradient">Values</span>
            </h2>
            <p className="text-body text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="glass-card rounded-xl overflow-hidden hover-lift hover-glow group scroll-reveal">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-black/50 to-green-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-card-title font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-small text-gray-300 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing bg-gradient-to-r from-black/40 to-green-900/20">
        <div className="container-custom">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-section-title font-bold text-white mb-4">
              Meet Our
              <br />
              <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-body text-gray-300 max-w-2xl mx-auto">
              World-class experts from leading tech companies and consulting firms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="glass-ultra rounded-xl overflow-hidden hover-lift interactive-card group scroll-reveal">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <h3 className="text-card-title font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-green-400 font-medium mb-3 text-small">{member.role}</p>
                  <p className="text-small text-gray-300 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <h2 className="text-section-title font-bold text-white mb-6">
              Our
              <br />
              <span className="text-gradient">Story</span>
            </h2>
            <div className="glass-ultra rounded-2xl p-8 space-y-6">
              <p className="text-body text-gray-300 leading-relaxed">
                Stratify AI was born from a simple observation: most startups fail not because 
                they lack great ideas, but because they lack access to strategic expertise. 
                As former consultants and entrepreneurs ourselves, we experienced firsthand 
                the challenges of building a business without proper strategic guidance.
              </p>
              <p className="text-body text-gray-300 leading-relaxed">
                In 2022, we set out to change this. By combining our expertise in strategy 
                consulting with cutting-edge AI technology, we created a platform that makes 
                world-class strategic insights accessible to every entrepreneur, regardless 
                of their budget or location.
              </p>
              <p className="text-body text-gray-300 leading-relaxed">
                Today, we're proud to have helped over 10,000 startups across 50+ countries 
                accelerate their growth and achieve their dreams. But we're just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-green-900/10 to-black/30">
        <div className="container-custom text-center scroll-reveal">
          <div className="glass-ultra rounded-2xl p-8">
            <h2 className="text-section-title font-bold text-white mb-6">
              Ready to Join Our
              <br />
              <span className="text-gradient">Success Stories?</span>
            </h2>
            <p className="text-body text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Take the first step towards accelerating your startup's growth with 
              AI-powered strategic insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/strategy">
                <Button className="btn-primary px-8 py-3 text-lg font-bold rounded-xl hover-lift group">
                  <span className="flex items-center">
                    Get Your Strategy
                    <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-secondary px-8 py-3 text-lg font-semibold rounded-xl hover-lift glass-card">
                  <Users className="mr-2 h-5 w-5" />
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
