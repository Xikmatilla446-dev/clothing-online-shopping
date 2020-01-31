import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA2gSbp1PzKGoQQjhQRrl9J2RdxGjh1zeg",
    authDomain: "data-12261.firebaseapp.com",
    databaseURL: "https://data-12261.firebaseio.com",
    projectId: "data-12261",
    storageBucket: "data-12261.appspot.com",
    messagingSenderId: "579575492492",
    appId: "1:579575492492:web:05d1f985ec754e4588b0a9",
    measurementId: "G-VVJ8HRKP89"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

