import React from 'react';
import { FileText, Download, Calendar, TrendingUp, BarChart3, PieChart } from 'lucide-react';
import Card from '../../ui/Card';
import Button from '../../ui/Button';

const ReportsSection: React.FC = () => {
  const reports = [
    {
      title: 'Annual Financial Report',
      description: 'Comprehensive financial overview for fiscal year 2024',
      type: 'Financial',
      date: '2024-12-15',
      size: '2.4 MB',
      icon: FileText,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Budget Variance Analysis',
      description: 'Detailed analysis of budget vs actual performance',
      type: 'Analysis',
      date: '2024-12-10',
      size: '1.8 MB',
      icon: BarChart3,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Revenue Breakdown Report',
      description: 'Revenue streams and performance metrics',
      type: 'Revenue',
      date: '2024-12-08',
      size: '1.2 MB',
      icon: TrendingUp,
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Expense Category Analysis',
      description: 'Detailed breakdown of all expense categories',
      type: 'Expenses',
      date: '2024-12-05',
      size: '1.6 MB',
      icon: PieChart,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const scheduledReports = [
    {
      name: 'Monthly Financial Summary',
      frequency: 'Monthly',
      nextRun: '2025-01-01',
      recipients: 5
    },
    {
      name: 'Quarterly Board Report',
      frequency: 'Quarterly',
      nextRun: '2025-01-15',
      recipients: 12
    },
    {
      name: 'Weekly Cash Flow',
      frequency: 'Weekly',
      nextRun: '2024-12-23',
      recipients: 8
    },
    {
      name: 'Annual Audit Preparation',
      frequency: 'Annually',
      nextRun: '2025-03-01',
      recipients: 15
    }
  ];

  const reportTemplates = [
    'Financial Dashboard Summary',
    'Revenue Analysis Template',
    'Expense Tracking Report',
    'Cash Flow Statement',
    'Budget vs Actual Report',
    'Department Performance Report'
  ];

  return (
    <div className="space-y-6">
      {/* Report Generation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Generate New Report" gradient>
          <div className="space-y-4">
            <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white">
              <option value="">Select Report Type</option>
              <option value="financial">Financial Summary</option>
              <option value="revenue">Revenue Analysis</option>
              <option value="expenses">Expense Report</option>
              <option value="cashflow">Cash Flow</option>
            </select>
            <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white">
              <option value="">Select Period</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
              <option value="custom">Custom Range</option>
            </select>
            <Button variant="primary" className="w-full">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </Card>

        <Card title="Quick Actions" gradient>
          <div className="space-y-3">
            <Button variant="glass" className="w-full justify-start">
              <Download className="w-4 h-4 mr-2" />
              Export All Data
            </Button>
            <Button variant="glass" className="w-full justify-start">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Report
            </Button>
            <Button variant="glass" className="w-full justify-start">
              <BarChart3 className="w-4 h-4 mr-2" />
              Custom Dashboard
            </Button>
          </div>
        </Card>

        <Card title="Report Statistics" gradient>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <span className="text-white/70 text-sm">Reports Generated</span>
              <span className="text-white font-bold">247</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <span className="text-white/70 text-sm">This Month</span>
              <span className="text-emerald-300 font-bold">23</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <span className="text-white/70 text-sm">Scheduled</span>
              <span className="text-blue-300 font-bold">12</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card title="Recent Reports" subtitle="Latest generated financial reports">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {reports.map((report, index) => {
            const Icon = report.icon;
            return (
              <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${report.color}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{report.title}</h4>
                      <p className="text-white/70 text-sm">{report.description}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-white/70">
                    <span>{report.date}</span>
                    <span>{report.size}</span>
                    <span className="px-2 py-1 bg-white/10 rounded-full">{report.type}</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Scheduled Reports */}
      <Card title="Scheduled Reports" subtitle="Automated report generation schedule">
        <div className="space-y-3 mt-4">
          {scheduledReports.map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
              <div>
                <h4 className="text-white font-medium">{report.name}</h4>
                <p className="text-white/70 text-sm">Next run: {report.nextRun}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-white text-sm">{report.frequency}</p>
                  <p className="text-white/70 text-xs">{report.recipients} recipients</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Calendar className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Report Templates */}
      <Card title="Report Templates" subtitle="Pre-configured report templates">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {reportTemplates.map((template, index) => (
            <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">{template}</span>
                </div>
                <Button variant="ghost" size="sm">
                  Use Template
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ReportsSection;