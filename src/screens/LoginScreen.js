import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import api from "../api"; 

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "All fields are required!", [{ text: "OK" }]);
      return;
    }

    try {
      const response = await api.post("/auth/login", { username, password });

      console.log("Request Body:\n", JSON.stringify({ username, password }, null, 2));
      console.log("\nResponse:\n", JSON.stringify(response.data.token));

      Alert.alert("Success", "Login Successful!", [{ text: "OK" }]);

      
      navigation.navigate("HomePageScreen", {  username });

    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", "Invalid username or password!", [{ text: "OK" }]);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Login</Text>

      <Text>Username</Text>
      <TextInput
        value={username}
        style={{ width: 250, borderWidth: 1, padding: 10, marginBottom: 10 }}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />

      <Text>Password</Text>
      <TextInput
        value={password}
        style={{ width: 250, borderWidth: 1, padding: 10, marginBottom: 20 }}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Enter your password"
      />

      <Button onPress={handleLogin} title="Login" color="#841584" />
    </View>
  );
}

export default LoginScreen;