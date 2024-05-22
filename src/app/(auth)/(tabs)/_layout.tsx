
import { Tabs } from "expo-router/tabs";

const AuthLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
      }}
    >
      <Tabs.Screen name="read" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
};

export default AuthLayout;
