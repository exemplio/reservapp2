import { View, Text, Image, StyleSheet, 
  ScrollView, Alert, TouchableOpacity, Button, ImageBackground } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "../style/style.js";


export default function AboutScreen({ navigation }) {
 
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
}, [navigation]);

  return (

    
   
    <ImageBackground style={{height:'100%', width:'100%'}} 
    source={require('../assets/imagefondo.jpg')} resizeMode="cover">

  <ScrollView>
                      
          
    <Text style={{fontSize:30}}>Recomendaciones del dia</Text>
    <Text></Text>


    <View  style={{height:'100%'}}>

    <View>

    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant1")} >
    <Image
      source={require('../assets/image.jpg')}
      style={styles.imagenes}>

      </Image>


    </TouchableOpacity>
    
    <Text>Numero 1 pollo en brasas</Text>
    <Text>40$ por persona.</Text>

    </View>

    <View>
    
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant2")} >
    <Image
      source={require('../assets/image1.jpg')}
      style={styles.imagenes} />
    </TouchableOpacity>
    <Text>Numero 2 pastas</Text>
    <Text>20$ por persona.</Text>


    </View>
    
    




    <View>
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant3")} >
     <Image
      source={require('../assets/image2.jpg')}
      style={styles.imagenes} />
     </TouchableOpacity>
     <Text>Numero 3 hamburguesas</Text>
    <Text>15$ por persona.</Text>

     </View>

    


    <View>
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant4")} >
    <Image
    source={require('../assets/image3.jpg')}
    style={styles.imagenes} />
    
    </TouchableOpacity>
    <Text>Numero 4 pollo en brasas</Text>
    <Text>40$ por persona.</Text>
    
    </View>

    </View>


</ScrollView>
  
</ImageBackground>


  );
}