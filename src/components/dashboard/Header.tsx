import React, { useState, useRef } from 'react';
import { Bell, Settings, User, MessageCircle, LogOut, Menu } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useSettings } from '../../contexts/SettingsContext';
import Button from '../ui/Button';

interface HeaderProps {
  user: any;
  onLogout: () => void;
  onToggleChat: () => void;
  isChatOpen: boolean;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout, onToggleChat, isChatOpen, onNavigate }) => {
  const { theme } = useTheme();
  const { profile, formatDateTime } = useSettings();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAllNotifications, setShowAllNotifications] = useState(false);
  const notificationButtonRef = useRef<HTMLButtonElement>(null);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    setShowAllNotifications(false);
  };

  const handleSettingsClick = () => {
    onNavigate('settings');
  };

  const handleViewAllNotifications = () => {
    setShowAllNotifications(true);
  };

  const notifications = [
    { id: 1, title: 'Budget Alert', message: 'Engineering department is 5% over budget', time: new Date(Date.now() - 2 * 60 * 1000), type: 'warning', read: false },
    { id: 2, title: 'Payment Received', message: 'Student payment of $12,500 processed', time: new Date(Date.now() - 60 * 60 * 1000), type: 'success', read: false },
    { id: 3, title: 'Report Ready', message: 'Monthly financial report is ready for download', time: new Date(Date.now() - 3 * 60 * 60 * 1000), type: 'info', read: true }
  ];

  const allNotifications = [
    ...notifications,
    { id: 4, title: 'System Update', message: 'Dashboard updated to version 2.1.0', time: new Date(Date.now() - 24 * 60 * 60 * 1000), type: 'info', read: true },
    { id: 5, title: 'Backup Complete', message: 'Daily backup completed successfully', time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), type: 'success', read: true },
    { id: 6, title: 'Maintenance Notice', message: 'Scheduled maintenance on Sunday 2 AM', time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), type: 'warning', read: true },
    { id: 7, title: 'New Feature', message: 'AI Analytics now available in beta', time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), type: 'info', read: true },
    { id: 8, title: 'Security Alert', message: 'New login from unknown device', time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), type: 'warning', read: true }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  // Get notification button position for genie effect
  const getNotificationButtonPosition = () => {
    if (notificationButtonRef.current) {
      const rect = notificationButtonRef.current.getBoundingClientRect();
      return {
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right
      };
    }
    return { top: 80, right: 20 };
  };

  const buttonPosition = getNotificationButtonPosition();

  return (
    <header className="sticky top-0 z-30">
      {/* Floating Glass Header */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className={`
          backdrop-blur-xl rounded-2xl shadow-2xl border transition-all duration-300
          ${theme === 'light' 
            ? 'bg-white/70 border-white/30 shadow-black/5' 
            : 'bg-gray-900/70 border-gray-700/30 shadow-black/20'
          }
        `}>
          <div className="px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <h1 className={`text-xl sm:text-2xl font-bold mb-1 truncate ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  Financial Dashboard
                </h1>
                <p className={`text-sm hidden sm:block ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  University Financial Management System
                </p>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-4">
                {/* Action Buttons */}
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Button 
                    variant="glass" 
                    size="sm"
                    onClick={onToggleChat}
                    className={`${isChatOpen ? 'bg-blue-600 border-blue-500 text-white' : ''} backdrop-blur-md transition-all duration-300 hover:scale-105`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline ml-2">AI Assistant</span>
                  </Button>

                  {/* Notifications with Genie Effect */}
                  <div className="relative">
                    <Button 
                      ref={notificationButtonRef}
                      variant="glass" 
                      size="sm" 
                      onClick={handleNotificationClick}
                      className="backdrop-blur-md transition-all duration-300 hover:scale-105"
                    >
                      <Bell className="w-4 h-4" />
                      {unreadCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold animate-pulse">
                          {unreadCount}
                        </span>
                      )}
                    </Button>

                    {showNotifications && (
                      <div 
                        className={`
                          absolute z-50 w-80 sm:w-96 rounded-2xl shadow-2xl border
                          ${theme === 'light' 
                            ? 'bg-white/95 border-gray-200/50 backdrop-blur-xl' 
                            : 'bg-gray-900/95 border-gray-700/50 backdrop-blur-xl'
                          }
                        `}
                        style={{
                          top: buttonPosition.top,
                          right: buttonPosition.right,
                          transformOrigin: 'top right',
                          animation: 'genieIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
                        }}
                      >
                        <div className={`p-4 border-b ${
                          theme === 'light' ? 'border-gray-200/50' : 'border-gray-700/50'
                        }`}>
                          <h3 className={`font-semibold ${
                            theme === 'light' ? 'text-gray-900' : 'text-white'
                          }`}>
                            Notifications
                          </h3>
                        </div>
                        
                        <div className="max-h-80 overflow-y-auto">
                          {(showAllNotifications ? allNotifications : notifications).map((notification, index) => (
                            <div 
                              key={notification.id} 
                              className={`
                                p-4 border-b transition-all duration-300 cursor-pointer hover:scale-[1.01]
                                ${theme === 'light' 
                                  ? 'border-gray-200/30 hover:bg-gray-50/50' 
                                  : 'border-gray-700/30 hover:bg-gray-800/50'
                                }
                                ${!notification.read ? 'bg-blue-50/30 dark:bg-blue-900/20' : ''}
                              `}
                              style={{ 
                                animation: `slideInRight 0.4s ease-out forwards`,
                                animationDelay: `${index * 100}ms`,
                                opacity: 0
                              }}
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`w-2 h-2 rounded-full mt-2 ${
                                  notification.type === 'warning' ? 'bg-orange-500' :
                                  notification.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                                }`} />
                                <div className="flex-1 min-w-0">
                                  <h4 className={`font-medium text-sm truncate ${
                                    theme === 'light' ? 'text-gray-900' : 'text-white'
                                  }`}>
                                    {notification.title}
                                  </h4>
                                  <p className={`text-xs mt-1 line-clamp-2 ${
                                    theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                                  }`}>
                                    {notification.message}
                                  </p>
                                  <p className={`text-xs mt-1 ${
                                    theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                                  }`}>
                                    {formatDateTime(notification.time)}
                                  </p>
                                </div>
                                {!notification.read && (
                                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="p-3 text-center">
                          {!showAllNotifications ? (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={handleViewAllNotifications}
                              className="w-full transition-all duration-300 hover:scale-105"
                            >
                              View All Notifications
                            </Button>
                          ) : (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => setShowAllNotifications(false)}
                              className="w-full transition-all duration-300 hover:scale-105"
                            >
                              Show Recent Only
                            </Button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <Button 
                    variant="glass" 
                    size="sm" 
                    onClick={handleSettingsClick}
                    className="backdrop-blur-md transition-all duration-300 hover:scale-105"
                  >
                    <Settings className="w-4 h-4" />
                  </Button>

                  {/* User Profile */}
                  <div className={`
                    flex items-center space-x-2 sm:space-x-3 p-2 rounded-xl shadow-lg border transition-all duration-300 hover:scale-105
                    ${theme === 'light' 
                      ? 'bg-white/70 border-white/30 backdrop-blur-md' 
                      : 'bg-gray-800/70 border-gray-700/30 backdrop-blur-md'
                    }
                  `}>
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div className="hidden md:block min-w-0">
                      <p className={`text-sm font-medium truncate ${
                        theme === 'light' ? 'text-gray-900' : 'text-white'
                      }`}>
                        {profile.firstName} {profile.lastName}
                      </p>
                      <p className={`text-xs truncate ${
                        theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                      }`}>
                        {profile.jobTitle || 'Financial Officer'}
                      </p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={onLogout} 
                      title="Logout"
                      className="transition-all duration-300 hover:scale-110"
                    >
                      <LogOut className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;