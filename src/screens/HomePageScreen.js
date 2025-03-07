import React, { useEffect, useState } from "react";
import { Text, View, Button, FlatList, ActivityIndicator } from "react-native";
import { loginstyle } from "../styles/Styles"; 
import api from "../api"; 

function HomePageScreen({ route, navigation }) {
    const { token, username } = route.params;
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("Username:", username); 
  useEffect(() => {
    api
      .get("/users") 
      .then((response) => {
        setEmployees(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
        setLoading(false);
        console.log("UserData received in HomePageScreen:", userData);
      });
  }, []);

  return (
    <View style={[loginstyle.container, { backgroundColor: "#FFFAF3" }]}>
      <View style={loginstyle.innerContainer}>
        <Text style={loginstyle.title}>Welcome, {username}!</Text>
        <Text style={{ textAlign: "center", marginBottom: 15 }}>
          This is the homepage!
        </Text>

       

        <Text style={[loginstyle.title, { marginTop: 20 }]}>Employees List</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#841584" />
        ) : (
          <FlatList
            data={employees}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Text style={{ textAlign: "center", fontSize: 16, padding: 5 }}>
                {item.name.firstname} {item.name.lastname}
              </Text>
            )}
          />
        )}
      </View>
    </View>
  );
}

export default HomePageScreen;