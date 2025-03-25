import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; 

interface StepProgressProps {
  currentStep: number;
}

const { width } = Dimensions.get("screen");

const StepProgress: React.FC<StepProgressProps> = ({ currentStep }) => {
  const allCompleted = currentStep >= 3; 

  return (
    <View style={styles.stepsContainer}>
      {[1, 2, 3].map((step) => (
        <View key={step} style={styles.stepWrapper}>
          <View
            style={[
              styles.circle,
              currentStep >= step && (allCompleted ? styles.completedCircle : styles.activeCircle),
            ]}
          >
            {currentStep >= step ? (
              <MaterialIcons
                name="check"
                size={18}
                color="#fff"
              />
            ) : (
              <Text style={[styles.circleText, currentStep >= step && styles.activeText]}>
                {step}
              </Text>
            )}
          </View>
          {step < 3 && (
            <View
              style={[
                styles.line,
                currentStep >= step && (allCompleted ? styles.completedLine : styles.activeLine),
              ]}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  stepsContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  stepWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 3,
  },
  activeCircle: {
    backgroundColor: "rgba(151, 19, 202, 1)", 
  },
  completedCircle: {
    backgroundColor: "#14B8A6", 
  },
  circleText: {
    fontSize: 18,
    color: "#666",
  },
  activeText: {
    color: "#fff",
  },
  line: {
    width: width / 3.2,
    height: 3,
    backgroundColor: "#d3d3d3",
  },
  activeLine: {
    backgroundColor: "rgba(151, 19, 202, 1)", 
  },
  completedLine: {
    backgroundColor: "#14B8A6", 
  },
});

export default StepProgress;
