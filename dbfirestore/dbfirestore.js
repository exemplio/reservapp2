import * as RN from 'react-native'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseConfig } from '../firebase-config';
import { collection, onSnapshot, getDocs, query, 
  doc , getDoc , addDoc, setDoc  } from "firebase/firestore"; 
  
  export default function DbFirestore() {



    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const citiesRef = collection(db, "users");

    
    async function BaseDatos(){

      try{
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.data());
        });

    }
    catch(error){
      console.log(error.message)
    }

    

  }

  BaseDatos();

    return(

      <RN.View>
          <RN.TouchableOpacity>
            <RN.Text></RN.Text>
            
          </RN.TouchableOpacity>
      </RN.View>
        )
  }