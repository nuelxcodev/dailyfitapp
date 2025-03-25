import { View, Text, SectionList, TouchableOpacity, TextInput, Animated } from "react-native";
import React from "react";
import authstyles from "@/app/(auth)/styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { RadioButton } from "react-native-paper";

interface InputListProps {
  photos?: { [key: string]: string };
  filenames?: { [key: string]: string };
  groupvalue?: { title: string; data: string[] }[];
  handlePickImage?: (item: string) => void;
  toggleDropdown?: (item: string) => void;
  dropdownVisible?: { [key: string]: boolean };
  fadeAnim?: Animated.Value;
  selectedGender?: { [key: string]: string };
  setSelectedGender?: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  handleSubmit?: () => void;
  navigateToSignIn?: () => void;
  becomeA?: string;
  headingtext?: string;
  routeTo?: string;
  handleInputChange?: (fieldName: string, value: string) => void;
  renderitem?: () => React.ReactNode;
  renderitemActionButton?: (router: any) => React.ReactNode;
  checked?: { [key: string]: boolean };
  setchecked?: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
}

const InputList: React.FC<InputListProps> = (props) => {
  const {
    photos,
    filenames,
    groupvalue,
    handlePickImage,
    toggleDropdown,
    dropdownVisible,
    fadeAnim,
    selectedGender,
    setSelectedGender,
    handleSubmit,
    navigateToSignIn,
    becomeA,
    routeTo,
    handleInputChange,
    headingtext,
    renderitem,
    renderitemActionButton,
    checked,
    setchecked,
  } = props;

  const router = useRouter();

  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      stickySectionHeadersEnabled={false}
      ListHeaderComponent={() => (
        <View style={authstyles.topSection}>
          <Text style={authstyles.headerText}>{headingtext}</Text>
          <Text style={authstyles.welcomeText}>Welcome to Affable Home</Text>
          {renderitem && <View>{renderitem()}</View>}
        </View>
      )}
      sections={groupvalue || []}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderSectionHeader={({ section }) =>
        section.title ? (
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", flex: 1 }}>{section.title}</Text>
            <View style={{ height: 1, backgroundColor: "#ccc", flex: 3, marginLeft: 5 }} />
          </View>
        ) : null
      }
      renderItem={({ item }) => (
        <View style={authstyles.inputContainer}>
          <Text style={authstyles.inputLabel}>{item}</Text>

          {item.toLowerCase().includes("photo") ? (
            <View
              style={{
                gap: 10,
                borderRadius: 5,
                flexDirection: "row",
                borderWidth: 1,
                overflow: "hidden",
                borderColor: "#0003",
              }}
            >
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 15, padding: 10, fontWeight: "500" }}>{photos?.[item] ? filenames?.[item] : "No file Chosen"}</Text>
              </View>
              <TouchableOpacity onPress={() => handlePickImage && handlePickImage(item)} style={{ flex: 1 }}>
                <Text style={{ backgroundColor: "rgb(226, 232, 236)", textAlign: "right", padding: 10, borderWidth: 1, borderColor: "#0001" }}>
                  Choose File
                </Text>
              </TouchableOpacity>
            </View>
          ) : item.toLowerCase().includes("gender") ? (
            <View style={{ position: "relative" }}>
              <TouchableOpacity
                style={[
                  authstyles.input,
                  {
                    justifyContent: "space-between",
                    height: 40,
                    flexDirection: "row",
                    alignItems: "center",
                  },
                ]}
                onPress={() => toggleDropdown && toggleDropdown(item)}
              >
                <Text>{selectedGender?.[item] || <Text style={{ color: "#ccc" }}>Select</Text>}</Text>
                <Ionicons name="chevron-down" size={20} />
              </TouchableOpacity>

              {dropdownVisible?.[item] && (
                <Animated.View
                  style={{
                    opacity: fadeAnim,
                    position: "absolute",
                    top: 41,
                    left: 0,
                    right: 0,
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    borderColor: "#0003",
                    zIndex: 1,
                  }}
                >
                  {["Male", "Female", "Other"].map((gender) => (
                    <TouchableOpacity
                      key={gender}
                      style={{ padding: 10 }}
                      onPress={() => {
                        setSelectedGender && setSelectedGender((prev) => ({ ...prev, [item]: gender }));
                        toggleDropdown && toggleDropdown(item);
                      }}
                    >
                      <Text>{gender}</Text>
                    </TouchableOpacity>
                  ))}
                </Animated.View>
              )}
            </View>
          ) : item.toLowerCase().includes("relationship") ? (
            <TextInput
              style={[authstyles.input, { height: 80 }]}
              placeholder="Type your relationship"
              onChangeText={(value) => handleInputChange && handleInputChange(item, value)}
            />
          ) : item.includes("₦") ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#0003",
                borderRadius: 8,
                paddingHorizontal: 10,
                padding: 10,
              }}
            >
              <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => setchecked && setchecked((prev) => ({ ...prev, [item]: true }))}>
                <Ionicons name="radio-button-on" size={20} color={checked && checked[item] ? "#9713ca" : "#c1c1c1"} />
              </TouchableOpacity>

              <Text style={{ marginLeft: 10, flex: 1, color: "rgb(161, 161, 161)" }}>{item.replace(/₦\d+(\.\d{1,2})?/g, "").trim()}</Text>
            </View>
          ) : (
            <TextInput
              style={authstyles.input}
              placeholder={`Enter your ${item}`}
              onChangeText={(value) => handleInputChange && handleInputChange(item, value)}
            />
          )}
        </View>
      )}
      ListFooterComponent={() => (
        <View style={{ marginVertical: 10 }}>
          {renderitemActionButton ? (
            renderitemActionButton({ router })
          ) : (
            <View>
              <TouchableOpacity onPress={handleSubmit} style={authstyles.loginButton}>
                <Text style={authstyles.loginButtonText}>Sign Up</Text>
              </TouchableOpacity>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={[authstyles.signupSection, { marginTop: 18 }]}>
                  <Text>Already have an account?</Text>
                  <TouchableOpacity onPress={navigateToSignIn}>
                    <Text style={authstyles.signupText}>Sign In</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => router.push(routeTo as any)} style={{ marginTop: 30 }}>
                  <Text style={{ fontWeight: "800", color: "#9713ca" }}>{becomeA}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      )}
    />
  );
};

export default InputList;
