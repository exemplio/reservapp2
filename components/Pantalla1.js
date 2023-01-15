import { TextInput, View, StyleSheet, Button, Alert } from 'react-native';
import { styles } from "../style/style.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebase-config';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as react from 'react';


export default function Login({navigation}){

  


  const [email, setEmail]=React.useState("")
  const [password, setPassword]=React.useState("")

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user=userCredential.user;
      navigation.navigate("Reserva")
     
  
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

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

        <TextInput style={styles.input} onChangeText={(text) => 
          setEmail(text)} placeholder='Usuario'></TextInput>

        <TextInput secureTextEntry={true} style={styles.input} 
        onChangeText={(text)=> setPassword(text)} placeholder='Password'></TextInput>

        <Button onPress={handleSignIn} title="Iniciar sesion"></Button>
      
    </View>
      
    
      
  )

}