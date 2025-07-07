// import React from 'react';
// import { useTheme } from '../../contexts/ThemeContext';
// import { TrendingUp, TrendingDown, DollarSign, Users, GraduationCap, Building, Eye, MousePointer, MoreHorizontal, Download, Filter, Share } from 'lucide-react';
// import AreaChart from '../charts/AreaChart';
// import BarChart from '../charts/BarChart';
// import PieChart from '../charts/PieChart';
// import LineChart from '../charts/LineChart';
// import RadialChart from '../charts/RadialChart';
// import Button from '../ui/Button';

// const OverviewDashboard: React.FC = () => {
//   const { theme } = useTheme();

//   // Mock data for charts
//   const revenueOverTime = [
//     { name: 'Jan 2024', value: 28500000 },
//     { name: 'Feb 2024', value: 31200000 },
//     { name: 'Mar 2024', value: 29800000 },
//     { name: 'Apr 2024', value: 33100000 },
//     { name: 'May 2024', value: 35600000 },
//     { name: 'Jun 2024', value: 32400000 },
//     { name: 'Jul 2024', value: 36800000 },
//     { name: 'Aug 2024', value: 38200000 },
//     { name: 'Sep 2024', value: 34900000 },
//     { name: 'Oct 2024', value: 37500000 },
//     { name: 'Nov 2024', value: 39100000 },
//     { name: 'Dec 2024', value: 41300000 }
//   ];

//   const departmentRevenue = [
//     { name: 'Engineering', value: 12500000 },
//     { name: 'Medicine', value: 9800000 },
//     { name: 'Business', value: 8200000 },
//     { name: 'Arts & Sciences', value: 6900000 },
//     { name: 'Law', value: 4100000 }
//   ];

//   const enrollmentByProgram = [
//     { name: 'Undergraduate', value: 13560, color: '#3B82F6' },
//     { name: 'Graduate', value: 3890, color: '#10B981' },
//     { name: 'Doctoral', value: 780, color: '#F59E0B' },
//     { name: 'Certificate', value: 220, color: '#8B5CF6' }
//   ];

//   const sessionsByCountry = [
//     { country: 'United States', sessions: 2847, percentage: 45.2 },
//     { country: 'Canada', sessions: 1923, percentage: 30.5 },
//     { country: 'United Kingdom', sessions: 856, percentage: 13.6 },
//     { country: 'Australia', sessions: 674, percentage: 10.7 }
//   ];

//   const registeredUsers = {
//     total: 18450,
//     premium: 12340,
//     basic: 6110
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header with Actions */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//             Overview
//           </h1>
//           <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
//             Financial performance dashboard
//           </p>
//         </div>
//         <div className="flex items-center space-x-3">
//           <Button variant="ghost" size="sm">
//             <Filter className="w-4 h-4 mr-2" />
//             Filter
//           </Button>
//           <Button variant="ghost" size="sm">
//             <Download className="w-4 h-4 mr-2" />
//             Export
//           </Button>
//           <Button variant="primary" size="sm">
//             <Share className="w-4 h-4 mr-2" />
//             Share
//           </Button>
//         </div>
//       </div>

//       {/* Top Metrics Row */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {/* Total Revenue */}
//         <div className={`
//           p-6 rounded-xl border transition-all duration-300 hover:scale-105
//           ${theme === 'light' 
//             ? 'bg-white/80 border-gray-200/50 shadow-lg' 
//             : 'bg-gray-800/80 border-gray-700/50 shadow-xl'
//           }
//         `}>
//           <div className="flex items-center justify-between mb-4">
//             <h3 className={`text-sm font-medium ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
//               Total Revenue
//             </h3>
//             <div className="flex items-center space-x-1 text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
//               <TrendingUp className="w-3 h-3" />
//               <span>12.95%</span>
//             </div>
//           </div>
//           <div className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//             $41,299.93
//           </div>
//           <p className={`text-xs mt-1 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
//             Compared to last month
//           </p>
//         </div>

//         {/* Net Profit */}
//         <div className={`
//           p-6 rounded-xl border transition-all duration-300 hover:scale-105
//           ${theme === 'light' 
//             ? 'bg-white/80 border-gray-200/50 shadow-lg' 
//             : 'bg-gray-800/80 border-gray-700/50 shadow-xl'
//           }
//         `}>
//           <div className="flex items-center justify-between mb-4">
//             <h3 className={`text-sm font-medium ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
//               Net Profit
//             </h3>
//             <div className="flex items-center space-x-1 text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded-full">
//               <TrendingDown className="w-3 h-3" />
//               <span>0.33%</span>
//             </div>
//           </div>
//           <div className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//             $8,499.93
//           </div>
//           <p className={`text-xs mt-1 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
//             Compared to last month
//           </p>
//         </div>

//         {/* Total Students */}
//         <div className={`
//           p-6 rounded-xl border transition-all duration-300 hover:scale-105
//           ${theme === 'light' 
//             ? 'bg-white/80 border-gray-200/50 shadow-lg' 
//             : 'bg-gray-800/80 border-gray-700/50 shadow-xl'
//           }
//         `}>
//           <div className="flex items-center justify-between mb-4">
//             <h3 className={`text-sm font-medium ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
//               Total Students
//             </h3>
//             <div className="flex items-center space-x-1 text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
//               <TrendingUp className="w-3 h-3" />
//               <span>8.32%</span>
//             </div>
//           </div>
//           <div className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//             18,450
//           </div>
//           <p className={`text-xs mt-1 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
//             Compared to last month
//           </p>
//         </div>

//         {/* Retention Rate */}
//         <div className={`
//           p-6 rounded-xl border transition-all duration-300 hover:scale-105
//           ${theme === 'light' 
//             ? 'bg-white/80 border-gray-200/50 shadow-lg' 
//             : 'bg-gray-800/80 border-gray-700/50 shadow-xl'
//           }
//         `}>
//           <div className="flex items-center justify-between mb-4">
//             <h3 className={`text-sm font-medium ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
//               Retention Rate
//             </h3>
//             <div className="flex items-center space-x-1 text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
//               <TrendingUp className="w-3 h-3" />
//               <span>2.05%</span>
//             </div>
//           </div>
//           <div className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//             94.83%
//           </div>
//           <p className={`text-xs mt-1 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
//             Compared to last month
//           </p>
//         </div>
//       </div>

//       {/* Main Charts Row */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Revenue Over Time - Large Chart */}
//         <div className={`
//           lg:col-span-2 p-6 rounded-xl border
//           ${theme === 'light' 
//             ? 'bg-white/80 border-gray-200/50 shadow-lg' 
//             : 'bg-gray-800/80 border-gray-700/50 shadow-xl'
//           }
//         `}>
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className={`text-lg font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//                 Revenue Over Time
//               </h3>
//               <div className="flex items-center space-x-6 mt-2">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                   <span className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
//                     Total Revenue
//                   </span>
//                   <span className={`text-sm font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//                     $41,839.99 • 55%
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
//                   <span className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
//                     Total Target
//                   </span>
//                   <span className={`text-sm font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//                     $50,932.12 • 45%
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Button variant="ghost" size="sm">
//                 <Download className="w-4 h-4" />
//               </Button>
//               <Button variant="ghost" size="sm">
//                 <MoreHorizontal className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>
          
//           {/* Revenue Chart with Tooltip */}
//           <div className="relative">
//             <AreaChart data={revenueOverTime} height={300} color="#10B981" />
            
//             {/* Tooltip Overlay */}
//             <div className={`
//               absolute top-4 right-4 p-3 rounded-lg border shadow-lg
//               ${theme === 'light' 
//                 ? 'bg-gray-900 border-gray-700 text-white' 
//                 : 'bg-white border-gray-200 text-gray-900'
//               }
//             `}>
//               <p className="text-sm font-medium">Dec 2024</p>
//               <p className="text-xs">Revenue: $41,823.98</p>
//               <p className="text-xs">Target: $50,100.00</p>
//             </div>
//           </div>
//         </div>

//         {/* Session by Country */}
//         <div className={`
//           p-6 rounded-xl border
//           ${theme === 'light' 
//             ? 'bg-white/80 border-gray-200/50 shadow-lg' 
//             : 'bg-gray-800/80 border-gray-700/50 shadow-xl'
//           }
//         `}>
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className={`text-lg font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//                 Session by Country
//               </h3>
//               <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
//                 Showing Data for Top Session
//               </p>
//             </div>
//             <Button variant="ghost" size="sm">
//               <MoreHorizontal className="w-4 h-4" />
//             </Button>
//           </div>

//           <div className="space-y-4">
//             {sessionsByCountry.map((country, index) => (
//               <div key={country.country} className="flex items-center justify-between">
//                 <div className="flex items-center space-x-3">
//                   <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
//                     index === 0 ? 'bg-blue-500' :
//                     index === 1 ? 'bg-red-500' :
//                     index === 2 ? 'bg-gray-500' : 'bg-yellow-500'
//                   }`}>
//                     {country.country.slice(0, 2).toUpperCase()}
//                   </div>
//                   <span className={`text-sm ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//                     {country.country}
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <span className={`text-sm font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//                     {country.sessions}
//                   </span>
//                   <span className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
//                     {country.percentage}%
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Charts Row */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Department Revenue */}
//         <div className={`
//           p-6 rounded-xl border
//           ${theme === 'light' 
//             ? 'bg-white/80 border-gray-200/50 shadow-lg' 
//             : 'bg-gray-800/80 border-gray-700/50 shadow-xl'
//           }
//         `}>
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className={`text-lg font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//                 Revenue by Department
//               </h3>
//             </div>
//             <Button variant="ghost" size="sm">
//               <MoreHorizontal className="w-4 h-4" />
//             </Button>
//           </div>
//           <BarChart data={departmentRevenue} height={250} color="#3B82F6" />
//         </div>

//         {/* Enrollment Distribution */}
//         <div className={`
//           p-6 rounded-xl border
//           ${theme === 'light' 
//             ? 'bg-white/80 border-gray-200/50 shadow-lg' 
//             : 'bg-gray-800/80 border-gray-700/50 shadow-xl'
//           }
//         `}>
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className={`text-lg font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//                 Student Enrollment
//               </h3>
//             </div>
//             <Button variant="ghost" size="sm">
//               <MoreHorizontal className="w-4 h-4" />
//             </Button>
//           </div>
          
//           <div className="flex items-center justify-center mb-4">
//             <PieChart data={enrollmentByProgram} height={200} innerRadius={40} outerRadius={80} />
//           </div>
          
//           <div className="space-y-2">
//             {enrollmentByProgram.map((program, index) => (
//               <div key={program.name} className="flex items-center justify-between text-sm">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-3 h-3 rounded-full" style={{ backgroundColor: program.color }}></div>
//                   <span className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>
//                     {program.name}
//                   </span>
//                 </div>
//                 <span className={`font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//                   {program.value.toLocaleString()}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Registered Users */}
//         <div className={`
//           p-6 rounded-xl border
//           ${theme === 'light' 
//             ? 'bg-white/80 border-gray-200/50 shadow-lg' 
//             : 'bg-gray-800/80 border-gray-700/50 shadow-xl'
//           }
//         `}>
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className={`text-lg font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//                 Registered Users
//               </h3>
//               <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
//                 An overview of your users
//               </p>
//             </div>
//             <Button variant="ghost" size="sm">
//               <MoreHorizontal className="w-4 h-4" />
//             </Button>
//           </div>

//           <div className="flex items-center justify-center mb-6">
//             <div className="relative">
//               <RadialChart
//                 value={registeredUsers.total}
//                 maxValue={25000}
//                 size={120}
//                 strokeWidth={8}
//                 color="#10B981"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center">
//                 <span className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//                   {registeredUsers.total.toLocaleString()}
//                 </span>
//                 <span className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
//                   Total Users
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className={`
//               p-4 rounded-lg border text-center
//               ${theme === 'light' 
//                 ? 'bg-gray-50/70 border-gray-200/50' 
//                 : 'bg-gray-700/50 border-gray-600/50'
//               }
//             `}>
//               <div className={`text-lg font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//                 {registeredUsers.premium.toLocaleString()}
//               </div>
//               <div className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
//                 Premium Plan
//               </div>
//             </div>
//             <div className={`
//               p-4 rounded-lg border text-center
//               ${theme === 'light' 
//                 ? 'bg-gray-50/70 border-gray-200/50' 
//                 : 'bg-gray-700/50 border-gray-600/50'
//               }
//             `}>
//               <div className={`text-lg font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
//                 {registeredUsers.basic.toLocaleString()}
//               </div>
//               <div className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
//                 Basic Plan
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OverviewDashboard;