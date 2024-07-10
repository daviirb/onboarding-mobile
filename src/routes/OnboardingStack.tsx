import { OnboardingScreen1 } from "@/screens/onboarding/OnboardingScreen1";
import { OnboardingScreen2 } from "@/screens/onboarding/OnboardingScreen2";
import { OnboardingScreen3 } from "@/screens/onboarding/OnboardingScreen3";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type OnboardingStackParamList = {
  OnboardingScreen1: undefined;
  OnboardingScreen2: undefined;
  OnboardingScreen3: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export function OnboardingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="OnboardingScreen1"
    >
      <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} />
      <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} />
      <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} />
    </Stack.Navigator>
  );
}
