// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwgepJtoXZgHVJNanzLlOmm_XFUN4AN0E",
  authDomain: "chat-ai-48a8f.firebaseapp.com",
  projectId: "chat-ai-48a8f",
  storageBucket: "chat-ai-48a8f.appspot.com",
  messagingSenderId: "952204732396",
  appId: "1:952204732396:web:c6b1ad01aeb254424382c9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const goggleAuthProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export { auth, goggleAuthProvider, db };
