// Utility function to create page URLs
export const createPageUrl = (pageName) => {
  const pageMap = {
    'Dashboard': '/dashboard',
    'Map': '/map',
    'Trails': '/trails',
    'Rewards': '/rewards',
    'Stories': '/stories',
    'Leaderboard': '/leaderboard',
    'Profile': '/profile',
    'Quests': '/quests',
    'RTOHunt': '/rto-hunt'
  };
  
  return pageMap[pageName] || '/dashboard';
};

// Format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
};

// Format distance
export const formatDistance = (km) => {
  if (km < 1) {
    return `${Math.round(km * 1000)}m`;
  }
  return `${km}km`;
};

// Format duration
export const formatDuration = (minutes) => {
  if (minutes < 60) {
    return `${minutes}min`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
};

// Generate random ID
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};