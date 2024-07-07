import { Router } from "@/routes/Router";
import { ThemeProvider } from "@/theme/ThemeContext";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StatusBar hidden />
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
