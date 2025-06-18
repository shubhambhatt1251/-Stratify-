
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Download, FileText, CheckCircle, Sparkles } from 'lucide-react';

interface PrintLoadingModalProps {
  isVisible: boolean;
  progress: number;
  stage: 'preparing' | 'generating' | 'formatting' | 'complete';
}

export const PrintLoadingModal = ({ isVisible, progress, stage }: PrintLoadingModalProps) => {
  const getStageInfo = () => {
    switch (stage) {
      case 'preparing':
        return { text: 'Preparing your strategy report...', icon: <FileText className="h-6 w-6" /> };
      case 'generating':
        return { text: 'Generating premium layout...', icon: <Sparkles className="h-6 w-6" /> };
      case 'formatting':
        return { text: 'Optimizing for print...', icon: <Download className="h-6 w-6" /> };
      case 'complete':
        return { text: 'Report ready for download!', icon: <CheckCircle className="h-6 w-6" /> };
      default:
        return { text: 'Processing...', icon: <FileText className="h-6 w-6" /> };
    }
  };

  const stageInfo = getStageInfo();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="glass-card border-green-400/20 shadow-2xl shadow-green-500/10 w-full max-w-md">
              <CardContent className="p-8 text-center">
                <motion.div
                  animate={{ rotate: stage === 'complete' ? 0 : 360 }}
                  transition={{ duration: 2, repeat: stage === 'complete' ? 0 : Infinity, ease: "linear" }}
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white ${
                    stage === 'complete' ? 'bg-gradient-to-r from-green-400 to-emerald-400' : ''
                  }`}
                >
                  {stageInfo.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Creating Your Report
                </h3>

                <p className="text-gray-300 mb-6 text-lg">
                  {stageInfo.text}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 mb-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full relative"
                  >
                    <motion.div
                      animate={{ x: ["0%", "100%", "0%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </motion.div>
                </div>

                <div className="text-sm text-green-400 font-semibold">
                  {progress}% Complete
                </div>

                {/* Progress Steps */}
                <div className="flex justify-between mt-6 text-xs text-gray-400">
                  <span className={stage === 'preparing' ? 'text-green-400' : progress > 25 ? 'text-white' : ''}>
                    Prepare
                  </span>
                  <span className={stage === 'generating' ? 'text-green-400' : progress > 50 ? 'text-white' : ''}>
                    Generate
                  </span>
                  <span className={stage === 'formatting' ? 'text-green-400' : progress > 75 ? 'text-white' : ''}>
                    Format
                  </span>
                  <span className={stage === 'complete' ? 'text-green-400' : progress === 100 ? 'text-white' : ''}>
                    Complete
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
