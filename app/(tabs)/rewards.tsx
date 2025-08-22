import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Gift, Zap, Coffee, Plane, Shirt, ShoppingBag } from 'lucide-react-native';

const mockRewards = [
  {
    id: '1',
    name: 'Coffee Voucher',
    description: 'Free coffee at any Cafe Coffee Day outlet',
    category: 'food',
    token_cost: 50,
    real_value: 150,
    image_url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
    partner_brand: 'Cafe Coffee Day',
    stock_available: 100,
  },
  {
    id: '2',
    name: 'Travel Backpack',
    description: 'Durable 40L travel backpack perfect for adventures',
    category: 'gear',
    token_cost: 500,
    real_value: 2500,
    image_url: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400',
    partner_brand: 'Wildcraft',
    stock_available: 25,
  },
];

export default function RewardsScreen() {
  const [currentTokens] = useState(250);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: Gift },
    { id: 'food', name: 'Food', icon: Coffee },
    { id: 'travel', name: 'Travel', icon: Plane },
    { id: 'gear', name: 'Gear', icon: ShoppingBag },
  ];

  const canAfford = (cost: number) => currentTokens >= cost;

  return (
    <LinearGradient
      colors={['#0d1222', '#1f1d3e', '#3d1b3d', '#1a1f3a']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Rewards Store</Text>
            <Text style={styles.subtitle}>Exchange your tokens for amazing rewards</Text>
          </View>

          {/* Token Balance */}
          <View style={styles.balanceCard}>
            <View style={styles.balanceIcon}>
              <Zap size={32} color="#ffffff" />
            </View>
            <View style={styles.balanceInfo}>
              <Text style={styles.balanceAmount}>{currentTokens.toLocaleString()}</Text>
              <Text style={styles.balanceLabel}>Available Tokens</Text>
            </View>
          </View>

          {/* Category Filter */}
          <View style={styles.categoriesContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.categoriesRow}>
                {categories.map((category) => (
                  <TouchableOpacity
                    key={category.id}
                    onPress={() => setSelectedCategory(category.id)}
                    style={[
                      styles.categoryButton,
                      selectedCategory === category.id && styles.categoryButtonActive
                    ]}
                  >
                    <category.icon 
                      size={16} 
                      color={selectedCategory === category.id ? '#06b6d4' : '#94a3b8'} 
                    />
                    <Text style={[
                      styles.categoryText,
                      selectedCategory === category.id && styles.categoryTextActive
                    ]}>
                      {category.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Rewards Grid */}
          <View style={styles.rewardsGrid}>
            {mockRewards.map((reward) => {
              const affordable = canAfford(reward.token_cost);
              
              return (
                <View key={reward.id} style={styles.rewardCard}>
                  <Image source={{ uri: reward.image_url }} style={styles.rewardImage} />
                  
                  <View style={styles.rewardContent}>
                    <Text style={styles.rewardName}>{reward.name}</Text>
                    <Text style={styles.rewardDescription} numberOfLines={2}>
                      {reward.description}
                    </Text>
                    {reward.partner_brand && (
                      <Text style={styles.partnerBrand}>by {reward.partner_brand}</Text>
                    )}
                    
                    <View style={styles.rewardFooter}>
                      <View style={styles.tokenCost}>
                        <Zap size={16} color="#fbbf24" />
                        <Text style={styles.costText}>{reward.token_cost}</Text>
                      </View>
                      
                      <TouchableOpacity 
                        style={[
                          styles.redeemButton,
                          !affordable && styles.redeemButtonDisabled
                        ]}
                        disabled={!affordable}
                      >
                        <Text style={[
                          styles.redeemButtonText,
                          !affordable && styles.redeemButtonTextDisabled
                        ]}>
                          {affordable ? 'Redeem' : 'Need More'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    fontFamily: 'Inter-Regular',
  },
  balanceCard: {
    backgroundColor: 'rgba(22, 28, 45, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 24,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  balanceIcon: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  balanceInfo: {
    flex: 1,
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    marginBottom: 4,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#94a3b8',
    fontFamily: 'Inter-Regular',
  },
  categoriesContainer: {
    marginBottom: 30,
  },
  categoriesRow: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 4,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    backgroundColor: 'rgba(22, 28, 45, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  categoryButtonActive: {
    backgroundColor: 'rgba(6, 182, 212, 0.15)',
    borderColor: 'rgba(6, 182, 212, 0.3)',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#94a3b8',
    fontFamily: 'Inter-SemiBold',
  },
  categoryTextActive: {
    color: '#06b6d4',
  },
  rewardsGrid: {
    gap: 16,
    paddingBottom: 30,
  },
  rewardCard: {
    backgroundColor: 'rgba(22, 28, 45, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    overflow: 'hidden',
  },
  rewardImage: {
    width: '100%',
    height: 160,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  rewardContent: {
    padding: 20,
  },
  rewardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    marginBottom: 8,
  },
  rewardDescription: {
    fontSize: 14,
    color: '#94a3b8',
    fontFamily: 'Inter-Regular',
    marginBottom: 8,
    lineHeight: 20,
  },
  partnerBrand: {
    fontSize: 12,
    color: '#06b6d4',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 16,
  },
  rewardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tokenCost: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  costText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
  },
  redeemButton: {
    backgroundColor: 'rgba(0, 170, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(0, 170, 255, 0.4)',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  redeemButtonDisabled: {
    backgroundColor: 'rgba(50, 50, 50, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  redeemButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    fontFamily: 'Inter-SemiBold',
  },
  redeemButtonTextDisabled: {
    color: '#94a3b8',
  },
});