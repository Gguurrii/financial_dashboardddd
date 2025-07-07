import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, TrendingDown, Users, Building, Target } from 'lucide-react'
import { KPICard } from '@/components/widgets/KPICard'
import { NivoLineChart } from '@/components/charts/NivoLineChart'
import { NivoBarChart } from '@/components/charts/NivoBarChart'
import { NivoPieChart } from '@/components/charts/NivoPieChart'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

/**
 * Main dashboard page displaying financial overview and key metrics
 * Features responsive grid layout and interactive charts
 */

// Mock data for demonstration
const kpiData = [
  {
    title: "Total Revenue",
    value: 45800000,
    change: 12.5,
    changeType: "increase" as const,
    icon: DollarSign,
    description: "Annual revenue growth",
    trend: [42000000, 43200000, 44100000, 45800000]
  },
  {
    title: "Net Income",
    value: 7600000,
    change: 18.3,
    changeType: "increase" as const,
    icon: TrendingUp,
    description: "Profit after expenses",
    trend: [6200000, 6800000, 7200000, 7600000]
  },
  {
    title: "Operating Expenses",
    value: 38200000,
    change: 5.2,
    changeType: "increase" as const,
    icon: TrendingDown,
    description: "Total operational costs",
    trend: [36000000, 37100000, 37800000, 38200000]
  },
  {
    title: "Student Enrollment",
    value: 18450,
    change: 8.3,
    changeType: "increase" as const,
    format: "number" as const,
    icon: Users,
    description: "Active students",
    trend: [17200, 17800, 18100, 18450]
  }
]

const revenueData = [
  {
    id: "Student Fees",
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
    id: "Research Grants",
    data: [
      { x: "Jan", y: 800000 },
      { x: "Feb", y: 750000 },
      { x: "Mar", y: 900000 },
      { x: "Apr", y: 850000 },
      { x: "May", y: 950000 },
      { x: "Jun", y: 1000000 }
    ]
  }
]

const expenseData = [
  { category: "Faculty Salaries", value: 15600000 },
  { category: "Infrastructure", value: 7800000 },
  { category: "Utilities", value: 4200000 },
  { category: "Research", value: 3900000 },
  { category: "Administration", value: 2800000 }
]

const departmentData = [
  { id: "Engineering", label: "Engineering", value: 12500000 },
  { id: "Business", label: "Business", value: 8900000 },
  { id: "Medicine", label: "Medicine", value: 7800000 },
  { id: "Arts", label: "Arts & Sciences", value: 6200000 },
  { id: "Law", label: "Law", value: 4100000 }
]

export function Dashboard() {
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
          <h1 className="text-3xl font-bold tracking-tight">Financial Dashboard</h1>
          <p className="text-muted-foreground">
            University financial overview and key performance indicators
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi, index) => (
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

      {/* Charts Section */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Analysis</TabsTrigger>
          <TabsTrigger value="expenses">Expense Analysis</TabsTrigger>
          <TabsTrigger value="departments">Department Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Revenue Trends</CardTitle>
                <CardDescription>
                  Monthly revenue by source over the past 6 months
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <NivoLineChart
                  data={revenueData}
                  height={350}
                  colors={['#2563eb', '#10b981']}
                />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Revenue by Department</CardTitle>
                <CardDescription>
                  Distribution of revenue across academic departments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NivoPieChart
                  data={departmentData}
                  height={350}
                  innerRadius={0.6}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Analysis</CardTitle>
              <CardDescription>
                Detailed revenue breakdown and trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NivoLineChart
                data={revenueData}
                height={400}
                colors={['#2563eb', '#10b981']}
                enablePoints={true}
                curve="cardinal"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Expense Analysis</CardTitle>
              <CardDescription>
                Operating expenses by category
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NivoBarChart
                data={expenseData}
                keys={['value']}
                indexBy="category"
                height={400}
                colors={['#ef4444']}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: -45,
                  legend: 'Expense Category',
                  legendOffset: 60,
                  legendPosition: 'middle'
                }}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Department Revenue</CardTitle>
                <CardDescription>
                  Revenue contribution by department
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NivoPieChart
                  data={departmentData}
                  height={350}
                  innerRadius={0.4}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Department Comparison</CardTitle>
                <CardDescription>
                  Side-by-side department performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NivoBarChart
                  data={departmentData.map(d => ({ department: d.label, revenue: d.value }))}
                  keys={['revenue']}
                  indexBy="department"
                  height={350}
                  colors={['#2563eb']}
                  axisBottom={{
                    tickRotation: -45,
                    legend: 'Department',
                    legendOffset: 60,
                    legendPosition: 'middle'
                  }}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}