import { NextScreen } from "@/components/Button/NextScreen";
import { SkipButton } from "@/components/Button/SkipButton";
import { Circle } from "@/components/Elipse/Elipse";
import { PaginationDots } from "@/components/PaginationDots/PaginationDots";
import { ViewContainer } from "@/components/Screen/ScreenContainer";
import { Text } from "@/components/Text/Text";
import { colors } from "@/theme/colors";
import { useNavigation } from "@react-navigation/native";
import { Image, View } from "react-native";

export function OnboardingScreen2() {
  const navigation = useNavigation();

  return (
    <ViewContainer>
      <View style={{ position: "absolute", top: -40, left: -40 }}>
        <Circle color={colors.palette.pink} size={80} />
      </View>
      <View style={{ position: "absolute", top: 147.37, left: 287.88 }}>
        <Circle color={colors.palette.lightBlue} size={16} />
      </View>
      <View style={{ position: "absolute", top: 17.31, right: 14 }}>
        <SkipButton onPress={() => navigation.navigate("OnboardingScreen3")} />
      </View>
      <View style={{ width: "100%" }}>
        <Image
          source={require("@/images/onBoarding2.png")}
          style={{
            height: 450,
            width: "100%",
          }}
        />
      </View>

      <View style={{ alignItems: "center", gap: 26 }}>
        <PaginationDots isActive={2} />
        <View style={{ paddingHorizontal: 36 }}>
          <View>
            <Text.TitleLarge text="Plumber & expart nearby you" />
          </View>
          <Text.Paragraph
            text="Lorem ipsum is a placeholder text commonly used to demonstrate the
        visual."
          />
        </View>
        <NextScreen onPress={() => navigation.navigate("OnboardingScreen3")} />
      </View>
    </ViewContainer>
  );
}
