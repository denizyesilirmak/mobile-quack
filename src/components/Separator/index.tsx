import { tw } from "@/utils/tw";
import { Text, View } from "react-native";

type SeparatorProps = {
  label?: string;
};

const Separator = (props: SeparatorProps) => {
  const { label } = props;

  if (label) {
    return (
      <View
        style={tw`flex flex-row items-center justify-center`}
      >
        <View style={tw`bg-gray-800 h-px flex`} />
        <Text style={tw`text-gray-800 mx-2`}>{label}</Text>
        <View style={tw`bg-gray-800 h-px flex`} />
      </View>
    );
  } else {
    return (
      <View
        style={tw`flex-row items-center justify-center`}
      >
        <View style={tw`bg-gray-800 h-px w-full`} />
      </View>
    );
  }
};

export default Separator;
