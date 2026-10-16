import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Header, Button } from '../components';
import { colors, spacing, typography } from '../theme';

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header
        title="Sellora"
        subtitle="Your Marketplace & E-commerce Platform"
      />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Welcome to Sellora 👋</Text>
          <Text style={styles.cardDescription}>
            Your project structure has been cleanly initialized. You can now build
            screens, components, and services inside the app directory.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Project Structure</Text>
          <View style={styles.structureList}>
            <Text style={styles.structureItem}>📁 app/components - Reusable UI elements</Text>
            <Text style={styles.structureItem}>📁 app/screens - Screen views & flows</Text>
            <Text style={styles.structureItem}>📁 app/navigation - App navigation & routing</Text>
            <Text style={styles.structureItem}>📁 app/theme - Colors, spacing, & fonts</Text>
            <Text style={styles.structureItem}>📁 app/hooks - Custom React hooks</Text>
            <Text style={styles.structureItem}>📁 app/services - API calls & networking</Text>
            <Text style={styles.structureItem}>📁 app/utils - Helpers & utilities</Text>
            <Text style={styles.structureItem}>📁 app/constants - Constants & config</Text>
            <Text style={styles.structureItem}>📁 app/types - TypeScript interfaces</Text>
          </View>
        </View>

        <View style={styles.actionSection}>
          <Button
            title="Get Started"
            onPress={() => console.log('Get Started pressed')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: spacing.lg,
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    ...typography.h3,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  cardDescription: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  structureList: {
    gap: spacing.sm,
  },
  structureItem: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  actionSection: {
    marginTop: spacing.sm,
    marginBottom: spacing.xl,
  },
});
