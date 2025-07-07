import React from 'react';
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AreaChartData {
  name: string;
  value: number;
  value2?: number;
}

interface AreaChartProps {
  data: AreaChartData[];
  height?: number;
  color?: string;
  color2?: string;
  showGrid?: boolean;
  dual?: boolean;
}

const AreaChart: React.FC<AreaChartProps> = ({ 
  data, 
  height = 300, 
  color = '#3B82F6',
  color2 = '#60A5FA',
  showGrid = true,
  dual = false
}) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl p-3 shadow-xl">
          <p className="text-gray-800 font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-blue-600">
              {entry.dataKey}: ${(entry.value / 1000000).toFixed(1)}M
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ height: `${height}px` }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={color} stopOpacity={0.1}/>
            </linearGradient>
            {dual && (
              <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color2} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={color2} stopOpacity={0.1}/>
              </linearGradient>
            )}
          </defs>
          {showGrid && (
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(156,163,175,0.3)" />
          )}
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(75,85,99,0.8)', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(75,85,99,0.8)', fontSize: 12 }}
            tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}M`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            fillOpacity={1}
            fill="url(#colorValue)"
            strokeWidth={3}
            animationDuration={1500}
            animationEasing="ease-in-out"
          />
          {dual && (
            <Area
              type="monotone"
              dataKey="value2"
              stroke={color2}
              fillOpacity={1}
              fill="url(#colorValue2)"
              strokeWidth={3}
              animationDuration={1500}
              animationEasing="ease-in-out"
            />
          )}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart;