import { Button } from "@/components/Button/Button";
import Apple from "@/components/Icons/Apple";
import Facebook from "@/components/Icons/Facebook";
import Google from "@/components/Icons/Google";
import { Input } from "@/components/Input/Input";
import Logo from "@/components/Logo/Logo";
import { useDynamicStyles } from "@/styles/styles";
import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export function LoginScreen() {
  const {
    container,
    title,
    dynamicLogo,
    dynamicIcon,
    paragraphTertiary,
    paragraphNeutral,
    paragraphPrimary,
  } = useDynamicStyles();
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={container}>
        <View style={{ marginTop: 56 }}>
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
                  padding: 16,
                }}
              >
                <Google
                  color={dynamicIcon.backgroundColor}
                  size={48}
                  border={dynamicIcon.color}
                />
                <Facebook
                  color={dynamicIcon.backgroundColor}
                  size={48}
                  border={dynamicIcon.color}
                />
                <Apple
                  color={dynamicIcon.backgroundColor}
                  size={48}
                  border={dynamicIcon.color}
                  logo={dynamicIcon.tintColor}
                />
              </View>
            </View>
            <View style={{ paddingHorizontal: 10, rowGap: 12, marginTop: 63 }}>
              <Button.TertiaryButton
                onPress={() => {}}
                text="Continue as a Guest"
              />
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Text style={paragraphNeutral}>Create a New Account </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SignUpScreen")}
                >
                  <Text style={paragraphPrimary}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
