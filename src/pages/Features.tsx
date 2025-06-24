import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, Database, Rocket, Shield, BarChart3, Zap, Target, 
  Users, Clock, TrendingUp, Eye, Network, 
  Blocks, LineChart, Gauge, Activity, CheckCircle, 
  ArrowRight, Calendar, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BackgroundElements } from '@/components/BackgroundElements';

const Features = () => {
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 }
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const mainFeatures = [
    {
      icon: Brain,
      title: "Neural AI Strategy Engine",
      description: "Advanced deep learning algorithms analyze over 100,000 data points to create hyper-personalized growth strategies tailored to your startup's DNA and market dynamics.",
      features: ["Deep Market Analysis", "Competitive Intelligence", "Risk Assessment", "Growth Forecasting"],
      gradient: "from-green-400 via-emerald-500 to-teal-500"
    },
    {
      icon: Database,
      title: "Real-Time Market Intelligence",
      description: "Access live market data, trends, and insights from thousands of successful startups worldwide with millisecond-precision updates and predictive analytics.",
      features: ["Live Data Streams", "Predictive Trends", "Industry Reports", "Competitive Analysis"],
      gradient: "from-emerald-400 via-teal-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Growth Acceleration Matrix",
      description: "Accelerate your startup's growth with proven frameworks, AI-driven optimization systems, and strategic recommendations based on million-dollar success patterns.",
      features: ["Growth Frameworks", "AI Optimization", "Performance Boosting", "Success Patterns"],
      gradient: "from-teal-400 via-cyan-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Smart Risk Mitigation",
      description: "Avoid costly mistakes with our comprehensive AI risk assessment and automated mitigation strategies. Learn from billions of data points to ensure success.",
      features: ["AI Risk Analysis", "Failure Prevention", "Safety Protocols", "Security Measures"],
      gradient: "from-cyan-400 via-blue-500 to-indigo-500"
    }
  ];

  const coreFeatures = [
    {
      icon: LineChart,
      title: "Advanced Analytics",
      description: "Professional-grade analytics tools with over 50 business indicators and AI-powered pattern recognition.",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: Gauge,
      title: "Real-Time Performance",
      description: "Lightning-fast processing with real-time market data and instant strategy notifications.",
      gradient: "from-indigo-400 to-purple-500"
    },
    {
      icon: Target,
      title: "Multi-Channel Strategy",
      description: "Develop strategies across multiple channels including digital, traditional, and emerging markets.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description: "AI-driven growth maximization strategies with automated performance tracking and optimization.",
      gradient: "from-pink-400 to-red-500"
    }
  ];

  const aiFeatures = [
    {
      icon: Blocks,
      title: "AI Strategy Builder",
      description: "Deep AI analysis with strategy building and smart recommendation systems.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Network,
      title: "Market Integration",
      description: "Seamless integration with market data for real-time insights and trend analysis.",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      icon: Clock,
      title: "Speed & Efficiency",
      description: "Lightning-fast strategy generation with enterprise-grade performance.",
      gradient: "from-teal-400 to-cyan-500"
    },
    {
      icon: Activity,
      title: "Smart Automation",
      description: "Automated strategy optimization with customizable business parameters.",
      gradient: "from-cyan-400 to-blue-500"
    }
  ];

  return (
    <div className="gradient-primary relative overflow-hidden particles-bg">
      <BackgroundElements />
      <Header />
      <div className="relative z-10 w-full">
        {/* Hero Section */}
        <motion.section 
          className="min-h-screen flex flex-col items-center justify-center section-spacing container-custom text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={staggerItem}>
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30 mb-6 sm:mb-8 px-4 sm:px-6 py-2 text-sm sm:text-base glass-ultra">
              <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Revolutionary Features
            </Badge>
          </motion.div>
          
          <motion.h1 
            variants={staggerItem}
            className="text-hero font-bold text-white mb-6 sm:mb-8 leading-tight shimmer"
          >
            <span className="text-shimmer">Next-Gen AI</span>
            <br />
            <span className="text-gradient">
              Strategy Platform
            </span>
          </motion.h1>
          
          <motion.p 
            variants={staggerItem}
            className="text-body text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the most advanced AI-powered strategy platform designed to transform your startup strategies with cutting-edge technology and proven algorithms.
          </motion.p>
          
          <motion.div 
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <Link to="/">
              <Button className="btn-primary px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl hover-lift group">
                <span className="flex items-center">
                  Start Analysis Now
                  <Rocket className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link to="/">
              <Button className="btn-secondary px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl hover-lift">
                <Eye className="mr-3 h-5 w-5" />
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <section className="section-spacing bg-gradient-to-r from-black/30 to-green-900/10 energy-grid">
          <motion.div 
            className="container-custom"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { value: "99.9%", label: "Accuracy Rate", icon: TrendingUp },
                { value: "0.5s", label: "Response Time", icon: Zap },
                { value: "50K+", label: "Startups Analyzed", icon: Users },
                { value: "24/7", label: "AI Support", icon: Clock }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group hover-lift"
                  variants={staggerItem}
                >
                  <Card className="glass-ultra rounded-2xl p-6 interactive-card">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 mx-auto mb-4 glass-card rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="h-6 w-6 text-green-400" />
                      </div>
                      <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <h3 className="text-card-title font-bold text-white">{stat.label}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Core Features Section */}
        <section className="section-spacing">
          <motion.div 
            className="container-custom"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="text-center mb-12 sm:mb-16" variants={staggerItem}>
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 mb-6 sm:mb-8 px-4 sm:px-6 py-2 text-sm sm:text-base glass-ultra">
                <BarChart3 className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Core Excellence
              </Badge>
              <h2 className="text-section-title font-bold text-white mb-6 sm:mb-8">
                Professional Strategy
                <br />
                <span className="text-gradient text-shimmer">
                  Tools & Features
                </span>
              </h2>
            </motion.div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {coreFeatures.map((feature, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <Card className="group glass-card rounded-2xl overflow-hidden shadow-2xl border-green-500/20 h-full">
                    <CardContent className="p-6 sm:p-8 text-center">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white shadow-2xl mb-4 sm:mb-6 transition-all duration-500`}>
                        <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                      </div>
                      <h3 className="text-card-title font-bold text-white mb-3 sm:mb-4">{feature.title}</h3>
                      <p className="text-small text-gray-300 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* AI Features */}
        <section className="section-spacing">
          <motion.div 
            className="container-custom"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="text-center mb-12 sm:mb-16" variants={staggerItem}>
              <h2 className="text-section-title font-bold text-white mb-6 sm:mb-8">
                Advanced AI &
                <br />
                <span className="text-gradient text-shimmer">
                  Smart Integration
                </span>
              </h2>
            </motion.div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {aiFeatures.map((feature, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <Card className="group glass-card rounded-2xl overflow-hidden shadow-2xl border-green-500/20 h-full">
                    <CardContent className="p-6 sm:p-8 text-center">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white shadow-2xl mb-4 sm:mb-6 transition-all duration-500`}>
                        <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                      </div>
                      <h3 className="text-card-title font-bold text-white mb-3 sm:mb-4">{feature.title}</h3>
                      <p className="text-small text-gray-300 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-gradient-to-r from-black/30 to-green-900/10">
          <motion.div 
            className="container-custom text-center"
            {...motionProps}
          >
            <div className="glass-ultra rounded-2xl p-8 sm:p-12 max-w-5xl mx-auto">
              <h2 className="text-section-title font-bold text-white mb-6 sm:mb-8">
                Ready to Start
                <br />
                <span className="text-gradient text-shimmer">
                  Your AI Journey?
                </span>
              </h2>
              <p className="text-body text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
                Join thousands of successful entrepreneurs using our revolutionary AI platform to achieve unprecedented growth and market success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Link to="/">
                  <Button className="btn-primary px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl hover-lift group">
                    <span className="flex items-center">
                      Start Your Journey
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                <Link to="/">
                  <Button className="btn-secondary px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl hover-lift">
                    <Calendar className="mr-3 h-5 w-5" />
                    Get Support
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Features;
