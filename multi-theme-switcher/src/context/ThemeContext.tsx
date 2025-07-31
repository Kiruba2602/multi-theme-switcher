import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type Theme = "theme1" | "theme2" | "theme3";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "selectedTheme";

/**
 * ThemeProvider component manages the app's theme and persists it to localStorage.
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useLocalStorage<Theme>(THEME_STORAGE_KEY, "theme1");

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

/**
 * Hook to easily use the ThemeContext throughout your app.
 * Throws an error if used outside the ThemeProvider.
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
