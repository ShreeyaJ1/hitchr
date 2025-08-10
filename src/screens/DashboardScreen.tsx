import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { globalStyles, colors, spacing } from '../styles/globalStyles';
import StatsGrid from '../components/StatsGrid';
import QuickActions from '../components/QuickActions';
import GlassCard from '../components/GlassCard';

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

export default function DashboardScreen() {
  const [currentUser, setCurrentUser] = useState(mockUser);
  const [isLoading, setIsLoading] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>{getGreeting()},</Text>
          <Text style={styles.userName}>{currentUser.display_name}!</Text>
          <Text style={styles.subtitle}>Ready for your next adventure?</Text>
        </View>

        {/* Stats Grid */}
        <StatsGrid 
          tokens={currentUser.tokens}
          totalRides={currentUser.total_rides}
          currentStreak={currentUser.current_streak}
          trustScore={currentUser.trust_score}
          rtoCount={currentUser.rto_collection?.length || 0}
          co2Saved={currentUser.co2_saved}
        />

        {/* Quick Actions */}
        <QuickActions currentRole={currentUser.current_role} />

        {/* Recent Activity Preview */}
        <GlassCard>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityItem}>
            <Text style={globalStyles.text}>No recent rides</Text>
            <Text style={globalStyles.textMuted}>Your ride history will appear here</Text>
          </View>
        </GlassCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
  },
  header: {
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },
  greeting: {
    ...globalStyles.text,
    fontSize: 18,
    color: colors.textSecondary,
  },
  userName: {
    ...globalStyles.title,
    fontSize: 28,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...globalStyles.textSecondary,
  },
  sectionTitle: {
    ...globalStyles.subtitle,
    marginBottom: spacing.md,
  },
  activityItem: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
});