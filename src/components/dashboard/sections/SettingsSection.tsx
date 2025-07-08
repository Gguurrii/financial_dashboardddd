import React, { useState } from 'react';
import { Settings, User, Bell, Shield, Database, Palette, Globe, Download, Upload, RefreshCw, Sun, Moon, Camera, Save, X, Check, Smartphone, Mail, MessageSquare, Lock, Eye, EyeOff, Wifi, Calendar, Zap, Cookie, Activity, Users } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { useSettings } from '../../../contexts/SettingsContext';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import Select from '../../ui/Select';

const SettingsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const { theme, toggleTheme } = useTheme();
  const { 
    profile, 
    regional, 
    notifications, 
    appearance, 
    security, 
    privacy, 
    integrations,
    updateProfile, 
    updateRegional, 
    updateNotifications,
    updateAppearance,
    updateSecurity,
    updatePrivacy,
    updateIntegrations
  } = useSettings();

  const settingsTabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'data', label: 'Data & Privacy', icon: Database },
    { id: 'integrations', label: 'Integrations', icon: Globe }
  ];

  const languageOptions = [
    { value: 'en', label: 'English (US)', description: 'United States English' },
    { value: 'es', label: 'Español', description: 'Spanish' },
    { value: 'fr', label: 'Français', description: 'French' },
    { value: 'de', label: 'Deutsch', description: 'German' },
    { value: 'hi', label: 'हिन्दी', description: 'Hindi' },
    { value: 'zh', label: '中文', description: 'Chinese' },
    { value: 'ja', label: '日本語', description: 'Japanese' }
  ];

  const currencyOptions = [
    { value: 'inr', label: 'INR (₹)', description: 'Indian Rupee' },
    { value: 'usd', label: 'USD ($)', description: 'US Dollar' },
    { value: 'eur', label: 'EUR (€)', description: 'Euro' },
    { value: 'gbp', label: 'GBP (£)', description: 'British Pound' },
    { value: 'cad', label: 'CAD ($)', description: 'Canadian Dollar' },
  ];

  const timezoneOptions = [
    { value: 'est', label: 'Eastern Time (EST)', description: 'UTC-5' },
    { value: 'pst', label: 'Pacific Time (PST)', description: 'UTC-8' },
    { value: 'utc', label: 'UTC', description: 'Coordinated Universal Time' },
    { value: 'cet', label: 'Central European Time', description: 'UTC+1' },
    { value: 'ist', label: 'India Standard Time (IST)', description: 'UTC+5:30' }
  ];

  const departmentOptions = [
    { value: 'finance', label: 'Finance Department' },
    { value: 'admin', label: 'Administration' },
    { value: 'academic', label: 'Academic Affairs' },
    { value: 'it', label: 'IT Department' },
    { value: 'hr', label: 'Human Resources' },
    { value: 'research', label: 'Research & Development' }
  ];

  const handleSaveSettings = async () => {
    setSaveStatus('saving');
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSaveStatus('saved');
      
      // Reset status after 3 seconds
      setTimeout(() => setSaveStatus('idle'), 3000);
      
    } catch (error) {
      setSaveStatus('idle');
      alert('Error saving settings. Please try again.');
    }
  };

  const handlePhotoChange = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        if (file.size > 2 * 1024 * 1024) {
          alert('File size must be less than 2MB');
          return;
        }
        alert(`Photo "${file.name}" uploaded successfully!`);
      }
    };
    input.click();
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <Card title="Language & Region" subtitle="Configure your regional preferences">
              <div className="space-y-4">
                <div>
                  <label className={`block font-medium mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Language
                  </label>
                  <Select
                    options={languageOptions}
                    value={regional.language}
                    onChange={(value) => updateRegional({ language: value })}
                    placeholder="Select Language"
                  />
                </div>
                
                <div>
                  <label className={`block font-medium mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Currency
                  </label>
                  <Select
                    options={currencyOptions}
                    value={regional.currency}
                    onChange={(value) => updateRegional({ currency: value })}
                    placeholder="Select Currency"
                  />
                </div>
                
                <div>
                  <label className={`block font-medium mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Time Zone
                  </label>
                  <Select
                    options={timezoneOptions}
                    value={regional.timezone}
                    onChange={(value) => updateRegional({ timezone: value })}
                    placeholder="Select Time Zone"
                  />
                </div>
              </div>
            </Card>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <Card title="Theme Settings" subtitle="Customize your visual experience">
              <div className="space-y-6">
                <div className={`flex items-center justify-between p-4 rounded-xl border ${
                  theme === 'light' 
                    ? 'bg-gray-50/70 border-gray-200/50' 
                    : 'bg-gray-700/50 border-gray-600/50'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${theme === 'light' ? 'bg-yellow-500' : 'bg-gray-600'}`}>
                      {theme === 'light' ? (
                        <Sun className="w-6 h-6 text-white" />
                      ) : (
                        <Moon className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <h4 className={`font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Theme Mode</h4>
                      <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                        Currently using {theme === 'light' ? 'Light' : 'Dark'} theme
                      </p>
                    </div>
                  </div>
                  <Button 
                    onClick={toggleTheme}
                    variant="primary"
                    className="flex items-center space-x-2"
                  >
                    {theme === 'light' ? (
                      <>
                        <Moon className="w-4 h-4" />
                        <span>Switch to Dark</span>
                      </>
                    ) : (
                      <>
                        <Sun className="w-4 h-4" />
                        <span>Switch to Light</span>
                      </>
                    )}
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block font-medium mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      Font Size
                    </label>
                    <Select
                      options={[
                        { value: 'small', label: 'Small', description: 'Compact text size' },
                        { value: 'medium', label: 'Medium', description: 'Default text size' },
                        { value: 'large', label: 'Large', description: 'Larger text for better readability' }
                      ]}
                      value={appearance.fontSize}
                      onChange={(value) => updateAppearance({ fontSize: value as any })}
                      placeholder="Select Font Size"
                    />
                  </div>

                  <div>
                    <label className={`block font-medium mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      Color Scheme
                    </label>
                    <Select
                      options={[
                        { value: 'blue', label: 'Blue', description: 'Default blue theme' },
                        { value: 'green', label: 'Green', description: 'Nature-inspired green' },
                        { value: 'purple', label: 'Purple', description: 'Creative purple theme' },
                        { value: 'orange', label: 'Orange', description: 'Energetic orange theme' }
                      ]}
                      value={appearance.colorScheme}
                      onChange={(value) => updateAppearance({ colorScheme: value as any })}
                      placeholder="Select Color Scheme"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { key: 'compactMode', label: 'Compact Mode', description: 'Reduce spacing for more content' },
                    { key: 'highContrast', label: 'High Contrast', description: 'Increase contrast for better visibility' },
                    { key: 'reducedMotion', label: 'Reduced Motion', description: 'Minimize animations and transitions' }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between">
                      <div>
                        <h4 className={`font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{item.label}</h4>
                        <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                          {item.description}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={appearance[item.key as keyof typeof appearance] as boolean}
                          onChange={(e) => updateAppearance({ [item.key]: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <Card title="Profile Information" subtitle="Manage your personal information">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <Button variant="primary" size="sm" onClick={handlePhotoChange}>
                      <Camera className="w-4 h-4 mr-2" />
                      Change Photo
                    </Button>
                    <p className={`text-sm mt-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                      JPG, PNG or GIF. Max size 2MB
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block font-medium mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      First Name
                    </label>
                    <input 
                      type="text" 
                      value={profile.firstName}
                      onChange={(e) => updateProfile({ firstName: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
                        theme === 'light' 
                          ? 'bg-gray-50 border-gray-300 text-gray-900' 
                          : 'bg-gray-700 border-gray-600 text-white'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block font-medium mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      value={profile.lastName}
                      onChange={(e) => updateProfile({ lastName: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
                        theme === 'light' 
                          ? 'bg-gray-50 border-gray-300 text-gray-900' 
                          : 'bg-gray-700 border-gray-600 text-white'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block font-medium mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      Email
                    </label>
                    <input 
                      type="email" 
                      value={profile.email}
                      onChange={(e) => updateProfile({ email: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
                        theme === 'light' 
                          ? 'bg-gray-50 border-gray-300 text-gray-900' 
                          : 'bg-gray-700 border-gray-600 text-white'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block font-medium mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      Phone
                    </label>
                    <input 
                      type="tel" 
                      value={profile.phone}
                      onChange={(e) => updateProfile({ phone: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
                        theme === 'light' 
                          ? 'bg-gray-50 border-gray-300 text-gray-900' 
                          : 'bg-gray-700 border-gray-600 text-white'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block font-medium mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      Job Title
                    </label>
                    <input 
                      type="text" 
                      value={profile.jobTitle}
                      onChange={(e) => updateProfile({ jobTitle: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
                        theme === 'light' 
                          ? 'bg-gray-50 border-gray-300 text-gray-900' 
                          : 'bg-gray-700 border-gray-600 text-white'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block font-medium mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      Department
                    </label>
                    <Select
                      options={departmentOptions}
                      value={profile.department}
                      onChange={(value) => updateProfile({ department: value })}
                      placeholder="Select Department"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className={`block font-medium mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      Bio
                    </label>
                    <textarea 
                      value={profile.bio}
                      onChange={(e) => updateProfile({ bio: e.target.value })}
                      rows={3}
                      className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all duration-300 resize-none ${
                        theme === 'light' 
                          ? 'bg-gray-50 border-gray-300 text-gray-900' 
                          : 'bg-gray-700 border-gray-600 text-white'
                      }`}
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <Card title="Notification Preferences" subtitle="Manage how you receive notifications">
              <div className="space-y-6">
                <div>
                  <h4 className={`font-medium mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Communication Channels
                  </h4>
                  <div className="space-y-4">
                    {[
                      { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email', icon: Mail },
                      { key: 'pushNotifications', label: 'Push Notifications', description: 'Browser and mobile push notifications', icon: Smartphone },
                      { key: 'smsNotifications', label: 'SMS Notifications', description: 'Text message notifications for urgent alerts', icon: MessageSquare }
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.key} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Icon className={`w-5 h-5 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`} />
                            <div>
                              <h5 className={`font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                                {item.label}
                              </h5>
                              <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={notifications[item.key as keyof typeof notifications] as boolean}
                              onChange={(e) => updateNotifications({ [item.key]: e.target.checked })}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h4 className={`font-medium mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Report Notifications
                  </h4>
                  <div className="space-y-4">
                    {[
                      { key: 'weeklyReports', label: 'Weekly Reports', description: 'Weekly financial summary reports' },
                      { key: 'monthlyReports', label: 'Monthly Reports', description: 'Comprehensive monthly financial reports' },
                      { key: 'budgetAlerts', label: 'Budget Alerts', description: 'Notifications when budgets exceed thresholds' },
                      { key: 'paymentReminders', label: 'Payment Reminders', description: 'Reminders for upcoming payments' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between">
                        <div>
                          <h5 className={`font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                            {item.label}
                          </h5>
                          <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                            {item.description}
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications[item.key as keyof typeof notifications] as boolean}
                            onChange={(e) => updateNotifications({ [item.key]: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <Card title="Security Settings" subtitle="Manage your account security">
              <div className="space-y-6">
                <div className="space-y-4">
                  {[
                    { key: 'twoFactorAuth', label: 'Two-Factor Authentication', description: 'Add an extra layer of security to your account', icon: Lock },
                    { key: 'loginAlerts', label: 'Login Alerts', description: 'Get notified of new login attempts', icon: Bell },
                    { key: 'deviceTracking', label: 'Device Tracking', description: 'Track devices that access your account', icon: Smartphone }
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.key} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon className={`w-5 h-5 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`} />
                          <div>
                            <h5 className={`font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                              {item.label}
                            </h5>
                            <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={security[item.key as keyof typeof security] as boolean}
                            onChange={(e) => updateSecurity({ [item.key]: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block font-medium mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      Session Timeout (minutes)
                    </label>
                    <Select
                      options={[
                        { value: '15', label: '15 minutes', description: 'High security' },
                        { value: '30', label: '30 minutes', description: 'Recommended' },
                        { value: '60', label: '1 hour', description: 'Standard' },
                        { value: '120', label: '2 hours', description: 'Extended' }
                      ]}
                      value={security.sessionTimeout.toString()}
                      onChange={(value) => updateSecurity({ sessionTimeout: parseInt(value) })}
                      placeholder="Select Timeout"
                    />
                  </div>

                  <div>
                    <label className={`block font-medium mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      Password Expiry (days)
                    </label>
                    <Select
                      options={[
                        { value: '30', label: '30 days', description: 'High security' },
                        { value: '60', label: '60 days', description: 'Recommended' },
                        { value: '90', label: '90 days', description: 'Standard' },
                        { value: '180', label: '180 days', description: 'Extended' }
                      ]}
                      value={security.passwordExpiry.toString()}
                      onChange={(value) => updateSecurity({ passwordExpiry: parseInt(value) })}
                      placeholder="Select Expiry"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'data':
        return (
          <div className="space-y-6">
            <Card title="Data & Privacy Settings" subtitle="Control your data and privacy preferences">
              <div className="space-y-6">
                <div className="space-y-4">
                  {[
                    { key: 'dataCollection', label: 'Data Collection', description: 'Allow collection of usage data for improvements', icon: Database },
                    { key: 'analytics', label: 'Analytics', description: 'Help us improve by sharing anonymous analytics', icon: Activity },
                    { key: 'cookies', label: 'Cookies', description: 'Allow cookies for better user experience', icon: Cookie },
                    { key: 'thirdPartySharing', label: 'Third-Party Sharing', description: 'Allow sharing data with trusted partners', icon: Users },
                    { key: 'activityTracking', label: 'Activity Tracking', description: 'Track your activity for personalized experience', icon: Eye }
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.key} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon className={`w-5 h-5 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`} />
                          <div>
                            <h5 className={`font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                              {item.label}
                            </h5>
                            <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={privacy[item.key as keyof typeof privacy] as boolean}
                            onChange={(e) => updatePrivacy({ [item.key]: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    );
                  })}
                </div>

                <div>
                  <label className={`block font-medium mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Profile Visibility
                  </label>
                  <Select
                    options={[
                      { value: 'public', label: 'Public', description: 'Visible to everyone' },
                      { value: 'team', label: 'Team Only', description: 'Visible to team members' },
                      { value: 'private', label: 'Private', description: 'Only visible to you' }
                    ]}
                    value={privacy.profileVisibility}
                    onChange={(value) => updatePrivacy({ profileVisibility: value as any })}
                    placeholder="Select Visibility"
                  />
                </div>

                <div className="flex space-x-4">
                  <Button variant="secondary" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Export Data
                  </Button>
                  <Button variant="secondary" className="flex-1">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-6">
            <Card title="Integrations" subtitle="Connect with external services and tools">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { key: 'slackIntegration', label: 'Slack', description: 'Get notifications in Slack', icon: MessageSquare, color: 'bg-purple-500' },
                    { key: 'teamsIntegration', label: 'Microsoft Teams', description: 'Collaborate with Teams', icon: Users, color: 'bg-blue-500' },
                    { key: 'emailIntegration', label: 'Email Integration', description: 'Sync with email providers', icon: Mail, color: 'bg-red-500' },
                    { key: 'calendarSync', label: 'Calendar Sync', description: 'Sync with calendar apps', icon: Calendar, color: 'bg-green-500' },
                    { key: 'apiAccess', label: 'API Access', description: 'Enable API for custom integrations', icon: Zap, color: 'bg-yellow-500' },
                    { key: 'webhooks', label: 'Webhooks', description: 'Real-time data notifications', icon: Wifi, color: 'bg-indigo-500' }
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.key} className={`p-4 rounded-xl border transition-all duration-300 ${
                        theme === 'light' 
                          ? 'bg-gray-50/70 border-gray-200/50 hover:bg-gray-100/70' 
                          : 'bg-gray-700/50 border-gray-600/50 hover:bg-gray-600/50'
                      }`}>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${item.color}`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h5 className={`font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                                {item.label}
                              </h5>
                              <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={integrations[item.key as keyof typeof integrations] as boolean}
                              onChange={(e) => updateIntegrations({ [item.key]: e.target.checked })}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                        {integrations[item.key as keyof typeof integrations] && (
                          <Button variant="ghost" size="sm" className="w-full">
                            Configure
                          </Button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>
        );

      default:
        return (
          <Card title="Coming Soon" subtitle="This section is under development">
            <div className="text-center py-8">
              <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                More settings options will be available soon.
              </p>
            </div>
          </Card>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <Card className="lg:col-span-1">
          <nav className="space-y-2">
            {settingsTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 hover:scale-[1.02]
                    ${isActive 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : `${theme === 'light' ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : (theme === 'light' ? 'text-gray-400' : 'text-gray-500')}`} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </Card>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          {renderTabContent()}
          
          {/* Save Button */}
          <div className="mt-8 flex justify-end space-x-4">
            <Button 
              variant="primary" 
              onClick={handleSaveSettings}
              disabled={saveStatus === 'saving'}
              className="transition-all duration-300 hover:scale-105"
            >
              {saveStatus === 'saving' ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Saving...
                </>
              ) : saveStatus === 'saved' ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Saved!
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;