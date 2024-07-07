import { useDynamicStyles } from "@/styles/styles";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
}

export function ViewContainer({ children }: Props) {
  const { container } = useDynamicStyles();
  return <SafeAreaProvider style={container}>{children}</SafeAreaProvider>;
}
