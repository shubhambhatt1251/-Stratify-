
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, TrendingUp, Users, Target, Zap, Activity } from 'lucide-react';

export const AnalyticsDashboard = () => {
  const metrics = [
    { icon: BarChart3, label: 'Revenue Growth', value: '+245%', trend: 'up', color: 'text-green-400' },
    { icon: Users, label: 'Active Users', value: '12.4K', trend: 'up', color: 'text-blue-400' },
    { icon: Target, label: 'Conversion Rate', value: '8.7%', trend: 'up', color: 'text-purple-400' },
    { icon: Zap, label: 'Performance', value: '99.2%', trend: 'stable', color: 'text-orange-400' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <Card className="glass-ultra rounded-xl overflow-hidden hover-lift group">
            <CardContent className="p-6 text-center">
              <motion.div 
                className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-black/50 to-green-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </motion.div>
              <motion.div 
                className={`text-2xl font-bold ${metric.color} mb-2`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: [0.4, 0, 0.2, 1] as any }}
              >
                {metric.value}
              </motion.div>
              <p className="text-gray-300 text-sm">{metric.label}</p>
              <motion.div 
                className="mt-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingUp className="h-4 w-4 text-green-400 mx-auto" />
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
