import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD8boRtD-CSbCewCfostcST6HZwuS6ngqs",
  authDomain: "catchofday-df91e.firebaseapp.com",
  databaseURL: "https://catchofday-df91e-default-rtdb.firebaseio.com",
  projectId: "catchofday-df91e",
  storageBucket: "catchofday-df91e.appspot.com",
  messagingSenderId: "509731873376",
  appId: "1:509731873376:web:cfda70487e266f3b049905",
  measurementId: "G-DKMT2XLSZ9",
});

const base = Rebase.createClass(firebaseApp.database());
//this is a named export
export { firebaseApp };

//this is a default export
export default base;
