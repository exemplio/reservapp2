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

      <View style={{ flexDirection:"row", alignSelf:"center" }}>

      
      <Text style={styles.textoReservas}>Reservas</Text>

      

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

