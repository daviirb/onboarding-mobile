import { useDynamicStyles } from "@/styles/styles";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../Text/Text";

interface SkipButtonProps {
  onPress: () => void;
}

export function SkipButton({ onPress }: SkipButtonProps) {
  const { skipButton } = useDynamicStyles();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={skipButton}>
        <Text.Tertiary text="Skip" />
      </View>
    </TouchableOpacity>
  );
}
