// src/theme/ThemeProvider.tsx
import React, { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';
import colors from './colors';

interface Theme {
  background: string;
  text: string;
  border: string;
  isDark: boolean;
}

const ThemeContext = createContext<Theme>({
  background: colors.backgroundLight,
  text: colors.textSecondary,
  border: colors.borderDefault,
  isDark: false,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const theme: Theme = {
    background: isDark ? colors.backgroundDark : colors.backgroundLight,
    text: isDark ? colors.textPrimary : colors.textSecondary,
    border: isDark ? colors.borderDark : colors.borderDefault,
    isDark,
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
