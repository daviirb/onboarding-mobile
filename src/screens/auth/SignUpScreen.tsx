import { StyleSheet, Text, View } from "react-native";

export function SignUpScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>LOGO</Text>
        {/* Colocar Logo aqui */}
      </View>
      <View>
        <Text>SIGNUP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
