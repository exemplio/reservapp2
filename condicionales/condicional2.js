import { Alert, TouchableOpacity, Text, View } from "react-native";
import { styles } from "../style/style.js";
import React, { useEffect, useState } from "react";
import firebaseConfig from "../firebase-config";
import { doc, updateDoc, increment } from "firebase/firestore";
import UserScreen2 from "../database/firedatabase2.js";




  export default function Condicional2({ navigation }) {

    const numbers= UserScreen2();
    const doubledNumbers = numbers.map(number => number.puestos);

  function updateDocument1() {
      const documentRef = firebaseConfig.db.collection('rest2').doc('Pizza King');
   
      if(doubledNumbers>0 && doubledNumbers>=1){
      firebaseConfig.db.collection('rest2').doc('Pizza King').update({
        puestos: increment(-1)
      });
      navigation.navigate("FacturaB")
    }
  
    else{
      Alert.alert("No hay suficientes puestos para realizar la reserva")
          }
  
    }
  
  function updateDocument2() {   
      const documentRef = firebaseConfig.db.collection('rest2').doc('Pizza King');
   
      if(doubledNumbers>0 && doubledNumbers>=2){
      firebaseConfig.db.collection('rest2').doc('Pizza King').update({
        puestos: increment(-2)
      });
      navigation.navigate("FacturaB")
    }
  
    else{
      Alert.alert("No hay suficientes puestos para realizar la reserva")
    }
  
    }
  
  function updateDocument3() {   
      const documentRef = firebaseConfig.db.collection('rest2').doc('Pizza King');
   
      if(doubledNumbers>0 && doubledNumbers>=3){
      firebaseConfig.db.collection('rest2').doc('Pizza King').update({
        puestos: increment(-3)
      });
      navigation.navigate("FacturaB")
    }
  
    else{
      Alert.alert("No hay suficientes puestos para realizar la reserva")
    }
  
    }  
  
  function updateDocument4() {
    const documentRef = firebaseConfig.db.collection('rest2').doc('Pizza King');
 
    if(doubledNumbers>0 && doubledNumbers>=4){
    firebaseConfig.db.collection('rest2').doc('Pizza King').update({
      puestos: increment(-4)
    });
    navigation.navigate("FacturaB")
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
      </Text>
      </TouchableOpacity>

    
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
      </Text>
      </TouchableOpacity>
      
      
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

