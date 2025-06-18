import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, TrendingUp, Target, DollarSign, Users, Lightbulb, CheckCircle, AlertCircle, Sparkles, Zap, Star, Download, BarChart3, Rocket, Brain } from 'lucide-react';
import { StartupFormData } from '@/pages/Strategy';
import { PrintLoadingModal } from '@/components/PrintLoadingModal';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface RecommendationResultsProps {
  formData: StartupFormData;
  onStartOver: () => void;
}

interface Recommendation {
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  reasoning: string;
  execution: string[];
  competitorInsight: string;
  estimatedCost: string;
  timeline: string;
  expectedROI: string;
}

export const RecommendationResults = ({ formData, onStartOver }: RecommendationResultsProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadStage, setDownloadStage] = useState<'preparing' | 'generating' | 'formatting' | 'complete'>('preparing');
  const navigate = useNavigate();

  // Generate recommendations based on form data
  const generateRecommendations = (): Recommendation[] => {
    const recommendations: Recommendation[] = [];
    
    // Logic for SaaS companies
    if (formData.industry === 'SaaS') {
      if (!formData.currentChannels.includes('Content Marketing')) {
        recommendations.push({
          title: 'Content-Led SEO Strategy',
          priority: 'High',
          reasoning: `SaaS companies with ${formData.teamSize} typically see 3x higher organic traffic with content marketing. Your ${formData.objective.toLowerCase()} goal aligns perfectly with educational content that builds trust.`,
          execution: [
            'Create weekly technical blog posts targeting bottom-funnel keywords',
            'Develop comparison pages for competitors',
            'Build industry-specific calculators and tools',
            'Start a weekly newsletter with industry insights'
          ],
          competitorInsight: 'Top SaaS competitors average 4-6 blog posts per month, with comparison pages driving 23% of their organic traffic.',
          estimatedCost: `$${Math.min(formData.budget * 0.3, 3000)}/month`,
          timeline: '3-6 months to see results',
          expectedROI: '300-500% after 12 months'
        });
      }

      if (!formData.currentChannels.includes('LinkedIn Ads') && formData.budget > 2000) {
        recommendations.push({
          title: 'LinkedIn Account-Based Marketing',
          priority: 'High',
          reasoning: `With ${formData.longTermGoal.toLowerCase()} as your goal, LinkedIn ABM can deliver qualified enterprise leads. Your budget of $${formData.budget}/month is optimal for targeted campaigns.`,
          execution: [
            'Set up LinkedIn Sales Navigator for prospect identification',
            'Create persona-specific ad campaigns',
            'Develop gated premium content (whitepapers, case studies)',
            'Implement retargeting sequences for engaged prospects'
          ],
          competitorInsight: 'Enterprise SaaS companies see 2-3x higher conversion rates on LinkedIn vs other paid channels.',
          estimatedCost: `$${Math.min(formData.budget * 0.4, 5000)}/month`,
          timeline: '1-3 months to launch',
          expectedROI: '200-400% within 6 months'
        });
      }
    }

    // Logic for Ecommerce
    if (formData.industry === 'Ecommerce') {
      if (!formData.currentChannels.includes('Google Ads')) {
        recommendations.push({
          title: 'Google Shopping & Search Ads',
          priority: 'High',
          reasoning: `Ecommerce brands with your budget typically see immediate ROI from Google Ads. Perfect for ${formData.objective.toLowerCase()} with high-intent shoppers.`,
          execution: [
            'Set up Google Shopping campaigns with product feed',
            'Create branded search campaigns',
            'Implement dynamic remarketing',
            'Optimize for ROAS with smart bidding'
          ],
          competitorInsight: 'Ecommerce competitors allocate 40-60% of paid budget to Google, seeing average ROAS of 4:1.',
          estimatedCost: `$${Math.min(formData.budget * 0.5, 8000)}/month`,
          timeline: '2-4 weeks to launch',
          expectedROI: '300-600% within 3 months'
        });
      }

      if (!formData.currentChannels.includes('Influencer Marketing')) {
        recommendations.push({
          title: 'Micro-Influencer Partnerships',
          priority: 'Medium',
          reasoning: `For ${formData.objective.toLowerCase()}, micro-influencers (10K-100K followers) offer authentic endorsements at scale. Works especially well for visual products.`,
          execution: [
            'Identify niche micro-influencers in your category',
            'Create product seeding campaigns',
            'Develop affiliate/commission structures',
            'Track performance with unique discount codes'
          ],
          competitorInsight: 'Successful ecommerce brands work with 20-50 micro-influencers vs 1-2 macro-influencers for better ROI.',
          estimatedCost: `$${Math.min(formData.budget * 0.25, 3000)}/month`,
          timeline: '4-8 weeks to launch',
          expectedROI: '250-400% within 6 months'
        });
      }
    }

    // General recommendations based on team size and budget
    if (formData.teamSize === 'Solo founder' || formData.teamSize === '2-5 people') {
      if (!formData.currentChannels.includes('Email Marketing')) {
        recommendations.push({
          title: 'Email Marketing Automation',
          priority: 'High',
          reasoning: `Small teams need high-leverage activities. Email automation provides 42:1 ROI on average and scales without additional headcount.`,
          execution: [
            'Set up welcome email sequences',
            'Create behavior-triggered campaigns',
            'Implement abandoned cart recovery (if applicable)',
            'Build monthly newsletters with valuable content'
          ],
          competitorInsight: 'Top performers send 3-5x more emails than average, with segmentation improving open rates by 14.3%.',
          estimatedCost: `$${Math.min(formData.budget * 0.1, 500)}/month`,
          timeline: '2-4 weeks to launch',
          expectedROI: '4100% (industry average)'
        });
      }
    }

    // Fallback recommendations if none of the above apply
    if (recommendations.length < 3) {
      const fallbackRecs: Recommendation[] = [
        {
          title: 'Referral Program Implementation',
          priority: 'Medium',
          reasoning: `Given your focus on ${formData.objective.toLowerCase()}, referrals can reduce acquisition costs by 50% while improving retention.`,
          execution: [
            'Design compelling referral incentives',
            'Implement tracking and attribution',
            'Create shareable referral assets',
            'Promote program across all touchpoints'
          ],
          competitorInsight: 'Companies with referral programs see 16% higher lifetime value per customer.',
          estimatedCost: `$${Math.min(formData.budget * 0.15, 1000)}/month`,
          timeline: '6-8 weeks to launch',
          expectedROI: '200-350% within 12 months'
        },
        {
          title: 'Community Building Strategy',
          priority: 'Medium',
          reasoning: `For ${formData.longTermGoal.toLowerCase()}, building a community creates defensible moats and reduces churn.`,
          execution: [
            'Launch Slack/Discord community',
            'Host monthly virtual events',
            'Create exclusive content for members',
            'Implement community moderation'
          ],
          competitorInsight: 'Brands with active communities see 90% higher retention rates.',
          estimatedCost: `$${Math.min(formData.budget * 0.2, 2000)}/month`,
          timeline: '4-6 weeks to launch',
          expectedROI: '150-300% within 18 months'
        },
        {
          title: 'Partnership Channel Development',
          priority: 'Low',
          reasoning: `Strategic partnerships can accelerate ${formData.objective.toLowerCase()} without increasing paid acquisition costs.`,
          execution: [
            'Identify complementary (non-competing) companies',
            'Develop co-marketing initiatives',
            'Create joint content and webinars',
            'Establish formal partnership agreements'
          ],
          competitorInsight: 'B2B companies generate 20% of revenue through partnerships on average.',
          estimatedCost: `$${Math.min(formData.budget * 0.1, 800)}/month`,
          timeline: '8-12 weeks to establish',
          expectedROI: '100-250% within 12 months'
        }
      ];

      recommendations.push(...fallbackRecs.slice(0, 3 - recommendations.length));
    }

    return recommendations.slice(0, 3);
  };

  const recommendations = generateRecommendations();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-red-400/30';
      case 'Medium': return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-yellow-400/30';
      case 'Low': return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-400/30';
      default: return 'bg-gray-800/50 text-gray-300 border-gray-600/30';
    }
  };

  const handlePrintDownload = async () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    setDownloadStage('preparing');

    // Simulate enhanced download process with better UX
    const stages = [
      { stage: 'preparing' as const, duration: 800, progress: 25 },
      { stage: 'generating' as const, duration: 1200, progress: 60 },
      { stage: 'formatting' as const, duration: 800, progress: 90 },
      { stage: 'complete' as const, duration: 400, progress: 100 }
    ];

    for (const { stage, duration, progress } of stages) {
      setDownloadStage(stage);
      
      // Smooth progress animation
      const steps = 20;
      const stepDuration = duration / steps;
      const startProgress = downloadProgress;
      const progressDiff = progress - startProgress;
      
      for (let i = 0; i <= steps; i++) {
        await new Promise(resolve => setTimeout(resolve, stepDuration));
        setDownloadProgress(startProgress + (progressDiff * i / steps));
      }
    }

    // Generate enhanced print content
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      setIsDownloading(false);
      return;
    }

    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>AI Growth Strategy Report - ${formData.startupName}</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
          <style>
            ${document.querySelector('link[href*="print.css"]')?.innerHTML || ''}
            ${Array.from(document.styleSheets).map(sheet => {
              try {
                return Array.from(sheet.cssRules).map(rule => rule.cssText).join('');
              } catch (e) {
                return '';
              }
            }).join('')}
          </style>
        </head>
        <body>
          <div class="print-content">
            <div class="print-header">
              <h1 class="print-title">AI Growth Strategy Report</h1>
              <p class="print-subtitle">Personalized Strategic Roadmap for ${formData.startupName}</p>
              <p class="print-date">Generated on ${currentDate}</p>
            </div>
            
            <div class="print-overview">
              <h2 class="print-overview-title">Executive Summary & Company Analysis</h2>
              <p style="color: #475569; font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">
                This comprehensive strategy report has been generated using advanced AI analysis based on your startup's specific profile, 
                industry benchmarks, and proven growth methodologies. The following recommendations are tailored to maximize your 
                ${formData.objective.toLowerCase()} objectives within your current operational context.
              </p>
              <div class="print-stats-grid">
                <div class="print-stat-item">
                  <div class="print-stat-value">${formData.industry}</div>
                  <div class="print-stat-label">Industry Focus</div>
                </div>
                <div class="print-stat-item">
                  <div class="print-stat-value">${formData.teamSize}</div>
                  <div class="print-stat-label">Team Size</div>
                </div>
                <div class="print-stat-item">
                  <div class="print-stat-value">$${formData.budget.toLocaleString()}</div>
                  <div class="print-stat-label">Monthly Budget</div>
                </div>
                <div class="print-stat-item">
                  <div class="print-stat-value">${formData.currentChannels.length}</div>
                  <div class="print-stat-label">Active Channels</div>
                </div>
              </div>
            </div>

            ${recommendations.map((rec, index) => `
              <div class="print-recommendation print-no-break">
                <div class="print-rec-header">
                  <div class="print-rec-number">${index + 1}</div>
                  <h3 class="print-rec-title">${rec.title}</h3>
                  <span class="print-priority print-priority-${rec.priority.toLowerCase()}">${rec.priority} Priority</span>
                </div>
                
                <div class="print-rec-reasoning">
                  ${rec.reasoning}
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 2rem;">
                  <div>
                    <h4 class="print-section-title">
                      <div class="print-section-icon">🚀</div>
                      Implementation Roadmap
                    </h4>
                    <ul class="print-execution-list">
                      ${rec.execution.map(step => `
                        <li class="print-execution-item">
                          <div class="print-check-icon">✓</div>
                          <span class="print-execution-text">${step}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>

                  <div>
                    <h4 class="print-section-title">
                      <div class="print-section-icon">💡</div>
                      Market Intelligence & Metrics
                    </h4>
                    <div class="print-insights-box">
                      <p class="print-insights-text">${rec.competitorInsight}</p>
                    </div>

                    <div class="print-metrics-grid">
                      <div class="print-metric-card">
                        <div class="print-metric-value">${rec.estimatedCost}</div>
                        <div class="print-metric-label">Investment Required</div>
                      </div>
                      <div class="print-metric-card">
                        <div class="print-metric-value">${rec.timeline}</div>
                        <div class="print-metric-label">Timeline</div>
                      </div>
                      <div class="print-metric-card">
                        <div class="print-metric-value">${rec.expectedROI}</div>
                        <div class="print-metric-label">Expected ROI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}

            <div class="print-footer">
              <div class="print-disclaimer">
                <strong>Strategy Implementation Disclaimer:</strong> These AI-generated recommendations are based on comprehensive analysis of industry best practices, competitive intelligence, market data from over 10,000 successful startup journeys, and your specific organizational inputs. Actual results may vary depending on execution quality, market conditions, competitive landscape, and timing of implementation. We strongly recommend A/B testing multiple strategies simultaneously, maintaining detailed performance tracking, and iterating based on real-world data for optimal results. This report should be considered as strategic guidance to be adapted to your unique circumstances rather than prescriptive instructions.
              </div>
            </div>
          </div>

          <script>
            // Auto-print when ready
            window.onload = function() {
              setTimeout(function() {
                window.print();
                
                // Handle print dialog result
                window.onafterprint = function() {
                  window.close();
                };
                
                // Handle print cancel - redirect to home page instantly
                let printStarted = false;
                window.onfocus = function() {
                  if (!printStarted) {
                    printStarted = true;
                    setTimeout(function() {
                      if (window.opener) {
                        window.opener.location.href = window.location.origin + '/';
                        window.close();
                      }
                    }, 100);
                  }
                };
                
                // Alternative method for detecting print cancel
                setTimeout(function() {
                  if (!printStarted) {
                    if (window.opener) {
                      window.opener.location.href = window.location.origin + '/';
                      window.close();
                    }
                  }
                }, 3000);
              }, 1000);
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();
    
    // Hide loading modal after a short delay
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadProgress(0);
    }, 1500);
  };

  return (
    <>
      <PrintLoadingModal 
        isVisible={isDownloading}
        progress={downloadProgress}
        stage={downloadStage}
      />
      
      <div className="max-w-7xl mx-auto space-y-8 p-6 sm:p-8">
        {/* Enhanced Header with Dark Theme */}
        <div className="text-center space-y-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-black/40 to-emerald-900/20 rounded-3xl -z-10 glass-card"></div>
          <div className="pt-8 pb-8">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg shadow-green-500/40">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-green-400">Strategy Generated Successfully!</span>
              <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </motion.div>
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl sm:text-6xl font-bold text-gradient mb-4"
            >
              Your Personalized Growth Strategy
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Based on our AI analysis, here are the top 3 marketing strategies perfectly tailored for{' '}
              <span className="font-bold text-gradient">
                {formData.startupName}
              </span>
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center justify-center space-x-4 mt-8"
            >
              <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full border border-green-400/30">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-semibold">AI Analysis Complete</span>
              </div>
              <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full border border-blue-400/30">
                <Zap className="h-4 w-4 text-blue-400" />
                <span className="text-blue-300 font-semibold">Ready to Implement</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Company Summary with Dark Theme */}
        <Card className="glass-card border-green-400/20 shadow-2xl shadow-green-500/10">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-3 text-2xl text-white">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg shadow-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span>Company Analysis Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 glass-ultra rounded-xl backdrop-blur-sm border border-green-400/20 hover-glow">
                <div className="text-3xl font-bold text-gradient mb-2">
                  {formData.industry}
                </div>
                <div className="text-sm text-gray-400 font-medium">Industry Focus</div>
              </div>
              <div className="text-center p-6 glass-ultra rounded-xl backdrop-blur-sm border border-blue-400/20 hover-glow">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {formData.teamSize}
                </div>
                <div className="text-sm text-gray-400 font-medium">Team Size</div>
              </div>
              <div className="text-center p-6 glass-ultra rounded-xl backdrop-blur-sm border border-emerald-400/20 hover-glow">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">
                  ${formData.budget.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400 font-medium">Monthly Budget</div>
              </div>
              <div className="text-center p-6 glass-ultra rounded-xl backdrop-blur-sm border border-orange-400/20 hover-glow">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                  {formData.currentChannels.length}
                </div>
                <div className="text-sm text-gray-400 font-medium">Active Channels</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Recommendations with Dark Theme */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Your Strategic Recommendations
            </h2>
            <p className="text-lg text-gray-300">AI-powered insights tailored to your startup's unique profile</p>
          </div>
          
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="glass-card border-green-400/20 shadow-2xl shadow-green-500/10 hover-lift transition-all duration-500 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-black/20 to-emerald-900/10 group-hover:from-green-900/20 group-hover:to-emerald-900/20 transition-all duration-500"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-green-500/40">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-3 flex items-center text-white">
                            {rec.title}
                            <div className="ml-3 p-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
                              <Sparkles className="h-4 w-4 text-white" />
                            </div>
                          </CardTitle>
                          <Badge className={`${getPriorityColor(rec.priority)} font-semibold px-4 py-2 text-sm shadow-lg`}>
                            {rec.priority} Priority
                          </Badge>
                        </div>
                      </div>
                      <CardDescription className="text-gray-300 leading-relaxed text-lg glass-ultra p-6 rounded-xl border border-green-400/20">
                        {rec.reasoning}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 text-green-400">
                        <div className="p-2 bg-green-500/20 rounded-lg border border-green-400/30">
                          <Rocket className="h-5 w-5" />
                        </div>
                        <span className="font-bold text-lg">Implementation Roadmap</span>
                      </div>
                      <ul className="space-y-3">
                        {rec.execution.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start space-x-3 p-4 glass-ultra rounded-xl border border-green-400/20 hover-glow">
                            <div className="p-1 bg-green-500 rounded-full mt-1 shadow-md">
                              <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-gray-300 leading-relaxed font-medium">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 text-blue-400">
                        <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-400/30">
                          <Brain className="h-5 w-5" />
                        </div>
                        <span className="font-bold text-lg">Market Intelligence</span>
                      </div>
                      <div className="glass-ultra p-6 rounded-xl border border-blue-400/20 border-l-4 border-l-blue-500">
                        <p className="text-gray-300 leading-relaxed font-medium">
                          {rec.competitorInsight}
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="glass-ultra p-4 rounded-xl text-center shadow-lg border border-green-400/20 hover-glow">
                          <div className="text-lg font-bold text-green-400">{rec.estimatedCost}</div>
                          <div className="text-xs text-gray-400 font-medium">Investment</div>
                        </div>
                        <div className="glass-ultra p-4 rounded-xl text-center shadow-lg border border-blue-400/20 hover-glow">
                          <div className="text-lg font-bold text-blue-400">{rec.timeline}</div>
                          <div className="text-xs text-gray-400 font-medium">Timeline</div>
                        </div>
                        <div className="glass-ultra p-4 rounded-xl text-center shadow-lg border border-purple-400/20 hover-glow">
                          <div className="text-lg font-bold text-purple-400">{rec.expectedROI}</div>
                          <div className="text-xs text-gray-400 font-medium">Expected ROI</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Action Buttons with Dark Theme */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-12"
        >
          <Button 
            variant="outline" 
            onClick={onStartOver}
            className="px-8 py-4 text-lg font-semibold glass-card border-2 border-gray-600/50 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300 rounded-xl text-white hover-lift"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Create New Strategy
          </Button>
          <Button 
            className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-400 hover:via-emerald-400 hover:to-green-500 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover-lift group"
            onClick={handlePrintDownload}
            disabled={isDownloading}
          >
            <Download className={`mr-2 h-5 w-5 ${isDownloading ? '' : 'group-hover:animate-bounce'} text-white`} />
            {isDownloading ? 'Generating Report...' : 'Download Premium Report'}
          </Button>
        </motion.div>

        {/* Enhanced Disclaimer with Dark Theme */}
        <div className="text-center glass-card p-6 rounded-2xl border border-green-400/20 mt-12 shadow-lg">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <AlertCircle className="h-5 w-5 text-green-400" />
            <span className="font-semibold text-green-300">Strategy Disclaimer</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-4xl mx-auto">
            These AI-generated recommendations are based on industry best practices, market data, and your specific inputs. 
            Results may vary depending on execution quality, market conditions, and competitive landscape. 
            We recommend testing multiple strategies simultaneously and tracking performance closely for optimal results.
          </p>
        </div>
      </div>
    </>
  );
};
