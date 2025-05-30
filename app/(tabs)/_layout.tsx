import { View, Text } from "react-native";
import React from "react";
import { Navigator, Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabScreen() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:"red"
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Ionicons name="home-sharp" {...{ color, size }} />,
        }}
      />
      <Tabs.Screen
        name="liveworkout"
        options={{
            title:"workout",
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="dumbbell" {...{ color, size }} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({ color, size }) => <Ionicons name="chatbox" {...{ color, size }} />,
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="archive" {...{ color, size }} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="cog" {...{ color, size }} />,
        }}
      />
    </Tabs>
  );
}
