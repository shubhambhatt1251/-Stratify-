
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
  animation?: 'pulse' | 'bounce' | 'spin' | 'float' | 'glow';
  size?: number;
  color?: string;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  icon: Icon,
  className = '',
  animation = 'pulse',
  size = 24,
  color = 'currentColor'
}) => {
  const animations = {
    pulse: {
      scale: [1, 1.2, 1],
      transition: { 
        duration: 2, 
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1] as any
      }
    },
    bounce: {
      y: [0, -20, 0],
      transition: { 
        duration: 2, 
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1] as any
      }
    },
    spin: {
      rotate: 360,
      transition: { 
        duration: 3, 
        repeat: Infinity,
        ease: "linear" as any
      }
    },
    float: {
      y: [0, -10, 0],
      x: [0, 5, 0],
      transition: { 
        duration: 4, 
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1] as any
      }
    },
    glow: {
      filter: [
        'drop-shadow(0 0 5px rgba(16, 185, 129, 0.5))',
        'drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))',
        'drop-shadow(0 0 5px rgba(16, 185, 129, 0.5))'
      ],
      transition: { 
        duration: 2, 
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1] as any
      }
    }
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={animations[animation]}
      whileHover={{ scale: 1.1 }}
    >
      <Icon size={size} color={color} />
    </motion.div>
  );
};
