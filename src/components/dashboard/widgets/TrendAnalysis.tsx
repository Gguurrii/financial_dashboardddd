import React from 'react';
import BarChart from '../../charts/BarChart';
import Card from '../../ui/Card';

const TrendAnalysis: React.FC = () => {
  const quarterlyData = [
    { name: 'Q1 2024', value: 11200000 },
    { name: 'Q2 2024', value: 12800000 },
    { name: 'Q3 2024', value: 10900000 },
    { name: 'Q4 2024', value: 11900000 }
  ];

  const yearlyComparison = [
    { name: '2021', value: 38500000 },
    { name: '2022', value: 41200000 },
    { name: '2023', value: 43800000 },
    { name: '2024', value: 45800000 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card 
        title="Quarterly Performance" 
        subtitle="Net income by quarter"
      >
        <div className="mt-4">
          <BarChart 
            data={quarterlyData}
            height={250}
            color="#3B82F6"
          />
        </div>
      </Card>

      <Card 
        title="Yearly Growth" 
        subtitle="Annual revenue comparison"
      >
        <div className="mt-4">
          <BarChart 
            data={yearlyComparison}
            height={250}
            color="#10B981"
          />
        </div>
      </Card>
    </div>
  );
};

export default TrendAnalysis;