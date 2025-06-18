import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { BackgroundElements } from '@/components/BackgroundElements';
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
  Users, 
  Zap,
  Shield,
  Star,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

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
      value: "hello@stratify.ai",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Speak with our team",
      value: "+1 (555) 123-4567",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      description: "Our headquarters",
      value: "San Francisco, CA",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      description: "We're here to help",
      value: "24/7 Support",
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Lightning Fast Response",
      description: "Get answers within hours, not days"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Expert Team",
      description: "AI specialists and startup veterans"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Secure & Private",
      description: "Your data is protected and confidential"
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Premium Support",
      description: "Dedicated assistance for your success"
    }
  ];

  return (
    <div className="min-h-screen gradient-primary relative overflow-hidden">
      <BackgroundElements />
      <Header />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="section-spacing container-custom text-center">
          <Badge className="bg-green-500/20 text-green-300 border-green-400/30 mb-8 px-6 py-2 text-base glass-card animate-pulse-slow">
            <MessageSquare className="mr-2 h-5 w-5" />
            Get In Touch
          </Badge>
          
          <motion.h1 
            variants={staggerItem}
            initial="hidden"
            animate="show"
            className="text-hero font-bold text-white mb-6 leading-tight shimmer drop-shadow-[0_2px_32px_rgba(34,211,238,0.25)]"
          >
            Let's Build Your
            <br />
            <span className="text-gradient animate-gradient">
              Success Together
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-body text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions about AI strategy? Need personalized guidance? Our team of experts is here to help you unlock your startup's potential with cutting-edge AI solutions.
          </motion.p>
        </section>

        {/* Contact Info Cards */}
        <section className="section-spacing bg-gradient-to-r from-black/30 to-green-900/10">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-card rounded-2xl overflow-hidden hover-lift group">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-3xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                        {info.icon}
                      </div>
                      <h3 className="text-card-title font-bold text-white mb-3">{info.title}</h3>
                      <p className="text-small text-gray-400 mb-4">{info.description}</p>
                      <p className="text-green-400 font-semibold">{info.value}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Features */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="glass-card rounded-3xl overflow-hidden shadow-2xl">
                  <CardHeader className="p-8 pb-6">
                    <CardTitle className="text-section-title font-bold text-white mb-4">
                      Send us a Message
                    </CardTitle>
                    <p className="text-body text-gray-300">
                      Tell us about your project and how we can help accelerate your growth.
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
                            placeholder="John Doe"
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
                            placeholder="john@company.com"
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
                      
                      <Button 
                        type="submit" 
                        className="w-full btn-primary py-4 text-lg font-bold rounded-2xl hover-lift group"
                      >
                        <span className="flex items-center justify-center">
                          Send Message
                          <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Features & Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                <div className="text-center lg:text-left">
                  <h2 className="text-section-title font-bold text-white mb-6">
                    Why Choose
                    <br />
                    <span className="text-gradient">Stratify AI?</span>
                  </h2>
                  <p className="text-body text-gray-300 leading-relaxed">
                    Join thousands of successful startups that have accelerated their growth with our AI-powered strategies and expert guidance.
                  </p>
                </div>

                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
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
                </div>

                <Card className="glass-card rounded-2xl overflow-hidden p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      <Sparkles className="h-8 w-8" />
                    </div>
                    <h3 className="text-card-title font-bold text-white mb-3">Ready to Get Started?</h3>
                    <p className="text-small text-gray-300 mb-6">
                      Book a free consultation call with our AI strategy experts today.
                    </p>
                    <Button className="btn-primary px-8 py-3 rounded-2xl font-bold hover-lift group">
                      <span className="flex items-center">
                        Schedule Free Call
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="section-spacing bg-gradient-to-r from-green-900/10 to-black/30">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-section-title font-bold text-white mb-8">
                Trusted by
                <br />
                <span className="text-gradient">Industry Leaders</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { number: '10K+', label: 'Startups Helped' },
                  { number: '98%', label: 'Success Rate' },
                  { number: '24/7', label: 'Expert Support' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
