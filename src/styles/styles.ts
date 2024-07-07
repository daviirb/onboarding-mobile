import { useTheme } from "@/theme/ThemeContext";
import { StyleSheet } from "react-native";

export function useDynamicStyles() {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.background,
    },
    titleLarge: {
      fontSize: 32,
      color: theme.text,
      lineHeight: 41,
      fontWeight: "700",
      textAlign: "center",
    },
    titleSmall: {
      fontSize: 32,
      color: theme.text,
      lineHeight: 41,
      fontWeight: "700",
    },
    paragraph: {
      fontSize: 15,
      color: theme.textSecondary,
      lineHeight: 26,
      fontWeight: "500",
      textAlign: "center",
    },
    paragraphSecondary: {
      fontSize: 14,
      color: theme.textTertiary,
      lineHeight: 16.94,
      fontWeight: "500",
      textAlign: "center",
    },
    roundedButton: {
      padding: 12,
      gap: 8,
      borderRadius: 100,
      backgroundColor: theme.buttonPrimary,
    },
    skipButton: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      gap: 10,
      borderRadius: 100,
      backgroundColor: theme.icon,
    },
    circle: {
      justifyContent: "center",
      alignItems: "center",
    },
    paginationDots: {
      flexDirection: "row",
      alignItems: "center",
      width: 48,
      justifyContent: "space-between",
    },
    activeDot: {
      color: theme.activeDot,
    },
    inactiveDot: {
      color: theme.inactiveDot,
    },
  });
}
