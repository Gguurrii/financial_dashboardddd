import React from 'react';
import RadialChart from '../../charts/RadialChart';
import Card from '../../ui/Card';

const PerformanceMetrics: React.FC = () => {
  const metrics = [
    {
      label: 'Budget Utilization',
      value: 38200000,
      maxValue: 45000000,
      color: '#3B82F6'
    },
    {
      label: 'Revenue Target',
      value: 45800000,
      maxValue: 50000000,
      color: '#10B981'
    },
    {
      label: 'Cost Efficiency',
      value: 42000000,
      maxValue: 48000000,
      color: '#F59E0B'
    },
    {
      label: 'ROI Performance',
      value: 35000000,
      maxValue: 40000000,
      color: '#8B5CF6'
    }
  ];

  return (
    <Card 
      title="Performance Metrics" 
      subtitle="Key financial performance indicators"
    >
      <div className="grid grid-cols-2 gap-6 mt-4">
        {metrics.map((metric, index) => (
          <RadialChart
            key={index}
            value={metric.value}
            maxValue={metric.maxValue}
            color={metric.color}
            label={metric.label}
            size={100}
            strokeWidth={6}
          />
        ))}
      </div>
    </Card>
  );
};

export default PerformanceMetrics;