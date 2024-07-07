import { useDynamicStyles } from "@/styles/styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../Text/Text";

interface ISkipButtonProps {
  onPress: () => void;
}

export function SkipButton({ onPress }: ISkipButtonProps) {
  const { skipButton } = useDynamicStyles();
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={skipButton}>
        <Text.Tertiary text="Skip" />
      </View>
    </TouchableOpacity>
  );
}
