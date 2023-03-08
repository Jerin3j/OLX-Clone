import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

      const firebaseConfig = {
            apiKey: "AIzaSyCRc_adLu7LeOOcB3bPiQReSBWGejSASjs",
            authDomain: "olx-clone-reactt.firebaseapp.com",
            projectId: "olx-clone-reactt",
            storageBucket: "olx-clone-reactt.appspot.com",
            messagingSenderId: "405091397235",
            appId: "1:405091397235:web:31521d152e47fc2d254406",
            measurementId: "G-F5RHT8J8FH"

          };

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);
  


