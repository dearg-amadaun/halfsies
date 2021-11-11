import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyC_ZJwT1qjdk6bVOnLotcvb1l4_cDMPTEs",
  authDomain: "messenger-42e2a.firebaseapp.com",
  databaseURL: "https://messenger-42e2a-default-rtdb.firebaseio.com",
  projectId: "messenger-42e2a",
  storageBucket: "messenger-42e2a.appspot.com",
  messagingSenderId: "295427870035",
  appId: "1:295427870035:web:48389f63c0cc9b65bc65a6",
  measurementId: "G-3QMT0KHG86"
});

export default firebaseConfig;

