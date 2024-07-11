import { Button } from "@/components/Button/Button";
import Apple from "@/components/Icons/Apple";
import Facebook from "@/components/Icons/Facebook";
import Google from "@/components/Icons/Google";
import { Input } from "@/components/Input/Input";
import Logo from "@/components/Logo/Logo";
import { useDynamicStyles } from "@/styles/styles";
import { Text, View } from "react-native";

export function LoginScreen() {
  const { dynamicLogo, dynamicIcon } = useDynamicStyles();
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
            <Button.SecondaryButton onPress={() => {}} text="Sign In" />
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
                justifyContent: "space-around",
                paddingHorizontal: 16,
              }}
            >
              <Google
                color={dynamicIcon.backgroundColor}
                height={48}
                width={48}
                border={dynamicIcon.color}
              />
              <Facebook
                color={dynamicIcon.backgroundColor}
                height={48}
                width={48}
                border={dynamicIcon.color}
              />
              <Apple
                color={dynamicIcon.backgroundColor}
                height={48}
                width={48}
                border={dynamicIcon.color}
                logo={dynamicIcon.tintColor}
              />
            </View>
            <View style={{ padding: 10 }}></View>
          </View>
        </View>
      </View>
    </View>
  );
}
