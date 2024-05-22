import { tw } from "@/utils/tw";
import { Pressable, Text } from "react-native";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  const { onPress, label, style } = props;

  return (
    <Pressable
      onPress={onPress}
      style={tw`bg-gray-800 py-4 px-8 rounded-xl w-full ${style}`}
    >
      <Text style={tw`text-white text-center`}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;
