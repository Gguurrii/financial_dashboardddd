import { FinancialMetric, RevenueData, ExpenseData, CashFlowData, FinancialSummary } from '../types/financial';

export const financialMetrics: FinancialMetric[] = [
  {
    id: '1',
    title: 'Total Revenue',
    value: 3834000000, // ₹383.4 Cr (converted from $45.8M)
    change: 12.5,
    changeType: 'increase',
    icon: 'TrendingUp',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: '2',
    title: 'Total Expenses',
    value: 3197600000, // ₹319.76 Cr (converted from $38.2M)
    change: 5.2,
    changeType: 'increase',
    icon: 'TrendingDown',
    color: 'from-red-500 to-pink-600'
  },
  {
    id: '3',
    title: 'Net Income',
    value: 636400000, // ₹63.64 Cr (converted from $7.6M)
    change: 18.3,
    changeType: 'increase',
    icon: 'DollarSign',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: '4',
    title: 'Cash Reserves',
    value: 1030300000, // ₹103.03 Cr (converted from $12.3M)
    change: 8.7,
    changeType: 'increase',
    icon: 'Wallet',
    color: 'from-purple-500 to-violet-600'
  }
];

export const revenueData: RevenueData[] = [
  { month: 'Jan', studentFees: 268000000, grants: 67000000, donations: 16750000, other: 12575000 },
  { month: 'Feb', studentFees: 284800000, grants: 62750000, donations: 15075000, other: 10050000 },
  { month: 'Mar', studentFees: 301600000, grants: 75375000, donations: 20937500, other: 16750000 },
  { month: 'Apr', studentFees: 318400000, grants: 71187500, donations: 18437500, other: 15075000 },
  { month: 'May', studentFees: 326800000, grants: 79625000, donations: 25125000, other: 18437500 },
  { month: 'Jun', studentFees: 343600000, grants: 75375000, donations: 23462500, other: 15912500 },
  { month: 'Jul', studentFees: 352000000, grants: 83750000, donations: 26800000, other: 20937500 },
  { month: 'Aug', studentFees: 360400000, grants: 79625000, donations: 24287500, other: 17587500 },
  { month: 'Sep', studentFees: 377200000, grants: 92125000, donations: 29312500, other: 23462500 },
  { month: 'Oct', studentFees: 368800000, grants: 87875000, donations: 27637500, other: 21775000 },
  { month: 'Nov', studentFees: 385600000, grants: 96375000, donations: 31825000, other: 25125000 },
  { month: 'Dec', studentFees: 402400000, grants: 100500000, donations: 33500000, other: 26800000 }
];

export const expenseData: ExpenseData[] = [
  { category: 'Faculty Salaries', amount: 1307200000, percentage: 40.8, color: '#3B82F6' },
  { category: 'Infrastructure', amount: 653600000, percentage: 20.4, color: '#10B981' },
  { category: 'Utilities', amount: 351750000, percentage: 11.0, color: '#F59E0B' },
  { category: 'Research', amount: 326775000, percentage: 10.2, color: '#EF4444' },
  { category: 'Administration', amount: 234500000, percentage: 7.3, color: '#8B5CF6' },
  { category: 'Student Services', amount: 201000000, percentage: 6.3, color: '#06B6D4' },
  { category: 'Maintenance', amount: 125625000, percentage: 3.9, color: '#F97316' }
];

export const cashFlowData: CashFlowData[] = [
  { month: 'Jan', income: 364325000, expenses: 268000000, netFlow: 96325000 },
  { month: 'Feb', income: 372675000, expenses: 263875000, netFlow: 108800000 },
  { month: 'Mar', income: 414662500, expenses: 284800000, netFlow: 129862500 },
  { month: 'Apr', income: 423100000, expenses: 272125000, netFlow: 150975000 },
  { month: 'May', income: 449987500, expenses: 276250000, netFlow: 173737500 },
  { month: 'Jun', income: 458350000, expenses: 266700000, netFlow: 191650000 },
  { month: 'Jul', income: 483487500, expenses: 280375000, netFlow: 203112500 },
  { month: 'Aug', income: 481812500, expenses: 268000000, netFlow: 213812500 },
  { month: 'Sep', income: 522100000, expenses: 286475000, netFlow: 235625000 },
  { month: 'Oct', income: 514225000, expenses: 283150000, netFlow: 231075000 },
  { month: 'Nov', income: 547325000, expenses: 288925000, netFlow: 258400000 },
  { month: 'Dec', income: 563200000, expenses: 293125000, netFlow: 270075000 }
];

export const financialSummary: FinancialSummary = {
  totalRevenue: 3834000000,
  totalExpenses: 3197600000,
  netIncome: 636400000,
  cashReserves: 1030300000,
  monthlyGrowth: 12.5
};