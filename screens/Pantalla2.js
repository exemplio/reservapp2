import { View, Text, Image, 
  ScrollView, Alert, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "../style/style.js";
import UserScreen from "../database/firedatabase1.js"
import UserScreen2 from "../database/firedatabase2.js"
import UserScreen3 from "../database/firedatabase3.js"
import UserScreen4 from "../database/firedatabase4.js"
import UserScreenCopy from "../database/firedatabase1copy.js"
import UserScreen2Copy from "../database/firedatabase2copy.js"
import UserScreen3Copy from "../database/firedatabase3copy.js"
import UserScreen4Copy from "../database/firedatabase4copy.js"


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

    <UserScreenCopy/>

    <View>

    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant1")} >
    <Image
      source={require('../assets/image.jpg')}
      style={styles.imagenes}>

      </Image>
    </TouchableOpacity>

    </View>

    <UserScreen/>

    <Text>{"\n"}</Text>

    
    

    <UserScreen2Copy/>

    <View>
    
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant2")} >
    <Image
      source={require('../assets/image1.jpg')}
      style={styles.imagenes} />
    </TouchableOpacity>

    </View>

    <UserScreen2/>


    <Text>{"\n"}</Text>
    


    <UserScreen3Copy/>
    <View>
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant3")} >
    <Image
      source={require('../assets/image2.jpg')}
      style={styles.imagenes} />
    </TouchableOpacity>

     </View>

     <UserScreen3/>

     <Text>{"\n"}</Text>

    

    <UserScreen4Copy/>
    <View>
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant4")} >
    <Image
    source={require('../assets/image3.jpg')}
    style={styles.imagenes} />
    
    </TouchableOpacity>
   
    </View>

    <UserScreen4/>


    <Text>{"\n"}</Text>






</View>
</ScrollView>
  


  );
}