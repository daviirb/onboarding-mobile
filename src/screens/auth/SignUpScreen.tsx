import { Button } from "@/components/Button/Button";
import { Goback } from "@/components/Button/GoBack";
import { Input } from "@/components/Input/Input";
import Logo from "@/components/Logo/Logo";
import { useDynamicStyles } from "@/styles/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";

interface SignUpFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^[0-9]+$/, "Phone Number must be only digits")
    .min(10, "Phone Number must be at least 10 digits"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
});

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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

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
                <Controller
                  control={control}
                  name="firstName"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="First Name"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      errorMessage={errors.firstName?.message}
                    />
                  )}
                />
              </View>
              <View style={{ rowGap: 6 }}>
                <Text style={paragraphTertiary}>Last Name</Text>
                <Controller
                  control={control}
                  name="lastName"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="Last Name"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      errorMessage={errors.lastName?.message}
                    />
                  )}
                />
              </View>
              <View style={{ rowGap: 6 }}>
                <Text style={paragraphTertiary}>Phone Number</Text>
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
              </View>
              <View style={{ rowGap: 6 }}>
                <Text style={paragraphTertiary}>Email</Text>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="Email"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      errorMessage={errors.email?.message}
                    />
                  )}
                />
              </View>

              <View
                style={{ paddingHorizontal: 10, rowGap: 12, marginTop: 30 }}
              >
                <Button.SecondaryButton
                  onPress={handleSubmit(onSubmit)}
                  text="Sign Up"
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Text style={paragraphNeutral}>Already have an Account?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SignInScreen")}
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
