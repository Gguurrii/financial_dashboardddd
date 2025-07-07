import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Card from '../../ui/Card';
import LineChart from '../../charts/LineChart';
import AreaChart from '../../charts/AreaChart';
import BarChart from '../../charts/BarChart';
import { cashFlowData } from '../../../data/mockData';

const CashFlowSection: React.FC = () => {
  const netFlowData = cashFlowData.map(item => ({
    label: item.month,
    value: item.netFlow
  }));

  const cashFlowComparison = cashFlowData.map(item => ({
    name: item.month,
    value: item.income,
    value2: item.expenses
  }));

  const quarterlyFlow = [
    { name: 'Q1 2024', value: 4000000 },
    { name: 'Q2 2024', value: 5660000 },
    { name: 'Q3 2024', value: 7780000 },
    { name: 'Q4 2024', value: 8650000 }
  ];

  const cashFlowMetrics = [
    {
      title: 'Operating Cash Flow',
      value: '$26.1M',
      change: '+18.3%',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Free Cash Flow',
      value: '$19.4M',
      change: '+22.7%',
      icon: DollarSign,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Cash Conversion Cycle',
      value: '45 days',
      change: '-8 days',
      icon: TrendingDown,
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Liquidity Ratio',
      value: '2.4x',
      change: '+0.3x',
      icon: Wallet,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Cash Flow Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cashFlowMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const isPositive = metric.change.startsWith('+') || metric.change.startsWith('-8');
          return (
            <Card key={index} className="relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-10`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${metric.color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                    isPositive 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}>
                    {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    <span>{metric.change}</span>
                  </div>
                </div>
                <div>
                  <p className="text-white/70 text-sm font-medium mb-1">{metric.title}</p>
                  <p className="text-white text-2xl font-bold">{metric.value}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Cash Flow Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Net Cash Flow Trend" subtitle="Monthly net cash flow over time">
          <LineChart data={netFlowData} height={300} color="#10B981" />
        </Card>

        <Card title="Income vs Expenses" subtitle="Monthly comparison of cash inflows and outflows">
          <AreaChart data={cashFlowComparison} height={300} color="#3B82F6" color2="#EF4444" dual />
        </Card>
      </div>

      {/* Quarterly Analysis */}
      <Card title="Quarterly Cash Flow" subtitle="Net cash flow by quarter">
        <BarChart data={quarterlyFlow} height={350} color="#10B981" />
      </Card>

      {/* Cash Flow Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Cash Flow Drivers" gradient>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Student Payments</p>
                <p className="text-emerald-300 text-xs">+$2.1M impact</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-emerald-300" />
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Grant Funding</p>
                <p className="text-blue-300 text-xs">+$1.8M impact</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-blue-300" />
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Infrastructure Costs</p>
                <p className="text-red-300 text-xs">-$0.9M impact</p>
              </div>
              <ArrowDownRight className="w-5 h-5 text-red-300" />
            </div>
          </div>
        </Card>

        <Card title="Cash Flow Forecast" gradient>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-white text-3xl font-bold">$31.2M</p>
              <p className="text-white/70 text-sm">Projected 2025 Cash Flow</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Growth Rate</span>
                <span className="text-emerald-300 font-medium">+19.5%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Confidence Level</span>
                <span className="text-blue-300 font-medium">92%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Risk Factor</span>
                <span className="text-orange-300 font-medium">Low</span>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Working Capital" gradient>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-white/5 rounded-xl">
                <p className="text-white/70 text-xs">Current Assets</p>
                <p className="text-white text-lg font-bold">$18.5M</p>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-xl">
                <p className="text-white/70 text-xs">Current Liabilities</p>
                <p className="text-white text-lg font-bold">$7.7M</p>
              </div>
            </div>
            <div className="text-center p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl">
              <p className="text-emerald-300 text-sm font-medium">Working Capital</p>
              <p className="text-white text-2xl font-bold">$10.8M</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CashFlowSection;