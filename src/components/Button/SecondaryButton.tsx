import { useDynamicStyles } from "@/styles/styles";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../Text/Text";

interface PrimaryButtonProps {
  text: string;
  onPress: () => void;
}

export function SecondaryButton({ text, onPress }: PrimaryButtonProps) {
  const { secondaryButton } = useDynamicStyles();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={secondaryButton}>
        <Text.ButtonText text={text} />
      </View>
    </TouchableOpacity>
  );
}
