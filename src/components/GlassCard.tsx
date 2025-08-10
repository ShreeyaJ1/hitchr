import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { globalStyles, colors, borderRadius, spacing } from '../styles/globalStyles';

interface GlassCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
}

export default function GlassCard({ children, style, padding = spacing.lg }: GlassCardProps) {
  return (
    <View style={[styles.card, { padding }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.surfaceLight,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.md,
    ...globalStyles.shadow,
  },
});