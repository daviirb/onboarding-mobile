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
    primaryButton: {
      width: 166,
      borderRadius: 8,
      paddingHorizontal: 22,
      paddingVertical: 12,
      backgroundColor: theme.primary,
      gap: 10,
    },
    secondaryButton: {
      width: "100%",
      borderRadius: 8,
      paddingHorizontal: 22,
      paddingVertical: 12,
      backgroundColor: theme.buttonSecondary,
      gap: 10,
    },
    titleLarge: {
      fontSize: 32,
      color: theme.text,
      lineHeight: 41,
      fontWeight: "700",
      textAlign: "center",
    },
    title: {
      fontSize: 32,
      color: theme.text,
      lineHeight: 48,
      fontWeight: "600",
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
    paragraphTertiary: {
      fontSize: 15,
      color: theme.textSecondary,
      lineHeight: 24,
      fontWeight: "600",
    },
    inputText: {
      width: "100%",
      borderRadius: 8,
      padding: 12,
      gap: 10,
      color: theme.placeholderTextColor,
      backgroundColor: theme.inputText,
    },
    buttonText: {
      fontSize: 15,
      color: theme.text,
      lineHeight: 24,
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
    dynamicLogo: {
      color: theme.dynamicLogo,
    },
    dynamicIcon: {
      color: theme.dynamicIconBorder,
      backgroundColor: theme.dynamicIconBG,
      tintColor: theme.dynamicIconLogo,
    },
  });
}
