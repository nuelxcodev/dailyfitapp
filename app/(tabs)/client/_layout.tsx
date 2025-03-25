import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:"purple",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: "payment",
          tabBarIcon: ({ color }) => <Ionicons size={28} name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="property"
        options={{
          title: "Property",
          tabBarIcon: ({ color }) => <Ionicons size={28} name="pie-chart-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="document"
        options={{
          title: "document",
          tabBarIcon: ({ color }) => <Ionicons size={28} name="clipboard-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => <Ionicons size={28} name="cog-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
