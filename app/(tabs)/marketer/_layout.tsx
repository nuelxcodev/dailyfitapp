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
        name="referals"
        options={{
          title: "Referals",
          tabBarIcon: ({ color }) => <Ionicons size={28} name="people" color={color} />,
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
        name="report"
        options={{
          title: "Report",
          tabBarIcon: ({ color }) => <Ionicons size={28} name="clipboard" color={color} />,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => <Ionicons size={28} name="cog-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
