import React from 'react';
import { DollarSign, Users, Building, Zap, BookOpen, Settings } from 'lucide-react';
import Card from '../../ui/Card';
import BarChart from '../../charts/BarChart';
import PieChart from '../../charts/PieChart';
import AreaChart from '../../charts/AreaChart';
import { expenseData } from '../../../data/mockData';

const ExpensesSection: React.FC = () => {
  const monthlyExpenses = [
    { name: 'Jan', value: 3200000 },
    { name: 'Feb', value: 3150000 },
    { name: 'Mar', value: 3400000 },
    { name: 'Apr', value: 3250000 },
    { name: 'May', value: 3300000 },
    { name: 'Jun', value: 3180000 },
    { name: 'Jul', value: 3350000 },
    { name: 'Aug', value: 3200000 },
    { name: 'Sep', value: 3420000 },
    { name: 'Oct', value: 3380000 },
    { name: 'Nov', value: 3450000 },
    { name: 'Dec', value: 3500000 }
  ];

  const departmentExpenses = [
    { name: 'Engineering', value: 8200000 },
    { name: 'Medicine', value: 7800000 },
    { name: 'Business', value: 5400000 },
    { name: 'Arts & Sciences', value: 6200000 },
    { name: 'Law', value: 3100000 },
    { name: 'Administration', value: 7500000 }
  ];

  const expenseMetrics = [
    {
      title: 'Total Annual Expenses',
      value: '$38.2M',
      change: '+5.2%',
      icon: DollarSign,
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Faculty Costs',
      value: '$15.6M',
      change: '+3.8%',
      icon: Users,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Infrastructure',
      value: '$7.8M',
      change: '+8.1%',
      icon: Building,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Utilities',
      value: '$4.2M',
      change: '+12.3%',
      icon: Zap,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Expense Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {expenseMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-10`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${metric.color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-300 border border-red-500/30">
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

      {/* Expense Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Monthly Expense Trend" subtitle="Total expenses over the past year">
          <AreaChart data={monthlyExpenses} height={300} color="#EF4444" />
        </Card>

        <Card title="Expense Categories" subtitle="Distribution by expense type">
          <PieChart data={expenseData} height={300} />
        </Card>
      </div>

      {/* Department Expenses */}
      <Card title="Expenses by Department" subtitle="Annual expense allocation by department">
        <BarChart data={departmentExpenses} height={350} color="#EF4444" />
      </Card>

      {/* Expense Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Cost Optimization Opportunities" gradient>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Energy Efficiency</p>
                <p className="text-white/70 text-xs">Potential savings</p>
              </div>
              <span className="text-emerald-300 font-bold">$420K</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Space Optimization</p>
                <p className="text-white/70 text-xs">Potential savings</p>
              </div>
              <span className="text-blue-300 font-bold">$280K</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Digital Transformation</p>
                <p className="text-white/70 text-xs">Potential savings</p>
              </div>
              <span className="text-purple-300 font-bold">$350K</span>
            </div>
          </div>
        </Card>

        <Card title="Budget Variance Analysis" gradient>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Budget</span>
                <span className="text-white font-medium">$40.0M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Actual</span>
                <span className="text-white font-medium">$38.2M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Variance</span>
                <span className="text-emerald-300 font-medium">-$1.8M (4.5%)</span>
              </div>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '95.5%' }}></div>
            </div>
            <p className="text-emerald-300 text-sm font-medium">Under Budget</p>
          </div>
        </Card>

        <Card title="Expense Efficiency Score" gradient>
          <div className="text-center space-y-4">
            <div className="relative w-24 h-24 mx-auto">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="transparent" />
                <circle cx="48" cy="48" r="40" stroke="#F59E0B" strokeWidth="8" fill="transparent" strokeDasharray="251" strokeDashoffset="75" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-bold">7.8</span>
              </div>
            </div>
            <div>
              <p className="text-orange-300 font-semibold">Good</p>
              <p className="text-white/70 text-sm">Room for Improvement</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ExpensesSection;