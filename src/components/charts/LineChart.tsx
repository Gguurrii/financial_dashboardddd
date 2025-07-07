import React, { useEffect, useRef } from 'react';

interface DataPoint {
  label: string;
  value: number;
}

interface LineChartProps {
  data: DataPoint[];
  color?: string;
  height?: number;
  showGrid?: boolean;
  animate?: boolean;
  strokeWidth?: number;
  showGradient?: boolean;
  showTooltip?: boolean;
}

const LineChart: React.FC<LineChartProps> = ({ 
  data, 
  color = '#3B82F6', 
  height = 300, 
  showGrid = true,
  animate = true,
  strokeWidth = 3,
  showGradient = true,
  showTooltip = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || !data.length) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = rect.width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);

    const padding = 40;
    const chartWidth = rect.width - padding * 2;
    const chartHeight = height - padding * 2;

    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));
    const valueRange = maxValue - minValue || 1;

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, height);

    // Draw grid
    if (showGrid) {
      ctx.strokeStyle = 'rgba(156, 163, 175, 0.2)';
      ctx.lineWidth = 1;
      
      // Horizontal grid lines
      for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartWidth, y);
        ctx.stroke();
      }

      // Vertical grid lines
      for (let i = 0; i <= data.length - 1; i++) {
        const x = padding + (chartWidth / (data.length - 1)) * i;
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, padding + chartHeight);
        ctx.stroke();
      }
    }

    const points = data.map((point, index) => {
      const x = padding + (chartWidth / (data.length - 1)) * index;
      const y = padding + chartHeight - ((point.value - minValue) / valueRange) * chartHeight;
      return { x, y, value: point.value, label: point.label };
    });

    if (animate) {
      let progress = 0;
      const animationDuration = 2000;
      const startTime = Date.now();

      const animateChart = () => {
        const elapsed = Date.now() - startTime;
        progress = Math.min(elapsed / animationDuration, 1);
        
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        ctx.clearRect(0, 0, rect.width, height);

        // Redraw grid
        if (showGrid) {
          ctx.strokeStyle = 'rgba(156, 163, 175, 0.2)';
          ctx.lineWidth = 1;
          
          for (let i = 0; i <= 5; i++) {
            const y = padding + (chartHeight / 5) * i;
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(padding + chartWidth, y);
            ctx.stroke();
          }

          for (let i = 0; i <= data.length - 1; i++) {
            const x = padding + (chartWidth / (data.length - 1)) * i;
            ctx.beginPath();
            ctx.moveTo(x, padding);
            ctx.lineTo(x, padding + chartHeight);
            ctx.stroke();
          }
        }

        // Draw animated line
        ctx.strokeStyle = color;
        ctx.lineWidth = strokeWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const animatedPointCount = Math.floor(points.length * easeProgress);
        
        if (animatedPointCount > 0) {
          ctx.beginPath();
          ctx.moveTo(points[0].x, points[0].y);
          
          for (let i = 1; i < animatedPointCount; i++) {
            ctx.lineTo(points[i].x, points[i].y);
          }
          
          ctx.stroke();

          // Draw gradient fill
          if (showGradient && easeProgress > 0.5) {
            const gradient = ctx.createLinearGradient(0, padding, 0, padding + chartHeight);
            gradient.addColorStop(0, color + '40');
            gradient.addColorStop(1, color + '00');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            
            for (let i = 1; i < animatedPointCount; i++) {
              ctx.lineTo(points[i].x, points[i].y);
            }
            
            ctx.lineTo(points[animatedPointCount - 1].x, padding + chartHeight);
            ctx.lineTo(points[0].x, padding + chartHeight);
            ctx.closePath();
            ctx.fill();
          }

          // Draw animated data points
          points.slice(0, animatedPointCount).forEach((point, index) => {
            const pointProgress = Math.max(0, (easeProgress * points.length - index) / 1);
            if (pointProgress > 0) {
              const radius = 4 * Math.min(pointProgress, 1);
              
              // Outer glow
              ctx.beginPath();
              ctx.arc(point.x, point.y, radius + 2, 0, 2 * Math.PI);
              ctx.fillStyle = color + '30';
              ctx.fill();
              
              // Inner point
              ctx.beginPath();
              ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI);
              ctx.fillStyle = color;
              ctx.fill();
              
              // White center
              ctx.beginPath();
              ctx.arc(point.x, point.y, radius - 1, 0, 2 * Math.PI);
              ctx.fillStyle = '#ffffff';
              ctx.fill();
            }
          });
        }

        if (progress < 1) {
          requestAnimationFrame(animateChart);
        }
      };
      
      animateChart();
    } else {
      // Draw static line
      ctx.strokeStyle = color;
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      
      ctx.stroke();

      // Draw gradient fill
      if (showGradient) {
        const gradient = ctx.createLinearGradient(0, padding, 0, padding + chartHeight);
        gradient.addColorStop(0, color + '40');
        gradient.addColorStop(1, color + '00');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        
        ctx.lineTo(points[points.length - 1].x, padding + chartHeight);
        ctx.lineTo(points[0].x, padding + chartHeight);
        ctx.closePath();
        ctx.fill();
      }

      // Draw data points
      points.forEach(point => {
        // Outer glow
        ctx.beginPath();
        ctx.arc(point.x, point.y, 6, 0, 2 * Math.PI);
        ctx.fillStyle = color + '30';
        ctx.fill();
        
        // Inner point
        ctx.beginPath();
        ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        
        // White center
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      });
    }

  }, [data, color, height, showGrid, animate, strokeWidth, showGradient]);

  return (
    <div ref={containerRef} className="w-full relative">
      <canvas
        ref={canvasRef}
        className="w-full cursor-crosshair"
        style={{ height: `${height}px` }}
      />
    </div>
  );
};

export default LineChart;