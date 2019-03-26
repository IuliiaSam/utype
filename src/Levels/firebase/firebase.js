import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import getLevelsAction from "../Action/getLevelsAction";

const config = {
  apiKey: "AIzaSyBGJudEPb9UtQOikd8wUxdaKE3M-2kjbCI",
  authDomain: "utype-1c7dc.firebaseapp.com",
  databaseURL: "https://utype-1c7dc.firebaseio.com",
  projectId: "utype-1c7dc",
  storageBucket: "utype-1c7dc.appspot.com",
  messagingSenderId: "847761407683"
};

firebase.initializeApp(config);

// ссылка на базу данных
const firebaseDB = firebase.database();

export const getLevels = () => dispatch =>
  firebaseDB
    .ref("levels")
    .once("value")
    .then(snap => dispatch(getLevelsAction(snap.val())));
