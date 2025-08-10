import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlassCard from './GlassCard';
import { globalStyles, colors, spacing, borderRadius } from '../styles/globalStyles';

interface StatItem {
  title: string;
  value: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

interface StatsGridProps {
  tokens?: number;
  totalRides?: number;
  currentStreak?: number;
  trustScore?: number;
  rtoCount?: number;
  co2Saved?: number;
}

export default function StatsGrid({
  tokens = 0,
  totalRides = 0,
  currentStreak = 0,
  trustScore = 5.0,
  rtoCount = 0,
  co2Saved = 0
}: StatsGridProps) {
  const stats: StatItem[] = [
    {
      title: "Tokens",
      value: tokens.toLocaleString(),
      icon: "flash",
      color: colors.yellow
    },
    {
      title: "Rides",
      value: totalRides.toLocaleString(),
      icon: "car",
      color: colors.primary
    },
    {
      title: "Streak",
      value: `${currentStreak} days`,
      icon: "trending-up",
      color: colors.green
    },
    {
      title: "Rating",
      value: trustScore.toFixed(1),
      icon: "star",
      color: colors.purple
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {stats.map((stat, index) => (
          <GlassCard key={index} style={styles.statCard} padding={spacing.md}>
            <View style={[styles.iconContainer, { backgroundColor: `${stat.color}20` }]}>
              <Ionicons name={stat.icon} size={24} color={stat.color} />
            </View>
            <Text style={styles.value}>{stat.value}</Text>
            <Text style={styles.title}>{stat.title}</Text>
          </GlassCard>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  value: {
    ...globalStyles.title,
    fontSize: 20,
    marginBottom: spacing.xs,
  },
  title: {
    ...globalStyles.textMuted,
    textAlign: 'center',
  },
});