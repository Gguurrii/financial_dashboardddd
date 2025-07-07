import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn, formatCurrency, formatPercentage } from '@/lib/utils'

/**
 * Professional KPI card component for financial metrics
 * Features trend indicators and smooth animations
 */

interface KPICardProps {
  title: string
  value: number
  change?: number
  changeType?: 'increase' | 'decrease'
  format?: 'currency' | 'percentage' | 'number'
  icon?: React.ComponentType<{ className?: string }>
  description?: string
  className?: string
  trend?: number[]
}

export function KPICard({
  title,
  value,
  change,
  changeType,
  format = 'currency',
  icon: Icon,
  description,
  className,
  trend
}: KPICardProps) {
  const formatValue = (val: number) => {
    switch (format) {
      case 'currency':
        return formatCurrency(val)
      case 'percentage':
        return formatPercentage(val)
      default:
        return val.toLocaleString()
    }
  }

  const isPositive = changeType === 'increase' || (change && change > 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
    >
      <Card className={cn("relative overflow-hidden", className)}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {Icon && (
            <Icon className="h-4 w-4 text-muted-foreground" />
          )}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatValue(value)}
          </div>
          {change !== undefined && (
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              {isPositive ? (
                <TrendingUp className="h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500" />
              )}
              <span className={cn(
                "font-medium",
                isPositive ? "text-green-500" : "text-red-500"
              )}>
                {formatPercentage(Math.abs(change))}
              </span>
              <span>from last period</span>
            </div>
          )}
          {description && (
            <p className="text-xs text-muted-foreground mt-1">
              {description}
            </p>
          )}
          {trend && (
            <div className="mt-3">
              <svg
                className="h-8 w-full"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <polyline
                  fill="none"
                  stroke={isPositive ? "#10b981" : "#ef4444"}
                  strokeWidth="1.5"
                  points={trend.map((val, idx) => 
                    `${(idx / (trend.length - 1)) * 100},${20 - (val / Math.max(...trend)) * 15}`
                  ).join(' ')}
                />
              </svg>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}