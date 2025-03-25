import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Tabheader() {
  return (
    <View style={styles.titleContainer}>
      <View>
        <Text style={{ fontSize: 15 }}>
          Welcome <Text style={{ fontWeight: "700" }}>Chukwuemeka</Text>
        </Text>
        <Text style={{ fontSize: 12, color: "#0004" }}>Invest in property to start earning</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Ionicons name="notifications-outline" size={30} />
        <View style={styles.profileCircle}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  profileCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "black",
  },
});
