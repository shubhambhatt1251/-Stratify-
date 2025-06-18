
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Rocket, Building, Users, Target, DollarSign, TrendingUp, CheckCircle, Sparkles, Brain, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { StartupFormData } from '@/pages/Strategy';

interface StartupFormProps {
  onSubmit: (data: StartupFormData) => void;
}

export const StartupForm: React.FC<StartupFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<StartupFormData>({
    startupName: '',
    website: '',
    industry: '',
    teamSize: '',
    currentChannels: [],
    objective: '',
    longTermGoal: '',
    budget: 0,
    icp: '',
    competitors: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);
    onSubmit(formData);
  };

  const handleInputChange = (field: keyof StartupFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleChannelChange = (channel: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      currentChannels: checked
        ? [...prev.currentChannels, channel]
        : prev.currentChannels.filter(c => c !== channel)
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.startupName && formData.industry && formData.teamSize;
      case 2:
        return formData.objective && formData.longTermGoal;
      case 3:
        return formData.budget > 0 && formData.icp;
      case 4:
        return formData.competitors;
      default:
        return false;
    }
  };

  const channelOptions = [
    'Social Media Marketing',
    'Content Marketing',
    'Email Marketing',
    'SEO/SEM',
    'Paid Advertising',
    'Influencer Marketing',
    'Partnership Marketing',
    'Event Marketing',
    'Direct Sales',
    'None Currently'
  ];

  const industryOptions = [
    'Technology/Software',
    'E-commerce',
    'Healthcare',
    'Finance/Fintech',
    'Education/Edtech',
    'Real Estate',
    'Food & Beverage',
    'Travel & Hospitality',
    'Manufacturing',
    'Consulting/Services',
    'Other'
  ];

  const teamSizeOptions = [
    '1-2 people',
    '3-5 people',
    '6-10 people',
    '11-25 people',
    '26-50 people',
    '50+ people'
  ];

  const stepTitles = [
    'Basic Information',
    'Goals & Vision',
    'Budget & Audience',
    'Market Analysis'
  ];

  const stepIcons = [
    <Building className="h-6 w-6" />,
    <Target className="h-6 w-6" />,
    <DollarSign className="h-6 w-6" />,
    <BarChart3 className="h-6 w-6" />
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Header */}
      <div className="mb-8 sm:mb-12">
        <div className="flex items-center justify-center mb-8">
          <Badge className="bg-green-400/20 text-green-300 border-green-400/30 px-6 py-2 text-lg glass-card animate-glow-pulse">
            <Sparkles className="mr-2 h-5 w-5" />
            Step {currentStep} of {totalSteps}
          </Badge>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-6 text-glow animate-slide-up">
          {stepTitles[currentStep - 1]}
        </h2>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-800/50 rounded-full h-3 mb-8 glass-dark">
          <div 
            className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full transition-all duration-500 ease-out animate-glow-pulse"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-between items-center mb-8">
          {Array.from({ length: totalSteps }, (_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                index + 1 <= currentStep 
                  ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg animate-glow-pulse' 
                  : 'glass-dark text-gray-400'
              }`}>
                {stepIcons[index]}
              </div>
              <span className={`text-sm mt-2 font-medium ${
                index + 1 <= currentStep ? 'text-green-400' : 'text-gray-400'
              }`}>
                {stepTitles[index]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <Card className="glass-card rounded-3xl overflow-hidden shadow-2xl animate-scale-in">
          <CardContent className="p-8 sm:p-12">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-8 animate-slide-up">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="startupName" className="text-white font-semibold text-lg flex items-center">
                      <Rocket className="mr-2 h-5 w-5 text-green-400" />
                      Startup Name *
                    </Label>
                    <Input
                      id="startupName"
                      type="text"
                      value={formData.startupName}
                      onChange={(e) => handleInputChange('startupName', e.target.value)}
                      placeholder="Enter your startup name"
                      className="bg-black/50 border-green-400/30 text-white placeholder-gray-400 h-12 text-lg rounded-xl focus:border-green-400 focus:ring-green-400/20 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-white font-semibold text-lg">
                      Website URL
                    </Label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      placeholder="https://yourwebsite.com"
                      className="bg-black/50 border-green-400/30 text-white placeholder-gray-400 h-12 text-lg rounded-xl focus:border-green-400 focus:ring-green-400/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-white font-semibold text-lg flex items-center">
                      <Building className="mr-2 h-5 w-5 text-green-400" />
                      Industry *
                    </Label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                      <SelectTrigger className="bg-black/50 border-green-400/30 text-white h-12 text-lg rounded-xl focus:border-green-400 focus:ring-green-400/20">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-green-400/30 text-white">
                        {industryOptions.map((industry) => (
                          <SelectItem key={industry} value={industry} className="hover:bg-green-400/20">
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teamSize" className="text-white font-semibold text-lg flex items-center">
                      <Users className="mr-2 h-5 w-5 text-green-400" />
                      Team Size *
                    </Label>
                    <Select value={formData.teamSize} onValueChange={(value) => handleInputChange('teamSize', value)}>
                      <SelectTrigger className="bg-black/50 border-green-400/30 text-white h-12 text-lg rounded-xl focus:border-green-400 focus:ring-green-400/20">
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-green-400/30 text-white">
                        {teamSizeOptions.map((size) => (
                          <SelectItem key={size} value={size} className="hover:bg-green-400/20">
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-white font-semibold text-lg flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-green-400" />
                    Current Marketing Channels
                  </Label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {channelOptions.map((channel) => (
                      <div key={channel} className="flex items-center space-x-3 p-3 glass-dark rounded-xl hover:bg-green-400/10 transition-all duration-300">
                        <Checkbox
                          id={channel}
                          checked={formData.currentChannels.includes(channel)}
                          onCheckedChange={(checked) => handleChannelChange(channel, checked as boolean)}
                          className="border-green-400/50 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                        />
                        <Label htmlFor={channel} className="text-white cursor-pointer">
                          {channel}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Goals & Vision */}
            {currentStep === 2 && (
              <div className="space-y-8 animate-slide-up">
                <div className="space-y-2">
                  <Label htmlFor="objective" className="text-white font-semibold text-lg flex items-center">
                    <Target className="mr-2 h-5 w-5 text-green-400" />
                    Primary Business Objective *
                  </Label>
                  <Textarea
                    id="objective"
                    value={formData.objective}
                    onChange={(e) => handleInputChange('objective', e.target.value)}
                    placeholder="What is your main business goal for the next 6-12 months? (e.g., increase revenue, acquire customers, launch new product)"
                    className="bg-black/50 border-green-400/30 text-white placeholder-gray-400 min-h-32 text-lg rounded-xl focus:border-green-400 focus:ring-green-400/20 transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="longTermGoal" className="text-white font-semibold text-lg flex items-center">
                    <Rocket className="mr-2 h-5 w-5 text-green-400" />
                    Long-term Vision *
                  </Label>
                  <Textarea
                    id="longTermGoal"
                    value={formData.longTermGoal}
                    onChange={(e) => handleInputChange('longTermGoal', e.target.value)}
                    placeholder="What is your long-term vision for the company? Where do you see yourself in 3-5 years?"
                    className="bg-black/50 border-green-400/30 text-white placeholder-gray-400 min-h-32 text-lg rounded-xl focus:border-green-400 focus:ring-green-400/20 transition-all duration-300 resize-none"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 3: Budget & Audience */}
            {currentStep === 3 && (
              <div className="space-y-8 animate-slide-up">
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-white font-semibold text-lg flex items-center">
                    <DollarSign className="mr-2 h-5 w-5 text-green-400" />
                    Monthly Marketing Budget (USD) *
                  </Label>
                  <Input
                    id="budget"
                    type="number"
                    value={formData.budget || ''}
                    onChange={(e) => handleInputChange('budget', Number(e.target.value))}
                    placeholder="5000"
                    min="0"
                    className="bg-black/50 border-green-400/30 text-white placeholder-gray-400 h-12 text-lg rounded-xl focus:border-green-400 focus:ring-green-400/20 transition-all duration-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icp" className="text-white font-semibold text-lg flex items-center">
                    <Users className="mr-2 h-5 w-5 text-green-400" />
                    Ideal Customer Profile *
                  </Label>
                  <Textarea
                    id="icp"
                    value={formData.icp}
                    onChange={(e) => handleInputChange('icp', e.target.value)}
                    placeholder="Describe your ideal customer: demographics, behavior, pain points, where they spend time online, etc."
                    className="bg-black/50 border-green-400/30 text-white placeholder-gray-400 min-h-32 text-lg rounded-xl focus:border-green-400 focus:ring-green-400/20 transition-all duration-300 resize-none"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 4: Market Analysis */}
            {currentStep === 4 && (
              <div className="space-y-8 animate-slide-up">
                <div className="space-y-2">
                  <Label htmlFor="competitors" className="text-white font-semibold text-lg flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-green-400" />
                    Main Competitors *
                  </Label>
                  <Textarea
                    id="competitors"
                    value={formData.competitors}
                    onChange={(e) => handleInputChange('competitors', e.target.value)}
                    placeholder="List your main competitors and what makes them successful. What are they doing well? What gaps do you see?"
                    className="bg-black/50 border-green-400/30 text-white placeholder-gray-400 min-h-32 text-lg rounded-xl focus:border-green-400 focus:ring-green-400/20 transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <div className="glass-dark p-6 rounded-2xl">
                  <h3 className="text-white font-bold text-xl mb-4 flex items-center text-glow">
                    <CheckCircle className="mr-2 h-6 w-6 text-green-400" />
                    Ready to Generate Your Strategy
                  </h3>
                  <p className="text-gray-300 mb-6">
                    You've provided all the necessary information. Our AI will now analyze your startup data and generate a comprehensive growth strategy tailored specifically for your business.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div className="glass-card p-4 rounded-xl">
                      <Brain className="h-8 w-8 text-green-400 mx-auto mb-2 animate-glow-pulse" />
                      <p className="text-white font-semibold">AI Analysis</p>
                      <p className="text-gray-400 text-sm">Advanced algorithms</p>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <Target className="h-8 w-8 text-green-400 mx-auto mb-2 animate-glow-pulse" />
                      <p className="text-white font-semibold">Custom Strategy</p>
                      <p className="text-gray-400 text-sm">Tailored recommendations</p>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2 animate-glow-pulse" />
                      <p className="text-white font-semibold">Growth Focus</p>
                      <p className="text-gray-400 text-sm">Actionable insights</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-8">
          <Button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            variant="outline"
            className={`px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 ${
              currentStep === 1 
                ? 'opacity-50 cursor-not-allowed' 
                : 'border-green-400/50 text-white hover:bg-green-400/10 glass-dark'
            }`}
          >
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button
              type="button"
              onClick={nextStep}
              disabled={!isStepValid()}
              className={`px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                isStepValid() 
                  ? 'btn-glow text-black' 
                  : 'opacity-50 cursor-not-allowed bg-gray-600 text-gray-400'
              }`}
            >
              <span className="flex items-center">
                Next Step
                <ArrowRight className="ml-2 h-5 w-6" />
              </span>
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={!isStepValid()}
              className={`px-12 py-4 text-xl font-bold rounded-2xl transition-all duration-300 ${
                isStepValid() 
                  ? 'btn-glow text-black animate-glow-pulse' 
                  : 'opacity-50 cursor-not-allowed bg-gray-600 text-gray-400'
              }`}
            >
              <span className="flex items-center">
                <Zap className="mr-3 h-6 w-6" />
                Generate AI Strategy
                <Sparkles className="ml-3 h-6 w-6" />
              </span>
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
