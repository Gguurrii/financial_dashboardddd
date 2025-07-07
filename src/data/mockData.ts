import { FinancialMetric, RevenueData, ExpenseData, CashFlowData, FinancialSummary } from '../types/financial';

export const financialMetrics: FinancialMetric[] = [
  {
    id: '1',
    title: 'Total Revenue',
    value: 45800000,
    change: 12.5,
    changeType: 'increase',
    icon: 'TrendingUp',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: '2',
    title: 'Total Expenses',
    value: 38200000,
    change: 5.2,
    changeType: 'increase',
    icon: 'TrendingDown',
    color: 'from-red-500 to-pink-600'
  },
  {
    id: '3',
    title: 'Net Income',
    value: 7600000,
    change: 18.3,
    changeType: 'increase',
    icon: 'DollarSign',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: '4',
    title: 'Cash Reserves',
    value: 12300000,
    change: 8.7,
    changeType: 'increase',
    icon: 'Wallet',
    color: 'from-purple-500 to-violet-600'
  }
];

export const revenueData: RevenueData[] = [
  { month: 'Jan', studentFees: 3200000, grants: 800000, donations: 200000, other: 150000 },
  { month: 'Feb', studentFees: 3400000, grants: 750000, donations: 180000, other: 120000 },
  { month: 'Mar', studentFees: 3600000, grants: 900000, donations: 250000, other: 200000 },
  { month: 'Apr', studentFees: 3800000, grants: 850000, donations: 220000, other: 180000 },
  { month: 'May', studentFees: 3900000, grants: 950000, donations: 300000, other: 220000 },
  { month: 'Jun', studentFees: 4100000, grants: 900000, donations: 280000, other: 190000 },
  { month: 'Jul', studentFees: 4200000, grants: 1000000, donations: 320000, other: 250000 },
  { month: 'Aug', studentFees: 4300000, grants: 950000, donations: 290000, other: 210000 },
  { month: 'Sep', studentFees: 4500000, grants: 1100000, donations: 350000, other: 280000 },
  { month: 'Oct', studentFees: 4400000, grants: 1050000, donations: 330000, other: 260000 },
  { month: 'Nov', studentFees: 4600000, grants: 1150000, donations: 380000, other: 300000 },
  { month: 'Dec', studentFees: 4800000, grants: 1200000, donations: 400000, other: 320000 }
];

export const expenseData: ExpenseData[] = [
  { category: 'Faculty Salaries', amount: 15600000, percentage: 40.8, color: '#3B82F6' },
  { category: 'Infrastructure', amount: 7800000, percentage: 20.4, color: '#10B981' },
  { category: 'Utilities', amount: 4200000, percentage: 11.0, color: '#F59E0B' },
  { category: 'Research', amount: 3900000, percentage: 10.2, color: '#EF4444' },
  { category: 'Administration', amount: 2800000, percentage: 7.3, color: '#8B5CF6' },
  { category: 'Student Services', amount: 2400000, percentage: 6.3, color: '#06B6D4' },
  { category: 'Maintenance', amount: 1500000, percentage: 3.9, color: '#F97316' }
];

export const cashFlowData: CashFlowData[] = [
  { month: 'Jan', income: 4350000, expenses: 3200000, netFlow: 1150000 },
  { month: 'Feb', income: 4450000, expenses: 3150000, netFlow: 1300000 },
  { month: 'Mar', income: 4950000, expenses: 3400000, netFlow: 1550000 },
  { month: 'Apr', income: 5050000, expenses: 3250000, netFlow: 1800000 },
  { month: 'May', income: 5370000, expenses: 3300000, netFlow: 2070000 },
  { month: 'Jun', income: 5470000, expenses: 3180000, netFlow: 2290000 },
  { month: 'Jul', income: 5770000, expenses: 3350000, netFlow: 2420000 },
  { month: 'Aug', income: 5750000, expenses: 3200000, netFlow: 2550000 },
  { month: 'Sep', income: 6230000, expenses: 3420000, netFlow: 2810000 },
  { month: 'Oct', income: 6140000, expenses: 3380000, netFlow: 2760000 },
  { month: 'Nov', income: 6530000, expenses: 3450000, netFlow: 3080000 },
  { month: 'Dec', income: 6720000, expenses: 3500000, netFlow: 3220000 }
];

export const financialSummary: FinancialSummary = {
  totalRevenue: 45800000,
  totalExpenses: 38200000,
  netIncome: 7600000,
  cashReserves: 12300000,
  monthlyGrowth: 12.5
};