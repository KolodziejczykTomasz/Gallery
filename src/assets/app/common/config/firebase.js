import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlsovuIhzr7OODPotgwp2xHf5DLmwnIiI",
  authDomain: "gallery-b6f74.firebaseapp.com",
  databaseURL: "https://gallery-b6f74.firebaseio.com",
  projectId: "gallery-b6f74",
  storageBucket: "gallery-b6f74.appspot.com",
  messagingSenderId: "830189042573",
  appId: "1:830189042573:web:d1e756a61efc7fc23a5bc4"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
