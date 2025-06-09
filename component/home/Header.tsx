import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const style = StyleSheet.create({
  flexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    padding: 10,
    backgroundColor: "white",
  },
  headertext: {
    color: "red",
    fontFamily: "mono",
    fontSize: 33,
    fontWeight: "900",
    flex: 3,
  },
  iconContainer: {
    // flex: 1,
    // justifyContent: "space-around",
    gap:15,
    paddingInline:10
  },
  likesContainter: {
    position: "relative",
  },
  likesCount: {
    position: "absolute",
    right: -3,
    backgroundColor: "red",
    color: "white",
    padding: 2,
    top: -1,
    borderRadius: 100,
    fontSize: 13,
  },
});
const Homeheader = () => {
  const likes = 10;
  return (
    <View style={[style.container, style.flexBox]}>
      <Text style={style.headertext}>DailyFit</Text>

      <View style={[style.iconContainer, style.flexBox]}>
        <Ionicons name="search" size={30} />
        <View style={style.likesContainter}>
          <Ionicons name="heart-outline" size={30} />
          {likes > 0 && <Text style={style.likesCount}>{likes > 99 ? "99+" : likes}</Text>}
        </View>
        <Ionicons name="person-circle-outline" size={30} />
      </View>
    </View>
  );
};

export default Homeheader;
