import React from 'react';
import { FinancialMetric } from '../../../types/financial';
import { formatCompactCurrency, formatPercentage } from '../../../utils/formatters';
import { TrendingUp, TrendingDown, DollarSign, Wallet } from 'lucide-react';
import Card from '../../ui/Card';

interface MetricCardProps {
  metric: FinancialMetric;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  const iconMap = {
    TrendingUp,
    TrendingDown,
    DollarSign,
    Wallet
  };

  const Icon = iconMap[metric.icon as keyof typeof iconMap] || DollarSign;

  return (
    <Card className="relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-5`} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${metric.color} shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          
          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
            metric.changeType === 'increase' 
              ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
              : 'bg-red-100 text-red-700 border border-red-200'
          }`}>
            {metric.changeType === 'increase' ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            <span>{formatPercentage(metric.change)}</span>
          </div>
        </div>

        <div>
          <p className="text-gray-600 text-sm font-medium mb-1">
            {metric.title}
          </p>
          <p className="text-gray-800 text-2xl font-bold">
            {formatCompactCurrency(metric.value)}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default MetricCard;