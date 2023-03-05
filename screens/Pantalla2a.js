import { View, Image, Alert, TouchableOpacity, } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "../style/style.js";
import UserScreen from "../database/firedatabase1.js";
import Condicional1 from "../condicionales/condicional1.js";
import Condicional2 from "../condicionales/condicional2.js";
import Condicional3 from "../condicionales/condicional3.js";
import Condicional4 from "../condicionales/condicional4.js";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from '@rneui/themed';
import { ListItem } from "react-native-elements";
import { CondicionalBack } from "../condicionales/condicionalback.js";


export default function Restaurant1({ navigation }) {
  
  
      CondicionalBack ({navigation});



      return (

      <ScrollView style={{ backgroundColor:"#f0f8ff"}}>

      <View>

      <Image
      source={require('../assets/image.jpg')}
      style={styles.imagenes}/>


      </View>

      <Text></Text>

      <ListItem> 
      <ListItem.Content>
      <ListItem.Title style={{alignSelf:"center"}}>
      <Text style={styles.letrasTitulosRestaurantes}>Cantidad de reservas:</Text>                    
      </ListItem.Title>
      </ListItem.Content>
      </ListItem>

      <View style={{ flexDirection:"row", alignSelf:"center" }}>

      

      <Condicional1 navigation={navigation}/>



      
       
      </View>


      <View>

      <Text>{"\n"}</Text>

      <ListItem> 
      <ListItem.Content>
      <ListItem.Title>
      <Text style={styles.letrasTitulosRestaurantes}>🍽Acerca de este restaurante:</Text>                    
      </ListItem.Title>
      <ListItem.Subtitle>
      <Text style={styles.letrasRestaurantes}>
      Restaurante de tipo familiar        
      </Text>       
      </ListItem.Subtitle>
      </ListItem.Content>
      </ListItem>


      <Text>{"\n"}</Text>



      <ListItem>
      <ListItem.Content>
      <ListItem.Title>
      <Text style={styles.letrasTitulosRestaurantes}>🗺Dirección</Text>         
      </ListItem.Title>
      <ListItem.Subtitle>
      <Text style={styles.letrasRestaurantes}>
      Calle Madrid entre Calle Trinidad y Calle New York Av. Paez 
      Quinta Izarra - El Paraiso - Caracas, Caracas 1000 Venezuela         
      </Text>                
      </ListItem.Subtitle>
      </ListItem.Content>
      </ListItem>

      <Text>{"\n"}</Text>

      <ListItem>
      <ListItem.Content>
      <ListItem.Title>
      <Text style={styles.letrasTitulosRestaurantes}>💲Precio promedio</Text>         
      </ListItem.Title>
      <ListItem.Subtitle>
      <Text style={styles.letrasRestaurantes}>
      20 USD      
      </Text>                
      </ListItem.Subtitle>
      </ListItem.Content>
      </ListItem>

      <Text>{"\n"}</Text>


      <ListItem>
      <ListItem.Content>
      <ListItem.Title>
      <Text style={styles.letrasTitulosRestaurantes}>💸Metodos de pago:</Text>                                  
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
      <Text style={styles.letrasTitulosRestaurantes}>⏳Horario</Text>
      </ListItem.Title>
      <ListItem.Subtitle>

      <View style={{flexDirection:"row"}}>
      <Text style={styles.letrasRestaurantes}>
      Lunes {"\n"}
      Martes {"\n"}
      Miércoles {"\n"}
      Jueves {"\n"}
      Viernes {"\n"}
      Sábado {"\n"}
      Domingo {"\n"}

      </Text> 

      <Text style={styles.letrasRestaurantes}>
      11:00-20:00 {"\n"}
      11:00-20:00 {"\n"}
      11:00-20:00 {"\n"}
      11:00-20:00 {"\n"}
      11:00-20:00 {"\n"}
      11:00-20:00 {"\n"}
      11:00-20:00 {"\n"}
      </Text>

      </View>

                 
      </ListItem.Subtitle>
      </ListItem.Content>
      </ListItem>



      </View>



      </ScrollView>


      )
}


