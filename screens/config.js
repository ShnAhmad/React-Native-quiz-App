import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5IAQ8N2Jy7vEv3SF6nmotAYl91U8t8c4",
  authDomain: "labfinal-748d5.firebaseapp.com",
  projectId: "labfinal-748d5",
  storageBucket: "labfinal-748d5.appspot.com",
  messagingSenderId: "819845023247",
  appId: "1:819845023247:web:fae71d05d334c697a8857a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
