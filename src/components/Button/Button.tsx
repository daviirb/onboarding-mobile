import { useDynamicStyles } from "@/styles/styles";
import { colors } from "@/theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { TextComponent } from "../Text/Text";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

function PrimaryButton({ text, onPress }: ButtonProps) {
  const { primaryButton: primaruButton } = useDynamicStyles();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={primaruButton}>
        <TextComponent.ButtonText text={text} />
      </View>
    </TouchableOpacity>
  );
}

function SecondaryButton({ text, onPress }: ButtonProps) {
  const { secondaryButton } = useDynamicStyles();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={secondaryButton}>
        <TextComponent.ButtonText text={text} />
      </View>
    </TouchableOpacity>
  );
}

interface NextButtonProps {
  onPress: () => void;
}

function NextScreen({ onPress }: NextButtonProps) {
  const { roundedButton } = useDynamicStyles();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={roundedButton}>
        <AntDesign name="right" size={24} color={colors.palette.white} />
      </View>
    </TouchableOpacity>
  );
}

function SkipButton({ onPress }: NextButtonProps) {
  const { skipButton } = useDynamicStyles();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={skipButton}>
        <TextComponent.Tertiary text="Skip" />
      </View>
    </TouchableOpacity>
  );
}

export const Button = {
  PrimaryButton,
  SecondaryButton,
  NextScreen,
  SkipButton,
};
