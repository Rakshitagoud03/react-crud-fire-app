//v9 compact packages
import {firebase} from 'firebase/compact/app'
import 'firebase/compact/auth'
import 'firebase/compact/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAytiSENEL4oAbZcTD8vV5FgR0zmFcUt5M",
    authDomain: "react-crud-app-862c4.firebaseapp.com",
    projectId: "react-crud-app-862c4",
    storageBucket: "react-crud-app-862c4.appspot.com",
    messagingSenderId: "981564974299",
    appId: "1:981564974299:web:c8f088138bd7f3ab9658fe",
    measurementId: "G-E1EZTCBVFS"
  };

  const Fireapp=firebase.initializeApp(firebaseConfig);
  //Fireapp=>default import

  export default Fireapp