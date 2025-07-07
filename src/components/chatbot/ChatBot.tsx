import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Minimize2, Bot, User, BarChart3, TrendingUp, AlertTriangle, Lightbulb, FileText, Calculator, PieChart, DollarSign, RotateCcw } from 'lucide-react';
import { ChatMessage } from '../../types/chat';
import { useTheme } from '../../contexts/ThemeContext';
import GlassContainer from '../ui/GlassContainer';
import Button from '../ui/Button';
import AreaChart from '../charts/AreaChart';
import BarChart from '../charts/BarChart';
//import PieChart from '../charts/PieChart';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  
  // Load chat history from localStorage
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const savedMessages = localStorage.getItem('chatHistory');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        return parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
      } catch (error) {
        console.error('Error loading chat history:', error);
      }
    }
    
    // Default welcome message
    return [
      {
        id: '1',
        content: 'Hello! I\'m your AI Financial Assistant. I can help you with:\n\n• Financial analysis and insights\n• Budget forecasting and planning\n• Risk assessment and recommendations\n• Data visualization and reporting\n• Trend analysis and predictions\n\nWhat would you like to explore today?',
        sender: 'ai',
        timestamp: new Date(),
        type: 'text'
      }
    ];
  });

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions] = useState([
    'Show revenue trends',
    'Analyze cash flow',
    'Budget variance report',
    'Student enrollment impact'
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Save chat history to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message?: string) => {
    const messageToSend = message || inputMessage;
    if (!messageToSend.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: messageToSend,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response with charts
    setTimeout(() => {
      const aiResponse = generateAIResponseWithChart(messageToSend);
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleResetChat = () => {
    if (confirm('Are you sure you want to clear all chat history? This action cannot be undone.')) {
      const welcomeMessage: ChatMessage = {
        id: '1',
        content: 'Hello! I\'m your AI Financial Assistant. I can help you with:\n\n• Financial analysis and insights\n• Budget forecasting and planning\n• Risk assessment and recommendations\n• Data visualization and reporting\n• Trend analysis and predictions\n\nWhat would you like to explore today?',
        sender: 'ai',
        timestamp: new Date(),
        type: 'text'
      };
      setMessages([welcomeMessage]);
      localStorage.removeItem('chatHistory');
    }
  };

  const generateAIResponseWithChart = (message: string): ChatMessage => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('revenue') || lowerMessage.includes('income')) {
      return {
        id: (Date.now() + 1).toString(),
        content: 'Here\'s your revenue analysis with trend visualization:',
        sender: 'ai',
        timestamp: new Date(),
        type: 'chart',
        chartData: {
          type: 'area',
          data: [
            { name: 'Jan', value: 4350000 },
            { name: 'Feb', value: 4450000 },
            { name: 'Mar', value: 4950000 },
            { name: 'Apr', value: 5050000 },
            { name: 'May', value: 5370000 },
            { name: 'Jun', value: 5470000 }
          ],
          title: 'Revenue Trend (Last 6 Months)',
          color: '#10B981'
        }
      };
    }
    
    if (lowerMessage.includes('expense') || lowerMessage.includes('cost')) {
      return {
        id: (Date.now() + 1).toString(),
        content: 'Here\'s your expense breakdown analysis:',
        sender: 'ai',
        timestamp: new Date(),
        type: 'chart',
        chartData: {
          type: 'pie',
          data: [
            { name: 'Faculty Salaries', value: 15600000, color: '#3B82F6' },
            { name: 'Infrastructure', value: 7800000, color: '#10B981' },
            { name: 'Utilities', value: 4200000, color: '#F59E0B' },
            { name: 'Research', value: 3900000, color: '#EF4444' }
          ],
          title: 'Expense Distribution'
        }
      };
    }
    
    if (lowerMessage.includes('cash flow') || lowerMessage.includes('cashflow')) {
      return {
        id: (Date.now() + 1).toString(),
        content: 'Here\'s your cash flow analysis:',
        sender: 'ai',
        timestamp: new Date(),
        type: 'chart',
        chartData: {
          type: 'bar',
          data: [
            { name: 'Q1', value: 4000000 },
            { name: 'Q2', value: 5660000 },
            { name: 'Q3', value: 7780000 },
            { name: 'Q4', value: 8650000 }
          ],
          title: 'Quarterly Cash Flow',
          color: '#8B5CF6'
        }
      };
    }
    
    if (lowerMessage.includes('budget') || lowerMessage.includes('variance')) {
      return {
        id: (Date.now() + 1).toString(),
        content: 'Here\'s your budget variance analysis:',
        sender: 'ai',
        timestamp: new Date(),
        type: 'chart',
        chartData: {
          type: 'bar',
          data: [
            { name: 'Engineering', value: 8200000 },
            { name: 'Medicine', value: 7800000 },
            { name: 'Business', value: 5400000 },
            { name: 'Arts & Sciences', value: 6200000 }
          ],
          title: 'Department Budget Utilization',
          color: '#F59E0B'
        }
      };
    }

    // Default text response
    return {
      id: (Date.now() + 1).toString(),
      content: generateAdvancedAIResponse(message),
      sender: 'ai',
      timestamp: new Date(),
      type: 'text'
    };
  };

  const generateAdvancedAIResponse = (message: string): string => {
    return `I understand you're asking about "${message}". Let me provide some relevant insights:

📊 **Quick Analysis:**
• Current financial performance is strong
• Revenue growth trending upward at +12.5%
• Operating efficiency at 94.2%
• Cash reserves healthy at $12.3M

💡 **Recommendations:**
• Continue monitoring key metrics
• Focus on cost optimization opportunities
• Maintain current growth trajectory

Would you like me to show you specific charts or dive deeper into any particular area?`;
  };

  const renderChart = (chartData: any) => {
    const { type, data, title, color } = chartData;
    
    return (
      <div className={`mt-3 p-4 rounded-xl border ${
        theme === 'light' 
          ? 'bg-white/80 border-gray-200/50' 
          : 'bg-gray-800/50 border-gray-700/50'
      }`}>
        <h4 className={`font-medium mb-3 ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          {title}
        </h4>
        <div style={{ height: '200px' }}>
          {type === 'area' && <AreaChart data={data} height={200} color={color} />}
          {type === 'bar' && <BarChart data={data} height={200} color={color} />}
          {type === 'pie' && <PieChart data={data} height={200} />}
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
      <div className={`
        w-[480px] h-[700px] flex flex-col rounded-2xl shadow-2xl border transition-all duration-300
        ${theme === 'light' 
          ? 'bg-white/95 border-gray-200/50 backdrop-blur-xl' 
          : 'bg-gray-900/95 border-gray-700/50 backdrop-blur-xl'
        }
      `}>
        {/* Header */}
        <div className={`flex items-center justify-between p-4 border-b ${
          theme === 'light' ? 'border-gray-200/50' : 'border-gray-700/50'
        }`}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className={`font-semibold ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                AI Financial Assistant
              </h3>
              <p className={`text-xs ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                Advanced Analytics & Insights
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={handleResetChat} title="Reset Chat History">
              <RotateCcw className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <Minimize2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={`p-4 border-b ${
          theme === 'light' ? 'border-gray-200/50' : 'border-gray-700/50'
        }`}>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => handleSendMessage('Show revenue trends')}
              className={`
                flex items-center space-x-2 p-2 rounded-lg text-xs transition-colors
                ${theme === 'light' 
                  ? 'bg-gray-100/70 hover:bg-gray-200/70 text-gray-600' 
                  : 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-300'
                }
              `}
            >
              <TrendingUp className="w-3 h-3" />
              <span>Revenue</span>
            </button>
            <button 
              onClick={() => handleSendMessage('Analyze expenses')}
              className={`
                flex items-center space-x-2 p-2 rounded-lg text-xs transition-colors
                ${theme === 'light' 
                  ? 'bg-gray-100/70 hover:bg-gray-200/70 text-gray-600' 
                  : 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-300'
                }
              `}
            >
              <PieChart className="w-3 h-3" />
              <span>Expenses</span>
            </button>
            <button 
              onClick={() => handleSendMessage('Show cash flow')}
              className={`
                flex items-center space-x-2 p-2 rounded-lg text-xs transition-colors
                ${theme === 'light' 
                  ? 'bg-gray-100/70 hover:bg-gray-200/70 text-gray-600' 
                  : 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-300'
                }
              `}
            >
              <BarChart3 className="w-3 h-3" />
              <span>Cash Flow</span>
            </button>
            <button 
              onClick={() => handleSendMessage('Budget variance')}
              className={`
                flex items-center space-x-2 p-2 rounded-lg text-xs transition-colors
                ${theme === 'light' 
                  ? 'bg-gray-100/70 hover:bg-gray-200/70 text-gray-600' 
                  : 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-300'
                }
              `}
            >
              <DollarSign className="w-3 h-3" />
              <span>Budget</span>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 ${
                message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.sender === 'user' 
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                  : 'bg-gradient-to-br from-gray-500 to-gray-600'
              }`}>
                {message.sender === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              
              <div className={`max-w-[80%] p-3 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : theme === 'light'
                    ? 'bg-gray-100/70 border border-gray-200 text-gray-800'
                    : 'bg-gray-700/70 border border-gray-600 text-gray-200'
              }`}>
                <div className="text-sm leading-relaxed whitespace-pre-line">
                  {message.content}
                </div>
                
                {message.type === 'chart' && message.chartData && renderChart(message.chartData)}
                
                <p className="text-xs opacity-70 mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className={`p-3 rounded-2xl ${
                theme === 'light'
                  ? 'bg-gray-100/70 border border-gray-200'
                  : 'bg-gray-700/70 border border-gray-600'
              }`}>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length === 1 && (
          <div className={`p-4 border-t ${
            theme === 'light' ? 'border-gray-200/50' : 'border-gray-700/50'
          }`}>
            <p className={`text-xs mb-2 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Try asking:
            </p>
            <div className="space-y-1">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(suggestion)}
                  className={`
                    w-full text-left p-2 text-xs rounded transition-colors
                    ${theme === 'light' 
                      ? 'text-gray-600 hover:text-gray-800 hover:bg-gray-100/70' 
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'
                    }
                  `}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className={`p-4 border-t ${
          theme === 'light' ? 'border-gray-200/50' : 'border-gray-700/50'
        }`}>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about financial insights..."
              className={`
                flex-1 border rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500
                ${theme === 'light' 
                  ? 'bg-gray-100/70 border-gray-200 text-gray-800 placeholder-gray-500' 
                  : 'bg-gray-700/70 border-gray-600 text-gray-200 placeholder-gray-400'
                }
              `}
            />
            <Button 
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isTyping}
              variant="primary"
              size="sm"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;