import { View, Text, Image, Alert, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "../style/style.js";
import Condicional1 from "../condicionales/condicional1.js";
import Condicional2 from "../condicionales/condicional2.js";
import Condicional3 from "../condicionales/condicional3.js";
import Condicional4 from "../condicionales/condicional4.js";
import { ListItem } from "react-native-elements";


export default function Restaurant4({ navigation }) {

  
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
    
    <ScrollView  style={{ backgroundColor:"#f0f8ff"}}>

    <View>

    <Image
    source={require('../assets/image3.jpg')}
    style={styles.imagenes}/>


    </View>

    <View style={{flexDirection:"row", alignSelf:"center" }}>

    


    <Condicional1 navigation={navigation} />  

    <Condicional2 navigation={navigation} />

    <Condicional3 navigation={navigation} />

    <Condicional4 navigation={navigation} />

    
    </View>


       <View>

      <Text>{"\n"}</Text>
      <ListItem> 
      <ListItem.Content>
      <ListItem.Title>
      <Text style={styles.letrasTitulosRestaurantes}>Acerca de este restaurante:</Text>                    
      </ListItem.Title>
      <ListItem.Subtitle>
      <Text style={styles.letrasRestaurantes}>
      Comida...         
      </Text>       
      </ListItem.Subtitle>
      </ListItem.Content>
      </ListItem>


      <Text>{"\n"}</Text>



      <ListItem>
      <ListItem.Content>
      <ListItem.Title>
      <Text style={styles.letrasTitulosRestaurantes}>Dirección</Text>         
      </ListItem.Title>
      <ListItem.Subtitle>
      <Text style={styles.letrasRestaurantes}>
      El paraiso         
      </Text>                
      </ListItem.Subtitle>
      </ListItem.Content>
      </ListItem>

      <Text>{"\n"}</Text>

      <ListItem>
      <ListItem.Content>
      <ListItem.Title>
      <Text style={styles.letrasTitulosRestaurantes}>Precio promedio</Text>         
      </ListItem.Title>
      <ListItem.Subtitle>
      <Text style={styles.letrasRestaurantes}>
      8984984         
      </Text>                
      </ListItem.Subtitle>
      </ListItem.Content>
      </ListItem>

      <Text>{"\n"}</Text>


      <ListItem>
      <ListItem.Content>
      <ListItem.Title>
      <Text style={styles.letrasTitulosRestaurantes}>Metodos de pago:</Text>                                  
      </ListItem.Title>
      <ListItem.Subtitle>
      <Text style={styles.letrasRestaurantes}>
      Efectivo, Tarjeta
      </Text>                
      </ListItem.Subtitle>
      </ListItem.Content>
      </ListItem>

      <Text>{"\n"}</Text>

      <ListItem>
      <ListItem.Content>
      <ListItem.Title>
      <Text style={styles.letrasTitulosRestaurantes}>Horario</Text>
      </ListItem.Title>
      <ListItem.Subtitle>
      <Text style={styles.letrasRestaurantes}>
      Lunes:{"\n"}
      Martes: {"\n"}
      Miercoles:{"\n"}
      Jueves:{"\n"}
      Viernes:{"\n"}
      </Text>            
      </ListItem.Subtitle>
      </ListItem.Content>
      </ListItem>



      </View>


    </ScrollView>
    

   )
}

