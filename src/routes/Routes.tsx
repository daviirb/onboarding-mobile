import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./AuthStack";
import { OnboardingStack } from "./OnboardingStack";

export function Router() {
  const hasCompletedOnboarding = false;
  return (
    <NavigationContainer>
      {hasCompletedOnboarding ? <AuthStack /> : <OnboardingStack />}
    </NavigationContainer>
  );
}
