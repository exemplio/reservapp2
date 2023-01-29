import { TouchableOpacity, View, Text, Image, Alert } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "../style/style.js";
import { getAuth, updateProfile } from "firebase/auth";
import UserScreen from "../database/firedatabase1.js"
import { CondicionalBack } from "../condicionales/condicionalback.js";



export default function LogScreen({ navigation }) {

const date = new Date().getDate(); 
const month = new Date().getMonth() + 1; 
const year = new Date().getFullYear(); 
const hours = new Date().getHours(); 
const min = new Date().getMinutes(); 
  
  
CondicionalBack ({navigation});


    const auth = getAuth();
    const user = auth.currentUser;

    

   
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
    
    


  return (
  
  <View style={{backgroundColor:"#f0f8ff", height:"100%", flex:1, 
  justifyContent: "center",  
  }}>
      
      
      <Text style={{alignSelf:'center', fontSize:20}}>
        
      Usted ha realizado su reservacion exitoxamente.

      </Text>

      <Text>{"\n"}</Text>

      <Text style={{alignSelf:'center', fontSize:20}}>

      * * * DATOS OPERACIÓN * * *{"\n"}

      </Text>


      <Text style={{alignSelf:'center', fontSize:20}}>

      NOMBRE: {displayName} {"\n"}
      CORREO: {email} {"\n"}
      FECHA:  {date}/{month}/{year} {"\n"}
      HORA MAXIMA:  {hours}:{min} {"\n"}
      CANTIDAD DE RESERVAS: ______ {"\n"}
      RESTAURANTE: ------ {"\n"}

      </Text>
  
  </View>

  );

    }
}