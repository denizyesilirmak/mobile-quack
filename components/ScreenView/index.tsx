import { ScrollView } from "react-native";
import { ScreenViewProps } from "./types";

const ScreenView = (props: ScreenViewProps) => {
  const { children, scrollable, style } = props;

  return (
    <ScrollView
      style={style}
      scrollEnabled={scrollable}
      bounces={false}
    >
      {children}
    </ScrollView>
  );
};

export default ScreenView;
