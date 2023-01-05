import { Text, TextInput, View, StyleSheet, Button, Alert } from 'react-native';
import { Appbar } from 'react-native-paper';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase-config';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Login({navigation}){
  




  const [email, setEmail]=React.useState("")
  const [password, setPassword]=React.useState("")

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user=userCredential.user;
      navigation.navigate("Pantalla 2")
     
  
    })
    .catch(error => { 
      
      Alert.alert(
        "No has ingresado",
        "Datos incorrectos",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );


    })
  }


  return (
    <><View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput style={styles.textapp} onChangeText={(text) => setEmail(text)} placeholder='Usuario'></TextInput>
        <TextInput secureTextEntry={true} style={styles.textapp} onChangeText={(text) => setPassword(text)} placeholder='Password'></TextInput>
        <Button onPress={handleSignIn} title="Iniciar sesion"></Button>
      </View></>
      
    
      
  )





  

}



const styles= StyleSheet.create({

  barrapp:{backgroundColor:"#f0f8ff"},
  textapp:{backgroundColor:""}
  
  })