import { useDynamicStyles } from "@/styles/styles";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  placeholder: string;
  errorMessage?: string;
}

export function Input({
  placeholder,
  onBlur,
  onChangeText,
  value,
  errorMessage,
}: InputProps) {
  const { inputText, errorText } = useDynamicStyles();

  return (
    <View>
      <TextInput
        style={[inputText]}
        placeholder={placeholder}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={inputText.color}
      />
      {errorMessage ? <Text style={errorText}>{errorMessage}</Text> : null}
    </View>
  );
}
