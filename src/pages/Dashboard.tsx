import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/auth/AuthProvider';
import { 
  BarChart3, 
  Zap, 
  Database, 
  TrendingUp, 
  Settings, 
  LogOut,
  Bell,
  Activity,
  DollarSign,
  Server
} from 'lucide-react';
import zonLogo from '../assets/zon-logo.png';

export const Dashboard: React.FC = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const metrics = [
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: "Energy Savings",
      value: "35.2%",
      change: "+2.1%",
      color: "text-green-400"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-400" />,
      title: "Cost Reduction",
      value: "$127K",
      change: "+$15K",
      color: "text-blue-400"
    },
    {
      icon: <Server className="w-8 h-8 text-purple-400" />,
      title: "Capacity Increase",
      value: "42%",
      change: "+5%",
      color: "text-purple-400"
    },
    {
      icon: <Activity className="w-8 h-8 text-orange-400" />,
      title: "Efficiency Score",
      value: "94.7%",
      change: "+1.2%",
      color: "text-orange-400"
    }
  ];

  const recentActivities = [
    { id: 1, action: "Energy optimization completed", time: "2 hours ago", status: "success" },
    { id: 2, action: "Data compression task finished", time: "4 hours ago", status: "success" },
    { id: 3, action: "System maintenance scheduled", time: "6 hours ago", status: "info" },
    { id: 4, action: "Performance alert resolved", time: "8 hours ago", status: "warning" }
  ];

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src={zonLogo} alt="ZON" className="h-8 w-auto" />
              <span className="text-xl font-bold text-white">Dashboard</span>
            </Link>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-white">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.role}</p>
                </div>
                
                <div className="flex space-x-2">
                  {isAdmin && (
                    <Link
                      to="/admin"
                      className="p-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-colors"
                    >
                      <Settings className="w-5 h-5" />
                    </Link>
                  )}
                  
                  <button
                    onClick={handleLogout}
                    className="p-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {user.name}
          </h1>
          <p className="text-gray-400">
            Here's your data center performance overview
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  {metric.icon}
                </div>
                <span className={`text-sm font-medium ${metric.color}`}>
                  {metric.change}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-1">
                {metric.value}
              </h3>
              <p className="text-gray-400 text-sm">
                {metric.title}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Chart Placeholder */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Performance Trends</h2>
              <BarChart3 className="w-6 h-6 text-blue-400" />
            </div>
            
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-600 rounded-lg">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                <p className="text-gray-500">Chart visualization would appear here</p>
                <p className="text-sm text-gray-600 mt-1">Real-time performance metrics</p>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-6">Recent Activities</h2>
            
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/30 transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'success' ? 'bg-green-400' :
                    activity.status === 'warning' ? 'bg-yellow-400' :
                    'bg-blue-400'
                  }`} />
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm">{activity.action}</p>
                    <p className="text-gray-500 text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-white p-4 rounded-lg hover:from-blue-600/30 hover:to-purple-600/30 transition-all text-left">
              <Database className="w-6 h-6 text-blue-400 mb-2" />
              <h3 className="font-semibold mb-1">Run Optimization</h3>
              <p className="text-sm text-gray-400">Start AI-driven optimization process</p>
            </button>
            
            <button className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 text-white p-4 rounded-lg hover:from-green-600/30 hover:to-blue-600/30 transition-all text-left">
              <Activity className="w-6 h-6 text-green-400 mb-2" />
              <h3 className="font-semibold mb-1">View Reports</h3>
              <p className="text-sm text-gray-400">Generate performance reports</p>
            </button>
            
            <button className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-white p-4 rounded-lg hover:from-purple-600/30 hover:to-pink-600/30 transition-all text-left">
              <Settings className="w-6 h-6 text-purple-400 mb-2" />
              <h3 className="font-semibold mb-1">System Settings</h3>
              <p className="text-sm text-gray-400">Configure optimization parameters</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};