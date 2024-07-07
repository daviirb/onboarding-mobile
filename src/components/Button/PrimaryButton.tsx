import { useDynamicStyles } from "@/styles/styles";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../Text/Text";

interface PrimaryButtonProps {
  text: string;
  onPress: () => void;
}

export function PrimaryButton({ text, onPress }: PrimaryButtonProps) {
  const { primaruButton } = useDynamicStyles();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={primaruButton}>
        <Text.ButtonText text={text} />
      </View>
    </TouchableOpacity>
  );
}
