import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface MenuItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
  color?: string;
}

const menuItems: MenuItemProps[] = [
  { icon: "person-outline", text: "Profile" },
  { icon: "key-outline", text: "Reset Password" },
  { icon: "shield-outline", text: "Data Privacy" },
  { icon: "chatbubble-ellipses-outline", text: "Contact Us" },
  { icon: "people-outline", text: "Invite Friends" },
  { icon: "trash-outline", text: "Delete Account", color: "red" },
];

const SettingScreen: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItemProps | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const openModal = (item: MenuItemProps) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Settings</Text>
      </View>

      {/* Settings Menu */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={() => openModal(item)}>
            <Ionicons name={item.icon} size={22} color={item.color || "black"} />
            <Text style={[styles.menuText, { color: item.color || "black" }]}>{item.text}</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="gray" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logout} onPress={() => router.replace('/')}>
        <Ionicons name="log-out-outline" size={24} color="purple" />
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>

      {/* Modal */}
      {selectedItem && (
        <Modal visible={modalVisible} transparent={true} animationType="fade" onRequestClose={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedItem.text}</Text>
              <Pressable style={styles.closeButton} onPress={closeModal}>
                <Ionicons name="close-circle-outline" size={28} color="red" />
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  backButton: {
    //  alignSelf: "flex-start",
  },
  header: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 20,
  },
  menuContainer: {
    backgroundColor: "#f8eaff",
    borderRadius: 12,
    paddingVertical: 10,
    marginVertical: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
  },
  logout: {
    marginTop: 30,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "700",
    color: "purple",
    marginLeft: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default SettingScreen;
