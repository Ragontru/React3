/*configurará la información para conectar con el proyecto de Firebase y exportar
los servicios de la base de datos*/ 
import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyDFH56re9BGeqemC0v2AxmrBonmqiaw78k",
    authDomain: "pruebacasa-fc0d5.firebaseapp.com",
    projectId: "pruebacasa-fc0d5",
    storageBucket: "pruebacasa-fc0d5.appspot.com",
    messagingSenderId: "384522549917",
    appId: "1:384522549917:web:12bc71ff41b2fba1f4b274"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();