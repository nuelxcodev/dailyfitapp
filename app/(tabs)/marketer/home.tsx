import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, Pressable } from "react-native";
import PageSections from "@/components/home/PageSections";
import ColorSlidercom from "@/components/ColorSlidercom";

const { width } = Dimensions.get("window");

// Data Structures
interface Transaction {
  id: string;
  name: string;
  profileImg: string;
  amount: string;
  status: "Complete" | "Pending" | "Failed";
  date: string;
  time: string;
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

const transactions: Transaction[] = [
  {
    id: "1",
    name: "Sazzin Molla",
    profileImg: "https://randomuser.me/api/portraits/men/1.jpg",
    amount: "+ ₦15,000.00",
    status: "Failed",
    date: "21 Jan 2025",
    time: "03:23AM",
  },
  {
    id: "2",
    name: "Adrito Rafsan",
    profileImg: "https://randomuser.me/api/portraits/men/2.jpg",
    amount: "+ ₦10,000.00",
    status: "Complete",
    date: "21 Jan 2025",
    time: "03:23AM",
  },
  {
    id: "3",
    name: "Sazzin Molla",
    profileImg: "https://randomuser.me/api/portraits/men/3.jpg",
    amount: "+ ₦15,000.00",
    status: "Failed",
    date: "21 Jan 2025",
    time: "03:23AM",
  },
  {
    id: "4",
    name: "Sazzin Molla",
    profileImg: "https://randomuser.me/api/portraits/women/1.jpg",
    amount: "+ ₦25,000.00",
    status: "Pending",
    date: "21 Jan 2025",
    time: "03:23AM",
  },
  {
    id: "5",
    name: "Sazzin Molla",
    profileImg: "https://randomuser.me/api/portraits/women/2.jpg",
    amount: "+ ₦25,000.00",
    status: "Pending",
    date: "21 Jan 2025",
    time: "03:23AM",
  },
];

const data = [
  { name: "Sales", icon: "cash-outline" },
  { name: "Client", icon: "people-outline" },
  { name: "MLM", icon: "person-outline" },
  { name: "Sales Commission", icon: "pricetag-outline" },
  { name: "Registration Commission", icon: "ribbon-outline" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <PageSections
        data={transactions}
        headeritem={() => (
          <View>
            <ColorSlidercom purchases={purchases} />
            <View style={styles.gridContainer}>
              {/* First Row - 3 Items */}
              <View style={styles.row}>
                {data.slice(0, 3).map((item, index) => (
                  <View key={index} style={styles.gridItem}>
                    <Pressable
                      style={styles.iconButton}
                      onPress={() => alert(`Clicked on ${item.name}`)}
                    >
                      <Ionicons name={item.icon as any} size={25} color="#6A0DAD" />
                    </Pressable>
                    <Text style={styles.iconText}>{item.name}</Text>
                  </View>
                ))}
              </View>

              {/* Second Row - 2 Items Centered */}
              <View style={[styles.row, { justifyContent: "space-evenly" }]}>
                {data.slice(3).map((item, index) => (
                  <View key={index} style={styles.gridItem}>
                    <Pressable
                      style={styles.iconButton}
                      onPress={() => alert(`Clicked on ${item.name}`)}
                    >
                      <Ionicons name={item.icon as any} size={25} color="#6A0DAD" />
                    </Pressable>
                    <Text style={styles.iconText}>{item.name}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
        carditem={({ item }) => (
          <View style={styles.transactionCard}>
            <Image source={{ uri: item.profileImg }} style={styles.profileImg} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.dateTime}>{`${item.date} at ${item.time}`}</Text>
            </View>
            <View style={styles.transactionInfo}>
              <Text style={styles.amount}>{item.amount}</Text>
              <Text
                style={[
                  styles.status,
                  item.status === "Failed" ? styles.failed : item.status === "Pending" ? styles.pending : styles.complete
                ]}
              >
                {item.status}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  gridContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 30,
  },
  gridItem: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(163, 41, 193, 0.2)",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    width: 50,
    height: 50,
  },
  iconText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  transactionCard: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
  },
  dateTime: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },
  transactionInfo: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  status: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "600",
  },
  failed: {
    color: "red",
  },
  pending: {
    color: "orange",
  },
  complete: {
    color: "green",
  },
});
