import Logo from "@/components/Logo/Logo";
import { OnboardingProvider, useOnboarding } from "@/contexts/AuthContext";
import { useDynamicStyles } from "@/styles/styles";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { AuthStack } from "./AuthStack";
import { OnboardingStack } from "./OnboardingStack";

export type RouteParamList = {
  Auth: undefined;
  Onboarding: undefined;
};

function AppNavigator() {
  const { hasCompletedOnboarding, isLoading } = useOnboarding();
  const { containerSplash, dynamicLogo } = useDynamicStyles();

  if (isLoading) {
    return (
      <View style={containerSplash}>
        <Logo height={97} width={150} color={dynamicLogo.color} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {hasCompletedOnboarding ? <AuthStack /> : <OnboardingStack />}
    </NavigationContainer>
  );
}

export function Router() {
  return (
    <OnboardingProvider>
      <AppNavigator />
    </OnboardingProvider>
  );
}
