import { Button } from "@/components/Button/Button";
import { Circle } from "@/components/Elipse/Elipse";
import { PaginationDots } from "@/components/PaginationDots/PaginationDots";
import { ViewContainer } from "@/components/Screen/ScreenContainer";
import { Text } from "@/components/Text/Text";
import { useOnboarding } from "@/contexts/AuthContext";
import { colors } from "@/theme/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Image, View } from "react-native";

export function OnboardingScreen3() {
  const { completeOnboarding } = useOnboarding();
  return (
    <ViewContainer>
      <View style={{ position: "absolute", top: -40, left: -40 }}>
        <Circle color={colors.palette.pink} size={80} />
      </View>
      <View style={{ position: "absolute", top: 147.37, left: 287.88 }}>
        <Circle color={colors.palette.lightBlue} size={16} />
      </View>
      <View style={{ width: "100%" }}>
        <Image
          source={require("@/images/onBoarding3.png")}
          style={{
            height: 450,
            width: "100%",
          }}
        />
      </View>

      <View style={{ alignItems: "center", gap: 26 }}>
        <PaginationDots isActive={3} />
        <View style={{ paddingHorizontal: 36 }}>
          <View>
            <Text.TitleLarge text="Professional home cleaning" />
          </View>
          <Text.Paragraph
            text="Lorem ipsum is a placeholder text commonly used to demonstrate the
        visual."
          />
        </View>
        <Button.PrimaryButton
          text="Get Started"
          onPress={async () => {
            await completeOnboarding();
            handleFinishOnboarding;
          }}
        />
      </View>
    </ViewContainer>
  );
}

function handleFinishOnboarding() {
  const navigation = useNavigation();
  return async () => {
    try {
      await AsyncStorage.setItem("hasCompletedOnboarding", "true");
      navigation.navigate("Auth");
    } catch (error) {
      console.error("Failed to save onboarding status", error);
    }
  };
}
