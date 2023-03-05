import React, { useState, useEffect } from "react";
import { Button, StyleSheet, View, Text, SectionList } from "react-native";
import { ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import firebaseConfig from "../firebase-config";

export default function UserScreen2(){

  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebaseConfig.db.collection("rest2").onSnapshot((querySnapshot) => {
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






  return users;


};