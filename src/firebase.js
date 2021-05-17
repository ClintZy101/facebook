// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCMiZGLTzUYXGJme4W7t7LJLw5SJBYkh1s",
    authDomain: "facebook-clone-bec9e.firebaseapp.com",
    projectId: "facebook-clone-bec9e",
    storageBucket: "facebook-clone-bec9e.appspot.com",
    messagingSenderId: "177187110617",
    appId: "1:177187110617:web:0f452b059ac95299d708c8",
    measurementId: "G-11Y6S9NX65"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;