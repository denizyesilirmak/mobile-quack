import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { tw } from "@/utils/tw";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const RegisterScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    emailAddress: "",
    name: "",
    password: "",
  });

  return (
    <View
      style={tw`flex-1 justify-center items-center p-4 gap-2`}
    >
      <TextInput
        label="Email"
        placeholder="Enter your email"
        onChangeText={(text) =>
          setUser({ ...user, emailAddress: text })
        }
        keyboardType="email-address"
      />
      <TextInput
        label="Name"
        placeholder="Enter your name"
        onChangeText={(text) =>
          setUser({ ...user, name: text })
        }
      />
      <TextInput
        label="Password"
        placeholder="Enter your password"
        onChangeText={(text) =>
          setUser({ ...user, password: text })
        }
        secureTextEntry={!showPassword}
        rightComponent={
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            style={tw`absolute right-4 top-1/2 transform -translate-y-1/2`}
          >
            <Ionicons
              name={
                showPassword
                  ? "eye-off-outline"
                  : "eye-outline"
              }
              size={24}
              color="gray"
            />
          </Pressable>
        }
      />
      <Text
        style={tw`text-xs text-gray-500 text-center py-4`}
      >
        By creating an account, you agree to our Terms of
        Service and Privacy Policy
      </Text>
      <Button
        label="Create Account"
        onPress={() => console.log("Create Account")}
      />
    </View>
  );
};

export default RegisterScreen;
