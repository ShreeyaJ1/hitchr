import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { globalStyles, colors, spacing } from '../styles/globalStyles';
import GlassCard from '../components/GlassCard';

export default function LeaderboardScreen() {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.container}>
        <GlassCard>
          <Text style={globalStyles.title}>Leaderboard</Text>
          <Text style={globalStyles.textSecondary}>
            See how you rank among fellow hitchers
          </Text>
        </GlassCard>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
});