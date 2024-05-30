import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDYs_Wg-AjPZzP1G-7Q0T7dzJbuu52Tbvc",
  authDomain: "primerlogin-51e34.firebaseapp.com",
  projectId: "primerlogin-51e34",
  storageBucket: "primerlogin-51e34.appspot.com",
  messagingSenderId: "485681717032",
  appId: "1:485681717032:web:a7058b44295b2e6203fa1d"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth()
const firebaseStorage = getStorage(firebaseApp)

export {firebaseApp, auth, firebaseStorage}