import React from "react";
import { Button, View, Text, Image, StyleSheet, ScrollView } from "react-native";


export default function AboutScreen({ navigation }) {

 
  
  return (
    <ScrollView>
    <Image
    source={{
      uri: 'https://bde04f90fcbcc7b99af9-a4cf3e88ec567f5b6c6819f1d482f77f.ssl.cf1.rackcdn.com/5_750_r_0.jpg?v=1344',}}
      style={{height:200, width: 400}} />
    <Button
        title="Reservar"
        onPress={() => navigation.navigate("Pantalla 3")}/>
  <Image
  source={{ uri: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339941744.jpg?k=5ee1b091f5498cea0aebbe453f015596d0ad69445be1fc35c41e70a7c6964169&o=&hp=1',}}
    style={{height:200, width: 400}} />
    <Button
        title="Reservar"
        onPress={() => navigation.navigate("Pantalla 3")}/>
  <Image
    source={{
      uri: 'https://photo620x400.mnstatic.com/20f655373bbada0209346788a1efbb29/restaurante-el-paraiso.jpg',}}
      style={{height:200, width: 400}} />

    <Button
        title="Reservar"
        onPress={() => navigation.navigate("Pantalla 3")}/>

  <Image
    source={{
      uri: 'https://fastly.4sqi.net/img/general/600x600/5894517_H9-CW7ojUIbq3G_7Jaqkj1YNhoyAhVLwoqN1wHgrpYs.jpg',}}
      style={{height:200, width: 400}} />

    <Button
        title="Reservar"
        onPress={() => navigation.navigate("Pantalla 3")}/>

  </ScrollView>
  
  );
}


