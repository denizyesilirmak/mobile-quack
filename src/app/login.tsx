import { tw } from "@/utils/tw";
import { Button, TextInput, View } from "react-native";

const Login = () => {
  return (
    <View
      style={tw`flex-1 justify-center items-center p-4 gap-4`}
    >
      <TextInput
        placeholder="Email"
        style={tw`py-4 px-4 rounded w-full bg-slate-100 border-slate-400 border`}
      />
      <TextInput
        placeholder="Password"
        style={tw`py-4 px-4 rounded w-full bg-slate-100 border-slate-400 border`}
      />
      <Button title="Login" onPress={() => {}} />
    </View>
  );
};

export default Login;
