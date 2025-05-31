import {ThemeColors} from "@/theme/colors";

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  Colors: ThemeColors;
  themeMode: ThemeMode;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
  isLoading: boolean;
}