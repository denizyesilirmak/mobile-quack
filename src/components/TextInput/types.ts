import { TextInputProps as RNTextInputProps } from "react-native";

type TextInputProps = {
  placeholder?: string;
  label?: string;
  rightComponent?: React.ReactNode;
  onChangeText: (text: string) => void;
} & RNTextInputProps;

export type { TextInputProps };
