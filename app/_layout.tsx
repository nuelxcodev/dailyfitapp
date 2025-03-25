import { router, Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function AuthLayout() {
  const Router = useRouter();

  useEffect(() => {
    SplashScreen.hideAsync();
    // router.replace("/(tabs)/marketer/home");
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SafeAreaView>
  );
}
