
import React from 'react';
import { motion } from 'framer-motion';

export const QuantumParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-green-400/40 to-blue-400/40"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, -50, 0],
            scale: [1, 0.5, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1] as any,
          }}
        />
      ))}
    </div>
  );
};
