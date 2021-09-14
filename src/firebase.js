import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCs7x5TOgTki0Wo3DROqtNLBiD3Pr1D3I",
  authDomain: "slack-clone-75e38.firebaseapp.com",
  projectId: "slack-clone-75e38",
  storageBucket: "slack-clone-75e38.appspot.com",
  messagingSenderId: "89964186683",
  appId: "1:89964186683:web:b00e9703382f6033f8a01e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
