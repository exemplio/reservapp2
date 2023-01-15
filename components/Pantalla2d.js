import { Button, View, Text, Image, StyleSheet, ScrollView, Alert, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "../style/style.js";


export default function Restaurant4({ navigation }) {

  React.useEffect(() => {
 
    navigation.setOptions({
      headerRight: () => (
        
        <TouchableOpacity onPress={()=>Alert.alert(
          "¿Desea cerrar sesión?",
          "Presione OK para salir",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Presionaste cancelar"),
            },
            { text: "OK", onPress: () => navigation.navigate("Login") }
          ]
        )
        }>
        <Image source={require('../assets/botonexit.png')}
        style={styles.Buttonout}></Image>
        </TouchableOpacity>
      
      ),
    });
  }, [navigation]);
  

  return (
    
    
    <View  style={{height:'100%'}}>


    <Image
    source={require('../assets/image3.jpg')}
    style={styles.imagenes}>

    </Image>


    <TouchableOpacity onPress={()=>navigation.navigate("Factura")}>
    <Image source={require('../assets/boton1.png')}
      style={styles.botonreservar}></Image>
    </TouchableOpacity>

    </View>
  )
}

