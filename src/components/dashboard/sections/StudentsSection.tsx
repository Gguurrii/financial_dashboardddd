import React from 'react';
import { Users, GraduationCap, Globe, TrendingUp, UserCheck, UserPlus } from 'lucide-react';
import Card from '../../ui/Card';
import AreaChart from '../../charts/AreaChart';
import BarChart from '../../charts/BarChart';
import PieChart from '../../charts/PieChart';

const StudentsSection: React.FC = () => {
  const enrollmentTrend = [
    { name: 'Fall 2020', value: 16200 },
    { name: 'Spring 2021', value: 16800 },
    { name: 'Fall 2021', value: 17100 },
    { name: 'Spring 2022', value: 17600 },
    { name: 'Fall 2022', value: 17900 },
    { name: 'Spring 2023', value: 18200 },
    { name: 'Fall 2023', value: 18450 }
  ];

  const studentDemographics = [
    { name: 'Undergraduate', value: 13560, color: '#3B82F6' },
    { name: 'Graduate', value: 3890, color: '#10B981' },
    { name: 'Doctoral', value: 780, color: '#F59E0B' },
    { name: 'Certificate', value: 220, color: '#8B5CF6' }
  ];

  const departmentEnrollment = [
    { name: 'Engineering', value: 4200 },
    { name: 'Business', value: 3800 },
    { name: 'Arts & Sciences', value: 3200 },
    { name: 'Medicine', value: 2100 },
    { name: 'Law', value: 1800 },
    { name: 'Education', value: 1600 },
    { name: 'Other', value: 1750 }
  ];

  const studentMetrics = [
    {
      title: 'Total Enrollment',
      value: '18,450',
      change: '+8.3%',
      icon: Users,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Retention Rate',
      value: '94.2%',
      change: '+2.1%',
      icon: UserCheck,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'New Admissions',
      value: '4,680',
      change: '+12.7%',
      icon: UserPlus,
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'International Students',
      value: '2,890',
      change: '+18.5%',
      icon: Globe,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Student Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {studentMetrics.map((metric, index) => {
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

      {/* Enrollment Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Enrollment Trend" subtitle="Student enrollment over time">
          <AreaChart data={enrollmentTrend} height={300} color="#3B82F6" />
        </Card>

        <Card title="Student Demographics" subtitle="Distribution by degree level">
          <PieChart data={studentDemographics} height={300} />
        </Card>
      </div>

      {/* Department Enrollment */}
      <Card title="Enrollment by Department" subtitle="Student distribution across academic departments">
        <BarChart data={departmentEnrollment} height={350} color="#10B981" />
      </Card>

      {/* Student Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Academic Performance" gradient>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <span className="text-white font-medium">Average GPA</span>
              <span className="text-emerald-300 font-bold">3.42</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <span className="text-white font-medium">Graduation Rate</span>
              <span className="text-blue-300 font-bold">87.6%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <span className="text-white font-medium">Dean's List</span>
              <span className="text-purple-300 font-bold">2,340</span>
            </div>
          </div>
        </Card>

        <Card title="Financial Aid Distribution" gradient>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Scholarships</span>
                <span className="text-emerald-300 font-medium">45%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Federal Aid</span>
                <span className="text-blue-300 font-medium">32%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '32%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Work Study</span>
                <span className="text-purple-300 font-medium">18%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '18%' }}></div>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Student Satisfaction" gradient>
          <div className="text-center space-y-4">
            <div className="relative w-24 h-24 mx-auto">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="transparent" />
                <circle cx="48" cy="48" r="40" stroke="#10B981" strokeWidth="8" fill="transparent" strokeDasharray="251" strokeDashoffset="38" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-bold">4.6</span>
              </div>
            </div>
            <div>
              <p className="text-emerald-300 font-semibold">Excellent</p>
              <p className="text-white/70 text-sm">Overall Rating</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Additional Student Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Student Life Engagement" gradient>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Club Participation</p>
                <p className="text-white/70 text-xs">Active members</p>
              </div>
              <span className="text-emerald-300 font-bold">12,340</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Sports Teams</p>
                <p className="text-white/70 text-xs">Student athletes</p>
              </div>
              <span className="text-blue-300 font-bold">1,890</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Volunteer Hours</p>
                <p className="text-white/70 text-xs">Community service</p>
              </div>
              <span className="text-purple-300 font-bold">45,600</span>
            </div>
          </div>
        </Card>

        <Card title="Career Outcomes" gradient>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Employment Rate</p>
                <p className="text-white/70 text-xs">Within 6 months</p>
              </div>
              <span className="text-emerald-300 font-bold">92.4%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Average Salary</p>
                <p className="text-white/70 text-xs">Starting salary</p>
              </div>
              <span className="text-blue-300 font-bold">$68,500</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Graduate School</p>
                <p className="text-white/70 text-xs">Continuing education</p>
              </div>
              <span className="text-purple-300 font-bold">34.2%</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StudentsSection;