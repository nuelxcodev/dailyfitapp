import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { useState, useRef } from "react";
import PageSections from "@/components/home/PageSections";
import ColorSlidercom from "@/components/ColorSlidercom";

const { width } = Dimensions.get("window");

// Type Definitions


interface Invoice {
  id: string;
  invoiceNo: string;
  date: string;
  amount: string;
  balance: string;
}
interface Purchase {
  id: string;
  title: string;
  amount: string;
  color: string;
}
// Data
const purchases: Purchase[] = [
  { id: "1", title: "Total Purchases", amount: "₦5,511,163.00", color: "#9713ca" },
  { id: "2", title: "Pending Payments", amount: "₦2,000,000.00", color: "#0aa147" },
  { id: "3", title: "Completed Orders", amount: "₦7,320,500.00", color: "#d99a00" },
];

const invoices: Invoice[] = [
  {
    id: "1",
    invoiceNo: "AVH/364/dk(2) (3)",
    date: "21 Jan 2025 at 03:23AM",
    amount: "₦1,000,000.00",
    balance: "0.00",
  },
  {
    id: "2",
    invoiceNo: "AVH/377/dk",
    date: "21 Jan 2025 at 03:23AM",
    amount: "₦1,000,000.00",
    balance: "0.00",
  },
  {
    id: "3",
    invoiceNo: "AVH/364/dk(2)",
    date: "21 Jan 2025 at 03:23AM",
    amount: "₦1,000,000.00",
    balance: "0.00",
  },
  {
    id: "4",
    invoiceNo: "AVH/364/dk",
    date: "21 Jan 2025 at 03:23AM",
    amount: "₦1,000,000.00",
    balance: "0.00",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Welcome Header */}
      <PageSections
        data={invoices}
        headeritem={() => <ColorSlidercom purchases={purchases} />}
        carditem={({ item }) =>
          item ? ( // Ensure item is defined
            <View style={styles.invoiceItem}>
              <View>
                <Text style={styles.invoiceNo}>{item.invoiceNo}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>

              <View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>{item.amount}</Text>
                  <Text style={styles.balance}>{item.balance}</Text>
                </View>
                <TouchableOpacity onPress={() => console.log("Viewing Invoice:", item.invoiceNo)}>
                  <Text style={styles.viewInvoice}>View Invoice</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <Text style={{ color: "red", padding: 10 }}>Invoice data not available</Text> // Fallback UI
          )
        }
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },

  invoiceItem: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  invoiceNo: {
    fontWeight: "700",
    fontSize: 16,
  },
  date: {
    color: "#666",
    marginVertical: 4,
    fontWeight: "600",
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amount: {
    fontWeight: "bold",
  },
  balance: {
    color: "#666",
  },
  viewInvoice: {
    color: "purple",
    marginTop: 4,
    alignSelf: "flex-end",
  },
});
