import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react';
import Card from '../../ui/Card';

const FinancialHealth: React.FC = () => {
  const healthIndicators = [
    {
      title: 'Liquidity Ratio',
      value: '2.4',
      status: 'excellent',
      change: '+0.3',
      icon: CheckCircle,
      description: 'Strong cash position'
    },
    {
      title: 'Debt-to-Equity',
      value: '0.35',
      status: 'good',
      change: '-0.05',
      icon: TrendingDown,
      description: 'Decreasing debt burden'
    },
    {
      title: 'Operating Margin',
      value: '16.6%',
      status: 'good',
      change: '+2.1%',
      icon: TrendingUp,
      description: 'Improving efficiency'
    },
    {
      title: 'Cash Burn Rate',
      value: '2.1M',
      status: 'warning',
      change: '+0.3M',
      icon: AlertTriangle,
      description: 'Monitor closely'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'from-emerald-500 to-teal-600';
      case 'good': return 'from-blue-500 to-indigo-600';
      case 'warning': return 'from-orange-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-emerald-500/20 border-emerald-500/30';
      case 'good': return 'bg-blue-500/20 border-blue-500/30';
      case 'warning': return 'bg-orange-500/20 border-orange-500/30';
      default: return 'bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <Card 
      title="Financial Health Score" 
      subtitle="Key financial health indicators"
    >
      <div className="space-y-4 mt-4">
        {healthIndicators.map((indicator, index) => {
          const Icon = indicator.icon;
          return (
            <div key={index} className={`p-4 rounded-xl border ${getStatusBg(indicator.status)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${getStatusColor(indicator.status)}`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{indicator.title}</h4>
                    <p className="text-white/70 text-xs">{indicator.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white text-lg font-bold">{indicator.value}</p>
                  <p className={`text-xs font-medium ${
                    indicator.change.startsWith('+') ? 'text-emerald-300' : 'text-red-300'
                  }`}>
                    {indicator.change}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-semibold">Overall Health Score</h4>
            <p className="text-white/70 text-sm">Based on key financial metrics</p>
          </div>
          <div className="text-right">
            <p className="text-white text-2xl font-bold">8.2</p>
            <p className="text-emerald-300 text-sm font-medium">Excellent</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FinancialHealth;