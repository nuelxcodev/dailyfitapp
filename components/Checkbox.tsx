import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CustomCheckboxProps {
  checked: boolean;
  onPress: () => void;
  style?: ViewStyle;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.checkbox, { backgroundColor: checked ? "#9713ca" : "#fff" }, style]}>
      {checked && <Ionicons name="checkmark" size={14} color="#fff" />}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#9713ca",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
