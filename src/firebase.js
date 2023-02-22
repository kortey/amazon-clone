import firebase from 'firebase/compat/app'
import  "firebase/compat/auth"
import  "firebase/compat/firestore"
import  "firebase/compat/database"



const firebaseConfig = {
    apiKey: "AIzaSyC7YrdLe9g4c5olNW_tlS6Fmg0vBiRwcuk",
    authDomain: "e-clone-61092.firebaseapp.com",
    projectId: "e-clone-61092",
    storageBucket: "e-clone-61092.appspot.com",
    messagingSenderId: "627554785351",
    appId: "1:627554785351:web:f45583aaa8eddf8bda3962",
    measurementId: "G-00HLDYC454"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db,auth}
