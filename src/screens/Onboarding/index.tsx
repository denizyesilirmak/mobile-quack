import ScreenView from "@/components/ScreenView";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScreenView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text>Onboarding</Text>
      </ScreenView>
    </SafeAreaView>
  );
};

export default Onboarding;
