import React from 'react';
import { useSettings } from '../../contexts/SettingsContext';

interface RadialChartProps {
  value: number;
  maxValue: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  label?: string;
  animate?: boolean;
}

const RadialChart: React.FC<RadialChartProps> = ({
  value,
  maxValue,
  size = 120,
  strokeWidth = 8,
  color = '#3B82F6',
  backgroundColor = 'rgba(156,163,175,0.2)',
  label,
  animate = true
}) => {
  const { formatCurrency } = useSettings();
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = (value / maxValue) * 100;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={animate ? strokeDashoffset : 0}
            strokeLinecap="round"
            className={animate ? 'transition-all duration-1000 ease-out' : ''}
            style={{
              strokeDashoffset: animate ? strokeDashoffset : 0,
            }}
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-gray-800 text-lg font-bold">
            {percentage.toFixed(0)}%
          </span>
          <span className="text-gray-500 text-xs">
            {formatCurrency(value)}
          </span>
        </div>
      </div>
      
      {label && (
        <p className="text-gray-600 text-sm mt-2 text-center">
          {label}
        </p>
      )}
    </div>
  );
};

export default RadialChart;