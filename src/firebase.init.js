// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsE2wCwoqOKj-p-LpXM8F4DqhvRf0jAx4",
  authDomain: "volunteer-work-96707.firebaseapp.com",
  projectId: "volunteer-work-96707",
  storageBucket: "volunteer-work-96707.appspot.com",
  messagingSenderId: "393643405554",
  appId: "1:393643405554:web:54e682114bf28786dee06b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth