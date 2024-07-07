import { useDynamicStyles } from "@/styles/styles";
import { View, ViewStyle } from "react-native";
interface ICircularComponentProps {
  size: number; // Tamanho do círculo
  color: string; // Cor do círculo
  style?: ViewStyle; // Estilos adicionais opcionais
}

export function Circle({ color, size, style }: ICircularComponentProps) {
  const { circle } = useDynamicStyles();
  return (
    <View
      style={[
        circle,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
        },
        style,
      ]}
    />
  );
}
