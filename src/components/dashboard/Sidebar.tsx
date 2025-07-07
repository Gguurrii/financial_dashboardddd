import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  Building, 
  Settings,
  Home,
  FileText,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const { theme } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'faculty', label: 'Faculty', icon: Building },
    { id: 'reports', label: 'Generate Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
    setIsMobileOpen(false); // Close mobile menu when item is selected
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className={`
          fixed top-4 left-4 z-50 lg:hidden p-3 rounded-xl shadow-lg transition-all duration-300
          ${theme === 'light' 
            ? 'bg-white/90 border border-gray-200/50 text-gray-700 hover:bg-white' 
            : 'bg-gray-800/90 border border-gray-700/50 text-gray-300 hover:bg-gray-800'
          }
        `}
      >
        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 h-screen z-40 transition-all duration-300 ease-in-out
        ${isCollapsed ? 'lg:w-20' : 'lg:w-64'}
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-64 lg:w-auto
      `}>
        <div className="h-full p-4 relative">
          <div className={`
            h-full backdrop-blur-xl rounded-2xl shadow-2xl border transition-all duration-300 relative overflow-hidden
            ${theme === 'light' 
              ? 'bg-white/95 border-white/50 shadow-gray-200/20' 
              : 'bg-gray-900/95 border-gray-700/50 shadow-black/20'
            }
            ${isCollapsed ? 'lg:px-3 lg:py-6' : 'p-6'}
          `}>
            
            {/* Animated Background Gradient */}
            <div className={`
              absolute inset-0 opacity-5 transition-opacity duration-500
              ${theme === 'light' 
                ? 'bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500' 
                : 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600'
              }
            `} />

            {/* Logo Section */}
            <div className={`relative z-10 transition-all duration-300 ${isCollapsed ? 'lg:mb-8' : 'mb-8'}`}>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="relative group">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md" />
                </div>
                
                <div className={`
                  transition-all duration-300 overflow-hidden
                  ${isCollapsed ? 'lg:w-0 lg:opacity-0' : 'w-auto opacity-100'}
                `}>
                  <h2 className={`font-bold text-lg whitespace-nowrap ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>
                    FinanceAI
                  </h2>
                  <p className={`text-xs whitespace-nowrap ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}>
                    University Portal
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className={`relative z-10 space-y-2 ${isCollapsed ? 'lg:mt-4' : 'mt-4'}`}>
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                
                return (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => handleTabChange(item.id)}
                      className={`
                        w-full flex items-center rounded-xl text-left transition-all duration-300 
                        transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/50
                        ${isCollapsed ? 'lg:px-3 lg:py-3 lg:justify-center' : 'px-4 py-3 space-x-3'}
                        ${isActive 
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-[1.02]' 
                          : `${theme === 'light' 
                              ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/70' 
                              : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                            } hover:shadow-md`
                        }
                      `}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="relative">
                        <Icon className={`
                          w-5 h-5 transition-all duration-300
                          ${isActive ? 'text-white' : (theme === 'light' ? 'text-gray-400 group-hover:text-gray-600' : 'text-gray-500 group-hover:text-gray-300')}
                          ${isActive ? 'drop-shadow-sm' : ''}
                        `} />
                        
                        {/* Active indicator dot */}
                        {isActive && (
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse" />
                        )}
                      </div>
                      
                      <span className={`
                        font-medium transition-all duration-300 overflow-hidden whitespace-nowrap
                        ${isCollapsed ? 'lg:w-0 lg:opacity-0' : 'w-auto opacity-100'}
                      `}>
                        {item.label}
                      </span>

                      {/* Active state indicator */}
                      {isActive && !isCollapsed && (
                        <div className="ml-auto flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                          <div className="w-1 h-1 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                        </div>
                      )}
                    </button>

                    {/* Tooltip for collapsed state */}
                    <div className={`
                      absolute left-full ml-3 px-3 py-2 rounded-lg shadow-xl border text-sm font-medium
                      opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none
                      transform translate-x-2 group-hover:translate-x-0 z-50 whitespace-nowrap
                      ${isCollapsed ? 'lg:block' : 'lg:hidden'}
                      ${theme === 'light' 
                        ? 'bg-white/95 border-gray-200 text-gray-900 shadow-gray-200/50 backdrop-blur-sm' 
                        : 'bg-gray-800/95 border-gray-600 text-white shadow-black/50 backdrop-blur-sm'
                      }
                    `}>
                      {item.label}
                      {/* Tooltip Arrow */}
                      <div className={`
                        absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1
                        w-2 h-2 rotate-45 border-l border-b
                        ${theme === 'light' 
                          ? 'bg-white/95 border-gray-200' 
                          : 'bg-gray-800/95 border-gray-600'
                        }
                      `} />
                    </div>

                    {/* Active state glow */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-sm -z-10 animate-pulse" />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Collapsed State Visual Indicator */}
            <div className={`
              absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-300
              ${isCollapsed ? 'lg:opacity-100' : 'lg:opacity-0'}
            `}>
              <div className={`
                w-8 h-0.5 rounded-full transition-all duration-300
                ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'}
              `} />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500/20 rounded-full animate-pulse" />
            <div className="absolute bottom-8 left-4 w-1 h-1 bg-indigo-500/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Professional Collapse Toggle - Positioned Outside Container */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`
              hidden lg:flex absolute top-8 z-30 w-7 h-7 rounded-full border-2 
              transition-all duration-300 items-center justify-center shadow-lg hover:shadow-xl
              group hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/50
              ${isCollapsed ? '-right-3' : '-right-3.5'}
              ${theme === 'light' 
                ? 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-600 hover:text-blue-600' 
                : 'bg-gray-800 border-gray-600 hover:border-blue-500 hover:bg-gray-700 text-gray-300 hover:text-blue-400'
              }
            `}
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <ChevronLeft 
              className={`
                w-3.5 h-3.5 transition-all duration-300 transform
                ${isCollapsed ? 'rotate-180' : 'rotate-0'}
                group-hover:scale-110
              `} 
            />
            
            {/* Hover ring effect */}
            <div className={`
              absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100
              ${theme === 'light' 
                ? 'bg-blue-500/10 ring-2 ring-blue-500/20' 
                : 'bg-blue-400/10 ring-2 ring-blue-400/20'
              }
            `} />

            {/* Active state pulse */}
            <div className={`
              absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-active:opacity-100
              ${theme === 'light' 
                ? 'bg-blue-500/20 ring-1 ring-blue-500/30' 
                : 'bg-blue-400/20 ring-1 ring-blue-400/30'
              }
            `} />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;