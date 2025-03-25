import { StyleSheet } from "react-native";

const authstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  headerText: {
    fontSize: 32,
    fontFamily: "Inter_600SemiBold",
  },
  topSection: {
    alignItems: "center",
    marginTop: 20,
    gap: 16,
    flexGrow: 1,
  },
  welcomeText: {
    fontSize: 16,
    color: "#666",
  },
  formSection: {
    flexGrow: 3,
    alignSelf: "stretch",
  },
  inputContainer: {
    marginTop: 20,
  },
  inputLabel: {
    fontWeight: "700",
    textTransform: "capitalize",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
  },
  forgotLink: {
    alignSelf: "flex-end",
    marginTop: 8,
  },
  forgotText: {
    fontWeight: "700",
    color: "#9713ca",
  },
  loginButton: {
    backgroundColor: "rgba(151, 19, 202, 1)",
    padding: 13,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontWeight: "600",
  },
  bottomSection: {
    flexGrow: 1,
    alignSelf: "stretch",
    gap: 50,
  },
  signupSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  marketerSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    fontWeight: "700",
    color: "#9713ca",
    marginLeft: 5,
  },
});

export default authstyles;
