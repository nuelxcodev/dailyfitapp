import { View, Text, StyleSheet } from "react-native";
import React from "react";

const style = StyleSheet.create({
  container: {},
  headertext: {
    color:"red",
    fontFamily:"mono",
    fontSize:12
  },
});
const Homeheader = () => {
  return (
    <View style={style.container}>
      <Text style={style.headertext}>DailyFit</Text>
    </View>
  );
};

export default Homeheader;
