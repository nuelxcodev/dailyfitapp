import { View, Animated, Dimensions } from "react-native";
import React, { useState, useRef } from "react";
import authstyles from "../styles";
import * as ImagePicker from "expo-image-picker";
import InputList from "@/components/InputList";
import { useRouter } from "expo-router";

const { height } = Dimensions.get("window");

interface SectionData {
  title: string;
  data: string[];
}

export default function SignupScreen() {
  const [photos, setPhotos] = useState<{ [key: string]: string }>({});
  const [filenames, setFilenames] = useState<{ [key: string]: string }>({});
  const [selectedGender, setSelectedGender] = useState<{ [key: string]: string }>({});
  const [dropdownVisible, setDropdownVisible] = useState<{ [key: string]: boolean }>({});
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const groupvalue: SectionData[] = [
    {
      title: "",
      data: ["Client's Photo", "Full Name", "Phone Number", "Gender", "Username", "Contact Address"],
    },
    {
      title: "Next of Kin",
      data: [
        "Next of Kin Photo",
        "Next of Kin Full Name",
        "Next of Kin Gender",
        "Next of Kin Phone Number",
        "Next of Kin Email",
        "Relationship with Client",
        "Password",
        "Retype Password",
      ],
    },
  ];

  // Handle Image Picker
  const handlePickImage = async (input: string) => {
    const imageResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!imageResult.canceled && imageResult.assets.length > 0) {
      const imageUri = imageResult.assets[0].uri;
      const imageName = imageResult.assets[0].fileName || `image_${Date.now()}.jpg`;
      setPhotos((prev) => ({ ...prev, [input]: imageUri }));
      setFilenames((prev) => ({ ...prev, [input]: imageName }));
    }
  };

  // Toggle Dropdown Animation
  const toggleDropdown = (input: string) => {
    setDropdownVisible((prev) => ({ ...prev, [input]: !prev[input] }));
    Animated.timing(fadeAnim, {
      toValue: dropdownVisible[input] ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  // Handle Form Submission
  const handleSubmit = () => {
    router.replace("/(tabs)/client/home");
    console.log("Form submitted with data:", { formData, photos, selectedGender });
  };

  // Navigate to Sign In
  const navigateToSignIn = () => {
    console.log("Navigating to Sign In screen...");
  };

  // Handle Input Changes
  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
    console.log(`Field: ${fieldName}, Value: ${value}`);
  };

  // Handle Dynamic Press
  const onDynamicPress = () => {
    console.log("Dynamic Pressed:");
    // setDynamicText(value);
  };

  return (
    <View style={authstyles.container}>
      <InputList
        photos={photos}
        filenames={filenames}
        groupvalue={groupvalue}
        handlePickImage={handlePickImage}
        toggleDropdown={toggleDropdown}
        dropdownVisible={dropdownVisible}
        fadeAnim={fadeAnim}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        handleSubmit={handleSubmit}
        navigateToSignIn={navigateToSignIn}
        handleInputChange={handleInputChange}
        becomeA="Become a Marketer"
        routeTo="/(auth)/marketer/signup"
        headingtext="Client Sign Up"
      />
    </View>
  );
}
