import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import FinancialOverview from './widgets/FinancialOverview';
import CashFlowChart from './widgets/CashFlowChart';
import ExpenseBreakdown from './widgets/ExpenseBreakdown';
import RevenueChart from './widgets/RevenueChart';
import PerformanceMetrics from './widgets/PerformanceMetrics';
import TrendAnalysis from './widgets/TrendAnalysis';
import FinancialHealth from './widgets/FinancialHealth';
import ChatBot from '../chatbot/ChatBot';
import StudentsSection from './sections/StudentsSection';
import FacultySection from './sections/FacultySection';
import GenerateReportSection from './sections/GenerateReportSection';
import SettingsSection from './sections/SettingsSection';
import { financialMetrics, cashFlowData, expenseData, revenueData } from '../../data/mockData';

interface DashboardProps {
  user: any;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { theme } = useTheme();

  const handleNavigate = (section: string) => {
    setActiveTab(section);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'students':
        return <StudentsSection />;
      case 'faculty':
        return <FacultySection />;
      case 'reports':
        return <GenerateReportSection />;
      case 'settings':
        return <SettingsSection />;
      case 'overview':
      default:
        return (
          <div className="space-y-6 animate-fade-in-up">
            {/* Financial Overview Cards */}
            <div className="mb-6">
              <FinancialOverview metrics={financialMetrics} />
            </div>
            
            {/* Main Analytics Grid - 2x2 Layout */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
              {/* Cash Flow Chart */}
              <div className="xl:col-span-1 animate-slide-in-right" style={{ animationDelay: '100ms' }}>
                <CashFlowChart data={cashFlowData} />
              </div>
              
              {/* Performance Metrics */}
              <div className="xl:col-span-1 animate-slide-in-right" style={{ animationDelay: '200ms' }}>
                <PerformanceMetrics />
              </div>
              
              {/* Revenue Chart */}
              <div className="xl:col-span-1 animate-slide-in-right" style={{ animationDelay: '300ms' }}>
                <RevenueChart data={revenueData} />
              </div>
              
              {/* Financial Health */}
              <div className="xl:col-span-1 animate-slide-in-right" style={{ animationDelay: '400ms' }}>
                <FinancialHealth />
              </div>
            </div>

            {/* Expense Analysis - Full Width */}
            <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <ExpenseBreakdown data={expenseData} />
            </div>

            {/* Trend Analysis - Full Width */}
            <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <TrendAnalysis />
            </div>

            {/* Enhanced Quick Insights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                {
                  title: 'Enrollment Trends',
                  color: 'emerald',
                  items: [
                    { label: 'Undergraduate', value: '+8.5%', color: 'text-blue-600' },
                    { label: 'Graduate', value: '+12.3%', color: 'text-blue-600' },
                    { label: 'International', value: '+15.7%', color: 'text-blue-600' }
                  ]
                },
                {
                  title: 'Faculty Excellence',
                  color: 'blue',
                  items: [
                    { label: 'Retention Rate', value: '94.2%', color: 'text-emerald-600' },
                    { label: 'New Hires', value: '23', color: 'text-emerald-600' },
                    { label: 'Satisfaction', value: '4.6/5', color: 'text-emerald-600' }
                  ]
                },
                {
                  title: 'Operational KPIs',
                  color: 'purple',
                  items: [
                    { label: 'Energy Efficiency', value: '87.3%', color: 'text-purple-600' },
                    { label: 'Space Utilization', value: '78.9%', color: 'text-purple-600' },
                    { label: 'Maintenance Score', value: '92.1%', color: 'text-purple-600' }
                  ]
                },
                {
                  title: 'Research Impact',
                  color: 'orange',
                  items: [
                    { label: 'Grant Success', value: '68.4%', color: 'text-orange-600' },
                    { label: 'Publications', value: '+24.1%', color: 'text-orange-600' },
                    { label: 'Citations', value: '+31.8%', color: 'text-orange-600' }
                  ]
                }
              ].map((section, sectionIndex) => (
                <div 
                  key={section.title}
                  className={`
                    backdrop-blur-lg rounded-xl p-4 border transition-all duration-300 group hover:scale-105
                    animate-fade-in-up hover-lift
                    ${theme === 'light' 
                      ? 'bg-white/70 border-white/30 shadow-lg hover:shadow-xl' 
                      : 'bg-gray-800/70 border-gray-700/30 shadow-xl hover:shadow-2xl'
                    }
                  `}
                  style={{ animationDelay: `${700 + sectionIndex * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-base font-semibold ${
                      theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                      {section.title}
                    </h3>
                    <div className={`w-2 h-2 bg-${section.color}-500 rounded-full animate-pulse`} />
                  </div>
                  <div className="space-y-2">
                    {section.items.map((item, index) => (
                      <div key={index} className={`
                        flex items-center justify-between p-2 rounded-lg border transition-all duration-300
                        ${theme === 'light' 
                          ? `bg-gray-50/70 border-gray-200/50 group-hover:bg-${section.color}-50/50` 
                          : `bg-gray-700/50 border-gray-600/50 group-hover:bg-${section.color}-900/20`
                        }
                      `}>
                        <span className={`text-xs ${
                          theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                        }`}>
                          {item.label}
                        </span>
                        <span className={`font-semibold text-xs ${item.color}`}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* AI Insights Section */}
            <div className={`
              p-5 rounded-xl border transition-all duration-300 animate-fade-in-up
              ${theme === 'light' 
                ? 'bg-gradient-to-r from-indigo-50/80 to-purple-50/80 border-indigo-200/50' 
                : 'bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border-indigo-700/50'
              }
            `} style={{ animationDelay: '1100ms' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-semibold ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  AI-Powered Insights
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className={`text-sm ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}>
                    Live Analysis
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: '💡',
                    title: 'Optimization Opportunity',
                    description: 'Energy costs could be reduced by 12% through smart building automation.'
                  },
                  {
                    icon: '📈',
                    title: 'Growth Prediction',
                    description: 'International enrollment projected to increase 22% next semester.'
                  },
                  {
                    icon: '⚠️',
                    title: 'Risk Alert',
                    description: 'Monitor facilities budget - trending 8% over projected spending.'
                  }
                ].map((insight, index) => (
                  <div 
                    key={index} 
                    className={`
                      p-4 rounded-lg transition-all duration-300 hover:scale-105 hover-lift
                      ${theme === 'light' 
                        ? 'bg-white/70 border border-white/50 hover:shadow-lg' 
                        : 'bg-gray-800/50 border border-gray-700/50 hover:shadow-xl'
                      }
                    `}
                    style={{ animationDelay: `${1200 + index * 100}ms` }}
                  >
                    <h4 className={`font-medium mb-2 text-sm ${
                      theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                      {insight.icon} {insight.title}
                    </h4>
                    <p className={`text-xs ${
                      theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                    }`}>
                      {insight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      {/* Enhanced Background Effects */}
      <div className={`fixed inset-0 ${
        theme === 'light' 
          ? "bg-gradient-to-br from-blue-50 via-white to-indigo-50"
          : "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      }`} />
      
      {/* Animated Background Pattern */}
      <div className={`fixed inset-0 ${
        theme === 'light' 
          ? "bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23E5E7EB%22%20fill-opacity=%220.4%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"
          : "bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23374151%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"
      }`} />
      
      <div className="relative z-10 flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
          <Header 
            user={user}
            onLogout={onLogout}
            onToggleChat={() => setIsChatOpen(!isChatOpen)}
            isChatOpen={isChatOpen}
            onNavigate={handleNavigate}
          />
          
          <main className="flex-1 p-4 sm:p-6 lg:p-6 max-w-full mx-auto w-full">
            {renderContent()}
          </main>

          <Footer />
        </div>
      </div>

      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Dashboard;