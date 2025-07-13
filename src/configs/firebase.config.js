// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getFirestore, collection } = require('firebase/firestore');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDgJqUw4uRySmyqtPPWM4hQqykRHBGX6IA',
    authDomain: 'personal-9c7a9.firebaseapp.com',
    projectId: 'personal-9c7a9',
    storageBucket: 'personal-9c7a9.firebasestorage.app',
    messagingSenderId: '23570481507',
    appId: '1:23570481507:web:ae3a004c3ed1caaf321356',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
module.exports = collection(db, 'users');
