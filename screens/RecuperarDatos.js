import { Text, TextInput, 
    TouchableOpacity, ImageBackground,  View, StyleSheet, Button, Alert } from 'react-native';
  import { styles } from "../style/style.js";
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { initializeApp } from "firebase/app";
  import { firebaseConfig } from '../firebase-config';
  import ButtonLinearGradient from '../style/buttonLinearGradient.js';
  import React, { useState, useEffect } from 'react';

  
  export default function RecuperarDatos({navigation}){
  
    
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
  
      
  
      <View style={{backgroundColor:"#f0f8ff", flex: 1, 
      justifyContent: "center", alignItems: "center"}}>
  
   
  
            
          
          <Text style={{fontSize:20, alignSelf:"center"}}>
            Recupera tu contraseña o correo electronico
          </Text>
  
          <TextInput style={styles.input} onChangeText={(text) => 
            setEmail(text)} placeholder='correo@ejemplo.com'></TextInput>
  
          <TextInput secureTextEntry={true} style={ styles.input}
            onChangeText={(text) => setPassword(text)} 
            placeholder='******'></TextInput>
  
          <TouchableOpacity onPress={handleSignIn}>
          <ButtonLinearGradient/>
          </TouchableOpacity>
  
  
          
      </View>
        
  
    )
  
  
    
  }