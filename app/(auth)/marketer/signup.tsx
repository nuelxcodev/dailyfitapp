import { View, Animated, Dimensions, Text, Modal, TouchableOpacity } from "react-native";
import React, { useState, useRef } from "react";
import authstyles from "../styles";
import * as ImagePicker from "expo-image-picker";
import InputList from "@/components/InputList";
import StepProgress from "@/components/ActiveStep";
import { BackAccount, paymentDetails, Personalinfo } from "@/utils/MarketerSignUpda";
import { CustomCheckbox } from "@/components/Checkbox";
import { Ionicons } from "@expo/vector-icons";
import { transformKeys } from "@/utils/helper";

const { height } = Dimensions.get("window");

export default function SignupScreen() {
  const [photos, setPhotos] = useState<{ [key: string]: string }>({});
  const [filenames, setFilenames] = useState<{ [key: string]: string }>({});
  const [selectedGender, setSelectedGender] = useState<{ [key: string]: string }>({});
  const [dropdownVisible, setDropdownVisible] = useState<{ [key: string]: boolean }>({});
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isChecked, setIsChecked] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

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
    console.log("Form submitted with data:", { formData, photos, selectedGender });
    nextStep();
  };

  // Navigate to Sign In
  const navigateToSignIn = () => {
    console.log("Navigating to Sign In screen...");
  };

  const handleInputChange = (fieldName: string, value: string) => {
    // Create a temporary object with the original field name
    const tempObj = { [fieldName]: value };

    // Transform the keys of the object
    const transformedObj = transformKeys(tempObj);

    // Extract the transformed key
    const transformedFieldName = Object.keys(transformedObj)[0];

    // Update formData using the transformed key
    setFormData((prev) => ({ ...prev, [transformedFieldName]: value }));

    console.log(`Transformed Field: ${transformedFieldName}, Value: ${value}`);
  };

  return (
    <View style={authstyles.container}>
      {currentStep === 1 && (
        <InputList
          photos={photos}
          filenames={filenames}
          groupvalue={Personalinfo}
          handlePickImage={handlePickImage}
          toggleDropdown={toggleDropdown}
          dropdownVisible={dropdownVisible}
          fadeAnim={fadeAnim}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          headingtext="Marketer Sign Up"
          renderitem={() => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <StepProgress currentStep={1} />
              <Text style={{ fontSize: 20, fontWeight: "800", marginTop: 20, marginLeft: 10 }}>Personal Information</Text>
            </View>
          )}
          renderitemActionButton={({ router }) => (
            <View>
              <TouchableOpacity onPress={handleSubmit} style={authstyles.loginButton}>
                <Text style={authstyles.loginButtonText}>continue</Text>
              </TouchableOpacity>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={[authstyles.signupSection, { marginTop: 18 }]}>
                  <Text>Already have an account?</Text>
                  <TouchableOpacity onPress={navigateToSignIn}>
                    <Text style={authstyles.signupText}>Sign In</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => router.push("/(auth)/client/signup" as any)} style={{ marginTop: 30 }}>
                  <Text style={{ fontWeight: "800", color: "#9713ca" }}>continue as client</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}

      {currentStep === 2 && (
        <InputList
          photos={photos}
          filenames={filenames}
          groupvalue={BackAccount}
          handlePickImage={handlePickImage}
          toggleDropdown={toggleDropdown}
          dropdownVisible={dropdownVisible}
          fadeAnim={fadeAnim}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          becomeA="continue as client"
          routeTo="/(auth)/client/signup"
          headingtext="Marketer Sign Up"
          renderitem={() => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <StepProgress currentStep={2} />
              <Text style={{ fontSize: 20, fontWeight: "800", marginTop: 20, marginLeft: 10 }}>Bank Account Information</Text>
            </View>
          )}
          renderitemActionButton={({ router }) => (
            <View>
              <TouchableOpacity onPress={handleSubmit} style={authstyles.loginButton}>
                <Text style={authstyles.loginButtonText}>continue</Text>
              </TouchableOpacity>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={[authstyles.signupSection, { marginTop: 18 }]}>
                  <Text>Already have an account?</Text>
                  <TouchableOpacity onPress={navigateToSignIn}>
                    <Text style={authstyles.signupText}>Sign In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      )}
      {currentStep === 3 && (
        <InputList
          photos={photos}
          filenames={filenames}
          groupvalue={paymentDetails}
          handlePickImage={handlePickImage}
          toggleDropdown={toggleDropdown}
          dropdownVisible={dropdownVisible}
          fadeAnim={fadeAnim}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          handleSubmit={handleSubmit}
          navigateToSignIn={navigateToSignIn}
          handleInputChange={handleInputChange}
          becomeA="continue as client"
          routeTo="/(auth)/client/signup"
          headingtext="Marketer Sign Up"
          renderitem={() => (
            <View style={{ justifyContent: "center" }}>
              <StepProgress currentStep={3} />
              <Text style={{ fontSize: 20, fontWeight: "800", marginTop: 20, marginLeft: 10, textAlign: "center" }}>
                online payment with paystack
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 8,
                  marginBlock: 10,
                }}
              >
                <Text style={{ fontWeight: 600, textTransform: "uppercase", marginBlock: 10 }}>affable homes newtwork account</Text>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
                  <Text style={{ fontSize: 25, fontWeight: 800 }}>1017467385</Text>
                  <Ionicons name="copy-outline" size={20} />
                </View>
                <Text style={{ fontWeight: 600, textTransform: "capitalize", marginBlock: 8 }}>Zenith bank</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(151, 19, 202, 1)",
                    padding: 10,
                    borderRadius: 8,
                    marginTop: 10,
                    alignSelf: "stretch",
                  }}
                >
                  <Text style={{ fontWeight: 500, color: "white", textAlign: "center" }}>i have made payment</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          renderitemActionButton={({ router }) => (
            <View>
              <View style={{ marginBlock: 20, flexDirection: "row", alignItems: "center" }}>
                <CustomCheckbox checked={isChecked} onPress={() => setIsChecked(!isChecked)} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>Read the Terms and Conditions</Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontWeight: 500 }}> By submittting, you have read the</Text>
                    <Text style={{ fontWeight: 500, fontSize: 13, color: "#9713ca", textDecorationLine: "underline" }}> Terms & Conditions</Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => (currentStep >= 3 ? router.replace("/(tabs)/marketer/home") : handleSubmit())}
                style={authstyles.loginButton}
                activeOpacity={0.8}
              >
                <Text style={authstyles.loginButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}
