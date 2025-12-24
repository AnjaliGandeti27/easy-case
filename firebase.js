// firebase.js

const firebaseConfig = {
  apiKey: "AIzaSyDFz1cxbZ-sZGbcFTU_qzwTrQg_MiAjawg",
  authDomain: "easy-case.firebaseapp.com",
  projectId: "easy-case",
  storageBucket: "easy-case.appspot.com",
  messagingSenderId: "933496214822",
  appId: "1:933496214822:web:94144be185f664ca049de7"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// 🔥 MAKE AUTH & DB GLOBAL
window.auth = firebase.auth();

// 🔥 MAKE db GLOBAL
window.db = firebase.firestore();
