import 'firebase/auth'
import 'firebase/firestore'
import firebase from 'firebase/app'; 

const firebaseConfig = {
    apiKey: "AIzaSyBSQHjRsTWKLs8PKQF75uJFBHAZtcYzXbI",
    authDomain: "bareera-7baff.firebaseapp.com",
    projectId: "bareera-7baff",
    storageBucket: "bareera-7baff.appspot.com",
    messagingSenderId: "483160340970",
    appId: "1:483160340970:web:e0a4a89290d39c05b99a93"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

    export var auth = firebase.auth();
    export var firestore = firebase.firestore();
  export default firebase