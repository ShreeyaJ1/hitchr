import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { User, Edit3, Zap, Car, TrendingUp, Star, Award, Calendar } from 'lucide-react-native';

const mockUser = {
  display_name: 'Demo User',
  email: 'demo@hitchr.app',
  current_role: 'rider',
  tokens: 250,
  total_rides: 12,
  current_streak: 3,
  trust_score: 4.8,
  rto_collection: ['KA-01', 'DL-05', 'MH-12'],
  co2_saved: 23.5,
  bio: 'Love exploring new places and meeting fellow travelers!',
  created_date: '2024-01-15T10:30:00Z',
};

const mockBadges = [
  { name: 'First Ride', title: 'Rookie Rider', icon: '🚗', earned: true },
  { name: 'Token Collector', title: 'Coin Master', icon: '⚡', earned: true },
  { name: 'Social Butterfly', title: 'Community Star', icon: '🌟', earned: false },
  { name: 'Eco Warrior', title: 'Green Champion', icon: '🌱', earned: false },
];

export default function ProfileScreen() {
  const [currentUser, setCurrentUser] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);

  const stats = [
    { title: "Tokens Earned", value: currentUser.tokens.toLocaleString(), icon: Zap, color: "#fbbf24" },
    { title: "Total Rides", value: currentUser.total_rides.toLocaleString(), icon: Car, color: "#00aaff" },
    { title: "Current Streak", value: `${currentUser.current_streak} days`, icon: TrendingUp, color: "#10b981" },
    { title: "Trust Score", value: currentUser.trust_score.toFixed(1), icon: Star, color: "#8b5cf6" },
  ];

  return (
    <LinearGradient
      colors={['#0d1222', '#1f1d3e', '#3d1b3d', '#1a1f3a']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.subtitle}>Manage your account and view achievements</Text>
          </View>

          {/* Profile Card */}
          <View style={styles.profileCard}>
            <View style={styles.profileHeader}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{currentUser.display_name[0]}</Text>
              </View>
              <View style={styles.profileInfo}>
                <View style={styles.nameRow}>
                  <Text style={styles.displayName}>{currentUser.display_name}</Text>
                  <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
                    <Edit3 size={16} color="#94a3b8" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.email}>{currentUser.email}</Text>
                <View style={styles.roleTag}>
                  <Car size={12} color="#06b6d4" />
                  <Text style={styles.roleText}>
                    {currentUser.current_role === 'pilot' ? 'Pilot' : 'Rider'}
                  </Text>
                </View>
              </View>
            </View>
            
            {currentUser.bio && (
              <Text style={styles.bio}>{currentUser.bio}</Text>
            )}
          </View>

          {/* Stats Grid */}
          <View style={styles.statsContainer}>
            <View style={styles.statsGrid}>
              {stats.map((stat, index) => (
                <View key={index} style={styles.statCard}>
                  <View style={[styles.statIcon, { backgroundColor: `${stat.color}20` }]}>
                    <stat.icon size={20} color={stat.color} />
                  </View>
                  <Text style={styles.statValue}>{stat.value}</Text>
                  <Text style={styles.statTitle}>{stat.title}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Badge Collection Preview */}
          <View style={styles.badgesContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recent Achievements</Text>
              <TouchableOpacity>
                <Text style={styles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.badgesGrid}>
              {mockBadges.slice(0, 4).map((badge, index) => (
                <View key={index} style={[styles.badgeCard, !badge.earned && styles.badgeCardLocked]}>
                  <Text style={styles.badgeIcon}>{badge.icon}</Text>
                  <Text style={[styles.badgeName, !badge.earned && styles.badgeNameLocked]}>
                    {badge.name}
                  </Text>
                  <Text style={[styles.badgeTitle, !badge.earned && styles.badgeTitleLocked]}>
                    {badge.title}
                  </Text>
                </View>
              ))}
            </View>
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
  profileCard: {
    backgroundColor: 'rgba(22, 28, 45, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 24,
    padding: 24,
    marginBottom: 30,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: 'rgba(59, 130, 246, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
  },
  profileInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  displayName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
  },
  email: {
    fontSize: 14,
    color: '#94a3b8',
    fontFamily: 'Inter-Regular',
    marginBottom: 12,
  },
  roleTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(6, 182, 212, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.3)',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
  },
  roleText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#06b6d4',
    fontFamily: 'Inter-SemiBold',
  },
  bio: {
    fontSize: 14,
    color: '#e2e8f0',
    fontFamily: 'Inter-Regular',
    lineHeight: 20,
  },
  statsContainer: {
    marginBottom: 30,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    backgroundColor: 'rgba(22, 28, 45, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 12,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 12,
    color: '#94a3b8',
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
  badgesContainer: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
  },
  viewAllText: {
    fontSize: 14,
    color: '#06b6d4',
    fontFamily: 'Inter-SemiBold',
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  badgeCard: {
    width: '48%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  badgeCardLocked: {
    opacity: 0.4,
  },
  badgeIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  badgeName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
    marginBottom: 4,
  },
  badgeNameLocked: {
    color: '#64748b',
  },
  badgeTitle: {
    fontSize: 12,
    color: '#06b6d4',
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
  badgeTitleLocked: {
    color: '#475569',
  },
});