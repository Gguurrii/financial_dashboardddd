import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { motion } from 'framer-motion'

/**
 * Advanced line chart component using Nivo for financial time series data
 * Features smooth animations and professional styling
 */

interface DataPoint {
  x: string | number
  y: number
}

interface ChartSeries {
  id: string
  data: DataPoint[]
  color?: string
}

interface NivoLineChartProps {
  data: ChartSeries[]
  height?: number
  enablePoints?: boolean
  enableGridX?: boolean
  enableGridY?: boolean
  curve?: 'linear' | 'monotoneX' | 'cardinal'
  axisBottom?: {
    tickSize?: number
    tickPadding?: number
    tickRotation?: number
    legend?: string
    legendOffset?: number
    legendPosition?: 'middle' | 'start' | 'end'
  }
  axisLeft?: {
    tickSize?: number
    tickPadding?: number
    tickRotation?: number
    legend?: string
    legendOffset?: number
    legendPosition?: 'middle' | 'start' | 'end'
  }
  colors?: string[]
  animate?: boolean
}

export function NivoLineChart({
  data,
  height = 400,
  enablePoints = true,
  enableGridX = true,
  enableGridY = true,
  curve = 'monotoneX',
  axisBottom = {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Time',
    legendOffset: 36,
    legendPosition: 'middle'
  },
  axisLeft = {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Value ($)',
    legendOffset: -40,
    legendPosition: 'middle'
  },
  colors = ['#2563eb', '#10b981', '#f59e0b', '#ef4444'],
  animate = true
}: NivoLineChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ height }}
    >
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: false,
          reverse: false
        }}
        yFormat=" >-.2f"
        curve={curve}
        axisTop={null}
        axisRight={null}
        axisBottom={axisBottom}
        axisLeft={axisLeft}
        enableGridX={enableGridX}
        enableGridY={enableGridY}
        colors={colors}
        pointSize={enablePoints ? 8 : 0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        animate={animate}
        motionConfig="gentle"
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        theme={{
          background: 'transparent',
          text: {
            fontSize: 12,
            fill: '#374151',
            outlineWidth: 0,
            outlineColor: 'transparent'
          },
          axis: {
            domain: {
              line: {
                stroke: '#e5e7eb',
                strokeWidth: 1
              }
            },
            legend: {
              text: {
                fontSize: 12,
                fill: '#6b7280',
                outlineWidth: 0,
                outlineColor: 'transparent'
              }
            },
            ticks: {
              line: {
                stroke: '#e5e7eb',
                strokeWidth: 1
              },
              text: {
                fontSize: 11,
                fill: '#6b7280',
                outlineWidth: 0,
                outlineColor: 'transparent'
              }
            }
          },
          grid: {
            line: {
              stroke: '#f3f4f6',
              strokeWidth: 1
            }
          },
          crosshair: {
            line: {
              stroke: '#374151',
              strokeWidth: 1,
              strokeOpacity: 0.35
            }
          }
        }}
      />
    </motion.div>
  )
}