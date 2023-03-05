import { Alert, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "../style/style.js";
import { getAuth, signOut } from "firebase/auth";


  
  

    export const CondicionalBack  = ({ navigation }) => {

      const handleSignOut = () => {
        
        const auth = getAuth();
        signOut(auth)
        .then(() => {
          navigation.navigate("Login");})
        .catch((error) => {
          console.error(error)
                });   
        }

      
    React.useEffect(() => {
 
      navigation.setOptions({
        headerRight: () => (
          
          <TouchableOpacity onPress={()=>Alert.alert(
            "¿Desea cerrar sesión?",
            "",
            [
              {
                text: "No",
              },
              {
                text: "Cerrar sesión",
                onPress: handleSignOut,
              },
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
            },
            { 
            text: "OK", 
            onPress: handleSignOut,
            }
          ]
        );
       }
      });
  }, [navigation]);
    
    
    }

    



  



