export const formatCurrency = (amount: number, currency = 'USD'): string => {
  const currencyMap = {
    INR: { 
      symbol: '₹', 
      locale: 'en-IN',
      exchangeRate: 83.12,
      largeUnit: 'Cr',
      mediumUnit: 'L',
      largeThreshold: 10000000,
      mediumThreshold: 100000
    },
    USD: { 
      symbol: '$', 
      locale: 'en-US',
      exchangeRate: 1,
      largeUnit: 'M',
      mediumUnit: 'K',
      largeThreshold: 1000000,
      mediumThreshold: 1000
    },
    EUR: { 
      symbol: '€', 
      locale: 'de-DE',
      exchangeRate: 0.92,
      largeUnit: 'M',
      mediumUnit: 'K',
      largeThreshold: 1000000,
      mediumThreshold: 1000
    },
    GBP: { 
      symbol: '£', 
      locale: 'en-GB',
      exchangeRate: 0.79,
      largeUnit: 'M',
      mediumUnit: 'K',
      largeThreshold: 1000000,
      mediumThreshold: 1000
    },
    CAD: { 
      symbol: 'C$', 
      locale: 'en-CA',
      exchangeRate: 1.36,
      largeUnit: 'M',
      mediumUnit: 'K',
      largeThreshold: 1000000,
      mediumThreshold: 1000
    }
  };

  const currencyInfo = currencyMap[currency as keyof typeof currencyMap] || currencyMap.USD;
  const convertedAmount = amount * currencyInfo.exchangeRate;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(convertedAmount);
};

export const formatCompactCurrency = (amount: number, currency = 'USD'): string => {
  const currencyMap = {
    INR: { 
      symbol: '₹', 
      exchangeRate: 83.12,
      largeUnit: 'Cr',
      mediumUnit: 'L',
      largeThreshold: 10000000,
      mediumThreshold: 100000
    },
    USD: { 
      symbol: '$', 
      exchangeRate: 1,
      largeUnit: 'M',
      mediumUnit: 'K',
      largeThreshold: 1000000,
      mediumThreshold: 1000
    },
    EUR: { 
      symbol: '€', 
      exchangeRate: 0.92,
      largeUnit: 'M',
      mediumUnit: 'K',
      largeThreshold: 1000000,
      mediumThreshold: 1000
    },
    GBP: { 
      symbol: '£', 
      exchangeRate: 0.79,
      largeUnit: 'M',
      mediumUnit: 'K',
      largeThreshold: 1000000,
      mediumThreshold: 1000
    },
    CAD: { 
      symbol: 'C$', 
      exchangeRate: 1.36,
      largeUnit: 'M',
      mediumUnit: 'K',
      largeThreshold: 1000000,
      mediumThreshold: 1000
    }
  };

  const currencyInfo = currencyMap[currency as keyof typeof currencyMap] || currencyMap.USD;
  const convertedAmount = amount * currencyInfo.exchangeRate;

  if (convertedAmount >= currencyInfo.largeThreshold) {
    return `${currencyInfo.symbol}${(convertedAmount / currencyInfo.largeThreshold).toFixed(1)}${currencyInfo.largeUnit}`;
  } else if (convertedAmount >= currencyInfo.mediumThreshold) {
    return `${currencyInfo.symbol}${(convertedAmount / currencyInfo.mediumThreshold).toFixed(1)}${currencyInfo.mediumUnit}`;
  }
  return `${currencyInfo.symbol}${convertedAmount.toLocaleString()}`;
};

export const formatPercentage = (value: number): string => {
  return `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};