import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfrCK0j1q6g3B7Gd0CQJztZ4lZbFhoKeg",
  authDomain: "tremorsv1.firebaseapp.com",
  databaseURL: "https://tremorsv1-default-rtdb.firebaseio.com",
  projectId: "tremorsv1",
  storageBucket: "tremorsv1.appspot.com",
  messagingSenderId: "239997265957",
  appId: "1:239997265957:web:e036d3ef83e51654d237cc"
};

const Firebase = initializeApp(firebaseConfig);

export default Firebase;