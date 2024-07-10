import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";

interface OnboardingContextData {
  hasCompletedOnboarding: boolean;
  completeOnboarding: () => Promise<void>;
  isLoading: boolean;
}

const OnboardingContext = createContext<OnboardingContextData | undefined>(
  undefined
);

function useProvideOnboarding() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    loadOnboardingStatus();
  }, []);

  async function loadOnboardingStatus(): Promise<void> {
    try {
      const status = await AsyncStorage.getItem("@hasCompletedOnboarding");
      setHasCompletedOnboarding(status === "true");
    } catch (error) {
      Alert.alert("Erro ao carregar o status de onboarding", "Tente novamente");
    } finally {
      setIsLoading(false);
    }
  }

  async function completeOnboarding(): Promise<void> {
    try {
      await AsyncStorage.setItem("@hasCompletedOnboarding", "true");
      setHasCompletedOnboarding(true);
    } catch (error) {
      Alert.alert("Erro ao salvar o status de onboarding", "Tente novamente");
    }
  }

  return {
    hasCompletedOnboarding,
    completeOnboarding,
    isLoading,
  };
}

interface OnboardingProviderProps {
  children: ReactElement;
}

export const OnboardingProvider = ({ children }: OnboardingProviderProps) => {
  const onboarding = useProvideOnboarding();
  return (
    <OnboardingContext.Provider value={onboarding}>
      {children}
    </OnboardingContext.Provider>
  );
};

export function useOnboarding(): OnboardingContextData {
  const context = useContext(OnboardingContext);

  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }

  return context;
}
