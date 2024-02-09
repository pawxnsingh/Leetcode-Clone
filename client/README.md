// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCctjkiRbToQqhwz1aNsc3fJTqx5foK8Gs",
  authDomain: "leetcode-clone-94742.firebaseapp.com",
  projectId: "leetcode-clone-94742",
  storageBucket: "leetcode-clone-94742.appspot.com",
  messagingSenderId: "68268650312",
  appId: "1:68268650312:web:74dc183e78851e41148d7d",
  measurementId: "G-YTTTKFV2JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);