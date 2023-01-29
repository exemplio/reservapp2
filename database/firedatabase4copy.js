import React, { useState, useEffect } from "react";
import { Button, StyleSheet, View, Text, SectionList } from "react-native";
import { ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebaseConfig from "../firebase-config";


const UserScreen4Copy = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebaseConfig.db.collection("rest4").onSnapshot((querySnapshot) => {
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
            <ListItem.Subtitle>
              Restaurante: {user.id}
              </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    })}
  </View>

  );
};

export default UserScreen4Copy;