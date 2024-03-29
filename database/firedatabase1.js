import React, { useState, useEffect } from "react";
import { Button, StyleSheet, View, Text, SectionList } from "react-native";
import { ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import firebaseConfig from "../firebase-config";


export default function UserScreen(){
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebaseConfig.db.collection("rest1").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { puestos } = doc.data();
        users.push({
        
        id: doc.id,
        puestos,

        });
      });
      setUsers(users);
    });
  }, []);


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
  


return users;


};

