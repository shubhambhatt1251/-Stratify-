import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { EnhancedBackgroundElements } from '@/components/EnhancedBackgroundElements';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Zap,
  Shield,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Get in touch via email",
      value: "contact@stratify.co.in",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,      title: "Call Us",
      description: "Speak with our team",
      value: "+91 11 4567 8900",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      description: "Our headquarters",
      value: "New Delhi, India",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      description: "We're here to help",
      value: "10 AM - 7 PM IST",
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Rapid Response",
      description: "Get solutions within hours, not days"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Data Security",
      description: "Enterprise-grade security protocols"
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Premium Support",
      description: "Dedicated assistance in your timezone"
    }
  ];

  const stats = [
    { number: '500+', label: 'Indian Startups Helped' },
    { number: '98%', label: 'Success Rate' },
    { number: 'ISO', label: 'Certified Support' }
  ] as const;

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
              <MessageSquare className="mr-2 h-4 w-4" />
              Get In Touch
            </Badge>
          </motion.div>
          
          <motion.h1 
            variants={staggerItem}
            className="text-hero font-bold text-white mb-6 leading-tight shimmer"
          >
            Let's Build Your
            <br />
            <span className="text-gradient animate-gradient">
              Success Together
            </span>
          </motion.h1>

          <motion.p 
            variants={staggerItem}
            className="text-body text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Have questions about AI strategy? Need personalized guidance? Our team of experts is here to help you unlock your startup's potential with cutting-edge AI solutions.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section 
        className="py-20 bg-gradient-to-tr from-black/50 via-green-900/10 to-black/50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container-custom">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
              >
                <Card className="glass-card rounded-2xl overflow-hidden hover-lift group hover-target h-[280px]">
                  <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                    <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-3xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                      {info.icon}
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-card-title font-bold text-white mb-3">{info.title}</h3>
                      <p className="text-small text-gray-400 mb-4">{info.description}</p>
                      <p className="text-green-400 font-semibold">{info.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form & Features */}
      <motion.section 
        id="contact-form"
        className="py-24 bg-gradient-to-tr from-black/50 via-green-900/10 to-black/50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div variants={staggerItem}>
              <Card className="glass-card rounded-3xl overflow-hidden shadow-glow bg-black/40">
                <CardHeader className="p-8 pb-6">
                  <CardTitle className="text-section-title font-bold text-white mb-4">
                    Send us a Message
                  </CardTitle>
                  <p className="text-body text-gray-300">
                    Tell us about your project and let us help accelerate your business growth with AI.
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="glass-card border-green-400/20 focus:border-green-400/50 text-white"
                          placeholder="Rajesh Kumar"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="glass-card border-green-400/20 focus:border-green-400/50 text-white"
                          placeholder="rajesh@company.co.in"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="glass-card border-green-400/20 focus:border-green-400/50 text-white"
                        placeholder="Your Startup"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="glass-card border-green-400/20 focus:border-green-400/50 text-white min-h-[120px]"
                        placeholder="Tell us about your project and how we can help..."
                        required
                      />
                    </div>
                    
                    <Link to="/">
                      <Button 
                        type="submit" 
                        className="w-full btn-primary py-4 text-lg font-bold rounded-2xl hover-lift group"
                      >
                        <span className="flex items-center justify-center">
                          Send Message
                          <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </Link>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Features & Benefits */}
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
            >
              <motion.div variants={staggerItem} className="text-center lg:text-left">
                <h2 className="text-section-title font-bold text-white mb-6">
                  Why Choose
                  <br />
                  <span className="text-gradient">Stratify AI?</span>
                </h2>
                <p className="text-body text-gray-300 leading-relaxed">
                  Join leading Indian startups and enterprises that have transformed their business with our AI-powered strategies.
                </p>
              </motion.div>

              <motion.div variants={staggerContainer} className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-card-title font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-small text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-20 bg-gradient-to-tr from-black/50 via-green-900/10 to-black/50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container-custom text-center">
          <motion.div variants={staggerItem}>
            <h2 className="text-section-title font-bold text-white mb-12">
              Trusted by
              <br />
              <span className="text-gradient">Industry Leaders</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
