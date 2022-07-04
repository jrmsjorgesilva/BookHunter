// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

fetch('/database')
    .then(res => res.json())
    .then(dataFetched => dataFetched)

    console.log('database', dataFetched);

// Your web app's Firebase configuration
const firebaseConfig = dataFetched;

// Initialize Firebase
const app = initializeApp(firebaseConfig);