import { View, Text, Image, Alert, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "../style/style.js";
import Condicional1 from "../condicionales/condicional1.js";
import Condicional2 from "../condicionales/condicional2.js";
import Condicional3 from "../condicionales/condicional3.js";
import Condicional4 from "../condicionales/condicional4.js";
import { ListItem } from "react-native-elements";
import { CondicionalBack } from "../condicionales/condicionalback.js";

export default function Restaurant2({ navigation }) {
  
  CondicionalBack ({navigation});

 

    return (
    
    <ScrollView  style={{ backgroundColor:"#f0f8ff"}}>

    <View>

    <Image
    source={require('../assets/image1.jpg')}
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

    <View style={{flexDirection:"row", alignSelf:"center" }}>


    <Condicional2 navigation={navigation} />




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
      Restaurante de comida rapida y de tipo familiar        
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
      Av. El Ejército, entre Calle Madariaga y Av. Páez, 
      Qta. Pizza King, El Paraíso, Caracas         
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
      30 USD
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
      Martes {"\n"}
      Miércoles {"\n"}
      Jueves {"\n"}
      Viernes {"\n"}
      Sábado {"\n"}
      Domingo {"\n"}

      </Text> 

      <Text style={styles.letrasRestaurantes}>
      11:00-21:00 {"\n"}
      11:00-21:00 {"\n"}
      11:00-21:00 {"\n"}
      11:00-21:00 {"\n"}
      11:00-21:00 {"\n"}
      11:00-21:00 {"\n"}
      </Text>

      </View>       
      </ListItem.Subtitle>
      </ListItem.Content>
      </ListItem>



      </View>



      </ScrollView>


      )
}