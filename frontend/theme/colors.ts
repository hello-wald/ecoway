export interface ThemeColors {
  // Base colors
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;

  // Theme colors
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;

  // Utility and form colors
  border: string;
  shadow: string;

  // Status colors
  success: string;
  danger: string;

  primaryGradient: string[];
}

export const LightColors: ThemeColors = {
  background: '#FFFFFF',
  foreground: '#333333',
  muted: "#F6F8FA",
  mutedForeground: '#9CA3AF',

  primary: '#0CC25F',
  primaryForeground: '#FFFFFF',
  secondary: '#14F077',
  secondaryForeground: '#FFFFFF',
  accent: '#0286FF',
  accentForeground: '#FFFFFF',

  border: '#E5E7EB',
  shadow: '#101010',

  success: '#34C759',
  danger: '#FF3B30',

  primaryGradient: ["#0286FF", "#14F077"],
}

export const DarkColors: ThemeColors = {
  background: '#121212',
  foreground: '#FFFFFF',
  muted: "#1E1E1E",
  mutedForeground: '#B0B0B0',

  primary: '#0CC25F',
  primaryForeground: '#FFFFFF',
  secondary: '#14F077',
  secondaryForeground: '#FFFFFF',
  accent: '#0286FF',
  accentForeground: '#FFFFFF',

  border: '#2C2C2C',
  shadow: '#00000080',

  success: '#34C759',
  danger: '#FF3B30',

  primaryGradient: ["#0286FF", "#14F077"],
}