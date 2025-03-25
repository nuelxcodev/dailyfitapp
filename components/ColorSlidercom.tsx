import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useRef } from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";

interface Purchase {
  id: string;
  title: string;
  amount: string | number;
  color: string;
}

export default function ColorSlidercom({ purchases }: { purchases: Purchase[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList<Purchase>>(null);

  const handleMomentumScrollEnd = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(scrollPosition / 300); // Assuming each card width is 300
    setActiveIndex(newIndex);
  };

  return (
    <View style={styles.purchaseContainer}>
      <FlatList
        ref={flatListRef}
        data={purchases}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={handleMomentumScrollEnd}
        renderItem={({ item }) => (
          <View style={[styles.purchaseCard, { backgroundColor: item.color }]}>
            <MaterialIcons name="show-chart" size={50} color="white" style={{ flex: 1 }} />

            <View style={{ flex: 4, marginVertical: 10 }}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardAmount}>{item.amount}</Text>
            </View>

            <TouchableOpacity
              style={styles.withdrawButton}
              onPress={() => console.log("Withdrawal Requested for", item.title)}
            >
              <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                <Text style={{ fontSize: 12 }}>Request Withdrawal</Text>
                <Feather name="arrow-up-right" size={15} />
              </View>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Active Indicator */}
      <View style={{ alignItems: "center" }}>
        <View style={styles.indicatorContainer}>
          {purchases.map((_, index) => (
            <View
              key={index}
              style={{
                width: 45,
                height: 4,
                backgroundColor: activeIndex === index ? "rgba(151, 19, 202, 1)" : "rgb(232, 217, 237)",
              }}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  purchaseContainer: {
    marginVertical: 20,
  },
  purchaseCard: {
    width: 300,
    height: 140,
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  cardTitle: {
    color: "white",
    fontSize: 18,
  },
  cardAmount: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
    marginTop: 10,
  },
  withdrawButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "rgb(240, 240, 240)",
    borderTopLeftRadius: 10,
    padding: 10,
  },
  indicatorContainer: {
    height: 4,
    flexDirection: "row",
    justifyContent: "space-around",
    width: 150,
    marginTop: 20,
  },
});
