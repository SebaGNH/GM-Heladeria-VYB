// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA5341B1SS-I1cnnPvMojXM3E_ETIL1XKg",
  authDomain: "heladeria-vates.firebaseapp.com",
  projectId: "heladeria-vates",
  storageBucket: "heladeria-vates.appspot.com",
  messagingSenderId: "24062485047",
  appId: "1:24062485047:web:8c6a1e82b0b9da03d795b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreInit = () => app;


/*

rules_version = '2';


service cloud.firestore {

  match /databases/{database}/documents {

    match /{document=**} {

      allow read, write: if

          request.time < timestamp.date(2024, 1, 5);

    }

  }

}


*/