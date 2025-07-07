import React from 'react';
import { CreditCard, DollarSign, Clock, CheckCircle, AlertTriangle, Users } from 'lucide-react';
import Card from '../../ui/Card';
import AreaChart from '../../charts/AreaChart';
import BarChart from '../../charts/BarChart';
import PieChart from '../../charts/PieChart';

const BillingSection: React.FC = () => {
  const paymentTrends = [
    { name: 'Jan', value: 3200000 },
    { name: 'Feb', value: 3400000 },
    { name: 'Mar', value: 3600000 },
    { name: 'Apr', value: 3800000 },
    { name: 'May', value: 3900000 },
    { name: 'Jun', value: 4100000 },
    { name: 'Jul', value: 4200000 },
    { name: 'Aug', value: 4300000 },
    { name: 'Sep', value: 4500000 },
    { name: 'Oct', value: 4400000 },
    { name: 'Nov', value: 4600000 },
    { name: 'Dec', value: 4800000 }
  ];

  const paymentMethods = [
    { name: 'Online Payment', value: 18500000, color: '#3B82F6' },
    { name: 'Bank Transfer', value: 12300000, color: '#10B981' },
    { name: 'Check', value: 8900000, color: '#F59E0B' },
    { name: 'Cash', value: 6100000, color: '#8B5CF6' }
  ];

  const outstandingByDepartment = [
    { name: 'Undergraduate', value: 2400000 },
    { name: 'Graduate', value: 1800000 },
    { name: 'International', value: 1200000 },
    { name: 'Continuing Ed', value: 800000 },
    { name: 'Summer Programs', value: 600000 }
  ];

  const billingMetrics = [
    {
      title: 'Total Billed',
      value: '$45.8M',
      change: '+12.5%',
      icon: DollarSign,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Collected',
      value: '$38.9M',
      change: '+15.2%',
      icon: CheckCircle,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Outstanding',
      value: '$6.9M',
      change: '-8.3%',
      icon: Clock,
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Collection Rate',
      value: '84.9%',
      change: '+2.1%',
      icon: CreditCard,
      color: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Billing Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {billingMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const isPositive = metric.change.startsWith('+') || metric.change === '-8.3%';
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

      {/* Payment Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Payment Trends" subtitle="Monthly payment collections">
          <AreaChart data={paymentTrends} height={300} color="#10B981" />
        </Card>

        <Card title="Payment Methods" subtitle="Distribution by payment type">
          <PieChart data={paymentMethods} height={300} />
        </Card>
      </div>

      {/* Outstanding Balances */}
      <Card title="Outstanding Balances by Category" subtitle="Unpaid balances across student categories">
        <BarChart data={outstandingByDepartment} height={350} color="#F59E0B" />
      </Card>

      {/* Billing Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Payment Status" gradient>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-white font-medium">Paid in Full</span>
              </div>
              <span className="text-emerald-300 font-bold">15,240</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-orange-400" />
                <span className="text-white font-medium">Partial Payment</span>
              </div>
              <span className="text-orange-300 font-bold">2,180</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-white font-medium">Overdue</span>
              </div>
              <span className="text-red-300 font-bold">1,030</span>
            </div>
          </div>
        </Card>

        <Card title="Collection Efficiency" gradient>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-white text-3xl font-bold">84.9%</p>
              <p className="text-white/70 text-sm">Overall Collection Rate</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">30 Days</span>
                <span className="text-emerald-300 font-medium">92.1%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">60 Days</span>
                <span className="text-orange-300 font-medium">78.4%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">90+ Days</span>
                <span className="text-red-300 font-medium">45.2%</span>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Payment Plans" gradient>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Active Plans</p>
                <p className="text-white/70 text-xs">Students enrolled</p>
              </div>
              <span className="text-blue-300 font-bold">3,240</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Monthly Plans</p>
                <p className="text-white/70 text-xs">Most popular</p>
              </div>
              <span className="text-emerald-300 font-bold">2,180</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Semester Plans</p>
                <p className="text-white/70 text-xs">Traditional option</p>
              </div>
              <span className="text-purple-300 font-bold">1,060</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Additional Billing Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Recent Transactions" gradient>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">John Smith - Tuition</p>
                <p className="text-white/70 text-xs">Dec 20, 2024 - Online Payment</p>
              </div>
              <span className="text-emerald-300 font-bold">$12,500</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Sarah Johnson - Housing</p>
                <p className="text-white/70 text-xs">Dec 19, 2024 - Bank Transfer</p>
              </div>
              <span className="text-blue-300 font-bold">$8,900</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Mike Davis - Meal Plan</p>
                <p className="text-white/70 text-xs">Dec 18, 2024 - Credit Card</p>
              </div>
              <span className="text-purple-300 font-bold">$2,400</span>
            </div>
          </div>
        </Card>

        <Card title="Billing Alerts" gradient>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-orange-500/20 border border-orange-500/30 rounded-xl">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-orange-400" />
                <div>
                  <p className="text-white font-medium">Payment Overdue</p>
                  <p className="text-white/70 text-xs">1,030 accounts past due</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-500/20 border border-blue-500/30 rounded-xl">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <div>
                  <p className="text-white font-medium">Payment Due Soon</p>
                  <p className="text-white/70 text-xs">2,450 payments due in 7 days</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <div>
                  <p className="text-white font-medium">Collection Success</p>
                  <p className="text-white/70 text-xs">$2.1M collected this week</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BillingSection;