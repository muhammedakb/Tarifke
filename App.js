import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./src/pages/Categories";
import Meals from "./src/pages/Meals";
import MealDetail from "./src/pages/MealDetail";

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { color: "#fea501" },
        headerTintColor: "#fea501",
      }}
    >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Meals" component={Meals} />
      <Stack.Screen name="Detail" component={MealDetail} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
