import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0O-pS0eo-xDrBI2znT8xHJa649i9tqhQ",
    authDomain: "newstart-f55e5.firebaseapp.com",
    projectId: "newstart-f55e5",
    storageBucket: "newstart-f55e5.appspot.com",
    messagingSenderId: "91630856811",
    appId: "1:91630856811:web:d2eb9abf9c548ad460df2e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;