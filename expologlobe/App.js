import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from "./src/screen/Contact";
import { View, Text } from "react-native";
import About from "./src/screen/About";
import Drawer from "./src/screen/Drawer";
import ListCity from "./src/screen/drawer/ListCity";
import CityDatails from "./src/component/CityDatails";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drawer">
        <Stack.Screen name="Drawer"
          options={{
            headerShown: true,
            headerShown: false,
          }}
          component={Drawer} />
        <Stack.Screen name="About"
          options={{
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 400,
            },
            headerTitleAlign: "center",
          }}
          component={About} />
        <Stack.Screen name="Contact"
          options={{
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 400,
            },
            headerTitleAlign: "center",
          }}
          component={Contact} />
        <Stack.Screen name="ListCity"
          options={{
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 400,
            },
            headerTitleAlign: "center",
          }}
          component={ListCity} />
        <Stack.Screen name="CityDatails"
          options={{
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 400,
            },
            headerTitleAlign: "center",
          }}
          component={CityDatails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
