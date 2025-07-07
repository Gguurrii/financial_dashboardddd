import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { Sidebar } from '@/components/layout/Sidebar'
import { Dashboard } from '@/pages/Dashboard'
import { Revenue } from '@/pages/Revenue'
import './index.css'

/**
 * Main application component with routing and layout
 * Features React Query for data management and Framer Motion for animations
 */

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
    },
  },
})

// Placeholder components for other routes
const Expenses = () => (
  <div className="flex-1 p-6">
    <h1 className="text-3xl font-bold">Expenses</h1>
    <p className="text-muted-foreground">Expense analysis coming soon...</p>
  </div>
)

const CashFlow = () => (
  <div className="flex-1 p-6">
    <h1 className="text-3xl font-bold">Cash Flow</h1>
    <p className="text-muted-foreground">Cash flow analysis coming soon...</p>
  </div>
)

const Portfolio = () => (
  <div className="flex-1 p-6">
    <h1 className="text-3xl font-bold">Portfolio</h1>
    <p className="text-muted-foreground">Portfolio analysis coming soon...</p>
  </div>
)

const Students = () => (
  <div className="flex-1 p-6">
    <h1 className="text-3xl font-bold">Students</h1>
    <p className="text-muted-foreground">Student financial data coming soon...</p>
  </div>
)

const Faculty = () => (
  <div className="flex-1 p-6">
    <h1 className="text-3xl font-bold">Faculty</h1>
    <p className="text-muted-foreground">Faculty cost analysis coming soon...</p>
  </div>
)

const Forecasting = () => (
  <div className="flex-1 p-6">
    <h1 className="text-3xl font-bold">Forecasting</h1>
    <p className="text-muted-foreground">Financial forecasting coming soon...</p>
  </div>
)

const Calculators = () => (
  <div className="flex-1 p-6">
    <h1 className="text-3xl font-bold">Financial Calculators</h1>
    <p className="text-muted-foreground">Financial calculators coming soon...</p>
  </div>
)

const Reports = () => (
  <div className="flex-1 p-6">
    <h1 className="text-3xl font-bold">Reports</h1>
    <p className="text-muted-foreground">Report generation coming soon...</p>
  </div>
)

const Settings = () => (
  <div className="flex-1 p-6">
    <h1 className="text-3xl font-bold">Settings</h1>
    <p className="text-muted-foreground">Application settings coming soon...</p>
  </div>
)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background">
          <div className="flex">
            <Sidebar />
            <motion.main
              className="flex-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/revenue" element={<Revenue />} />
                <Route path="/expenses" element={<Expenses />} />
                <Route path="/cash-flow" element={<CashFlow />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/students" element={<Students />} />
                <Route path="/faculty" element={<Faculty />} />
                <Route path="/forecasting" element={<Forecasting />} />
                <Route path="/calculators" element={<Calculators />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </motion.main>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App