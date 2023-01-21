import { TextInput, ImageBackground,  View, StyleSheet, Button, Alert } from 'react-native';
import { styles } from "../style/style.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebase-config';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as react from 'react';


export default function Login({navigation}){

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
       if(e.data.action.type !="GO_BACK") {
         return ;
        } else {
      e.preventDefault();
      
     }
    });
}, [navigation]);



  const [email, setEmail]=React.useState("")
  const [password, setPassword]=React.useState("")

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      
      navigation.navigate("Reserva")
      const user=userCredential.user


    })
    .catch((error) => {

    const errorMessage = error.message;
    

     console.log(errorMessage)

     if(errorMessage==="Firebase: Error (auth/wrong-password)."){
      Alert.alert(
        "No has ingresado",
        "Contraseña incorrecta",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      }
    else{

          Alert.alert(
            "No has ingresado",
            "Correo electronico incorrecto o dejaste espacio en blanco",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          ); 
      

    }

    });

  }


  return (

    <View>

        <ImageBackground style={{height:'100%', width:'100%'}} 
        source={require('../assets/imagefondo.jpg')} resizeMode="cover">
      

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
          
         

      

        <TextInput style={styles.input} onChangeText={(text) => 
          setEmail(text)} placeholder='Usuario'></TextInput>

        <TextInput secureTextEntry={true} style={styles.input}
          onChangeText={(text) => setPassword(text)} 
          placeholder='Password'></TextInput>

        <Button onPress={handleSignIn} title="Iniciar sesion"></Button>
        </View>

        </ImageBackground>
        
    </View>
      

  )

}