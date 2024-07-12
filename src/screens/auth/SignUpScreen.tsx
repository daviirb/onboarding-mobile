import { Button } from "@/components/Button/Button";
import { Goback } from "@/components/Button/GoBack";
import { Input } from "@/components/Input/Input";
import Logo from "@/components/Logo/Logo";
import { useDynamicStyles } from "@/styles/styles";
import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export function SignUpScreen() {
  const {
    container,
    title,
    dynamicLogo,
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
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={container}>
          <View style={{ position: "absolute", top: 24, left: 18 }}>
            <Goback />
          </View>
          <View style={{ marginTop: 56 }}>
            <Logo height={97} width={150} color={dynamicLogo.color} />
          </View>
          <View style={{ width: "100%", padding: 16, rowGap: 16 }}>
            <Text style={title}>Sign Up</Text>
            <View style={{ rowGap: 18 }}>
              <View style={{ rowGap: 6 }}>
                <Text style={paragraphTertiary}>First Name</Text>
                <View style={{ rowGap: 20 }}>
                  <Input placeholder="First Name" />
                </View>
              </View>
              <View style={{ rowGap: 6 }}>
                <Text style={paragraphTertiary}>Last Name</Text>
                <View style={{ rowGap: 20 }}>
                  <Input placeholder="Last Name" />
                </View>
              </View>
              <View style={{ rowGap: 6 }}>
                <Text style={paragraphTertiary}>Phone Number</Text>
                <View style={{ rowGap: 20 }}>
                  <Input placeholder="Phone Number" />
                </View>
              </View>
              <View style={{ rowGap: 6 }}>
                <Text style={paragraphTertiary}>Email</Text>
                <View style={{ rowGap: 20 }}>
                  <Input placeholder="Email" />
                </View>
              </View>

              <View
                style={{ paddingHorizontal: 10, rowGap: 12, marginTop: 30 }}
              >
                <Button.SecondaryButton onPress={() => {}} text="Sign Up" />
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Text style={paragraphNeutral}>
                    Already have an Account?{" "}
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("LoginScreen")}
                  >
                    <Text style={paragraphPrimary}>Sign In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
