import React, { useEffect, useState } from "react";
import { Text, View, Button, FlatList, ActivityIndicator } from "react-native";
import api from "../api"; 

function HomePageScreen({ navigation }) {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from Fake Store API
    api
      .get("/users") 
      .then((response) => {
        setEmployees(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Homepage po</Text>
      <Text>Hello, React Native!</Text>

      <Button title="Go to Register" onPress={() => navigation.navigate("RegisterScreen")} />
      <Button title="Go to Admin Register" onPress={() => navigation.navigate("RegisterAdminScreen")} />

      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>Employees List</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={employees}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text>{item.name.firstname} {item.name.lastname}</Text>
          )}
        />
      )}
    </View>
  );
}

export default HomePageScreen;