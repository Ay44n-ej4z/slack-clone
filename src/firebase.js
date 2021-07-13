import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAEHd7CqN6hzKQsWJVf5ieLuFCJ1A9PFe8",
    authDomain: "slack-clone-7d45e.firebaseapp.com",
    projectId: "slack-clone-7d45e",
    storageBucket: "slack-clone-7d45e.appspot.com",
    messagingSenderId: "1866526338",
    appId: "1:1866526338:web:8c1e6b0f0be84088cb4e9b"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;