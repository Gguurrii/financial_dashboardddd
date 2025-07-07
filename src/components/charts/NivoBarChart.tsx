import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { motion } from 'framer-motion'

/**
 * Advanced bar chart component using Nivo for financial categorical data
 * Features professional styling and smooth animations
 */

interface BarChartData {
  [key: string]: string | number
}

interface NivoBarChartProps {
  data: BarChartData[]
  keys: string[]
  indexBy: string
  height?: number
  layout?: 'vertical' | 'horizontal'
  groupMode?: 'stacked' | 'grouped'
  colors?: string[]
  enableLabel?: boolean
  enableGridX?: boolean
  enableGridY?: boolean
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
  animate?: boolean
}

export function NivoBarChart({
  data,
  keys,
  indexBy,
  height = 400,
  layout = 'vertical',
  groupMode = 'grouped',
  colors = ['#2563eb', '#10b981', '#f59e0b', '#ef4444'],
  enableLabel = true,
  enableGridX = true,
  enableGridY = true,
  axisBottom = {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Category',
    legendOffset: 32,
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
  animate = true
}: NivoBarChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ height }}
    >
      <ResponsiveBar
        data={data}
        keys={keys}
        indexBy={indexBy}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        layout={layout}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={colors}
        groupMode={groupMode}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={axisBottom}
        axisLeft={axisLeft}
        enableGridX={enableGridX}
        enableGridY={enableGridY}
        enableLabel={enableLabel}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]]
        }}
        animate={animate}
        motionConfig="gentle"
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        role="application"
        ariaLabel="Financial bar chart"
        barAriaLabel={function(e){
          return e.id + ": " + e.formattedValue + " in category: " + e.indexValue
        }}
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
          }
        }}
      />
    </motion.div>
  )
}