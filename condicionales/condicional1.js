import { Alert, TouchableOpacity, Text, View } from "react-native";
import { styles } from "../style/style.js";
import React, { useEffect, useState } from "react";
import firebaseConfig from "../firebase-config";
import { doc, updateDoc, increment } from "firebase/firestore";
import UserScreen from "../database/firedatabase1";



 // export const Condicional1 = () => {

  export default function Condicional1({ navigation }) {

      const numbers= UserScreen();
      const doubledNumbers = numbers.map(number => number.puestos);

    function updateDocument1() {     
        if(doubledNumbers>0 && doubledNumbers>=1){
        firebaseConfig.db.collection('rest1').doc('El maracana').update({
          puestos: increment(-1)
        });
        navigation.navigate("FacturaA")
      }
    
      else{
        Alert.alert("No hay suficientes puestos para realizar la reserva")
            }
    
      }
    
    function updateDocument2() {        
        if(doubledNumbers>0 && doubledNumbers>=2){
        firebaseConfig.db.collection('rest1').doc('El maracana').update({
          puestos: increment(-2)
        });
        navigation.navigate("FacturaA")
      }
    
      else{
        Alert.alert("No hay suficientes puestos para realizar la reserva")
      }
    
      }
    
    function updateDocument3() {        
        if(doubledNumbers>0 && doubledNumbers>=3){
        firebaseConfig.db.collection('rest1').doc('El maracana').update({
          puestos: increment(-3)
        });
        navigation.navigate("FacturaA")
      }
    
      else{
        Alert.alert("No hay suficientes puestos para realizar la reserva")
      }
    
      }  
    
    function updateDocument4() {   
      if(doubledNumbers>0 && doubledNumbers>=4){
      firebaseConfig.db.collection('rest1').doc('El maracana').update({
        puestos: increment(-4)
      });
      navigation.navigate("FacturaA")
    }
  
    else{
      Alert.alert("No hay suficientes puestos para realizar la reserva")
    }
  
    }

    
         

      return(

        <><TouchableOpacity onPress={() => Alert.alert(
        "¿Está seguro que desea hacer 1 reservacion/es?",
        "",
        [
        {
        text: "Cancelar",
        },
        { text: "Reservar", onPress: () => updateDocument1() }
        ]
        )}

        style={styles.botonSeleccion}>

        <Text>
        1
        </Text></TouchableOpacity>
        
        
        <TouchableOpacity onPress={() => Alert.alert(
        "¿Está seguro que desea hacer 2 reservacion/es?",
        "",
        [
        {
        text: "Cancelar",
        },
        { text: "Reservar", onPress: () => updateDocument2() }
        ]
        )}

        style={styles.botonSeleccion}>

        <Text>
        2
        </Text></TouchableOpacity>
          
          
        <TouchableOpacity onPress={() => Alert.alert(
        "¿Está seguro que desea hacer 3 reservacion/es?",
        "",
        [
        {
        text: "Cancelar",
        },
        { text: "Reservar", onPress: () => updateDocument3() }
        ]
        )}

        style={styles.botonSeleccion}>

        <Text>
        3
        </Text>
        </TouchableOpacity>
          
          
        <TouchableOpacity onPress={() => Alert.alert(
        "¿Está seguro que desea hacer 4 reservacion/es?",
        "",
        [
        {
        text: "Cancelar",
        },
        { text: "Reservar", onPress: () => updateDocument4() }
        ]
        )}

        style={styles.botonSeleccion}>

        <Text>
        4
        </Text>
        </TouchableOpacity></>   
            
)
  

  
}


