import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { motion } from 'framer-motion'

/**
 * Advanced pie chart component using Nivo for financial distribution data
 * Features professional styling and interactive animations
 */

interface PieChartData {
  id: string
  label: string
  value: number
  color?: string
}

interface NivoPieChartProps {
  data: PieChartData[]
  height?: number
  innerRadius?: number
  padAngle?: number
  cornerRadius?: number
  colors?: string[]
  enableArcLabels?: boolean
  enableArcLinkLabels?: boolean
  animate?: boolean
}

export function NivoPieChart({
  data,
  height = 400,
  innerRadius = 0.5,
  padAngle = 0.7,
  cornerRadius = 3,
  colors = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
  enableArcLabels = true,
  enableArcLinkLabels = true,
  animate = true
}: NivoPieChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ height }}
    >
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={innerRadius}
        padAngle={padAngle}
        cornerRadius={cornerRadius}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]]
        }}
        colors={colors}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLinkLabels={enableArcLinkLabels}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]]
        }}
        enableArcLabels={enableArcLabels}
        animate={animate}
        motionConfig="gentle"
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
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
          legends: {
            text: {
              fontSize: 12,
              fill: '#6b7280',
              outlineWidth: 0,
              outlineColor: 'transparent'
            }
          }
        }}
      />
    </motion.div>
  )
}