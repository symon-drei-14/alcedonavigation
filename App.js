import "react-native-gesture-handler"; // Important: Import at the top!
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import HomePageScreen from "./src/screens/HomePageScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import RegisterAdminScreen from "./src/screens/RegisterAdminScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider style={{ flexGrow: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="HomePageScreen" component={HomePageScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="RegisterAdminScreen" component={RegisterAdminScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;

// import React from "react";
// import { Text, View } from "react-native";

// function App() {
//   return (
//     <View>
//       <Text>Hello, React Native! bitch</Text>
//     </View>
//   );
// }

// export default App;