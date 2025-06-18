
import React from 'react';
import { motion } from 'framer-motion';

export const NeuralNetwork = () => {
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: (i % 4) * 25 + 12.5,
    y: Math.floor(i / 4) * 33 + 16.5,
  }));

  const connections = [
    [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 6], [3, 7],
    [4, 5], [5, 6], [6, 7], [4, 8], [5, 9], [6, 10], [7, 11],
    [8, 9], [9, 10], [10, 11]
  ];

  return (
    <div className="absolute inset-0 opacity-20">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4"/>
          </linearGradient>
        </defs>
        
        {connections.map(([start, end], index) => {
          const startNode = nodes[start];
          const endNode = nodes[end];
          return (
            <motion.line
              key={index}
              x1={`${startNode.x}%`}
              y1={`${startNode.y}%`}
              x2={`${endNode.x}%`}
              y2={`${endNode.y}%`}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{
                duration: 2,
                delay: index * 0.1,
                repeat: Infinity,
                repeatType: "reverse" as any,
                ease: [0.4, 0, 0.2, 1] as any,
              }}
            />
          );
        })}
        
        {nodes.map((node, index) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="4"
            fill="url(#neuralGradient)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 3,
              delay: index * 0.2,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1] as any,
            }}
          />
        ))}
      </svg>
    </div>
  );
};
