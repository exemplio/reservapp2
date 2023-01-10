import { Button, View, Text, Image, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState, useEffect } from 'react';


export default function LogScreen({ navigation }) {

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
    <View style={{ flex: 1,alignContent:"center",  justifyContent: "center" }}>
      <Text>Su estado de cuenta ha sido actualizado, sujeto a cambios previa
verificación, muchísimas gracias por su reservacion.
* * * DATOS OPERACIÓN * * *
EDIFICIO: -----------

PROPIETARIO: --------------
FECHA: 15-11-2022
REFERENCIA: 849797
RESTAURANTE: ------

</Text>
    </View>
  );
}