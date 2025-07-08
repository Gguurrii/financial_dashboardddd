import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useSettings } from '../../contexts/SettingsContext';

interface PieChartData {
  name: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: PieChartData[];
  height?: number;
  showLegend?: boolean;
  innerRadius?: number;
  outerRadius?: number;
}

const PieChart: React.FC<PieChartProps> = ({ 
  data, 
  height = 300, 
  showLegend = true,
  innerRadius = 60,
  outerRadius = 120
}) => {
  const { formatCurrency } = useSettings();

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl p-3 shadow-xl">
          <p className="text-gray-800 font-medium">{data.name}</p>
          <p className="text-blue-600">
            {formatCurrency(data.value)} ({((data.value / data.payload.total) * 100).toFixed(1)}%)
          </p>
        </div>
      );
    }
    return null;
  };

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const dataWithTotal = data.map(item => ({ ...item, total }));

  return (
    <div style={{ height: `${height}px` }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={dataWithTotal}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={3}
            dataKey="value"
            animationBegin={0}
            animationDuration={1500}
            animationEasing="ease-in-out"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          {showLegend && (
            <Legend 
              wrapperStyle={{ color: '#374151', fontSize: '12px' }}
              iconType="circle"
            />
          )}
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;