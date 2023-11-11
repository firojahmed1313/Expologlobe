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
            headerShown: false,
          }}
          component={Drawer} />
        <Stack.Screen name="About" options={{
            headerShown: true,
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:30,
              
            }
          }} component={About}></Stack.Screen>
        <Stack.Screen name="Contact" options={{
            headerShown: true,
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:30,
              
            }
          }} component={Contact}></Stack.Screen>
        <Stack.Screen name="ListCity" options={{
            headerShown: true,
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:30,
              
            }
          }} component={ListCity}></Stack.Screen>
        <Stack.Screen name="CityDatails" options={{
            headerShown: true,
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:30,
              
            }
          }} component={CityDatails}></Stack.Screen>
        
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
