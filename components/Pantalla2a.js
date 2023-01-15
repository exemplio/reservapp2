import { View, Text, Image, StyleSheet, ScrollView, Alert, 
  TouchableOpacity, Button } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "../style/style.js";
import database from '@firebase/database';
import { firebaseConfig } from '../firebase-config';
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";   
import firebase from 'firebase/app';
import * as react from 'react';


export default function Restaurant1({ navigation }) {
  
  

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

    <View>

    <Image
    source={require('../assets/image.jpg')}
    style={styles.imagenes}>

    </Image>

    </View>

    <View>

    <TouchableOpacity onPress={()=>navigation.navigate("Factura")}>
    <Image source={require('../assets/boton1.png')}
      style={styles.botonreservar}></Image>
    </TouchableOpacity>
    
    </View>

    </View>
    
  
   )
}

