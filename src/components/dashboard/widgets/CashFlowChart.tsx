import React from 'react';
import { CashFlowData } from '../../../types/financial';
import AreaChart from '../../charts/AreaChart';
import Card from '../../ui/Card';
import { TrendingUp, TrendingDown, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface CashFlowChartProps {
  data: CashFlowData[];
}

const CashFlowChart: React.FC<CashFlowChartProps> = ({ data }) => {
  const chartData = data.map(item => ({
    name: item.month,
    value: item.netFlow,
    income: item.income,
    expenses: item.expenses
  }));

  const totalIncome = data.reduce((sum, item) => sum + item.income, 0);
  const totalExpenses = data.reduce((sum, item) => sum + item.expenses, 0);
  const netFlow = totalIncome - totalExpenses;
  const avgMonthlyFlow = data.reduce((sum, item) => sum + item.netFlow, 0) / data.length;
  const bestMonth = Math.max(...data.map(item => item.netFlow));
  const growthRate = ((data[data.length - 1].netFlow - data[0].netFlow) / data[0].netFlow) * 100;

  return (
    <Card 
      title="Cash Flow Analysis" 
      subtitle="Real-time cash flow monitoring and trends"
      className="relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-600/5 rounded-2xl" />
      
      <div className="relative z-10">
        {/* Key Metrics Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <div className="p-2 bg-emerald-500 rounded-lg">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <p className="text-white/70 text-xs uppercase tracking-wide mb-1">Net Flow</p>
            <p className="text-white text-xl font-bold">
              ${(netFlow / 1000000).toFixed(1)}M
            </p>
            <div className="flex items-center justify-center mt-1">
              <ArrowUpRight className="w-3 h-3 text-emerald-300 mr-1" />
              <span className="text-emerald-300 text-xs font-medium">
                {growthRate > 0 ? '+' : ''}{growthRate.toFixed(1)}%
              </span>
            </div>
          </div>

          <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <div className="p-2 bg-blue-500 rounded-lg">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
            </div>
            <p className="text-white/70 text-xs uppercase tracking-wide mb-1">Monthly Avg</p>
            <p className="text-white text-xl font-bold">
              ${(avgMonthlyFlow / 1000000).toFixed(1)}M
            </p>
            <span className="text-blue-300 text-xs">Consistent Growth</span>
          </div>

          <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <div className="p-2 bg-purple-500 rounded-lg">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <p className="text-white/70 text-xs uppercase tracking-wide mb-1">Best Month</p>
            <p className="text-white text-xl font-bold">
              ${(bestMonth / 1000000).toFixed(1)}M
            </p>
            <span className="text-purple-300 text-xs">Peak Performance</span>
          </div>
        </div>

        {/* Main Chart */}
        <div className="mb-6">
          <AreaChart 
            data={chartData}
            color="#10B981"
            height={320}
            animate={true}
            showGrid={true}
          />
        </div>

        {/* Cash Flow Insights */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-white font-semibold">Total Income</h4>
              <ArrowUpRight className="w-4 h-4 text-emerald-300" />
            </div>
            <p className="text-white text-2xl font-bold mb-1">
              ${(totalIncome / 1000000).toFixed(1)}M
            </p>
            <p className="text-emerald-300 text-sm">+18.3% vs last period</p>
          </div>

          <div className="p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/30 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-white font-semibold">Total Expenses</h4>
              <ArrowDownRight className="w-4 h-4 text-red-300" />
            </div>
            <p className="text-white text-2xl font-bold mb-1">
              ${(totalExpenses / 1000000).toFixed(1)}M
            </p>
            <p className="text-red-300 text-sm">+5.2% vs last period</p>
          </div>
        </div>

        {/* Health Indicator */}
        <div className="mt-4 p-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-semibold mb-1">Cash Flow Health</h4>
              <p className="text-white/70 text-sm">Strong positive trend with consistent growth</p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-white font-bold">Excellent</span>
              </div>
              <p className="text-emerald-300 text-sm">94.2% efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CashFlowChart;