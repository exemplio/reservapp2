import { View, Image,  Alert, TouchableOpacity } from "react-native";
  import React, { useState, useEffect } from 'react';
  import { styles } from "../style/style.js";


export default function BackButton() {

    function Botondevolver(){
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
    }, [navigation]);}

    Botondevolver();
return(g)

}
