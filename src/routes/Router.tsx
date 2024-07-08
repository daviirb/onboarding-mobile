import { OnboardingProvider, useOnboarding } from "@/contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./AuthStack";
import { OnboardingStack } from "./OnboardingStack";

export type RouteParamList = {
  Auth: undefined;
  Onboarding: undefined;
};

function AppNavigator() {
  const { hasCompletedOnboarding, isLoading } = useOnboarding();

  if (isLoading) {
    return null; // Ou um componente de carregamento
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
