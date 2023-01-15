import { TouchableHighlight, TouchableOpacity, Button, View, Text, Image, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "../style/style.js";


export default function LogScreen({ navigation }) {
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




  
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
       if(e.data.action.type !="GO_BACK") {
         return ;
        } else {
      e.preventDefault();
      Alert.alert(
        "¿Desea cerrar sesión?",
        "Presione OK para salir",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Presionaste cancelar"),
          },
          { text: "OK", onPress: () => navigation.navigate("Login") }
        ]
      );
     }
    });
}, [navigation]);


  return (
  
  <View style={{ flex:1, alignSelf:'center', justifyContent: "center"}}>
      
      <View>
      <Text style={{alignSelf:'center', fontSize:20}}>
        
      Usted ha realizado su reservacion exitoxamente.
      </Text>

      <Text style={{alignSelf:'center', fontSize:20}}>

      * * * DATOS OPERACIÓN * * *{"\n"}
      USUARIO: -------------- {"\n"}
      FECHA: _____ {"\n"}
      N° REFERENCIA: ______ {"\n"}
      RESTAURANTE: ------ {"\n"}

    </Text>
    </View>
  
  </View>

  );
}


