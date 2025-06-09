import { View, Text, Pressable, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Homeheader from "@/component/home/Header";
import PostCard from "@/component/ui/PostCard";
import ProfileModal from "@/component/modals/ProfileModal";
import data from "@/utils/dummydata";

export default function Homescreen(): React.ReactNode {
  return (
    <View style={style.container}>
      <Homeheader />
      <ScrollView style={style.main}>
        {data.map((post,index) => (
          <PostCard key={index} data={post} />
        ))}
      </ScrollView>

      <TouchableOpacity style={style.floatingButton}>
        <MaterialCommunityIcons name="plus" size={35} color="white" />
      </TouchableOpacity>
      {/* <ProfileModal /> */}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  floatingButton: {
    backgroundColor: "rgb(248, 18, 18)",
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
  main: {
    flex: 1,
  },
});
