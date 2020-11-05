import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBmDxDe4JwhHY9ixqPS7dOdIX_xXCCkhx8",
    authDomain: "btui-2020.firebaseapp.com",
    databaseURL: "https://btui-2020.firebaseio.com",
    projectId: "btui-2020",
    storageBucket: "btui-2020.appspot.com",
    messagingSenderId: "948927018023",
    appId: "1:948927018023:web:b8143f90602eac31094a02",
    measurementId: "G-V3BLRQBPJ0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const analytics = firebase.analytics();
const storage = firebase.storage();
const db = firebase.firestore();

export { analytics, storage, db, firebase };