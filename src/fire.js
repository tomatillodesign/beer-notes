import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
     apiKey: "AIzaSyDJHhRMCVULRh76N3kU37sdGvXNhA9oxd0",
    authDomain: "beer-journal-29994.firebaseapp.com",
    databaseURL: "https://beer-journal-29994.firebaseio.com",
    projectId: "beer-journal-29994",
    storageBucket: "beer-journal-29994.appspot.com",
    messagingSenderId: "271445081264",
    appId: "1:271445081264:web:11ece8aee5dd4259f18f75"
};
var fire = firebase.initializeApp(config);
export default fire;
