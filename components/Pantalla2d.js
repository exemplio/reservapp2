import { Button, View, Text, Image, StyleSheet, ScrollView, 
  Alert, TouchableOpacity, ImageBackground } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "../style/style.js";


export default function Restaurant4({ navigation }) {

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
  

  return (
    
    <ImageBackground style={{height:'100%', width:'100%'}} 
        source={require('../assets/imagefondo.jpg')} resizeMode="cover">

    
    <View  style={{height:'100%'}}>


    <Image
    source={require('../assets/image3.jpg')}
    style={styles.imagenes}>

    </Image>


    <TouchableOpacity onPress={()=>navigation.navigate("Factura")}>
    <Image source={require('../assets/boton1.jpg')}
      style={styles.botonreservar}></Image>
    </TouchableOpacity>

    </View>

    </ImageBackground>

  )
}

