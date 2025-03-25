import { View, Text, TextInput, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import authstyles from "../styles";

const { height } = Dimensions.get("window");

export default function SignInScreen() {
  const value = ["email", "password"];
  const router = useRouter();

  return (
    <View style={authstyles.container}>
      <View style={{ height: height / 1.5, marginTop: 30 }}>
        <View style={authstyles.topSection}>
          <Text style={authstyles.headerText}>Marketer Log In</Text>
          <Text style={authstyles.welcomeText}>Welcome Back to Affable home</Text>
        </View>

        <View style={authstyles.formSection}>
          {value.map((input) => (
            <View key={input} style={authstyles.inputContainer}>
              <Text style={authstyles.inputLabel}>{input}</Text>
              <TextInput
                style={authstyles.input}
                placeholder={input === "password" ? "Enter your password" : "Enter your email"}
                secureTextEntry={input === "password"}
              />
            </View>
          ))}
          <TouchableOpacity onPress={() => router.push("/")} style={authstyles.forgotLink}>
            <Text style={authstyles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={authstyles.loginButton}>
            <Text style={authstyles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={authstyles.bottomSection}>
          <View style={authstyles.signupSection}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => router.push("./signup")}>
              <Text style={authstyles.signupText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={authstyles.marketerSection}>
            <Text>Continue as client?</Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/client/signin")}>
              <Text style={authstyles.signupText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
