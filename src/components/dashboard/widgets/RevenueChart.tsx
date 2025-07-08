import React from 'react';
import { RevenueData } from '../../../types/financial';
import AreaChart from '../../charts/AreaChart';
import Card from '../../ui/Card';
import { TrendingUp, DollarSign, Users, Award } from 'lucide-react';
import { useSettings } from '../../../contexts/SettingsContext';

interface RevenueChartProps {
  data: RevenueData[];
}

const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  const { formatCurrency } = useSettings();

  const chartData = data.map(item => ({
    name: item.month,
    'Student Fees': item.studentFees,
    'Grants': item.grants,
    'Donations': item.donations,
    'Other': item.other
  }));

  const totalRevenue = data.reduce((sum, item) => 
    sum + item.studentFees + item.grants + item.donations + item.other, 0
  );

  const revenueStreams = [
    {
      name: 'Student Fees',
      value: data.reduce((sum, item) => sum + item.studentFees, 0),
      percentage: 76,
      color: '#3B82F6',
      icon: Users,
      trend: '+8.3%'
    },
    {
      name: 'Research Grants',
      value: data.reduce((sum, item) => sum + item.grants, 0),
      percentage: 18,
      color: '#10B981',
      icon: Award,
      trend: '+15.7%'
    },
    {
      name: 'Donations',
      value: data.reduce((sum, item) => sum + item.donations, 0),
      percentage: 4,
      color: '#F59E0B',
      icon: DollarSign,
      trend: '+22.1%'
    },
    {
      name: 'Other Income',
      value: data.reduce((sum, item) => sum + item.other, 0),
      percentage: 2,
      color: '#8B5CF6',
      icon: TrendingUp,
      trend: '+12.4%'
    }
  ];

  return (
    <Card 
      title="Revenue Streams Analysis" 
      subtitle="Comprehensive revenue breakdown and performance trends"
      className="relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 rounded-2xl" />
      
      <div className="relative z-10">
        {/* Total Revenue Display */}
        <div className="mb-6 p-6 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">Total Annual Revenue</h3>
              <p className="text-white text-3xl font-bold">
                {formatCurrency(totalRevenue)}
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-1">
                <TrendingUp className="w-5 h-5 text-emerald-300" />
                <span className="text-emerald-300 font-semibold">+12.5%</span>
              </div>
              <p className="text-white/70 text-sm">vs last year</p>
            </div>
          </div>
        </div>

        {/* Main Chart */}
        <div className="mb-6">
          <AreaChart 
            data={chartData}
            height={350}
            color="#3B82F6"
            color2="#10B981"
            dual={false}
            showGrid={true}
          />
        </div>

        {/* Revenue Stream Breakdown */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {revenueStreams.map((stream, index) => {
            const Icon = stream.icon;
            return (
              <div 
                key={stream.name}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: stream.color }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-emerald-300 text-sm font-medium">
                    {stream.trend}
                  </span>
                </div>
                
                <h4 className="text-white font-medium text-sm mb-1">{stream.name}</h4>
                <p className="text-white text-lg font-bold mb-1">
                  {formatCurrency(stream.value)}
                </p>
                
                {/* Progress Bar */}
                <div className="w-full bg-white/20 rounded-full h-2 mb-1">
                  <div 
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      backgroundColor: stream.color,
                      width: `${stream.percentage}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  />
                </div>
                <p className="text-white/70 text-xs">{stream.percentage}% of total</p>
              </div>
            );
          })}
        </div>

        {/* Performance Insights */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 rounded-xl">
            <h4 className="text-white font-semibold mb-2">Growth Highlights</h4>
            <ul className="space-y-1 text-sm text-white/80">
              <li>• International student revenue up 18.5%</li>
              <li>• Research grants increased by $2.1M</li>
              <li>• Online program revenue grew 24.1%</li>
            </ul>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-xl">
            <h4 className="text-white font-semibold mb-2">Revenue Quality</h4>
            <div className="flex items-center justify-between">
              <span className="text-white/80 text-sm">Diversification Score</span>
              <span className="text-white font-bold">8.2/10</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2 mt-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '82%' }} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RevenueChart;