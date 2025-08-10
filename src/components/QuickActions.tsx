import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GlassCard from './GlassCard';
import { globalStyles, colors, spacing, borderRadius } from '../styles/globalStyles';

interface ActionItem {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  screen: string;
}

interface QuickActionsProps {
  currentRole?: string;
}

export default function QuickActions({ currentRole = 'rider' }: QuickActionsProps) {
  const navigation = useNavigation();

  // Simplified actions for mobile - only show the most important ones
  const actions: ActionItem[] = [
    {
      title: currentRole === 'pilot' ? 'Offer Ride' : 'Find Ride',
      description: currentRole === 'pilot' ? 'Share journey' : 'Get a lift',
      icon: 'map',
      color: colors.primary,
      screen: 'Map',
    },
    {
      title: 'Explore Trails',
      description: 'Scenic routes',
      icon: 'compass',
      color: colors.purple,
      screen: 'Trails',
    },
    {
      title: 'Join Quests',
      description: 'Challenges',
      icon: 'trophy',
      color: colors.warning,
      screen: 'Quests',
    },
    {
      title: 'Share Story',
      description: 'Your adventure',
      icon: 'book',
      color: colors.cyan,
      screen: 'Stories',
    },
  ];

  const handleActionPress = (screen: string) => {
    navigation.navigate(screen as never);
  };

  return (
    <GlassCard>
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsGrid}>
        {actions.map((action, index) => (
          <TouchableOpacity
            key={index}
            style={styles.actionButton}
            onPress={() => handleActionPress(action.screen)}
            activeOpacity={0.7}
          >
            <View style={[styles.actionIcon, { backgroundColor: `${action.color}20` }]}>
              <Ionicons name={action.icon} size={20} color={action.color} />
            </View>
            <Text style={styles.actionTitle}>{action.title}</Text>
            <Text style={styles.actionDescription}>{action.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    ...globalStyles.subtitle,
    marginBottom: spacing.lg,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '48%',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.surfaceLight,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  actionTitle: {
    ...globalStyles.text,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  actionDescription: {
    ...globalStyles.textMuted,
    textAlign: 'center',
  },
});