import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { BarChart3, Heart, Shield, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`
      mt-16 border-t transition-all duration-300
      ${theme === 'light' 
        ? 'bg-white/50 border-gray-200/50 backdrop-blur-xl' 
        : 'bg-gray-900/50 border-gray-700/50 backdrop-blur-xl'
      }
    `}>
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`text-lg font-bold ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  FinanceAI
                </h3>
                <p className={`text-sm ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  University Financial Management
                </p>
              </div>
            </div>
            <p className={`text-sm leading-relaxed ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              Empowering educational institutions with intelligent financial analytics, 
              real-time insights, and comprehensive reporting solutions for better 
              decision-making and operational excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Dashboard', 'Reports', 'Analytics', 'Settings', 'Support'].map((link) => (
                <li key={link}>
                  <button className={`
                    text-sm transition-colors hover:underline
                    ${theme === 'light' 
                      ? 'text-gray-600 hover:text-blue-600' 
                      : 'text-gray-300 hover:text-blue-400'
                    }
                  `}>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              Support
            </h4>
            <ul className="space-y-2">
              {['Help Center', 'Documentation', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((link) => (
                <li key={link}>
                  <button className={`
                    text-sm transition-colors hover:underline
                    ${theme === 'light' 
                      ? 'text-gray-600 hover:text-blue-600' 
                      : 'text-gray-300 hover:text-blue-400'
                    }
                  `}>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`
          mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0
          ${theme === 'light' ? 'border-gray-200/50' : 'border-gray-700/50'}
        `}>
          <div className="flex items-center space-x-6">
            <p className={`text-sm ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              © {currentYear} FinanceAI™. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Shield className={`w-4 h-4 ${
                  theme === 'light' ? 'text-green-600' : 'text-green-400'
                }`} />
                <span className={`text-xs ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  Secure
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe className={`w-4 h-4 ${
                  theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                }`} />
                <span className={`text-xs ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  Global
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className={`text-sm ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              Made with
            </span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className={`text-sm ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              for Education
            </span>
          </div>
        </div>

        {/* Version & Build Info */}
        <div className={`
          mt-4 pt-4 border-t text-center
          ${theme === 'light' ? 'border-gray-200/30' : 'border-gray-700/30'}
        `}>
          <p className={`text-xs ${
            theme === 'light' ? 'text-gray-500' : 'text-gray-400'
          }`}>
            Version 2.1.0 • Build 2024.12.20 • Powered by Advanced Analytics Engine
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;