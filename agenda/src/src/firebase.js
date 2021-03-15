import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyD4bFAJpM04zWfPIW0Xs46olsrljWW17PM",
  authDomain: "prueba-6c613.firebaseapp.com",
  projectId: "prueba-6c613",
  storageBucket: "prueba-6c613.appspot.com",
  messagingSenderId: "977545408272",
  appId: "1:977545408272:web:031c57729a28ecdec0bf95",
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();