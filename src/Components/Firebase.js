import * as firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDyUjNL4XWCD7rlyl0VihnnNw8qAHJe-4U",
  authDomain: "healthcalculator-e1103.firebaseapp.com",
  databaseURL: "https://healthcalculator-e1103.firebaseio.com",
  projectId: "healthcalculator-e1103",
  storageBucket: "",
  messagingSenderId: "882212891498",
  appId: "1:882212891498:web:9786d1fe7962a5df"
};

firebase.initializeApp(firebaseConfig);

export const messagesRef = firebase.database().ref("messages");
