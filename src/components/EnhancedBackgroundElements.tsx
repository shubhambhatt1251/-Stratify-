import React from 'react';
import { NeuralNetwork } from './NeuralNetwork';

export const EnhancedBackgroundElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="opacity-20">
        <NeuralNetwork />
      </div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-emerald-500/10 via-transparent to-transparent"></div>
      </div>
      <div className="absolute inset-0">
        <div className="background-line-top bg-gradient-to-r from-transparent via-green-400/20 to-transparent transform rotate-45 w-full h-0.5"></div>
        <div className="background-line-bottom bg-gradient-to-r from-transparent via-blue-400/20 to-transparent transform -rotate-45 w-full h-0.5"></div>
      </div>
    </div>
  );
};
