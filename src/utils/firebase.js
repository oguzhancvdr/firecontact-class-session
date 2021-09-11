import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDNa0dLplPL2ipPIgH7gWwou24FrFlqj7k",
  authDomain: "inclass-firecontact.firebaseapp.com",
  projectId: "inclass-firecontact",
  storageBucket: "inclass-firecontact.appspot.com",
  messagingSenderId: "647662649476",
  appId: "1:647662649476:web:61fc0d01de381eb61ec2d1",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
