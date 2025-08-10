import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { globalStyles, colors, spacing } from '../styles/globalStyles';
import GlassCard from '../components/GlassCard';

export default function RewardsScreen() {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.container}>
        <GlassCard>
          <Text style={globalStyles.title}>Rewards Store</Text>
          <Text style={globalStyles.textSecondary}>
            Browse and redeem rewards with your tokens
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