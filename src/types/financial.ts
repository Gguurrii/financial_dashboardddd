export interface FinancialMetric {
  id: string;
  title: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
  color: string;
}

export interface RevenueData {
  month: string;
  studentFees: number;
  grants: number;
  donations: number;
  other: number;
}

export interface ExpenseData {
  category: string;
  amount: number;
  percentage: number;
  color: string;
}

export interface CashFlowData {
  month: string;
  income: number;
  expenses: number;
  netFlow: number;
}

export interface FinancialSummary {
  totalRevenue: number;
  totalExpenses: number;
  netIncome: number;
  cashReserves: number;
  monthlyGrowth: number;
}