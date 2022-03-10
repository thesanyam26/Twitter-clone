import { ColorLensOutlined } from "@material-ui/icons";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBI2xSIb4Fk4sZr60caTtWrZz41WKC6jLE",
  authDomain: "twitter-clone-eedcc.firebaseapp.com",
  projectId: "twitter-clone-eedcc",
  storageBucket: "twitter-clone-eedcc.appspot.com",
  messagingSenderId: "578305415276",
  appId: "1:578305415276:web:2413d569e29ee17c3b2049",
  measurementId: "G-QVM3GFTD6M"
};

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  

  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app);

  export default db;