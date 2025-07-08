import React from 'react';
import { FinancialMetric } from '../../../types/financial';
import { formatPercentage } from '../../../utils/formatters';
import { useSettings } from '../../../contexts/SettingsContext';
import { TrendingUp, TrendingDown, DollarSign, Wallet, ArrowUpRight, ArrowDownRight, Zap } from 'lucide-react';
import Card from '../../ui/Card';

interface FinancialOverviewProps {
  metrics: FinancialMetric[];
}

const FinancialOverview: React.FC<FinancialOverviewProps> = ({ metrics }) => {
  const { formatCurrency } = useSettings();
  
  const iconMap = {
    TrendingUp,
    TrendingDown,
    DollarSign,
    Wallet
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => {
        const Icon = iconMap[metric.icon as keyof typeof iconMap] || DollarSign;
        const isPositive = metric.changeType === 'increase';
        
        return (
          <Card key={metric.id} className="relative overflow-hidden group liquid-glass">
            {/* Animated Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
            
            {/* Floating Particles Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="relative z-10">
              {/* Header with Icon and Change */}
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${metric.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <div className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isPositive 
                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-200 group-hover:bg-emerald-200' 
                    : 'bg-red-100 text-red-700 border border-red-200 group-hover:bg-red-200'
                }`}>
                  {isPositive ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  <span>{formatPercentage(metric.change)}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <p className="text-gray-600 text-sm font-medium">
                  {metric.title}
                </p>
                <p className="text-gray-800 text-3xl font-bold tracking-tight">
                  {formatCurrency(metric.value)}
                </p>
                
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className={`h-1.5 rounded-full bg-gradient-to-r ${metric.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${Math.min(Math.abs(metric.change) * 5, 100)}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-500 text-xs">Performance</span>
                    <span className={`text-xs font-medium ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                      {isPositive ? 'Growing' : 'Declining'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Pulse Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300" />
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default FinancialOverview;