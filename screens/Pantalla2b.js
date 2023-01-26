import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "../style/style.js";


export default function Restaurant2({ navigation }) {
  
 
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
    source={require('../assets/image1.jpg')}
    style={styles.imagenes}/>


    </View>

    <View style={{flexDirection:"row", alignSelf:"center" }}>

    <TouchableOpacity onPress={()=>Alert.alert(
          "¿Está seguro que desea hacer 1 reservacion/es?",
          "",
          [
            {
              text: "Cancelar",
            },
            { text: "Reservar", onPress: () => navigation.navigate("Factura") }
          ]
        )
        }
    
    
    
    
    style={styles.botonSeleccion}>

    <Text>
        1
      </Text>
    </TouchableOpacity>



    

    <TouchableOpacity onPress={()=>Alert.alert(
          "¿Está seguro que desea hacer 2 reservacion/es?",
          "",
          [
            {
              text: "Cancelar",
            },
            { text: "Reservar", onPress: () => navigation.navigate("Factura") }
          ]
        )
        }
    
    
    
    
    style={styles.botonSeleccion}>




    <Text>
      2
    </Text>
    </TouchableOpacity>





    <TouchableOpacity onPress={()=>Alert.alert(
          "¿Está seguro que desea hacer 3 reservacion/es?",
          "",
          [
            {
              text: "Cancelar",
            },
            { text: "Reservar", onPress: () => navigation.navigate("Factura") }
          ]
        )
        }
    
    
    
    
    style={styles.botonSeleccion}>




    <Text>
      3
    </Text>
    </TouchableOpacity>




    <TouchableOpacity onPress={()=>Alert.alert(
          "¿Está seguro que desea hacer 4 reservacion/es?",
          "",
          [
            {
              text: "Cancelar",
            },
            { text: "Reservar", onPress: () => navigation.navigate("Factura") }
          ]
        )
        }
    
    
    
    
    style={styles.botonSeleccion}>




    <Text>
      4
    </Text>
    </TouchableOpacity>
    
    </View>



    </View>
    

   )
}

