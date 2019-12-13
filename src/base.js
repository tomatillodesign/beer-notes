import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
     apiKey: "AIzaSyDJHhRMCVULRh76N3kU37sdGvXNhA9oxd0",
    authDomain: "beer-journal-29994.firebaseapp.com",
    databaseURL: "https://beer-journal-29994.firebaseio.com",
    projectId: "beer-journal-29994",
    storageBucket: "beer-journal-29994.appspot.com",
    messagingSenderId: "271445081264",
    appId: "1:271445081264:web:11ece8aee5dd4259f18f75"
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
