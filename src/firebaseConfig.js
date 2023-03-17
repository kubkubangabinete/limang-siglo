import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDsUK3BRlxm33kxldPQ-Go81rVJkaej8tk",
  authDomain: "limang-siglo-feedback-form.firebaseapp.com",
  databaseURL: "https://limang-siglo-feedback-form-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "limang-siglo-feedback-form",
  storageBucket: "limang-siglo-feedback-form.appspot.com",
  messagingSenderId: "995717808745",
  appId: "1:995717808745:web:2030b26f1d48ffd5ea18f8",
  measurementId: "G-YSW3HGJ2LH"
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();