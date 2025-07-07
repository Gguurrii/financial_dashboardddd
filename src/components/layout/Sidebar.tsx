import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  PieChart, 
  FileText, 
  Settings,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Calculator,
  Target,
  Users,
  Building
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

/**
 * Professional sidebar navigation for financial dashboard
 * Features collapsible sections and smooth animations
 */

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  description: string
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navigationSections: NavSection[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/",
        icon: BarChart3,
        description: "Financial overview and KPIs"
      }
    ]
  },
  {
    title: "Financial Analysis",
    items: [
      {
        title: "Revenue",
        href: "/revenue",
        icon: TrendingUp,
        description: "Revenue streams and growth"
      },
      {
        title: "Expenses",
        href: "/expenses",
        icon: TrendingDown,
        description: "Cost analysis and optimization"
      },
      {
        title: "Cash Flow",
        href: "/cash-flow",
        icon: DollarSign,
        description: "Cash flow management"
      },
      {
        title: "Portfolio",
        href: "/portfolio",
        icon: PieChart,
        description: "Investment portfolio analysis"
      }
    ]
  },
  {
    title: "Operations",
    items: [
      {
        title: "Students",
        href: "/students",
        icon: Users,
        description: "Student financial data"
      },
      {
        title: "Faculty",
        href: "/faculty",
        icon: Building,
        description: "Faculty cost analysis"
      },
      {
        title: "Forecasting",
        href: "/forecasting",
        icon: Target,
        description: "Financial projections"
      },
      {
        title: "Calculators",
        href: "/calculators",
        icon: Calculator,
        description: "Financial calculators"
      }
    ]
  },
  {
    title: "Reports",
    items: [
      {
        title: "Reports",
        href: "/reports",
        icon: FileText,
        description: "Generate financial reports"
      },
      {
        title: "Settings",
        href: "/settings",
        icon: Settings,
        description: "Application settings"
      }
    ]
  }
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>(['Overview', 'Financial Analysis'])
  const location = useLocation()

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle)
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    )
  }

  const sidebarVariants = {
    expanded: { width: 280 },
    collapsed: { width: 80 }
  }

  const contentVariants = {
    expanded: { opacity: 1, x: 0 },
    collapsed: { opacity: 0, x: -20 }
  }

  return (
    <motion.div
      className={cn(
        "relative flex flex-col border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
      variants={sidebarVariants}
      animate={isCollapsed ? "collapsed" : "expanded"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Header */}
      <div className="flex h-16 items-center border-b px-4">
        <motion.div
          className="flex items-center space-x-3"
          variants={contentVariants}
          animate={isCollapsed ? "collapsed" : "expanded"}
          transition={{ duration: 0.2 }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <BarChart3 className="h-5 w-5 text-primary-foreground" />
          </div>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="text-lg font-semibold">FinanceAI</h2>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-2 px-3">
          {navigationSections.map((section) => (
            <div key={section.title} className="space-y-1">
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => toggleSection(section.title)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    <span>{section.title}</span>
                    <motion.div
                      animate={{ rotate: expandedSections.includes(section.title) ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.div>
                  </motion.button>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {(isCollapsed || expandedSections.includes(section.title)) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1"
                  >
                    {section.items.map((item) => {
                      const isActive = location.pathname === item.href
                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={cn(
                            "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                            isActive
                              ? "bg-accent text-accent-foreground"
                              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                            isCollapsed && "justify-center"
                          )}
                          title={isCollapsed ? item.title : undefined}
                        >
                          <item.icon className={cn("h-4 w-4", !isCollapsed && "mr-3")} />
                          <AnimatePresence>
                            {!isCollapsed && (
                              <motion.span
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                {item.title}
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </Link>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
      </div>

      {/* Collapse Toggle */}
      <div className="border-t p-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn("w-full", isCollapsed && "px-2")}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Collapse
            </>
          )}
        </Button>
      </div>
    </motion.div>
  )
}