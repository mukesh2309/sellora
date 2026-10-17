import { TextStyle, Platform } from 'react-native';

export const fonts = {
  regular: Platform.select({
    ios: 'PlusJakartaSans-Regular',
    android: 'PlusJakartaSans-Regular',
    default: 'Plus Jakarta Sans',
  }),
  medium: Platform.select({
    ios: 'PlusJakartaSans-Medium',
    android: 'PlusJakartaSans-Medium',
    default: 'Plus Jakarta Sans',
  }),
  semiBold: Platform.select({
    ios: 'PlusJakartaSans-SemiBold',
    android: 'PlusJakartaSans-SemiBold',
    default: 'Plus Jakarta Sans',
  }),
  bold: Platform.select({
    ios: 'PlusJakartaSans-Bold',
    android: 'PlusJakartaSans-Bold',
    default: 'Plus Jakarta Sans',
  }),
  extraBold: Platform.select({
    ios: 'PlusJakartaSans-ExtraBold',
    android: 'PlusJakartaSans-ExtraBold',
    default: 'Plus Jakarta Sans',
  }),
};

export const typography: Record<string, TextStyle> = {
  h1: {
    fontFamily: fonts.bold,
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
  },
  h2: {
    fontFamily: fonts.bold,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 28,
  },
  h3: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
  subtitle: {
    fontFamily: fonts.medium,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
  },
  body: {
    fontFamily: fonts.regular,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
  },
  bodyMedium: {
    fontFamily: fonts.medium,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
  },
  bodySmall: {
    fontFamily: fonts.regular,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  caption: {
    fontFamily: fonts.regular,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
  button: {
    fontFamily: fonts.semiBold,
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
  },
};

export default typography;
