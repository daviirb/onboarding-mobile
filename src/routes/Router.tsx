import { LoginScreen } from "@/screens/auth/LoginScreen";
import { SignUpScreen } from "@/screens/auth/SignUpScreen";
import { OnboardingScreen1 } from "@/screens/onboarding/OnboardingScreen1";
import { OnboardingScreen2 } from "@/screens/onboarding/OnboardingScreen2";
import { OnboardingScreen3 } from "@/screens/onboarding/OnboardingScreen3";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

export function Router() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}
        initialRouteName="OnboardingScreen1"
      >
        <>
          <Stack.Screen
            name="OnboardingScreen1"
            component={OnboardingScreen1}
          />
          <Stack.Screen
            name="OnboardingScreen2"
            component={OnboardingScreen2}
          />
          <Stack.Screen
            name="OnboardingScreen3"
            component={OnboardingScreen3}
          />
        </>

        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
