import { SecondaryButton } from "@/components/Button/SecondaryButton";
import { Input } from "@/components/Input/Input";
import Logo from "@/components/logo";
import { useDynamicStyles } from "@/styles/styles";
import { Text, View } from "react-native";

export function LoginScreen() {
  const { dynamicLogo } = useDynamicStyles();
  const { container, title, paragraphTertiary } = useDynamicStyles();
  return (
    <View style={container}>
      <View>
        <Logo height={97} width={150} color={dynamicLogo.color} />
      </View>
      <View style={{ width: "100%", padding: 16, rowGap: 16 }}>
        <Text style={title}>Sign In</Text>
        <View style={{ rowGap: 6 }}>
          <Text style={paragraphTertiary}>Phone Number</Text>
          <View style={{ rowGap: 20 }}>
            <Input placeholder="Phone Number" />
            <SecondaryButton onPress={() => {}} text="Sign In" />
          </View>
          <View style={{ paddingHorizontal: 40 }}>
            <Text
              style={[
                paragraphTertiary,
                { textAlign: "center", marginTop: 63 },
              ]}
            >
              Sign in with
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>Google</Text>
              <Text>Facebook</Text>
              <Text>Apple</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
