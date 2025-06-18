
import React from 'react';
import { motion } from 'framer-motion';
import { QuantumParticles } from './QuantumParticles';
import { NeuralNetwork } from './NeuralNetwork';

export const BackgroundElements = () => {
  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 120 + 60,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 12,
  }));

  const circuitPaths = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Quantum Particles */}
      <QuantumParticles />
      
      {/* Neural Network */}
      <NeuralNetwork />
      
      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0,50 L 25,50 L 25,25 L 50,25 L 50,75 L 75,75 L 75,50 L 100,50" 
                    fill="none" stroke="url(#circuitGradient)" strokeWidth="2"/>
              <circle cx="25" cy="50" r="3" fill="#10b981" opacity="0.6"/>
              <circle cx="75" cy="25" r="3" fill="#3b82f6" opacity="0.6"/>
              <circle cx="50" cy="75" r="3" fill="#8b5cf6" opacity="0.6"/>
            </pattern>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4"/>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Animated Grid with Neural Pulse */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="neuralGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="url(#neuralPulse)" strokeWidth="1"/>
            </pattern>
            <linearGradient id="neuralPulse" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4"/>
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#059669" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#neuralGrid)" />
        </svg>
      </div>

      {/* Floating Quantum Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full border border-green-400/20"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
            background: `radial-gradient(circle, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.02))`,
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.2)',
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            rotate: [0, 360, 720],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1] as any,
          }}
        />
      ))}

      {/* Energy Orbital Lines */}
      <svg width="100%" height="100%" className="absolute inset-0 opacity-30">
        <defs>
          <linearGradient id="orbitalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
            <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.6"/>
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4"/>
            <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8"/>
          </linearGradient>
        </defs>
        {circuitPaths.map((_, i) => (
          <motion.path
            key={i}
            d={`M${i * 150},0 Q${i * 150 + 75},${window.innerHeight / 3} ${i * 150 + 150},${window.innerHeight / 2} Q${i * 150 + 225},${window.innerHeight * 2/3} ${i * 150 + 300},${window.innerHeight}`}
            fill="none"
            stroke="url(#orbitalGradient)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{
              duration: 4,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse" as any,
              ease: [0.4, 0, 0.2, 1] as any,
            }}
          />
        ))}
      </svg>

      {/* Radial Quantum Field */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-green-900/10 to-black/60"></div>
      
      {/* Corner Quantum Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/10 via-green-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
    </div>
  );
};
