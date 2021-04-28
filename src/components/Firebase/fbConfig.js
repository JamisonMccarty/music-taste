import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// apiKey: `${process.env.REACT_APP_FIREBASE_API}`,
// authDomain: "music-taste-app.firebaseapp.com",
// databaseURL: "https://music-taste-app.firebaseio.com",
// projectId: "music-taste-app",
// storageBucket: "music-taste-app.appspot.com",
// messagingSenderId: "916980291168",
// appId: "1:916980291168:web:2c2e0eb6a5a2f13baa9505"

// const config = {
//     apiKey: "AIzaSyDV5Yu4-tZwNHoR37Q1ItsDATchpYd5nG0",
//     authDomain: "music-taste-app.firebaseapp.com",
//     databaseURL: "https://music-taste-app.firebaseio.com",
//     projectId: "music-taste-app",
//     storageBucket: "music-taste-app.appspot.com",
//     messagingSenderId: "916980291168",
//     appId: "1:916980291168:web:2c2e0eb6a5a2f13baa9505"
// };

export const config = {
    apiKey: "AIzaSyDwkJAEZGZoZsd2v-E1hJid_fca3S-CWB8",
    authDomain: "music-taste-app-38773.firebaseapp.com",
    databaseURL: "https://music-taste-app-38773.firebaseio.com",
    projectId: "music-taste-app-38773",
    storageBucket: "",
    messagingSenderId: "798086738297",
    appId: "1:798086738297:web:a6c0a42235594b54"
  };

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
