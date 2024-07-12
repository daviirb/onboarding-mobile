import { useDynamicStyles } from "@/styles/styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export function Goback() {
  const { dynamicIcon } = useDynamicStyles();
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color={dynamicIcon.tintColor} />
    </TouchableOpacity>
  );
}
