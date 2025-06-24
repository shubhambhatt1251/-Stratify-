import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Brain, Rocket, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EnhancedBackgroundElements } from '@/components/EnhancedBackgroundElements';

const analysisFeatures = [
	{
		icon: Brain,
		title: 'AI-Driven Insights',
		description: 'Get actionable insights powered by advanced neural networks and deep learning.',
		details: ['Pattern Recognition', 'Predictive Analytics', 'Personalized Suggestions', 'Continuous Learning'],
		gradient: 'from-green-400 to-emerald-500'
	},
	{
		icon: BarChart3,
		title: 'Comprehensive Analytics',
		description: 'Visualize your business data with interactive charts and real-time metrics.',
		details: ['Live Dashboards', 'Custom Reports', 'KPI Tracking', 'Exportable Data'],
		gradient: 'from-blue-400 to-cyan-500'
	},
	{
		icon: Rocket,
		title: 'Growth Opportunities',
		description: 'Identify and act on new growth opportunities with AI-powered recommendations.',
		details: ['Market Trends', 'Opportunity Alerts', 'Competitor Analysis', 'Actionable Steps'],
		gradient: 'from-purple-400 to-pink-500'
	},
	{
		icon: Shield,
		title: 'Risk Management',
		description: 'Mitigate risks with automated detection and smart prevention strategies.',
		details: ['Risk Alerts', 'Scenario Analysis', 'Security Protocols', 'AI Monitoring'],
		gradient: 'from-orange-400 to-red-500'
	}
];

const motionProps = {
	initial: { opacity: 0, y: 20 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.5 }
};

const staggerContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1
		}
	}
};

const staggerItem = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Analysis = () => (
	<div className="min-h-screen bg-background relative overflow-hidden">
		<EnhancedBackgroundElements />
		<Header />
		<motion.section
			className="min-h-[80vh] flex flex-col items-center justify-center section-spacing container-custom text-center relative"
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
		>
			<motion.div variants={staggerItem}>
				<Badge className="glass-ultra text-green-300 border-green-400/30 mb-6 px-4 py-2">
					<BarChart3 className="mr-2 h-4 w-4" />
					AI Analysis Dashboard
				</Badge>
			</motion.div>
			<motion.h1
				variants={staggerItem}
				className="text-hero font-bold text-white mb-6 leading-tight"
			>
				In-Depth Business Analysis
				<br />
				<span className="text-gradient animate-gradient">
					Powered by AI
				</span>
			</motion.h1>
			<motion.p
				variants={staggerItem}
				className="text-body text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
			>
				Unlock actionable insights, growth opportunities, and risk management with our advanced AI analysis tools.
			</motion.p>
			<motion.div
				variants={staggerItem}
				className="flex flex-col sm:flex-row gap-4 justify-center items-center"
			>
				<Link to="/">
					<Button className="btn-primary px-8 py-3 text-lg font-bold rounded-xl hover-lift group">
						<span className="flex items-center">
							Start Your Analysis
							<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
						</span>
					</Button>
				</Link>
			</motion.div>
		</motion.section>

		{/* Features Grid */}
		<section className="section-spacing">
			<div className="container-custom">
				<motion.div
					className="text-center mb-12"
					{...motionProps}
				>
					<Badge className="glass-ultra text-green-300 border-green-400/30 mb-6 px-4 py-2">
						<Brain className="mr-2 h-4 w-4" />
						Key Analysis Features
					</Badge>
					<h2 className="text-section-title font-bold text-white mb-4">
						What You Get
					</h2>
				</motion.div>
				<motion.div
					className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
					variants={staggerContainer}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					{analysisFeatures.map((feature, index) => (
						<motion.div
							key={feature.title}
							variants={staggerItem}
						>
							<Card className="glass-card uniform-box h-[340px] flex flex-col justify-between rounded-2xl overflow-hidden hover-lift group">
								<CardContent className="p-6 text-center flex flex-col h-full">
									<div>
										<div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
											<feature.icon className="h-8 w-8 text-white" />
										</div>
										<h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
										<p className="text-gray-300 text-sm leading-relaxed mb-6">{feature.description}</p>
									</div>
									<div className="space-y-2">
										{feature.details.map((item, itemIndex) => (
											<div key={itemIndex} className="flex items-center text-sm">
												<CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
												<span className="text-gray-300">{item}</span>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>

		{/* CTA Section */}
		<section className="section-spacing bg-gradient-to-r from-green-900/10 to-black/30">
			<div className="container-custom text-center">
				<motion.div
					className="glass-ultra rounded-2xl p-8 max-w-4xl mx-auto"
					initial={{ opacity: 0, scale: 0.98 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-section-title font-bold text-white mb-6">
						Ready for Actionable Insights?
						<br />
						<span className="text-gradient">Start Your AI Analysis</span>
					</h2>
					<p className="text-body text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
						Join thousands of businesses using our platform to make smarter, data-driven decisions.
					</p>
					<Link to="/strategy#strategy-form">
						<Button className="btn-primary px-8 py-3 text-lg font-bold rounded-xl hover-lift group">
							<span className="flex items-center">
								Get Started Now
								<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</span>
						</Button>
					</Link>
				</motion.div>
			</div>
		</section>
	</div>
);

export default Analysis;
