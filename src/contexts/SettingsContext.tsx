import React, { createContext, useContext, useState, useEffect } from 'react';

interface PendingChanges {
  profile?: Partial<UserProfile>;
  regional?: Partial<RegionalSettings>;
  notifications?: Partial<NotificationSettings>;
  appearance?: Partial<AppearanceSettings>;
  security?: Partial<SecuritySettings>;
  privacy?: Partial<PrivacySettings>;
  integrations?: Partial<IntegrationSettings>;
}

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  avatar?: string;
  jobTitle: string;
  bio: string;
}

interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  smsNotifications: boolean;
  weeklyReports: boolean;
  monthlyReports: boolean;
  budgetAlerts: boolean;
  paymentReminders: boolean;
  systemUpdates: boolean;
  marketingEmails: boolean;
}

interface AppearanceSettings {
  theme: 'light' | 'dark' | 'auto';
  fontSize: 'small' | 'medium' | 'large';
  compactMode: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  colorScheme: 'blue' | 'green' | 'purple' | 'orange';
}

interface SecuritySettings {
  twoFactorAuth: boolean;
  sessionTimeout: number;
  loginAlerts: boolean;
  deviceTracking: boolean;
  passwordExpiry: number;
  ipWhitelist: string[];
}

interface PrivacySettings {
  dataCollection: boolean;
  analytics: boolean;
  cookies: boolean;
  thirdPartySharing: boolean;
  profileVisibility: 'public' | 'private' | 'team';
  activityTracking: boolean;
}

interface IntegrationSettings {
  slackIntegration: boolean;
  teamsIntegration: boolean;
  emailIntegration: boolean;
  calendarSync: boolean;
  apiAccess: boolean;
  webhooks: boolean;
}

interface RegionalSettings {
  language: string;
  currency: string;
  timezone: string;
  dateFormat: string;
  numberFormat: string;
}

interface SettingsContextType {
  profile: UserProfile;
  regional: RegionalSettings;
  notifications: NotificationSettings;
  appearance: AppearanceSettings;
  security: SecuritySettings;
  privacy: PrivacySettings;
  integrations: IntegrationSettings;
  updateProfile: (updates: Partial<UserProfile>) => void;
  updateRegional: (updates: Partial<RegionalSettings>) => void;
  updateNotifications: (updates: Partial<NotificationSettings>) => void;
  updateAppearance: (updates: Partial<AppearanceSettings>) => void;
  updateSecurity: (updates: Partial<SecuritySettings>) => void;
  updatePrivacy: (updates: Partial<PrivacySettings>) => void;
  updateIntegrations: (updates: Partial<IntegrationSettings>) => void;
  pendingChanges: PendingChanges;
  hasPendingChanges: boolean;
  applyChanges: () => void;
  discardChanges: () => void;
  formatCurrency: (amount: number) => string;
  formatDateTime: (date: Date) => string;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('userProfile');
    return saved ? JSON.parse(saved) : {
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@university.edu',
      phone: '+1 (555) 123-4567',
      department: 'finance',
      jobTitle: 'Financial Officer',
      bio: 'Experienced financial professional with expertise in university financial management.'
    };
  });

  const [regional, setRegional] = useState<RegionalSettings>(() => {
    const saved = localStorage.getItem('regionalSettings');
    return saved ? JSON.parse(saved) : {
      language: 'en',
      currency: 'inr',
      timezone: 'est',
      dateFormat: 'mm/dd/yyyy',
      numberFormat: 'us'
    };
  });

  const [notifications, setNotifications] = useState<NotificationSettings>(() => {
    const saved = localStorage.getItem('notificationSettings');
    return saved ? JSON.parse(saved) : {
      emailNotifications: true,
      pushNotifications: true,
      smsNotifications: false,
      weeklyReports: true,
      monthlyReports: true,
      budgetAlerts: true,
      paymentReminders: true,
      systemUpdates: true,
      marketingEmails: false
    };
  });

  const [appearance, setAppearance] = useState<AppearanceSettings>(() => {
    const saved = localStorage.getItem('appearanceSettings');
    return saved ? JSON.parse(saved) : {
      theme: 'light',
      fontSize: 'medium',
      compactMode: false,
      highContrast: false,
      reducedMotion: false,
      colorScheme: 'blue'
    };
  });

  const [security, setSecurity] = useState<SecuritySettings>(() => {
    const saved = localStorage.getItem('securitySettings');
    return saved ? JSON.parse(saved) : {
      twoFactorAuth: false,
      sessionTimeout: 30,
      loginAlerts: true,
      deviceTracking: true,
      passwordExpiry: 90,
      ipWhitelist: []
    };
  });

  const [privacy, setPrivacy] = useState<PrivacySettings>(() => {
    const saved = localStorage.getItem('privacySettings');
    return saved ? JSON.parse(saved) : {
      dataCollection: true,
      analytics: true,
      cookies: true,
      thirdPartySharing: false,
      profileVisibility: 'team',
      activityTracking: true
    };
  });

  const [integrations, setIntegrations] = useState<IntegrationSettings>(() => {
    const saved = localStorage.getItem('integrationSettings');
    return saved ? JSON.parse(saved) : {
      slackIntegration: false,
      teamsIntegration: false,
      emailIntegration: true,
      calendarSync: false,
      apiAccess: false,
      webhooks: false
    };
  });

  // Track pending changes
  const [pendingChanges, setPendingChanges] = useState<PendingChanges>({});

  // Save to localStorage whenever settings change
  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('regionalSettings', JSON.stringify(regional));
  }, [regional]);

  useEffect(() => {
    localStorage.setItem('notificationSettings', JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem('appearanceSettings', JSON.stringify(appearance));
  }, [appearance]);

  useEffect(() => {
    localStorage.setItem('securitySettings', JSON.stringify(security));
  }, [security]);

  useEffect(() => {
    localStorage.setItem('privacySettings', JSON.stringify(privacy));
  }, [privacy]);

  useEffect(() => {
    localStorage.setItem('integrationSettings', JSON.stringify(integrations));
  }, [integrations]);

  // Check if there are pending changes
  const hasPendingChanges = Object.keys(pendingChanges).length > 0;

  const updateProfile = (updates: Partial<UserProfile>) => {
    setPendingChanges(prev => ({
      ...prev,
      profile: { ...prev.profile, ...updates }
    }));
  };

  const updateRegional = (updates: Partial<RegionalSettings>) => {
    setPendingChanges(prev => ({
      ...prev,
      regional: { ...prev.regional, ...updates }
    }));
  };

  const updateNotifications = (updates: Partial<NotificationSettings>) => {
    setPendingChanges(prev => ({
      ...prev,
      notifications: { ...prev.notifications, ...updates }
    }));
  };

  const updateAppearance = (updates: Partial<AppearanceSettings>) => {
    setPendingChanges(prev => ({
      ...prev,
      appearance: { ...prev.appearance, ...updates }
    }));
  };

  const updateSecurity = (updates: Partial<SecuritySettings>) => {
    setPendingChanges(prev => ({
      ...prev,
      security: { ...prev.security, ...updates }
    }));
  };

  const updatePrivacy = (updates: Partial<PrivacySettings>) => {
    setPendingChanges(prev => ({
      ...prev,
      privacy: { ...prev.privacy, ...updates }
    }));
  };

  const updateIntegrations = (updates: Partial<IntegrationSettings>) => {
    setPendingChanges(prev => ({
      ...prev,
      integrations: { ...prev.integrations, ...updates }
    }));
  };

  const applyChanges = () => {
    if (pendingChanges.profile) {
      setProfile(prev => ({ ...prev, ...pendingChanges.profile }));
    }
    if (pendingChanges.regional) {
      setRegional(prev => ({ ...prev, ...pendingChanges.regional }));
    }
    if (pendingChanges.notifications) {
      setNotifications(prev => ({ ...prev, ...pendingChanges.notifications }));
    }
    if (pendingChanges.appearance) {
      setAppearance(prev => ({ ...prev, ...pendingChanges.appearance }));
    }
    if (pendingChanges.security) {
      setSecurity(prev => ({ ...prev, ...pendingChanges.security }));
    }
    if (pendingChanges.privacy) {
      setPrivacy(prev => ({ ...prev, ...pendingChanges.privacy }));
    }
    if (pendingChanges.integrations) {
      setIntegrations(prev => ({ ...prev, ...pendingChanges.integrations }));
    }
    
    // Clear pending changes
    setPendingChanges({});
  };

  const discardChanges = () => {
    setPendingChanges({});
  };

  const formatCurrency = (amount: number): string => {
    const currencyMap = {
      inr: { 
        code: 'INR', 
        symbol: '₹', 
        locale: 'en-IN',
        exchangeRate: 83.12, // 1 USD = 83.12 INR (example rate)
        largeUnit: 'Cr', // Crore
        mediumUnit: 'L', // Lakh
        largeThreshold: 10000000, // 1 Crore = 10 Million
        mediumThreshold: 100000 // 1 Lakh = 100 Thousand
      },
      usd: { 
        code: 'USD', 
        symbol: '$', 
        locale: 'en-US',
        exchangeRate: 1, // Base currency
        largeUnit: 'M', // Million
        mediumUnit: 'K', // Thousand
        largeThreshold: 1000000, // 1 Million
        mediumThreshold: 1000 // 1 Thousand
      },
      eur: { 
        code: 'EUR', 
        symbol: '€', 
        locale: 'de-DE',
        exchangeRate: 0.92, // 1 USD = 0.92 EUR (example rate)
        largeUnit: 'M', // Million
        mediumUnit: 'K', // Thousand
        largeThreshold: 1000000,
        mediumThreshold: 1000
      },
      gbp: { 
        code: 'GBP', 
        symbol: '£', 
        locale: 'en-GB',
        exchangeRate: 0.79, // 1 USD = 0.79 GBP (example rate)
        largeUnit: 'M', // Million
        mediumUnit: 'K', // Thousand
        largeThreshold: 1000000,
        mediumThreshold: 1000
      },
      cad: { 
        code: 'CAD', 
        symbol: 'C$', 
        locale: 'en-CA',
        exchangeRate: 1.36, // 1 USD = 1.36 CAD (example rate)
        largeUnit: 'M', // Million
        mediumUnit: 'K', // Thousand
        largeThreshold: 1000000,
        mediumThreshold: 1000
      },
    };

    const currency = currencyMap[regional.currency as keyof typeof currencyMap] || currencyMap.inr;
    
    // Convert amount from base currency (USD) to selected currency
    const convertedAmount = amount * currency.exchangeRate;
    
    try {
      // For compact display based on currency-specific thresholds
      if (convertedAmount >= currency.largeThreshold) {
        const value = convertedAmount / currency.largeThreshold;
        return `${currency.symbol}${value.toFixed(1)}${currency.largeUnit}`;
      } else if (convertedAmount >= currency.mediumThreshold) {
        const value = convertedAmount / currency.mediumThreshold;
        return `${currency.symbol}${value.toFixed(1)}${currency.mediumUnit}`;
      }
      
      // For regular amounts
      return new Intl.NumberFormat(currency.locale, {
        style: 'currency',
        currency: currency.code,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(convertedAmount);
    } catch (error) {
      // Fallback for unsupported currencies
      if (convertedAmount >= currency.largeThreshold) {
        return `${currency.symbol}${(convertedAmount / currency.largeThreshold).toFixed(1)}${currency.largeUnit}`;
      } else if (convertedAmount >= currency.mediumThreshold) {
        return `${currency.symbol}${(convertedAmount / currency.mediumThreshold).toFixed(1)}${currency.mediumUnit}`;
      }
      return `${currency.symbol}${convertedAmount.toLocaleString()}`;
    }
  };

  const formatDateTime = (date: Date): string => {
    const timezoneMap = {
      est: 'America/New_York',
      pst: 'America/Los_Angeles',
      utc: 'UTC',
      cet: 'Europe/Berlin',
      ist: 'Asia/Kolkata'
    };

    const timezone = timezoneMap[regional.timezone as keyof typeof timezoneMap] || 'America/New_York';

    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(date);
    } catch (error) {
      return date.toLocaleString();
    }
  };

  return (
    <SettingsContext.Provider value={{
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
      updateIntegrations,
      pendingChanges,
      hasPendingChanges,
      applyChanges,
      discardChanges,
      formatCurrency,
      formatDateTime
    }}>
      {children}
    </SettingsContext.Provider>
  );
};