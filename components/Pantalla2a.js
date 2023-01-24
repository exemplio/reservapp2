import { View, Text, Image, StyleSheet, ScrollView, Alert, 
  TouchableOpacity, Button, ImageBackground, handlerLongClick } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "../style/style.js";
import database from '@firebase/database';
import { firebaseConfig } from '../firebase-config';
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";   
import firebase from 'firebase/app';
import * as react from 'react';


export default function Restaurant1({ navigation }) {
  
  
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
  }, [navigation]);}
  
  botonvolverylogout();

  

  return (
    
    <View  style={{height:'100%', backgroundColor:"#f0f8ff"}}>

    <View>

    <Image
    source={require('../assets/image.jpg')}
    style={styles.imagenes}/>


    </View>

    <View style={{flexDirection:"row", alignSelf:"center" }}>

    <TouchableOpacity onPress={()=>navigation.navigate("Factura")}
    style={styles.botonSeleccion}>

    <Text>
        1
      </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate("Factura")}
    style={styles.botonSeleccion}>
    <Text>
      2
    </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate("Factura")}
    style={styles.botonSeleccion}>
    <Text>
      3
    </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate("Factura")}
    style={styles.botonSeleccion}>
    <Text>
      4
    </Text>
    </TouchableOpacity>
    
    </View>

    </View>
    

   )
}

