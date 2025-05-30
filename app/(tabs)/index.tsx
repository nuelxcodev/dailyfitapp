import { View, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Homeheader from "@/component/ui/home/Header";


export default function Homescreen() {
  return (
    <View style={style.container}>
      <Homeheader/>
      <Text>Homescreen</Text>
      <TouchableOpacity style={style.floatingButton}>
        <MaterialCommunityIcons name="plus" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  floatingButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    padding: 10,
    borderRadius: 100,
    shadowColor: "grey",
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 10,
    bottom: 10,
    right: 10,
  },
});
