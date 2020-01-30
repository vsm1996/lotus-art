import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAGD0S9eHAfpGQreH83LH2RnPmBMLzkoEs",
  authDomain: "lotusart-db.firebaseapp.com",
  databaseURL: "https://lotusart-db.firebaseio.com",
  projectId: "lotusart-db",
  storageBucket: "lotusart-db.appspot.com",
  messagingSenderId: "842522377745",
  appId: "1:842522377745:web:ab202112ee286b38e7fbb0",
  measurementId: "G-LE9L8KN1JR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
