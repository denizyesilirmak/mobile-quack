import { StyleProp, ViewStyle } from "react-native";

type ScreenViewProps = {
  children: React.ReactNode;
  scrollable?: boolean;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export { type ScreenViewProps };
