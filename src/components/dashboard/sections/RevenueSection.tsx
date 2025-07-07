import React from 'react';
import { TrendingUp, Users, GraduationCap, Heart, Building } from 'lucide-react';
import Card from '../../ui/Card';
import AreaChart from '../../charts/AreaChart';
import BarChart from '../../charts/BarChart';
import PieChart from '../../charts/PieChart';
import { revenueData } from '../../../data/mockData';

const RevenueSection: React.FC = () => {
  const revenueStreams = [
    { name: 'Student Fees', value: 34800000, color: '#3B82F6' },
    { name: 'Research Grants', value: 8200000, color: '#10B981' },
    { name: 'Donations', value: 1800000, color: '#F59E0B' },
    { name: 'Partnerships', value: 1000000, color: '#8B5CF6' }
  ];

  const monthlyRevenue = revenueData.map(item => ({
    name: item.month,
    value: item.studentFees + item.grants + item.donations + item.other
  }));

  const departmentRevenue = [
    { name: 'Engineering', value: 12500000 },
    { name: 'Business', value: 8900000 },
    { name: 'Medicine', value: 7800000 },
    { name: 'Arts & Sciences', value: 6200000 },
    { name: 'Law', value: 4100000 },
    { name: 'Other', value: 6300000 }
  ];

  const revenueMetrics = [
    {
      title: 'Total Annual Revenue',
      value: '$45.8M',
      change: '+12.5%',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Student Enrollment',
      value: '18,450',
      change: '+8.3%',
      icon: Users,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Average Tuition',
      value: '$28,500',
      change: '+4.2%',
      icon: GraduationCap,
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Donor Contributions',
      value: '$1.8M',
      change: '+15.7%',
      icon: Heart,
      color: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Revenue Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {revenueMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-10`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${metric.color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <TrendingUp className="w-3 h-3" />
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

      {/* Revenue Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Monthly Revenue Trend" subtitle="Total revenue over the past year">
          <AreaChart data={monthlyRevenue} height={300} color="#10B981" />
        </Card>

        <Card title="Revenue by Source" subtitle="Distribution of revenue streams">
          <PieChart data={revenueStreams} height={300} />
        </Card>
      </div>

      {/* Department Revenue */}
      <Card title="Revenue by Department" subtitle="Annual revenue contribution by academic department">
        <BarChart data={departmentRevenue} height={350} color="#3B82F6" />
      </Card>

      {/* Revenue Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Top Performing Programs" gradient>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <span className="text-white font-medium">MBA Program</span>
              <span className="text-emerald-300 font-bold">$4.2M</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <span className="text-white font-medium">Computer Science</span>
              <span className="text-blue-300 font-bold">$3.8M</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <span className="text-white font-medium">Medical School</span>
              <span className="text-purple-300 font-bold">$3.5M</span>
            </div>
          </div>
        </Card>

        <Card title="Revenue Growth Forecast" gradient>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-white text-3xl font-bold">$52.1M</p>
              <p className="text-white/70 text-sm">Projected 2025 Revenue</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Growth Rate</span>
                <span className="text-emerald-300 font-medium">+13.8%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Confidence</span>
                <span className="text-blue-300 font-medium">87%</span>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Revenue Quality Score" gradient>
          <div className="text-center space-y-4">
            <div className="relative w-24 h-24 mx-auto">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="transparent" />
                <circle cx="48" cy="48" r="40" stroke="#10B981" strokeWidth="8" fill="transparent" strokeDasharray="251" strokeDashoffset="50" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-bold">8.2</span>
              </div>
            </div>
            <div>
              <p className="text-emerald-300 font-semibold">Excellent</p>
              <p className="text-white/70 text-sm">Diversified & Stable</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RevenueSection;