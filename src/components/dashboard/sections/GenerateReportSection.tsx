import React, { useState } from 'react';
import { FileText, Download, Calendar, TrendingUp, BarChart3, PieChart, Users, DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Card from '../../ui/Card';
import Button from '../../ui/Button';

const GenerateReportSection: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('pdf');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [customDateRange, setCustomDateRange] = useState({ start: '', end: '' });

  const reportTypes = [
    {
      id: 'financial-summary',
      title: 'Financial Summary',
      description: 'Comprehensive overview of financial performance',
      icon: DollarSign,
      color: 'from-emerald-500 to-teal-600',
      estimatedTime: '2-3 minutes'
    },
    {
      id: 'revenue-analysis',
      title: 'Revenue Analysis',
      description: 'Detailed breakdown of revenue streams and trends',
      icon: TrendingUp,
      color: 'from-blue-500 to-indigo-600',
      estimatedTime: '3-4 minutes'
    },
    {
      id: 'expense-report',
      title: 'Expense Report',
      description: 'Complete expense analysis by category and department',
      icon: BarChart3,
      color: 'from-purple-500 to-violet-600',
      estimatedTime: '2-3 minutes'
    },
    {
      id: 'student-analytics',
      title: 'Student Analytics',
      description: 'Student enrollment, performance, and financial metrics',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      estimatedTime: '4-5 minutes'
    },
    {
      id: 'budget-variance',
      title: 'Budget Variance',
      description: 'Budget vs actual performance analysis',
      icon: PieChart,
      color: 'from-pink-500 to-rose-600',
      estimatedTime: '3-4 minutes'
    },
    {
      id: 'cash-flow',
      title: 'Cash Flow Statement',
      description: 'Detailed cash flow analysis and projections',
      icon: Clock,
      color: 'from-cyan-500 to-blue-600',
      estimatedTime: '2-3 minutes'
    }
  ];

  const periods = [
    { value: 'current-month', label: 'Current Month' },
    { value: 'last-month', label: 'Last Month' },
    { value: 'current-quarter', label: 'Current Quarter' },
    { value: 'last-quarter', label: 'Last Quarter' },
    { value: 'current-year', label: 'Current Year' },
    { value: 'last-year', label: 'Last Year' },
    { value: 'custom', label: 'Custom Range' }
  ];

  const formats = [
    { value: 'pdf', label: 'PDF Document', description: 'Professional formatted report' },
    { value: 'excel', label: 'Excel Spreadsheet', description: 'Data with charts and tables' },
    { value: 'csv', label: 'CSV Data', description: 'Raw data for analysis' },
    { value: 'powerpoint', label: 'PowerPoint', description: 'Presentation ready slides' }
  ];

  const [recentReports, setRecentReports] = useState([
    {
      id: 1,
      title: 'Q4 2024 Financial Summary',
      type: 'Financial Summary',
      date: '2024-12-20',
      size: '2.4 MB',
      status: 'completed',
      format: 'PDF'
    },
    {
      id: 2,
      title: 'November Revenue Analysis',
      type: 'Revenue Analysis',
      date: '2024-12-15',
      size: '1.8 MB',
      status: 'completed',
      format: 'Excel'
    },
    {
      id: 3,
      title: 'Student Enrollment Report',
      type: 'Student Analytics',
      date: '2024-12-10',
      size: '3.2 MB',
      status: 'completed',
      format: 'PDF'
    }
  ]);

  const handleGenerateReport = async () => {
    if (!selectedReport || !selectedPeriod) {
      alert('Please select both report type and time period');
      return;
    }

    if (selectedPeriod === 'custom' && (!customDateRange.start || !customDateRange.end)) {
      alert('Please select custom date range');
      return;
    }

    setIsGenerating(true);
    setGenerationProgress(0);
    
    // Simulate report generation with progress
    const progressInterval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    setTimeout(() => {
      setIsGenerating(false);
      setGenerationProgress(0);
      
      // Add new report to recent reports
      const selectedReportType = reportTypes.find(r => r.id === selectedReport);
      const newReport = {
        id: Date.now(),
        title: `${selectedReportType?.title} - ${new Date().toLocaleDateString()}`,
        type: selectedReportType?.title || '',
        date: new Date().toISOString().split('T')[0],
        size: `${(Math.random() * 3 + 1).toFixed(1)} MB`,
        status: 'completed',
        format: selectedFormat.toUpperCase()
      };
      
      setRecentReports(prev => [newReport, ...prev]);
      
      // Simulate download
      const blob = new Blob(['Sample report content'], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${newReport.title}.${selectedFormat}`;
      a.click();
      URL.revokeObjectURL(url);
      
      alert('Report generated and downloaded successfully!');
      
      // Reset form
      setSelectedReport('');
      setSelectedPeriod('');
      setSelectedFormat('pdf');
      setCustomDateRange({ start: '', end: '' });
    }, 3000);
  };

  const handleDownloadReport = (report: any) => {
    // Simulate download
    const blob = new Blob(['Sample report content'], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${report.title}.${report.format.toLowerCase()}`;
    a.click();
    URL.revokeObjectURL(url);
    
    alert(`Downloading ${report.title}`);
  };

  const handleUseTemplate = (templateName: string) => {
    // Set predefined values based on template
    switch (templateName) {
      case 'Monthly Board Report':
        setSelectedReport('financial-summary');
        setSelectedPeriod('current-month');
        setSelectedFormat('pdf');
        break;
      case 'Quarterly Analysis':
        setSelectedReport('budget-variance');
        setSelectedPeriod('current-quarter');
        setSelectedFormat('powerpoint');
        break;
      case 'Annual Summary':
        setSelectedReport('financial-summary');
        setSelectedPeriod('current-year');
        setSelectedFormat('pdf');
        break;
    }
    alert(`Template "${templateName}" applied! Review settings and generate report.`);
  };

  const selectedReportType = reportTypes.find(r => r.id === selectedReport);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold theme-text-primary mb-4">Generate Reports</h1>
        <p className="theme-text-secondary text-lg max-w-2xl mx-auto">
          Create comprehensive financial reports with advanced analytics and insights. 
          Choose from various report types and customize the output format.
        </p>
      </div>

      {/* Report Generation Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Report Type Selection */}
        <div className="lg:col-span-2">
          <Card title="Select Report Type" subtitle="Choose the type of report you want to generate">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {reportTypes.map((report) => {
                const Icon = report.icon;
                const isSelected = selectedReport === report.id;
                
                return (
                  <div
                    key={report.id}
                    onClick={() => setSelectedReport(report.id)}
                    className={`
                      p-4 rounded-xl border-2 cursor-pointer transition-all duration-300
                      ${isSelected 
                        ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20' 
                        : 'theme-border border hover:border-blue-300 dark:hover:border-blue-600'
                      }
                    `}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${report.color} flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="theme-text-primary font-semibold mb-1">{report.title}</h4>
                        <p className="theme-text-secondary text-sm mb-2">{report.description}</p>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-3 h-3 theme-text-tertiary" />
                          <span className="theme-text-tertiary text-xs">{report.estimatedTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Configuration Panel */}
        <div className="space-y-6">
          <Card title="Report Configuration" subtitle="Customize your report settings">
            <div className="space-y-4 mt-4">
              {/* Time Period */}
              <div>
                <label className="block theme-text-primary font-medium mb-2">Time Period</label>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="w-full theme-input theme-border border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Period</option>
                  {periods.map((period) => (
                    <option key={period.value} value={period.value}>
                      {period.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Custom Date Range */}
              {selectedPeriod === 'custom' && (
                <div className="space-y-3">
                  <div>
                    <label className="block theme-text-primary font-medium mb-2">Start Date</label>
                    <input
                      type="date"
                      value={customDateRange.start}
                      onChange={(e) => setCustomDateRange(prev => ({ ...prev, start: e.target.value }))}
                      className="w-full theme-input theme-border border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block theme-text-primary font-medium mb-2">End Date</label>
                    <input
                      type="date"
                      value={customDateRange.end}
                      onChange={(e) => setCustomDateRange(prev => ({ ...prev, end: e.target.value }))}
                      className="w-full theme-input theme-border border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              )}

              {/* Format Selection */}
              <div>
                <label className="block theme-text-primary font-medium mb-2">Output Format</label>
                <div className="space-y-2">
                  {formats.map((format) => (
                    <label key={format.value} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="format"
                        value={format.value}
                        checked={selectedFormat === format.value}
                        onChange={(e) => setSelectedFormat(e.target.value)}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <div>
                        <p className="theme-text-primary font-medium">{format.label}</p>
                        <p className="theme-text-secondary text-sm">{format.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <Button
                onClick={handleGenerateReport}
                disabled={isGenerating || !selectedReport || !selectedPeriod}
                variant="primary"
                className="w-full py-3 mt-6"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Generating Report...
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Report
                  </>
                )}
              </Button>

              {/* Progress Bar */}
              {isGenerating && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm theme-text-secondary mb-1">
                    <span>Progress</span>
                    <span>{generationProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${generationProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {selectedReportType && !isGenerating && (
                <div className="mt-4 p-3 bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                  <p className="text-blue-700 dark:text-blue-300 text-sm font-medium">
                    Estimated generation time: {selectedReportType.estimatedTime}
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Reports */}
      <Card title="Recent Reports" subtitle="Your recently generated reports">
        <div className="space-y-3 mt-6">
          {recentReports.map((report) => (
            <div key={report.id} className="flex items-center justify-between p-4 theme-bg-tertiary rounded-xl theme-border border">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-emerald-500 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="theme-text-primary font-medium">{report.title}</h4>
                  <div className="flex items-center space-x-4 theme-text-secondary text-sm">
                    <span>{report.type}</span>
                    <span>•</span>
                    <span>{report.date}</span>
                    <span>•</span>
                    <span>{report.size}</span>
                    <span>•</span>
                    <span>{report.format}</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => handleDownloadReport(report)}>
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Report Templates */}
      <Card title="Quick Templates" subtitle="Pre-configured report templates for common use cases">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 theme-bg-tertiary rounded-xl theme-border border hover:border-blue-400 transition-colors cursor-pointer">
            <h4 className="theme-text-primary font-medium mb-2">Monthly Board Report</h4>
            <p className="theme-text-secondary text-sm mb-3">Complete financial overview for board meetings</p>
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full"
              onClick={() => handleUseTemplate('Monthly Board Report')}
            >
              Use Template
            </Button>
          </div>
          <div className="p-4 theme-bg-tertiary rounded-xl theme-border border hover:border-blue-400 transition-colors cursor-pointer">
            <h4 className="theme-text-primary font-medium mb-2">Quarterly Analysis</h4>
            <p className="theme-text-secondary text-sm mb-3">Comprehensive quarterly performance analysis</p>
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full"
              onClick={() => handleUseTemplate('Quarterly Analysis')}
            >
              Use Template
            </Button>
          </div>
          <div className="p-4 theme-bg-tertiary rounded-xl theme-border border hover:border-blue-400 transition-colors cursor-pointer">
            <h4 className="theme-text-primary font-medium mb-2">Annual Summary</h4>
            <p className="theme-text-secondary text-sm mb-3">Year-end financial summary and projections</p>
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full"
              onClick={() => handleUseTemplate('Annual Summary')}
            >
              Use Template
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GenerateReportSection;