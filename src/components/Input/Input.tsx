import { useDynamicStyles } from "@/styles/styles";
import { TextInput } from "react-native";

interface InputProps {
  placeholder: string;
}
export function Input({ placeholder }: InputProps) {
  const { inputText } = useDynamicStyles();
  return (
    <TextInput
      style={inputText}
      autoCapitalize={"characters"}
      placeholder={placeholder}
      placeholderTextColor={inputText.color}
    />
  );
}
