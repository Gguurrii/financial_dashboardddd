import React from 'react'
import { motion } from 'framer-motion'
import { ColumnDef } from '@tanstack/react-table'
import { DollarSign, TrendingUp, Calendar, ArrowUpDown } from 'lucide-react'
import { KPICard } from '@/components/widgets/KPICard'
import { NivoLineChart } from '@/components/charts/NivoLineChart'
import { DataTable } from '@/components/tables/DataTable'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'

/**
 * Revenue analysis page with detailed breakdowns and data tables
 * Features advanced filtering and interactive visualizations
 */

interface RevenueRecord {
  id: string
  source: string
  amount: number
  date: string
  department: string
  status: 'received' | 'pending' | 'overdue'
}

// Mock revenue data
const revenueRecords: RevenueRecord[] = [
  {
    id: "REV001",
    source: "Tuition - Engineering",
    amount: 2400000,
    date: "2024-01-15",
    department: "Engineering",
    status: "received"
  },
  {
    id: "REV002",
    source: "Research Grant - NSF",
    amount: 850000,
    date: "2024-01-20",
    department: "Research",
    status: "received"
  },
  {
    id: "REV003",
    source: "Tuition - Business",
    amount: 1800000,
    date: "2024-01-25",
    department: "Business",
    status: "pending"
  },
  {
    id: "REV004",
    source: "Alumni Donation",
    amount: 500000,
    date: "2024-02-01",
    department: "Development",
    status: "received"
  },
  {
    id: "REV005",
    source: "Continuing Education",
    amount: 320000,
    date: "2024-02-05",
    department: "Continuing Ed",
    status: "overdue"
  }
]

const columns: ColumnDef<RevenueRecord>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "source",
    header: "Revenue Source",
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      return <div className="font-medium">{formatCurrency(amount)}</div>
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"))
      return <div>{date.toLocaleDateString()}</div>
    },
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          status === 'received' ? 'bg-green-100 text-green-800' :
          status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      )
    },
  },
]

const revenueKPIs = [
  {
    title: "Total Revenue YTD",
    value: 45800000,
    change: 12.5,
    changeType: "increase" as const,
    icon: DollarSign,
    description: "Year-to-date revenue"
  },
  {
    title: "Monthly Growth",
    value: 8.3,
    change: 2.1,
    changeType: "increase" as const,
    format: "percentage" as const,
    icon: TrendingUp,
    description: "Month-over-month growth"
  },
  {
    title: "Average Monthly",
    value: 3816667,
    change: 5.7,
    changeType: "increase" as const,
    icon: Calendar,
    description: "Average monthly revenue"
  }
]

const revenueChartData = [
  {
    id: "Tuition",
    data: [
      { x: "Jan", y: 3200000 },
      { x: "Feb", y: 3400000 },
      { x: "Mar", y: 3600000 },
      { x: "Apr", y: 3800000 },
      { x: "May", y: 3900000 },
      { x: "Jun", y: 4100000 }
    ]
  },
  {
    id: "Grants",
    data: [
      { x: "Jan", y: 800000 },
      { x: "Feb", y: 750000 },
      { x: "Mar", y: 900000 },
      { x: "Apr", y: 850000 },
      { x: "May", y: 950000 },
      { x: "Jun", y: 1000000 }
    ]
  },
  {
    id: "Donations",
    data: [
      { x: "Jan", y: 200000 },
      { x: "Feb", y: 180000 },
      { x: "Mar", y: 250000 },
      { x: "Apr", y: 220000 },
      { x: "May", y: 300000 },
      { x: "Jun", y: 280000 }
    ]
  }
]

export function Revenue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-1 space-y-6 p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Revenue Analysis</h1>
          <p className="text-muted-foreground">
            Comprehensive revenue tracking and analysis
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {revenueKPIs.map((kpi, index) => (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <KPICard {...kpi} />
          </motion.div>
        ))}
      </div>

      {/* Revenue Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Trends by Source</CardTitle>
          <CardDescription>
            Monthly revenue breakdown by major sources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NivoLineChart
            data={revenueChartData}
            height={400}
            colors={['#2563eb', '#10b981', '#f59e0b']}
            enablePoints={true}
            curve="cardinal"
          />
        </CardContent>
      </Card>

      {/* Revenue Data Table */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Records</CardTitle>
          <CardDescription>
            Detailed revenue transactions and status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={revenueRecords}
            searchPlaceholder="Search revenue records..."
          />
        </CardContent>
      </Card>
    </motion.div>
  )
}