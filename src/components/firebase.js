import firebase from 'firebase'
 // Initialize Firebase
   var config = {
    apiKey: "AIzaSyAcLEqlPwVTmr4AHnQlm-u-sgWaGE6nJQc",
    authDomain: "parker-a1cf2.firebaseapp.com",
    databaseURL: "https://parker-a1cf2.firebaseio.com",
    projectId: "parker-a1cf2",
    storageBucket: "parker-a1cf2.appspot.com",
    messagingSenderId: "690512804475"
  };
  const fire = firebase.initializeApp(config);
const db = fire.firestore();
export default db;