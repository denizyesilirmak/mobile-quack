import { tw } from "@/utils/tw";
import {
  Pressable,
  TextInput as RNTextInput,
  Text,
  View,
} from "react-native";
import { TextInputProps } from "./types";

const TextInput = (props: TextInputProps) => {
  const {
    placeholder,
    label,
    onChangeText,
    rightComponent,
    ...rest
  } = props;

  return (
    <View style={tw`w-full gap-2`}>
      <Text style={tw`pl-2`}>{label}</Text>
      <RNTextInput
        onChangeText={onChangeText}
        style={tw`py-4 px-4 rounded-xl w-full bg-gray-200`}
        placeholder={placeholder}
        placeholderTextColor={"gray"}
        {...rest}
      />
      {rightComponent && rightComponent}
    </View>
  );
};

export default TextInput;
