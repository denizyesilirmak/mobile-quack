import { ScrollView } from "react-native";
import { ScreenViewProps } from "./types";

const ScreenView = (props: ScreenViewProps) => {
  const {
    children,
    scrollable,
    style,
    contentContainerStyle,
  } = props;

  return (
    <ScrollView
      style={style}
      contentContainerStyle={
        contentContainerStyle
      }
      scrollEnabled={scrollable}
      bounces={false}
    >
      {children}
    </ScrollView>
  );
};

export default ScreenView;
