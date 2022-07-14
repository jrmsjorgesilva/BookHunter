// Import the functions you need from the SDKs you need
import { FirebaseError, FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const dataFetched = fetch('/database')
//   .then((res) => res.json())
//   .then((dataFetched) => dataFetched);

// console.log('database', dataFetched);

interface objFirebaseConfig {
    apiKey: String;
    authDomain: String;
    projectId: String;
    storageBucket: String;
    messagingSenderId: String;
    appId: String;
}

// const fetchFirebase = async () => {
//     const response = await fetch('http://localhost:8000/firebase');
//     const data = await response.json();
//     console.log(data);
//     return data;
// }

window.addEventListener('load', () => {
    fetch('http://localhost:8000/firebase')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log('dataIn', data);
        })
        .catch((err) => {
            console.error(err);
        });
});

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
