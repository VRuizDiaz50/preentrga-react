
// Importamos las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//  configuración web de Firebase (la que trajiste de la consola)
const firebaseConfig = {
  apiKey: "AIzaSyDBIV5FpXD6jDecHb_E-DT8CphPLLbpl74",
  authDomain: "preentrega-react.firebaseapp.com",
  projectId: "preentrega-react",
  storageBucket: "preentrega-react.appspot.com",
  messagingSenderId: "806241219877",
  appId: "1:806241219877:web:03960611372ed11a1596cc"
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Exportamos la autenticación y la base de datos para usarlas en la tienda
export const auth = getAuth(app);
export const db = getFirestore(app);