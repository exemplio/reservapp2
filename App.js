

import * as React from 'react';
import { Text, TextInput, View, StyleSheet, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/Pantalla1";
import AboutScreen from "./components/Pantalla2";
import LogScreen from "./components/Pantalla3";


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pantalla 1">
        <Stack.Screen name="Pantalla 1" component={HomeScreen} />
        <Stack.Screen name="Pantalla 2" component={AboutScreen} />
        <Stack.Screen name="Pantalla 3" component={LogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


































