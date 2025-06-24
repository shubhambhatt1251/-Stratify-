import React from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Rocket, Target, Users, TrendingUp, Star, ArrowRight, CheckCircle, Zap, Shield, BarChart3, Award, Calendar, Lightbulb, Activity, Network, Database, LineChart, PieChart, BarChart, Globe, Cpu, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EnhancedBackgroundElements } from '@/components/EnhancedBackgroundElements';
import { motion } from 'framer-motion';

const Home = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-green-400" />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your business data to provide personalized insights and strategic recommendations.",
      gradient: "from-green-400/20 to-emerald-500/20"
    },
    {
      icon: <Target className="h-6 w-6 text-blue-400" />,
      title: "Strategic Planning",
      description: "Get comprehensive growth strategies tailored to your industry, market position, and business objectives.",
      gradient: "from-blue-400/20 to-cyan-500/20"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-purple-400" />,
      title: "Performance Analytics",
      description: "Monitor your progress with real-time analytics and adjust your strategy based on market feedback and data insights.",
      gradient: "from-purple-400/20 to-violet-500/20"
    },
    {
      icon: <Rocket className="h-6 w-6 text-orange-400" />,
      title: "Growth Acceleration",
      description: "Implement proven frameworks and best practices to accelerate your startup's growth trajectory and market penetration.",
      gradient: "from-orange-400/20 to-red-500/20"
    }
  ];

  const stats = [
    { 
      number: "10,000+", 
      label: "Startups Accelerated", 
      icon: <Rocket className="h-5 w-5 text-green-400" />,
      description: "Successfully guided startups"
    },
    { 
      number: "94%", 
      label: "Success Rate", 
      icon: <Target className="h-5 w-5 text-blue-400" />,
      description: "Client satisfaction rate"
    },
    { 
      number: "500%", 
      label: "Average ROI", 
      icon: <TrendingUp className="h-5 w-5 text-purple-400" />,
      description: "Return on investment"
    },
    { 
      number: "24/7", 
      label: "AI Support", 
      icon: <Bot className="h-5 w-5 text-orange-400" />,
      description: "Continuous assistance"
    }
  ];

  const analyticsFeatures = [
    {
      icon: <LineChart className="h-5 w-5 text-green-400" />,
      title: "Market Trends",
      value: "↗ 23.5%",
      description: "Growth tracking"
    },
    {
      icon: <PieChart className="h-5 w-5 text-blue-400" />,
      title: "Market Share",
      value: "67.2%",
      description: "Analysis coverage"
    },
    {
      icon: <BarChart className="h-5 w-5 text-purple-400" />,
      title: "Performance",
      value: "98.1%",
      description: "Accuracy rate"
    },
    {
      icon: <Globe className="h-5 w-5 text-cyan-400" />,
      title: "Global Reach",
      value: "150+",
      description: "Countries served"
    }
  ];

  const testimonials = [
    {
      quote: "Stratify transformed our business strategy completely. We went from struggling to find product-market fit to achieving 300% growth in just 6 months.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
      avatar: "🚀",
      rating: 5
    },
    {
      quote: "The AI-generated insights were incredibly accurate. We discovered market opportunities we never would have found on our own.",
      author: "Marcus Rodriguez",
      role: "Founder, GrowthLab",
      avatar: "🎯",
      rating: 5
    },
    {
      quote: "Best investment we've made. The strategic recommendations helped us secure our Series A funding within 4 months.",
      author: "Emma Thompson",
      role: "Co-founder, InnovateCorp",
      avatar: "💡",
      rating: 5
    }
  ];

  const motionProps = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const staggerItem = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };


  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <EnhancedBackgroundElements />
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="section-full container-custom relative pt-16"
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        <div className="text-center relative z-10">
          <motion.div variants={staggerItem}>
            <Badge className="glass-card text-green-300 border-green-400/30 mb-6 px-4 py-2 hover-target">
              <Brain className="mr-2 h-4 w-4" />
              AI-Powered Growth Platform
            </Badge>
          </motion.div>
          
          <motion.h1 
            variants={staggerItem}
            className="text-hero font-bold text-white mb-6 leading-tight shimmer"
          >
            Accelerate Your Startup
            <br />
            <span className="text-gradient animate-gradient">
              With AI Intelligence
            </span>
          </motion.h1>
          
          <motion.p 
            variants={staggerItem}
            className="text-body text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of successful entrepreneurs who have revolutionized their growth with AI-powered strategies and insights. Transform your startup with data-driven decisions and intelligent automation.
          </motion.p>
          
          <motion.div 
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link to="/strategy">
              <Button className="btn-primary px-8 py-3 text-lg font-bold rounded-xl hover-lift group hover-target">
                <span className="flex items-center">
                  Start AI Analysis
                  <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link to="/features">
              <Button className="btn-secondary px-8 py-3 text-lg font-semibold rounded-xl hover-lift hover-target">
                <Activity className="mr-2 h-5 w-5" />
                Explore Features
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-300"
          >
            <motion.div variants={staggerItem} className="flex items-center space-x-2 group hover-lift hover-target">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="font-medium">Enterprise Security</span>
            </motion.div>
            <motion.div variants={staggerItem} className="flex items-center space-x-2 group hover-lift hover-target">
              <Award className="h-5 w-5 text-green-400" />
              <span className="font-medium">99.9% Uptime</span>
            </motion.div>
            <motion.div variants={staggerItem} className="flex items-center space-x-2 group hover-lift hover-target">
              <Users className="h-5 w-5 text-green-400" />
              <span className="font-medium">24/7 Support</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Analytics Dashboard Preview */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            {...motionProps}
          >
            <h2 className="text-section-title font-bold text-white mb-4">
              Real-Time Analytics
              <br />
              <span className="text-gradient">Dashboard Preview</span>
            </h2>
            <p className="text-body text-gray-300 max-w-2xl mx-auto">
              Monitor your startup's performance with comprehensive analytics and AI-driven insights.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {analyticsFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
              >
                <Card className="glass-ultra uniform-box h-[260px] flex flex-col justify-center items-center rounded-2xl overflow-hidden hover-lift interactive-card group">
                  <CardContent className="p-6 text-center flex flex-col h-full justify-center items-center">
                    <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-black/50 to-green-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="text-2xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">
                      {feature.value}
                    </div>
                    <h3 className="text-card-title font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-small text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            {...motionProps}
          >
            <h2 className="text-section-title font-bold text-white mb-4">
              Powerful Features for
              <br />
              <span className="text-gradient">Modern Startups</span>
            </h2>
            <p className="text-body text-gray-300 max-w-2xl mx-auto">
              Discover comprehensive AI-powered tools designed to transform your startup into a thriving business.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
              >
                <Card className="glass-card uniform-box h-[320px] flex flex-col justify-center items-center rounded-2xl overflow-hidden hover-lift group bg-gradient-to-br from-black/40 to-emerald-900/20">
                  <CardContent className="p-6 text-center flex flex-col h-full justify-center items-center">
                    <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-r from-black/50 to-green-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-base text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            {...motionProps}
          >
            <h2 className="text-section-title font-bold text-white mb-4">
              Trusted by Thousands
              <br />
              <span className="text-gradient">Proven Results</span>
            </h2>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {stats.map((stat) => (
              <motion.div 
                key={stat.label}
                className="text-center group hover-lift"
                variants={staggerItem}
              >
                <Card className="glass-ultra uniform-box h-[240px] flex flex-col justify-center items-center rounded-2xl p-6 interactive-card">
                  <CardContent className="p-0 flex flex-col h-full justify-between items-center">
                    <div>
                      <div className="w-16 h-16 mb-6 glass-card rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-4xl font-bold text-gradient mb-3 group-hover:scale-105 transition-transform duration-300">
                        {stat.number}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{stat.label}</h4>
                      <p className="text-base text-gray-300">{stat.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing bg-gradient-to-r from-green-900/10 to-black/30">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            {...motionProps}
          >
            <h2 className="text-section-title font-bold text-white mb-4">
              Success Stories
              <br />
              <span className="text-gradient">Real Results</span>
            </h2>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.author}
                variants={staggerItem}
              >
                <Card className="glass-card rounded-2xl overflow-hidden hover-lift interactive-card group h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4 text-small flex-grow">"{testimonial.quote}"</p>
                    <div className="flex items-center space-x-3 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-lg">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-white">{testimonial.author}</p>
                        <p className="text-gray-400 text-small">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container-custom text-center">
          <motion.div 
            className="glass-ultra rounded-2xl p-8 bg-gradient-to-r from-green-900/20 to-black/40"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-section-title font-bold text-white mb-6">
              Ready to Transform
              <br />
              <span className="text-gradient">Your Startup?</span>
            </h2>
            <p className="text-body text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Join thousands of successful entrepreneurs who are already leveraging our AI-powered platform to accelerate their growth and achieve unprecedented success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/strategy">
                <Button className="btn-primary px-8 py-3 text-lg font-bold rounded-xl hover-lift group hover-target">
                  <span className="flex items-center">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-secondary px-8 py-3 text-lg font-semibold rounded-xl hover-lift hover-target">
                  <Calendar className="mr-2 h-5 w-5" />
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
