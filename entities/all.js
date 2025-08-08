// Mock Base44 Entity SDK for development
// In production, this would be the actual Base44 SDK

// Mock data storage
const mockData = {
  users: [
    {
      id: 'user_1',
      email: 'demo@hitchr.app',
      full_name: 'Demo User',
      display_name: 'Hitchr Demo',
      current_role: 'rider',
      tokens: 250,
      total_rides: 12,
      current_streak: 3,
      longest_streak: 7,
      trust_score: 4.8,
      distance_traveled: 145,
      co2_saved: 23.5,
      rto_collection: ['KA-01', 'DL-05', 'MH-12'],
      completed_trails: [],
      active_quests: [],
      redeemed_rewards: [],
      token_breakdown: {
        travel_tokens: 150,
        eco_tokens: 50,
        social_tokens: 25,
        quest_tokens: 25
      },
      bio: 'Love exploring new places and meeting fellow travelers!',
      avatar_url: null,
      created_date: '2024-01-15T10:30:00Z'
    }
  ],
  rides: [
    {
      id: 'ride_1',
      pilot_id: 'user_1',
      rider_id: 'user_2',
      pickup_location: {
        latitude: 12.9716,
        longitude: 77.5946,
        address: 'Koramangala, Bangalore'
      },
      destination: {
        latitude: 12.2958,
        longitude: 76.6394,
        address: 'Mysore Palace, Mysore'
      },
      status: 'completed',
      distance_km: 150,
      duration_minutes: 180,
      tokens_earned: 50,
      pilot_rating: 5,
      rider_rating: 4,
      completed_at: '2024-01-20T15:30:00Z',
      created_date: '2024-01-20T09:00:00Z'
    }
  ],
  stories: [
    {
      id: 'story_1',
      author_id: 'user_1',
      title: 'Amazing Journey to Mysore',
      content: 'Had an incredible ride to Mysore yesterday! Met some wonderful people and saw beautiful landscapes along the way. The driver was super friendly and we had great conversations about travel and life.',
      image_url: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      likes: 15,
      tags: ['mysore', 'adventure', 'friendship'],
      is_featured: false,
      created_date: '2024-01-21T10:00:00Z'
    }
  ],
  rewards: [
    {
      id: 'reward_1',
      name: 'Coffee Voucher',
      description: 'Free coffee at any Cafe Coffee Day outlet',
      category: 'food',
      token_cost: 50,
      real_value: 150,
      image_url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
      partner_brand: 'Cafe Coffee Day',
      stock_available: 100,
      is_active: true
    },
    {
      id: 'reward_2',
      name: 'Travel Backpack',
      description: 'Durable 40L travel backpack perfect for adventures',
      category: 'gear',
      token_cost: 500,
      real_value: 2500,
      image_url: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg',
      partner_brand: 'Wildcraft',
      stock_available: 25,
      is_active: true
    }
  ],
  rtoplates: [
    {
      id: 'plate_1',
      code: 'KA-01',
      state: 'Karnataka',
      region: 'Bangalore Urban',
      rarity: 'common',
      bonus_tokens: 5,
      discovered_by: ['user_1'],
      first_discovered_at: '2024-01-15T12:00:00Z',
      discovery_count: 1
    },
    {
      id: 'plate_2',
      code: 'DL-05',
      state: 'Delhi',
      region: 'Central Delhi',
      rarity: 'uncommon',
      bonus_tokens: 10,
      discovered_by: ['user_1'],
      first_discovered_at: '2024-01-16T14:30:00Z',
      discovery_count: 1
    }
  ],
  quests: [
    {
      id: 'quest_1',
      title: 'Weekend Warrior',
      description: 'Complete 5 rides over the weekend',
      type: 'individual',
      requirements: {
        rides_count: 5
      },
      rewards: {
        tokens: 100,
        badge: 'Weekend Explorer'
      },
      start_date: '2024-01-20T00:00:00Z',
      end_date: '2024-01-21T23:59:59Z',
      participants: [],
      completion_count: 0,
      is_active: true
    }
  ],
  hitchtrails: [
    {
      id: 'trail_1',
      name: 'Bangalore to Mysore Heritage Route',
      description: 'Explore the royal heritage connecting two historic cities',
      category: 'heritage',
      route_points: [
        { lat: 12.9716, lng: 77.5946, name: 'Bangalore' },
        { lat: 12.2958, lng: 76.6394, name: 'Mysore' }
      ],
      distance_km: 150,
      estimated_duration: 3,
      difficulty: 'easy',
      token_reward: 75,
      special_badge: 'Heritage Explorer',
      completed_by: [],
      featured_image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      is_active: true
    }
  ],
  badges: [
    {
      id: 'badge_1',
      name: 'First Ride',
      title: 'Rookie Rider',
      description: 'Complete your first ride',
      category: 'rides',
      icon: '🚗',
      rarity: 'common',
      requirements: {
        total_rides: 1
      },
      reward_tokens: 10,
      is_active: true
    },
    {
      id: 'badge_2',
      name: 'Token Collector',
      title: 'Coin Master',
      description: 'Earn your first 100 tokens',
      category: 'tokens',
      icon: '⚡',
      rarity: 'uncommon',
      requirements: {
        tokens: 100
      },
      reward_tokens: 25,
      is_active: true
    }
  ]
};

// Mock Entity classes
class MockEntity {
  constructor(entityName) {
    this.entityName = entityName;
    this.dataKey = entityName.toLowerCase() + 's';
  }

  async list(sort = '', limit = null) {
    const data = mockData[this.dataKey] || [];
    let result = [...data];
    
    if (sort.startsWith('-')) {
      const field = sort.substring(1);
      result.sort((a, b) => new Date(b[field]) - new Date(a[field]));
    }
    
    if (limit) {
      result = result.slice(0, limit);
    }
    
    return result;
  }

  async filter(conditions, sort = '', limit = null) {
    const data = mockData[this.dataKey] || [];
    let result = data.filter(item => {
      if (conditions.$or) {
        return conditions.$or.some(condition => 
          Object.keys(condition).every(key => item[key] === condition[key])
        );
      }
      return Object.keys(conditions).every(key => item[key] === conditions[key]);
    });
    
    if (sort.startsWith('-')) {
      const field = sort.substring(1);
      result.sort((a, b) => new Date(b[field]) - new Date(a[field]));
    }
    
    if (limit) {
      result = result.slice(0, limit);
    }
    
    return result;
  }

  async create(data) {
    const newItem = {
      id: this.entityName.toLowerCase() + '_' + Date.now(),
      ...data,
      created_date: new Date().toISOString()
    };
    
    if (!mockData[this.dataKey]) {
      mockData[this.dataKey] = [];
    }
    
    mockData[this.dataKey].push(newItem);
    return newItem;
  }

  async update(id, data) {
    const items = mockData[this.dataKey] || [];
    const index = items.findIndex(item => item.id === id);
    
    if (index !== -1) {
      items[index] = { ...items[index], ...data };
      return items[index];
    }
    
    throw new Error(`${this.entityName} not found`);
  }

  async delete(id) {
    const items = mockData[this.dataKey] || [];
    const index = items.findIndex(item => item.id === id);
    
    if (index !== -1) {
      const deleted = items.splice(index, 1)[0];
      return deleted;
    }
    
    throw new Error(`${this.entityName} not found`);
  }
}

// Special User entity with additional methods
class MockUser extends MockEntity {
  constructor() {
    super('User');
  }

  async me() {
    // Return the first user as the current user for demo
    const users = mockData.users || [];
    return users[0] || null;
  }

  async updateMyUserData(data) {
    const users = mockData.users || [];
    if (users[0]) {
      users[0] = { ...users[0], ...data };
      return users[0];
    }
    throw new Error('User not found');
  }
}

// Export entity instances
export const User = new MockUser();
export const Ride = new MockEntity('Ride');
export const Story = new MockEntity('Story');
export const Reward = new MockEntity('Reward');
export const RTOPlate = new MockEntity('RTOPlate');
export const Quest = new MockEntity('Quest');
export const HitchTrail = new MockEntity('HitchTrail');
export const Badge = new MockEntity('Badge');