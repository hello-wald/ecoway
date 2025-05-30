import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';
import {useColorScheme, ColorSchemeName} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeMode, ThemeContextType} from '@/types/theme';
import {LightColors, DarkColors, ThemeColors} from "@/theme/colors";
import {THEME_STORAGE_KEY} from "@/constants/storage-keys";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const systemColorScheme: ColorSchemeName = useColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load saved theme preference
  useEffect(() => {
    const loadThemePreference = async (): Promise<void> => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme && isValidThemeMode(savedTheme)) {
          setThemeMode(savedTheme as ThemeMode);
        }
      } catch (error) {
        console.error('Error loading theme preference:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadThemePreference();
  }, []);

  // Type guard for theme mode validation
  const isValidThemeMode = (mode: string): mode is ThemeMode => {
    return ['light', 'dark', 'system'].includes(mode);
  };

  // Save theme preference
  const saveThemePreference = async (mode: ThemeMode): Promise<void> => {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
  };

  // Determine current colors
  const getCurrentColors = (): ThemeColors => {
    const isDarkMode = themeMode === 'system'
      ? systemColorScheme === 'dark'
      : themeMode === 'dark';

    return isDarkMode ? DarkColors : LightColors;
  };

  const toggleTheme = (): void => {
    const newMode: ThemeMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
    saveThemePreference(newMode);
  };

  const setTheme = (mode: ThemeMode): void => {
    setThemeMode(mode);
    saveThemePreference(mode);
  };

  const currentColors = getCurrentColors();
  const isDarkMode = themeMode === 'system'
    ? systemColorScheme === 'dark'
    : themeMode === 'dark'

  const value: ThemeContextType = {
    Colors: currentColors,
    themeMode,
    isDark: isDarkMode,
    toggleTheme,
    setTheme,
    isLoading,
  };

  if (isLoading) {
    // TODO: return a loading component here
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};