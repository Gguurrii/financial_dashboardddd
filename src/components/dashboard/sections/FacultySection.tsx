import React from 'react';
import { Users, Award, BookOpen, TrendingUp, UserCheck, Star } from 'lucide-react';
import Card from '../../ui/Card';
import AreaChart from '../../charts/AreaChart';
import BarChart from '../../charts/BarChart';
import PieChart from '../../charts/PieChart';

const FacultySection: React.FC = () => {
  const facultyGrowth = [
    { name: '2020', value: 1240 },
    { name: '2021', value: 1285 },
    { name: '2022', value: 1320 },
    { name: '2023', value: 1365 },
    { name: '2024', value: 1410 }
  ];

  const facultyByRank = [
    { name: 'Full Professor', value: 420, color: '#3B82F6' },
    { name: 'Associate Professor', value: 380, color: '#10B981' },
    { name: 'Assistant Professor', value: 340, color: '#F59E0B' },
    { name: 'Lecturer', value: 270, color: '#8B5CF6' }
  ];

  const departmentFaculty = [
    { name: 'Engineering', value: 285 },
    { name: 'Arts & Sciences', value: 320 },
    { name: 'Business', value: 180 },
    { name: 'Medicine', value: 240 },
    { name: 'Law', value: 95 },
    { name: 'Education', value: 140 },
    { name: 'Other', value: 150 }
  ];

  const facultyMetrics = [
    {
      title: 'Total Faculty',
      value: '1,410',
      change: '+3.3%',
      icon: Users,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Retention Rate',
      value: '94.2%',
      change: '+1.8%',
      icon: UserCheck,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Research Publications',
      value: '2,847',
      change: '+24.1%',
      icon: BookOpen,
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Awards & Honors',
      value: '156',
      change: '+18.9%',
      icon: Award,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Faculty Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {facultyMetrics.map((metric, index) => {
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

      {/* Faculty Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Faculty Growth" subtitle="Faculty headcount over time">
          <AreaChart data={facultyGrowth} height={300} color="#3B82F6" />
        </Card>

        <Card title="Faculty by Rank" subtitle="Distribution by academic rank">
          <PieChart data={facultyByRank} height={300} />
        </Card>
      </div>

      {/* Department Faculty */}
      <Card title="Faculty by Department" subtitle="Faculty distribution across departments">
        <BarChart data={departmentFaculty} height={350} color="#10B981" />
      </Card>

      {/* Faculty Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Research Excellence" gradient>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <span className="text-white font-medium">H-Index Average</span>
              <span className="text-emerald-300 font-bold">24.7</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <span className="text-white font-medium">Grant Success Rate</span>
              <span className="text-blue-300 font-bold">68.4%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <span className="text-white font-medium">Citations</span>
              <span className="text-purple-300 font-bold">45,680</span>
            </div>
          </div>
        </Card>

        <Card title="Teaching Excellence" gradient>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Student Evaluations</span>
                <span className="text-emerald-300 font-medium">4.6/5.0</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Teaching Awards</span>
                <span className="text-blue-300 font-medium">89</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Course Innovation</span>
                <span className="text-purple-300 font-medium">156 projects</span>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Faculty Satisfaction" gradient>
          <div className="text-center space-y-4">
            <div className="relative w-24 h-24 mx-auto">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="transparent" />
                <circle cx="48" cy="48" r="40" stroke="#10B981" strokeWidth="8" fill="transparent" strokeDasharray="251" strokeDashoffset="38" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-bold">4.5</span>
              </div>
            </div>
            <div>
              <p className="text-emerald-300 font-semibold">Very Good</p>
              <p className="text-white/70 text-sm">Overall Satisfaction</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Additional Faculty Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Professional Development" gradient>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Conference Presentations</p>
                <p className="text-white/70 text-xs">This academic year</p>
              </div>
              <span className="text-emerald-300 font-bold">1,240</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Sabbaticals</p>
                <p className="text-white/70 text-xs">Currently on leave</p>
              </div>
              <span className="text-blue-300 font-bold">45</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Training Programs</p>
                <p className="text-white/70 text-xs">Completed this year</p>
              </div>
              <span className="text-purple-300 font-bold">890</span>
            </div>
          </div>
        </Card>

        <Card title="Diversity & Inclusion" gradient>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Gender Diversity</p>
                <p className="text-white/70 text-xs">Female faculty</p>
              </div>
              <span className="text-emerald-300 font-bold">47.2%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">International Faculty</p>
                <p className="text-white/70 text-xs">From 45 countries</p>
              </div>
              <span className="text-blue-300 font-bold">28.6%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div>
                <p className="text-white font-medium">Minority Faculty</p>
                <p className="text-white/70 text-xs">Underrepresented groups</p>
              </div>
              <span className="text-purple-300 font-bold">31.4%</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FacultySection;