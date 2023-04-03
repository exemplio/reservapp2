import { TouchableOpacity, View, Text, Image, Alert } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "../style/style.js";
import { getAuth, updateProfile } from "firebase/auth";
import { CondicionalBack } from "../condicionales/condicionalback.js";
import { ListItem } from "react-native-elements";



export default function LogScreen4({ navigation }) {

const date = new Date().getDate(); 
const month = new Date().getMonth() + 1; 
const year = new Date().getFullYear(); 


  
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

 
      
      <ListItem>
          <ListItem.Content>
            <ListItem.Title style={{alignSelf:"center", fontSize:20}}>
        
        Usted ha realizado su reservacion exitoxamente.
        </ListItem.Title>

        <ListItem.Title style={{alignSelf:"center", fontSize:20}}>
        * * * DATOS OPERACIÓN * * *{"\n"}
        </ListItem.Title>

        <ListItem.Subtitle style={{alignSelf:"center", fontSize:20}}>
    
        Correo: {email} {"\n"}
        Fecha de reserva:  {date}/{month}/{year} {"\n"}
        Restaurant: Puerkos Restaurant {"\n"}
  
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>

        <View style={{flexDirection:"row", alignSelf:"center"}}>

        <TouchableOpacity onPress={() => Alert.alert(
        "¿Desea realizar otra reservación?",
        "",
        [
        {
        text: "Cancelar",
        },
        { text: "Si", onPress: () => navigation.navigate("Reserva") }
        ]
        )}

        style={styles.botonesFactura}>

        <Text>
        Realizar otra reservación
        </Text>
        </TouchableOpacity>



        </View>

      
  
  </View>

  );

    }
}