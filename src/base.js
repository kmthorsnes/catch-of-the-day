import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDWfimDd3KQd89CDFcMpSn1RUdlEAmbN2A",
  authDomain: "catch-of-the-day-kmthorsnes.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-kmthorsnes.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
