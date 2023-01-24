import { TouchableHighlight, TouchableOpacity, Button, View, Text, Image, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "../style/style.js";
import { getAuth, updateProfile } from "firebase/auth";




export default function LogScreen({ navigation }) {
  
  
  function botonvolverylogout(){

  React.useEffect(() => {
 
    navigation.setOptions({
      headerRight: () => (
        
        <TouchableOpacity onPress={()=>Alert.alert(
          "¿Desea cerrar sesión?",
          "",
          [
            {
              text: "No",
              onPress: () => console.log("Presionaste no"),
            },
            { text: "Si", onPress: () => navigation.navigate("Login") }
          ]
        )
        }>
        <Image source={require('../assets/botonexit.jpg')}
        style={styles.Buttonout}></Image>
        </TouchableOpacity>
      
      ),
    });
  }, [navigation]);
  
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
       if(e.data.action.type !="GO_BACK") {
         return ;
        } else {
      e.preventDefault();
      Alert.alert(
        "¿Desea hacer otra reservacion?",
        "Sí presiona no, se cerrará sesión",
        [
          {
            text: "No",
            onPress: () => navigation.push('Login')
          },
          { text: "Si", onPress: () => navigation.navigate("Reserva") }
        ]
      );
     }
    });
}, [navigation]);}

  botonvolverylogout();

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

      <Text style={{alignSelf:'center', fontSize:20}}>

      * * * DATOS OPERACIÓN * * *{"\n"}
      NOMBRE: {displayName} {"\n"}
      CORREO: {email} {"\n"}
      FECHA:  {"\n"}
      N° REFERENCIA: ______ {"\n"}
      RESTAURANTE: ------ {"\n"}

    </Text>
  
  </View>

  );

    }
}


