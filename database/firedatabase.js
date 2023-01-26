import React, { useState, useEffect } from "react";
import { Button, StyleSheet, View, Text, SectionList } from "react-native";
import { ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import firebaseConfig from "../firebase-config";


const UserScreen = (props) => {
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






  return (

    <View>

    {users.map((user) => {
      return (
        <ListItem
          key={user.id}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Subtitle>Cantidad de puestos disponibles: {user.puestos}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    })}
  </View>

  );
};

export default UserScreen;
