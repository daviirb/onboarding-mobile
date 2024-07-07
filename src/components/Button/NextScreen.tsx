import { useDynamicStyles } from "@/styles/styles";
import { colors } from "@/theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

interface INextScreen {
  onPress: () => void;
}

export function NextScreen({ onPress }: INextScreen) {
  const { roundedButton } = useDynamicStyles();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={roundedButton}>
        <AntDesign name="right" size={24} color={colors.palette.white} />
      </View>
    </TouchableOpacity>
  );
}
