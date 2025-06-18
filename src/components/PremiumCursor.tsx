
import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export const PremiumCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });

  const updateMousePosition = useCallback((e: MouseEvent) => {
    const newX = e.clientX;
    const newY = e.clientY;
    
    // Calculate velocity for dynamic effects
    setVelocity({
      x: newX - mousePosition.x,
      y: newY - mousePosition.y
    });
    
    setMousePosition({ x: newX, y: newY });
  }, [mousePosition.x, mousePosition.y]);

  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  const handleMouseEnter = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button') || target.closest('a') || target.classList.contains('cursor-target')) {
      setIsHovering(true);
    }
  }, []);

  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseover', handleMouseEnter, { passive: true });
    document.addEventListener('mouseout', handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [updateMousePosition, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave]);

  const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
  const dynamicScale = Math.min(1 + speed * 0.02, 2);

  return (
    <>
      {/* Main Cursor Core */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        animate={{
          scale: isClicking ? 0.6 : isHovering ? 2 : dynamicScale,
          rotate: speed > 10 ? 360 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 15,
          mass: 0.1,
          rotate: { duration: 0.5, ease: "easeOut" }
        }}
      >
        <div className="w-full h-full rounded-full relative overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-spin" 
               style={{ animation: 'spin 1s linear infinite' }} />
          <div className="absolute inset-0.5 rounded-full bg-black" />
          <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 opacity-90" />
        </div>
      </motion.div>

      {/* Fast Following Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998] rounded-full border-2 border-cyan-400/50"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isClicking ? 0.4 : isHovering ? 2.5 : 1 + speed * 0.01,
          opacity: isHovering ? 0.9 : 0.6,
          borderColor: speed > 20 ? '#ff6b6b' : speed > 10 ? '#4ecdc4' : '#00d4ff',
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 20,
          mass: 0.2,
        }}
      />

      {/* Dynamic Outer Glow */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9997] rounded-full"
        style={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          background: `radial-gradient(circle, 
            rgba(0, 212, 255, ${0.3 + speed * 0.01}), 
            rgba(78, 205, 196, ${0.2 + speed * 0.005}), 
            transparent)`,
          filter: `blur(${6 + speed * 0.2}px)`,
        }}
        animate={{
          scale: isClicking ? 0.3 : isHovering ? 3 : 1 + speed * 0.03,
          opacity: 0.4 + speed * 0.02,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.5,
        }}
      />

      {/* Speed-Based Particle Trail */}
      {Array.from({ length: Math.min(8, Math.floor(speed / 5) + 3) }, (_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-[9996] rounded-full"
          style={{
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
            background: `linear-gradient(45deg, 
              hsl(${180 + i * 30}, 70%, 60%), 
              hsl(${200 + i * 25}, 80%, 70%))`,
          }}
          animate={{
            scale: [1, 0],
            opacity: [0.8 - i * 0.1, 0],
            x: mousePosition.x - 3 - velocity.x * i * 0.3,
            y: mousePosition.y - 3 - velocity.y * i * 0.3,
          }}
          transition={{
            duration: 0.4 + i * 0.05,
            delay: i * 0.02,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Lightning Effect on Fast Movement */}
      {speed > 30 && (
        <motion.div
          className="fixed top-0 left-0 w-20 h-20 pointer-events-none z-[9995] rounded-full"
          style={{
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 70%)',
            filter: 'blur(10px)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.3],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Click Ripple Effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[9994] rounded-full border-2 border-white/30"
          style={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        />
      )}

      {/* Magnetic Field Effect on Hover */}
      {isHovering && (
        <>
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={`magnetic-${i}`}
              className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-[9993] rounded-full bg-cyan-300"
              style={{
                x: mousePosition.x - 2,
                y: mousePosition.y - 2,
              }}
              animate={{
                x: mousePosition.x - 2 + Math.cos(Date.now() * 0.01 + i) * 20,
                y: mousePosition.y - 2 + Math.sin(Date.now() * 0.01 + i) * 20,
                opacity: [0.8, 0.3, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </>
      )}
    </>
  );
};
