import { View, Text, Image, StyleSheet, 
  ScrollView, Alert, TouchableOpacity, Button, ImageBackground } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "../style/style.js";


export default function AboutScreen({ navigation }) {
 
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

  botonvolverylogout();



  return (


  <ScrollView style={{backgroundColor:"#f0f8ff"}}> 
                      
          
    <Text style={{fontSize:20}}>Recomendaciones del dia</Text>
    <Text></Text>


    <View  style={{height:'100%'}}>

    <View>

    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant1")} >
    <Image
      source={require('../assets/image.jpg')}
      style={styles.imagenes}>

      </Image>
    </TouchableOpacity>

    </View>


    <View style={{flexDirection:"row"}}>
    
    <View style={{justifyContent:"flex-end"}}>
    <Text style={{fontSize:40, color:"#008000"}}>
    ●
    </Text>
    </View>
    
    <View style={{justifyContent:"center"}}>
    <Text style={{fontSize:40, color:"#ffff00"}}>
    ●
    </Text>
    </View>
    

    <View style={{justifyContent:"flex-end"}}>
    <Text style={{fontSize:40, color:"#ff0000"}}>
    ●
    </Text>
    </View>

    </View>

    
    


    <View>
    
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant2")} >
    <Image
      source={require('../assets/image1.jpg')}
      style={styles.imagenes} />
    </TouchableOpacity>

    </View>

    <View style={{flexDirection:"row"}}>
    
    <View style={{justifyContent:"flex-end"}}>
    <Text style={{fontSize:40, color:"#008000"}}>
    ●
    </Text>
    </View>
    
    <View style={{justifyContent:"center"}}>
    <Text style={{fontSize:40, color:"#ffff00"}}>
    ●
    </Text>
    </View>
    

    <View style={{justifyContent:"flex-end"}}>
    <Text style={{fontSize:40, color:"#ff0000"}}>
    ●
    </Text>
    </View>

    </View>
    
    




    <View>
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant3")} >
     <Image
      source={require('../assets/image2.jpg')}
      style={styles.imagenes} />
     </TouchableOpacity>

     </View>

     <View style={{flexDirection:"row"}}>
    
    <View style={{justifyContent:"flex-end"}}>
    <Text style={{fontSize:40, color:"#008000"}}>
    ●
    </Text>
    </View>
    
    <View style={{justifyContent:"center"}}>
    <Text style={{fontSize:40, color:"#ffff00"}}>
    ●
    </Text>
    </View>
    

    <View style={{justifyContent:"flex-end"}}>
    <Text style={{fontSize:40, color:"#ff0000"}}>
    ●
    </Text>
    </View>

    </View>

    


    <View>
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant4")} >
    <Image
    source={require('../assets/image3.jpg')}
    style={styles.imagenes} />
    
    </TouchableOpacity>
   
    </View>


    <View style={{flexDirection:"row"}}>
    
    <View style={{justifyContent:"flex-end"}}>
    <Text style={{fontSize:40, color:"#008000"}}>
    ●
    </Text>
    </View>
    
    <View style={{justifyContent:"center"}}>
    <Text style={{fontSize:40, color:"#ffff00"}}>
    ●
    </Text>
    </View>
    

    <View style={{justifyContent:"flex-end"}}>
    <Text style={{fontSize:40, color:"#ff0000"}}>
    ●
    </Text>
    </View>

    </View>




</View>
</ScrollView>
  


  );
}