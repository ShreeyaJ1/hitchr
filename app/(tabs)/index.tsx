import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { 
  Zap, 
  Car, 
  TrendingUp, 
  Star, 
  MapPin, 
  Compass, 
  Target, 
  BookOpen,
  ChevronRight,
  Award
} from 'lucide-react-native';

// Mock user data - in production this would come from your entities
const mockUser = {
  display_name: 'Demo User',
  current_role: 'rider',
  tokens: 250,
  total_rides: 12,
  current_streak: 3,
  trust_score: 4.8,
  rto_collection: ['KA-01', 'DL-05', 'MH-12'],
  co2_saved: 23.5,
};

export default function HomeScreen() {
  const [currentUser, setCurrentUser] = useState(mockUser);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const quickActions = [
    {
      title: currentUser.current_role === 'pilot' ? 'Offer Ride' : 'Find Ride',
      description: currentUser.current_role === 'pilot' ? 'Share your journey' : 'Get a lift',
      icon: MapPin,
      color: '#00aaff',
      route: '/map',
    },
    {
      title: 'Explore Trails',
      description: 'Discover scenic routes',
      icon: Compass,
      color: '#8b5cf6',
      route: '/trails',
    },
    {
      title: 'Join Quests',
      description: 'Complete challenges',
      icon: Target,
      color: '#f59e0b',
      route: '/quests',
    },
    {
      title: 'Share Story',
      description: 'Tell your adventure',
      icon: BookOpen,
      color: '#06b6d4',
      route: '/stories',
    },
  ];

  const stats = [
    { title: "Tokens", value: currentUser.tokens.toLocaleString(), icon: Zap, color: "#fbbf24" },
    { title: "Rides", value: currentUser.total_rides.toLocaleString(), icon: Car, color: "#00aaff" },
    { title: "Streak", value: `${currentUser.current_streak} days`, icon: TrendingUp, color: "#10b981" },
    { title: "Rating", value: currentUser.trust_score.toFixed(1), icon: Star, color: "#8b5cf6" },
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
            <Text style={styles.greeting}>{getGreeting()},</Text>
            <Text style={styles.userName}>{currentUser.display_name}!</Text>
            <Text style={styles.subtitle}>Ready for your next adventure?</Text>
          </View>

          {/* Stats Grid - Simplified for mobile */}
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

          {/* Quick Actions - Decluttered */}
          <View style={styles.actionsContainer}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            <View style={styles.actionsGrid}>
              {quickActions.map((action, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.actionCard}
                  onPress={() => router.push(action.route)}
                  activeOpacity={0.7}
                >
                  <View style={[styles.actionIcon, { backgroundColor: `${action.color}20` }]}>
                    <action.icon size={24} color={action.color} />
                  </View>
                  <Text style={styles.actionTitle}>{action.title}</Text>
                  <Text style={styles.actionDescription}>{action.description}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Recent Activity Preview */}
          <View style={styles.activityContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recent Activity</Text>
              <TouchableOpacity onPress={() => router.push('/profile')}>
                <ChevronRight size={20} color="#94a3b8" />
              </TouchableOpacity>
            </View>
            <View style={styles.activityCard}>
              <View style={styles.activityIcon}>
                <Car size={24} color="#94a3b8" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>No recent rides</Text>
                <Text style={styles.activitySubtitle}>Your ride history will appear here</Text>
              </View>
            </View>
          </View>

          {/* Achievement Preview */}
          <View style={styles.achievementContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Latest Achievement</Text>
              <TouchableOpacity onPress={() => router.push('/profile')}>
                <ChevronRight size={20} color="#94a3b8" />
              </TouchableOpacity>
            </View>
            <View style={styles.achievementCard}>
              <View style={styles.achievementIcon}>
                <Award size={24} color="#fbbf24" />
              </View>
              <View style={styles.achievementContent}>
                <Text style={styles.achievementTitle}>First Steps</Text>
                <Text style={styles.achievementSubtitle}>Welcome to HITCH! 🎉</Text>
              </View>
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
  greeting: {
    fontSize: 18,
    color: '#e2e8f0',
    fontFamily: 'Inter-Regular',
  },
  userName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    fontFamily: 'Inter-Regular',
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 12,
    color: '#94a3b8',
    fontFamily: 'Inter-Regular',
  },
  actionsContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    backgroundColor: 'rgba(22, 28, 45, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 12,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 12,
    color: '#94a3b8',
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
  activityContainer: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  activityCard: {
    backgroundColor: 'rgba(22, 28, 45, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 4,
  },
  activitySubtitle: {
    fontSize: 14,
    color: '#94a3b8',
    fontFamily: 'Inter-Regular',
  },
  achievementContainer: {
    marginBottom: 30,
  },
  achievementCard: {
    backgroundColor: 'rgba(22, 28, 45, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 4,
  },
  achievementSubtitle: {
    fontSize: 14,
    color: '#fbbf24',
    fontFamily: 'Inter-Regular',
  },
});