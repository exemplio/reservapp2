

import * as React from 'react';
import { Text, TextInput, View, StyleSheet, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./components/Pantalla1";
import AboutScreen from "./components/Pantalla2";
import LogScreen from "./components/Pantalla3";

const Stack = createNativeStackNavigator();

function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
      
      
      
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen options={{headerBackVisible: false}} name="Reserva" component={AboutScreen} />
        <Stack.Screen name="Factura" component={LogScreen} />
        

      

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


































