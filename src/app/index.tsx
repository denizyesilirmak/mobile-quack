import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const Onboarding = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        title="Login"
        onPress={() => router.navigate("login")}
      />
      <Button
        title="Register"
        onPress={() => router.navigate("register")}
      />
    </View>
  );
};

export default Onboarding;
