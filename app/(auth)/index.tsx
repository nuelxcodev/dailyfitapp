import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Locat from "../../assets/images/iconsSvg/getstarted.svg";
import Locat3 from "../../assets/images/iconsSvg/getstarted2.svg";
import Locat2 from "../../assets/images/iconsSvg/getstarted3.svg";
import { OpenSans_600SemiBold, useFonts } from "@expo-google-fonts/open-sans";
import { Inter_600SemiBold } from "@expo-google-fonts/inter";
import { useRouter } from "expo-router";

const slide = [
  {
    text1: "Welcome to",
    text2: "Affable Homes",
    image: <Locat width={400} height={340} style={{ flex: 1 }} />,
  },
  {
    text1: "Find your",
    text2: "dream home, effortlessly",
    image: <Locat2 width={400} height={340} style={{ flex: 1 }} />,
  },
  {
    text1: "Find best place to stay in",
    text2: "good price",
    image: <Locat3 width={400} height={340} style={{ flex: 1 }} />,
  },
];

export default function GetStartedScreen() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    OpenSans_600SemiBold,
    Inter_600SemiBold,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Reference for FlatList to handle scroll events
  const flatListRef = useRef(null);

  const handleViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, { flex: 1.5 }]}>
        <FlatList
          data={slide}
          ref={flatListRef}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, alignSelf: "stretch" }}
          onViewableItemsChanged={handleViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          renderItem={({ item }) => <View style={{ flex: 1, justifyContent: "flex-end" }}>{item.image}</View>}
        />
      </View>
      <View style={[styles.box, { flex: 1, padding: 25 }]}>
        <View style={{ flex: 1 }}>
          <Text style={styles.getStartedText}>
            {slide[currentIndex]?.text1}
            <Text style={styles.getStartedTextColored}> {slide[currentIndex]?.text2}</Text>
          </Text>
        </View>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity onPress={() => router.push("/(auth)/client/signup")} style={[styles.getstartedbutton, styles.openAccbutton]}>
            <Text style={[styles.buttonText, { color: "white" }]}>Open Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(auth)/client/signin")}
            style={[styles.getstartedbutton, { borderWidth: 1, borderColor: "rgba(109, 108, 108, 0.71)" }]}
          >
            <Text style={styles.buttonText}>I have an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  box: {
    alignSelf: "stretch",
  },
  getStartedText: {
    fontSize: 28,
    lineHeight: 35,
    marginVertical: 10,
    color: "black",
    letterSpacing: -1.5,
    fontFamily: "OpenSans_600SemiBold",
  },
  getStartedTextColored: {
    color: "rgba(151, 19, 202, 1)",
  },
  buttoncontainer: {
    flex: 1,
  },
  getstartedbutton: {
    paddingVertical: 15,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  openAccbutton: {
    backgroundColor: "rgba(151, 19, 202, 1)",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    letterSpacing: 0.3,
    fontWeight: "600",
    fontFamily: "Inter_600SemiBold",
  },
});
