
import React, { useState, useEffect } from 'react';
import { Menu, X, Brain, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'pt-2' 
          : 'pt-4'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        {/* Glassmorphism Pill Container */}
        <div className={`mx-auto max-w-6xl transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/40 backdrop-blur-2xl border border-white/10' 
            : 'bg-black/20 backdrop-blur-xl border border-white/5'
        } rounded-full shadow-2xl shadow-black/50`}>
          <div className="flex items-center justify-between h-16 lg:h-18 px-6 lg:px-8">
            
            {/* Premium Logo */}
            <Link to="/" className="flex items-center space-x-3 group hover-target">
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/30 group-hover:shadow-green-400/50 transition-all duration-300 group-hover:scale-105">
                  <Brain className="h-5 w-5 lg:h-6 lg:w-6 text-white drop-shadow-lg" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg lg:text-xl tracking-tight">
                  Stratify
                </span>
                <span className="text-green-400 text-xs font-medium -mt-0.5 opacity-80 tracking-wider">AI Strategy</span>
              </div>
            </Link>
            
            {/* Glassmorphism Desktop Navigation Pill */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-xl rounded-full px-2 py-2 border border-white/10 shadow-inner">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/features', label: 'Features' },
                  { path: '/strategy', label: 'Strategy' },
                  { path: '/about', label: 'About' },
                  { path: '/contact', label: 'Contact' }
                ].map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover-target group ${
                      isActive(item.path) 
                        ? 'text-white bg-gradient-to-r from-green-500/80 to-emerald-500/80 shadow-lg shadow-green-500/25 backdrop-blur-sm border border-green-400/20' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-white/10'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive(item.path) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-sm"></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Premium Glassmorphism CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link to="/strategy">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-semibold px-6 py-2.5 rounded-full shadow-xl shadow-green-500/30 hover:shadow-green-400/40 transition-all duration-300 hover:scale-105 border border-green-400/20 hover:border-green-300/30 backdrop-blur-sm group hover-target">
                  <span className="flex items-center">
                    Start Analysis
                    <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover-target rounded-full w-10 h-10 p-0 border border-white/10 hover:border-white/20"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-4 w-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Glassmorphism Pill */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, scale: 0.95 }}
              animate={{ height: 'auto', opacity: 1, scale: 1 }}
              exit={{ height: 0, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden mt-3"
            >
              <div className="bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl shadow-black/50 p-6 mx-2">
                <div className="space-y-3">
                  {[
                    { path: '/', label: 'Home' },
                    { path: '/features', label: 'Features' },
                    { path: '/strategy', label: 'Strategy' },
                    { path: '/about', label: 'About' },
                    { path: '/contact', label: 'Contact' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        to={item.path} 
                        className={`block px-4 py-3 rounded-2xl transition-all duration-300 hover-target font-medium ${
                          isActive(item.path)
                            ? 'text-white bg-gradient-to-r from-green-500/30 to-emerald-500/30 border border-green-400/20'
                            : 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    className="pt-3 border-t border-white/10"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/strategy" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-semibold py-3 rounded-2xl shadow-xl shadow-green-500/30 hover:shadow-green-400/40 transition-all duration-300 hover:scale-105 border border-green-400/20 backdrop-blur-sm hover-target">
                        <span className="flex items-center justify-center">
                          Start Analysis
                          <Sparkles className="ml-2 h-4 w-4" />
                        </span>
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
