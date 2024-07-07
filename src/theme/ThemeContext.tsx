import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Appearance } from "react-native";
import { colors } from "./colors";
import { Theme } from "./themeTypes";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const systemColorScheme = Appearance.getColorScheme();
  const getSystemTheme = () => {
    return systemColorScheme === "dark" ? colors.darkTheme : colors.lightTheme;
  };

  const [theme, setTheme] = useState<Theme>(getSystemTheme());

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === colors.lightTheme ? colors.darkTheme : colors.lightTheme
    );
  };

  useEffect(() => {
    setTheme(getSystemTheme());
  }, [systemColorScheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
