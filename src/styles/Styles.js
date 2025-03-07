import { StyleSheet } from "react-native";

export const loginstyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f6f6", // Light background color
  },
  innerContainer: {
    width: "90%",
    maxWidth: 400,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 5, // Adds shadow for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  textinput: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#841584",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop:30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});