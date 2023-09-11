import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDZ71aZJ92J_1ZuRNkEBuSBN5r1gGKdrc0",
    authDomain: "mechat-262eb.firebaseapp.com",
    projectId: "mechat-262eb",
    storageBucket: "mechat-262eb.appspot.com",
    messagingSenderId: "70689890214",
    appId: "1:70689890214:web:2c9713efdb11afc1f9f967",
  })
  .auth();
