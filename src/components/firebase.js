// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCa_nb076bAqT21gQG1eOMbRhxEKs8RWis",
//     authDomain: "todo-app-8ec53.firebaseapp.com",
//     projectId: "todo-app-8ec53",
//     storageBucket: "todo-app-8ec53.appspot.com",
//     messagingSenderId: "895785337309",
//     appId: "1:895785337309:web:d2aa091a157787c0613634",
//     measurementId: "G-J8KJ8WW0QX"
//   };

import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCa_nb076bAqT21gQG1eOMbRhxEKs8RWis",
    authDomain: "todo-app-8ec53.firebaseapp.com",
    projectId: "todo-app-8ec53",
    storageBucket: "todo-app-8ec53.appspot.com",
    messagingSenderId: "895785337309",
    appId: "1:895785337309:web:d2aa091a157787c0613634",
    measurementId: "G-J8KJ8WW0QX"
})

const db = firebaseApp.firestore()

export default db;