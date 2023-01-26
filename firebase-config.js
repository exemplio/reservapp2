import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAX34_VeSH-bGrogeq31_buttt0rFQszPo",
  authDomain: "reservapp-b4ed1.firebaseapp.com",
  projectId: "reservapp-b4ed1",
  storageBucket: "reservapp-b4ed1.appspot.com",
  messagingSenderId: "521369658407",
  appId: "1:521369658407:web:d477ecceaf7e74b42d1a02",
  databaseURL: "https://reservapp-b4ed1-default-rtdb.firebaseio.com/"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
