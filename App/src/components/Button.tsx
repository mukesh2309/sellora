import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';
import { colors, spacing, typography } from '../theme';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  loading = false,
  style,
  disabled,
  ...props
}) => {
  const isOutline = variant === 'outline';
  const isSecondary = variant === 'secondary';

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || loading}
      style={[
        styles.button,
        isOutline && styles.buttonOutline,
        isSecondary && styles.buttonSecondary,
        (disabled || loading) && styles.buttonDisabled,
        style,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={isOutline ? colors.primary : colors.white}
          size="small"
        />
      ) : (
        <Text
          style={[
            styles.text,
            isOutline && styles.textOutline,
            isSecondary && styles.textSecondary,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  text: {
    ...typography.body,
    fontWeight: '600',
    color: colors.white,
  },
  textOutline: {
    color: colors.primary,
  },
  textSecondary: {
    color: colors.white,
  },
});
