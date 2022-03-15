import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBtPuwkkFAtk7iO3RELHr-H5uQRQhRcayU",
    authDomain: "clone-75d02.firebaseapp.com",
    projectId: "clone-75d02",
    storageBucket: "clone-75d02.appspot.com",
    messagingSenderId: "835353897066",
    appId: "1:835353897066:web:907ceed11aa293a3190213",
    measurementId: "G-DYNEN8MLYW"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);

