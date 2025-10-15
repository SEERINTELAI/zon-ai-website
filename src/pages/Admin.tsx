import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/auth/AuthProvider';
import { 
  Users, 
  Settings, 
  BarChart3, 
  Shield, 
  Database,
  LogOut,
  ArrowLeft,
  Edit,
  Trash2,
  Plus,
  Eye
} from 'lucide-react';
import zonLogo from '../assets/zon-logo.png';

export const Admin: React.FC = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('users');

  if (!user || !isAdmin) {
    navigate('/dashboard');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const mockUsers = [
    { id: 1, name: 'John Smith', email: 'john@company.com', role: 'User', status: 'Active', lastLogin: '2 hours ago' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@company.com', role: 'User', status: 'Active', lastLogin: '1 day ago' },
    { id: 3, name: 'Mike Wilson', email: 'mike@company.com', role: 'Admin', status: 'Active', lastLogin: '3 hours ago' },
    { id: 4, name: 'Lisa Brown', email: 'lisa@company.com', role: 'User', status: 'Inactive', lastLogin: '1 week ago' }
  ];

  const mockContent = [
    { id: 1, title: 'Homepage Hero Section', type: 'Section', lastModified: '2 days ago', status: 'Published' },
    { id: 2, title: 'Product Features', type: 'Content', lastModified: '1 week ago', status: 'Draft' },
    { id: 3, title: 'Company Blog Post', type: 'Article', lastModified: '3 days ago', status: 'Published' },
    { id: 4, title: 'FAQ Section', type: 'Section', lastModified: '5 days ago', status: 'Published' }
  ];

  const systemStats = [
    { label: 'Total Users', value: '1,247', change: '+12%', color: 'text-blue-400' },
    { label: 'Active Sessions', value: '89', change: '+5%', color: 'text-green-400' },
    { label: 'Content Items', value: '156', change: '+8%', color: 'text-purple-400' },
    { label: 'System Health', value: '98.5%', change: '+0.3%', color: 'text-orange-400' }
  ];

  const tabs = [
    { id: 'users', label: 'User Management', icon: <Users className="w-5 h-5" /> },
    { id: 'content', label: 'Content Management', icon: <Database className="w-5 h-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'settings', label: 'System Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src={zonLogo} alt="ZON" className="h-8 w-auto" />
                <span className="text-xl font-bold text-white">Admin</span>
              </Link>
              <Shield className="w-6 h-6 text-purple-400" />
            </div>

            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 px-3 py-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Dashboard</span>
              </Link>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-white">{user.name}</p>
                  <p className="text-xs text-purple-400">Administrator</p>
                </div>
                
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
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Admin Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-400">
            Manage users, content, and system settings
          </p>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">{stat.label}</span>
                <span className={`text-sm font-medium ${stat.color}`}>
                  {stat.change}
                </span>
              </div>
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-700">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-400'
                      : 'border-transparent text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700">
          {activeTab === 'users' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">User Management</h2>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Add User
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Name</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Email</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Role</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Last Login</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockUsers.map((user) => (
                      <tr key={user.id} className="border-b border-gray-800 hover:bg-gray-800/30">
                        <td className="py-3 px-4 text-white">{user.name}</td>
                        <td className="py-3 px-4 text-gray-300">{user.email}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.role === 'Admin' ? 'bg-purple-600/20 text-purple-400' : 'bg-blue-600/20 text-blue-400'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.status === 'Active' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-400 text-sm">{user.lastLogin}</td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button className="p-1 text-blue-400 hover:text-blue-300">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-white">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-red-400 hover:text-red-300">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Content Management</h2>
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  New Content
                </button>
              </div>

              <div className="grid gap-4">
                {mockContent.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-gray-400">{item.type}</span>
                        <span className="text-sm text-gray-500">Modified {item.lastModified}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.status === 'Published' ? 'bg-green-600/20 text-green-400' : 'bg-yellow-600/20 text-yellow-400'
                      }`}>
                        {item.status}
                      </span>
                      
                      <div className="flex space-x-2">
                        <button className="p-1 text-blue-400 hover:text-blue-300">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-white">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-red-400 hover:text-red-300">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(activeTab === 'analytics' || activeTab === 'settings') && (
            <div className="p-6 text-center">
              <div className="py-12">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  {activeTab === 'analytics' ? <BarChart3 className="w-8 h-8 text-gray-400" /> : <Settings className="w-8 h-8 text-gray-400" />}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {activeTab === 'analytics' ? 'Analytics Dashboard' : 'System Settings'}
                </h3>
                <p className="text-gray-400">
                  {activeTab === 'analytics' 
                    ? 'Advanced analytics and reporting features would be implemented here'
                    : 'System configuration and settings management would be available here'
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};