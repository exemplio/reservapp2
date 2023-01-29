
import { LogBox } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Pantalla1";
import AboutScreen from "./screens/Pantalla2";
import LogScreen from "./screens/Pantalla3";
import Restaurant1 from "./screens/Pantalla2a";
import Restaurant2 from "./screens/Pantalla2b";
import Restaurant3 from "./screens/Pantalla2c";
import Restaurant4 from "./screens/Pantalla2d";
import RecuperarDatos from "./screens/RecuperarDatos";


const Stack = createNativeStackNavigator();

export default function App() {

  LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage"]);

  
  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{
          headerStyle: {
          //backgroundColor: "#fff",
          },
          headerTintColor: '#000',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
          headerTitleAlign: "center"}} initialRouteName="Reserva">
      
      
        <Stack.Screen name="Login" component={Login} 
        options={{headerBackVisible: false, headerShown: false}}/>

        <Stack.Screen name="Reserva" component={AboutScreen} 
        options={{headerBackVisible: false}} />

        <Stack.Screen name="Factura" component={LogScreen}
        //options={{headerBackVisible: false}}
        
        />

        <Stack.Screen name="Restaurant1" component={Restaurant1}/>
        <Stack.Screen name="Restaurant2" component={Restaurant2}/>
        <Stack.Screen name="Restaurant3" component={Restaurant3}/>
        <Stack.Screen name="Restaurant4" component={Restaurant4} />





        
        <Stack.Screen name="RecuperarDatos" component={RecuperarDatos}
         options={{title:"Recupera tu contraseña"}}
        />


      </Stack.Navigator>



    </NavigationContainer>
  );
}