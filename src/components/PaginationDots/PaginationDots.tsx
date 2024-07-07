import { useDynamicStyles } from "@/styles/styles";
import { View } from "react-native";
import { Circle } from "../Elipse/Elipse";

interface IPaginationDots {
  isActive: number;
}

export function PaginationDots({ isActive }: IPaginationDots) {
  const { activeDot, inactiveDot, paginationDots } = useDynamicStyles();

  return (
    <View style={paginationDots}>
      <Circle
        color={isActive === 1 ? activeDot.color : inactiveDot.color}
        size={8}
        style={isActive === 1 ? { opacity: 1 } : { opacity: 0.2 }}
      />
      <Circle
        color={isActive === 2 ? activeDot.color : inactiveDot.color}
        size={8}
        style={isActive === 2 ? { opacity: 1 } : { opacity: 0.2 }}
      />
      <Circle
        color={isActive === 3 ? activeDot.color : inactiveDot.color}
        size={8}
        style={isActive === 3 ? { opacity: 1 } : { opacity: 0.2 }}
      />
    </View>
  );
}
