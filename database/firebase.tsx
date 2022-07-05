// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const dataFetched = fetch('/database')
//   .then((res) => res.json())
//   .then((dataFetched) => dataFetched);

// console.log('database', dataFetched);

const firebaseConfig = {
    apiKey: 'AIzaSyDp1yYB_XgL9ksNOODokx1hgJ8yFvbIfeo',
    authDomain: 'auth-development-d09de.firebaseapp.com',
    projectId: 'auth-development-d09de',
    storageBucket: 'auth-development-d09de.appspot.com',
    messagingSenderId: '22155400186',
    appId: '1:22155400186:web:abbae79de9e7709ec30a43',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);

export default app;
