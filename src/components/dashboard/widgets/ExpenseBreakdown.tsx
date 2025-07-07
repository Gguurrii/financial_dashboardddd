import React from 'react';
import { ExpenseData } from '../../../types/financial';
import PieChart from '../../charts/PieChart';
import Card from '../../ui/Card';

interface ExpenseBreakdownProps {
  data: ExpenseData[];
}

const ExpenseBreakdown: React.FC<ExpenseBreakdownProps> = ({ data }) => {
  const chartData = data.map(item => ({
    name: item.category,
    value: item.amount,
    color: item.color
  }));

  return (
    <Card 
      title="Expense Breakdown" 
      subtitle="Distribution of university expenses"
      className="col-span-2"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <PieChart 
            data={chartData}
            height={280}
            innerRadius={50}
            outerRadius={100}
          />
        </div>
        
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-white text-sm font-medium">{item.category}</span>
              </div>
              <div className="text-right">
                <p className="text-white font-semibold">
                  ${(item.amount / 1000000).toFixed(1)}M
                </p>
                <p className="text-white/70 text-xs">
                  {item.percentage}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseBreakdown;