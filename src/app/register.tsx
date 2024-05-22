import RegisterScreen from "@/screens/Register";
import { tw } from "@/utils/tw";
import { useSignUp } from "@clerk/clerk-expo";
import { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
} from "react-native";

const Register = () => {
  // const [user, setUser] = useState({
  //   emailAddress: "",
  //   password: "",
  // });

  // const { signUp, isLoaded, setActive } = useSignUp();

  // const handleSignUp = async () => {
  //   if (!isLoaded) {
  //     return;
  //   }
  //   try {
  //     console.log(user);
  //     const result = await signUp.create(user);
  //     console.log(
  //       result.createdSessionId,
  //       result.createdUserId
  //     );
  //     console.log(JSON.stringify(result));
  //     setActive({ session: result.createdSessionId });
  //   } catch (error: any) {
  //     error.errors.forEach((error: any) => {
  //       console.log(error.message);
  //     });
  //   }
  // };

  return <RegisterScreen />;
};

export default Register;
