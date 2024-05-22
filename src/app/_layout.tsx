import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { Stack } from "expo-router/stack";
import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";

export const unstable_settings = {
  initialRouteName: "onboarding",
};

const CLERK_PUBLISHABLE_KEY = process.env
  .EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      router.replace("(auth)/(tabs)/read");
    }
  }, [isSignedIn]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
};

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const RootLayoutNav = () => {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      // tokenCache={tokenCache}
    >
      <InitialLayout />
    </ClerkProvider>
  );
};

export default RootLayoutNav;
