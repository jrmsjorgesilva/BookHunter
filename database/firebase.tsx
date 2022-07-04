// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

var dataFetched: any;

// Your web app's Firebase configuration
fetch('/database')
  .then((res) => res.json())
  .then((dataFetched) => dataFetched);

console.log('database', dataFetched);

// Initialize Firebase
const app = initializeApp(dataFetched);

// Authentication
export const auth = getAuth();

export default app;
