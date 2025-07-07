import React from 'react';
import { BarChart3, PieChart, TrendingUp, Target, Brain, Zap } from 'lucide-react';
import Card from '../../ui/Card';
import AreaChart from '../../charts/AreaChart';
import BarChart from '../../charts/BarChart';
//import PieChart from '../../charts/PieChart';
import RadialChart from '../../charts/RadialChart';

const AnalyticsSection: React.FC = () => {
  const predictiveData = [
    { name: 'Jan', value: 4800000 },
    { name: 'Feb', value: 5200000 },
    { name: 'Mar', value: 5600000 },
    { name: 'Apr', value: 5900000 },
    { name: 'May', value: 6100000 },
    { name: 'Jun', value: 6400000 }
  ];

  const riskAnalysis = [
    { name: 'Low Risk', value: 65, color: '#10B981' },
    { name: 'Medium Risk', value: 25, color: '#F59E0B' },
    { name: 'High Risk', value: 10, color: '#EF4444' }
  ];

  const performanceIndicators = [
    { name: 'ROI', value: 18500000, maxValue: 25000000, color: '#3B82F6' },
    { name: 'Efficiency', value: 22000000, maxValue: 25000000, color: '#10B981' },
    { name: 'Growth', value: 19500000, maxValue: 25000000, color: '#F59E0B' },
    { name: 'Stability', value: 21000000, maxValue: 25000000, color: '#8B5CF6' }
  ];

  const benchmarkData = [
    { name: 'Our University', value: 45800000 },
    { name: 'Peer Average', value: 38200000 },
    { name: 'Top Quartile', value: 52100000 },
    { name: 'Industry Leader', value: 67300000 }
  ];

  return (
    <div className="space-y-6">
      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-10" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <p className="text-white/70 text-sm font-medium mb-1">AI Insights Generated</p>
              <p className="text-white text-2xl font-bold">1,247</p>
            </div>
          </div>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-10" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <p className="text-white/70 text-sm font-medium mb-1">Prediction Accuracy</p>
              <p className="text-white text-2xl font-bold">94.2%</p>
            </div>
          </div>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 opacity-10" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <p className="text-white/70 text-sm font-medium mb-1">Optimization Score</p>
              <p className="text-white text-2xl font-bold">8.7/10</p>
            </div>
          </div>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-10" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <p className="text-white/70 text-sm font-medium mb-1">Trend Confidence</p>
              <p className="text-white text-2xl font-bold">89.5%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Predictive Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Revenue Prediction" subtitle="AI-powered 6-month revenue forecast">
          <AreaChart data={predictiveData} height={300} color="#3B82F6" />
          <div className="mt-4 p-3 bg-blue-500/20 border border-blue-400/30 rounded-xl">
            <p className="text-blue-300 text-sm font-medium">AI Confidence: 91.2%</p>
            <p className="text-white/70 text-xs">Based on historical data and market trends</p>
          </div>
        </Card>

        <Card title="Risk Assessment" subtitle="Financial risk distribution analysis">
          <PieChart data={riskAnalysis} height={300} />
          <div className="mt-4 p-3 bg-emerald-500/20 border border-emerald-400/30 rounded-xl">
            <p className="text-emerald-300 text-sm font-medium">Overall Risk: Low</p>
            <p className="text-white/70 text-xs">Diversified portfolio with stable income</p>
          </div>
        </Card>
      </div>

      {/* Performance Analytics */}
      <Card title="Key Performance Indicators" subtitle="Real-time performance metrics">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {performanceIndicators.map((indicator, index) => (
            <RadialChart
              key={index}
              value={indicator.value}
              maxValue={indicator.maxValue}
              color={indicator.color}
              label={indicator.name}
              size={120}
              strokeWidth={8}
            />
          ))}
        </div>
      </Card>

      {/* Benchmark Analysis */}
      <Card title="Competitive Benchmarking" subtitle="Performance comparison with peer institutions">
        <BarChart data={benchmarkData} height={350} color="#8B5CF6" />
      </Card>

      {/* Advanced Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Anomaly Detection" gradient>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Unusual Spending Pattern</p>
                <p className="text-orange-300 text-xs">Facilities Department</p>
              </div>
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Revenue Spike Detected</p>
                <p className="text-emerald-300 text-xs">International Programs</p>
              </div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Budget Variance Alert</p>
                <p className="text-blue-300 text-xs">Research Division</p>
              </div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            </div>
          </div>
        </Card>

        <Card title="Predictive Insights" gradient>
          <div className="space-y-4">
            <div className="p-3 bg-white/5 rounded-xl">
              <p className="text-white font-medium mb-2">Next Quarter Forecast</p>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Revenue</span>
                  <span className="text-emerald-300">+15.2%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Expenses</span>
                  <span className="text-orange-300">+8.7%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Net Income</span>
                  <span className="text-blue-300">+23.1%</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Optimization Recommendations" gradient>
          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-xl">
              <p className="text-white font-medium">Cost Reduction</p>
              <p className="text-emerald-300 text-xs">Potential savings: $1.2M</p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl">
              <p className="text-white font-medium">Revenue Enhancement</p>
              <p className="text-blue-300 text-xs">Opportunity: $2.8M</p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl">
              <p className="text-white font-medium">Process Improvement</p>
              <p className="text-purple-300 text-xs">Efficiency gain: 18%</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsSection;