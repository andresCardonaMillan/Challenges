
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4lggWVSK_kkM79GKcLeZC5DHt4CPgzss",
  authDomain: "fir-database-1b478.firebaseapp.com",
  projectId: "fir-database-1b478",
  storageBucket: "fir-database-1b478.appspot.com",
  messagingSenderId: "883082312664",
  appId: "1:883082312664:web:9bcb3d3d391d8ba21b10ad"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };

