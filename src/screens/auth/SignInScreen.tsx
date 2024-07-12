import { Button } from "@/components/Button/Button";
import Apple from "@/components/Icons/Apple";
import Facebook from "@/components/Icons/Facebook";
import Google from "@/components/Icons/Google";
import { Input } from "@/components/Input/Input";
import Logo from "@/components/Logo/Logo";
import { useDynamicStyles } from "@/styles/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";

interface SignInFormData {
  phoneNumber: string;
}

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^[0-9]+$/, "Phone Number must be only digits")
    .min(10, "Phone Number must be at least 10 digits"),
});

export function SignInScreen() {
  const navigation = useNavigation();

  const {
    container,
    title,
    dynamicLogo,
    dynamicIcon,
    paragraphTertiary,
    paragraphNeutral,
    paragraphPrimary,
  } = useDynamicStyles();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
  };

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
              <Controller
                control={control}
                name="phoneNumber"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="Phone Number"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.phoneNumber?.message}
                  />
                )}
              />
              <Button.SecondaryButton
                onPress={handleSubmit(onSubmit)}
                text="Sign In"
              />
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
