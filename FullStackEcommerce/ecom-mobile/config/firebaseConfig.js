import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZBwfD50GfT3qcBZX64aLJ29p98idTQqs",
  authDomain: "ecommerce-app-1a2f9.firebaseapp.com",
  projectId: "ecommerce-app-1a2f9",
  storageBucket: "ecommerce-app-1a2f9.firebasestorage.app",
  messagingSenderId: "473372456000",
  appId: "1:473372456000:web:17154b7ef87cc56ecb5ba5",
  measurementId: "G-8YDJEFMCZ6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export { firebase };