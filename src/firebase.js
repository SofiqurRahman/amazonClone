import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDymxnYsrn1ySWsUuAM4ZyPcAZDrqwnCmo",
  authDomain: "clone-6e428.firebaseapp.com",
  databaseURL: "https://clone-6e428.firebaseio.com",
  projectId: "clone-6e428",
  storageBucket: "clone-6e428.appspot.com",
  messagingSenderId: "605304818038",
  appId: "1:605304818038:web:3562f7a261e48f9ca3d257",
  measurementId: "G-7JG75R40SH"
});
const auth=firebase.auth();
export{auth};