import firebase from 'firebase';

import getLevelsAction from './Levels/Action/getLevelsAction';
import getDevmodeLevelsAction from './redux/actions/getDevmodeLevelsAction';

const config = {
  apiKey: 'AIzaSyBGJudEPb9UtQOikd8wUxdaKE3M-2kjbCI',
  authDomain: 'utype-1c7dc.firebaseapp.com',
  databaseURL: 'https://utype-1c7dc.firebaseio.com',
  projectId: 'utype-1c7dc',
  storageBucket: 'utype-1c7dc.appspot.com',
  messagingSenderId: '847761407683'
};
firebase.initializeApp(config);

const saveUser = user =>
  firebase
    .database()
    .ref('users/' + user.id)
    .set({ ...user });

export function createUserWithEmailAndPassword(email, password, name) {
  // console.log('email, password', email, password)
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(data => {
      const user = {
        id: data.user.uid,
        name,
        email: data.user.email,
        password
      };
      saveUser(user);
      return user;
    })
    .then(user => localStorage.setItem('uid', user.id))
    .catch(err => null);
}

export function signInWithEmailAndPassword(email, password) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(d => d.user.uid)
    .catch(err => console.log(err));
}

export function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => console.log('sign-out successfull'))
    .then(() => localStorage.removeItem('uid'))
    .catch(err => console.log(err));
}

export function addUserStatistics(levelStat, userID) {
  firebase
    .database()
    .ref('users/' + userID)
    .once('value')
    .then(snap => snap.val())
    // .then(d => console.log(d))
    .then(data => {
      data.statistics = data.hasOwnProperty('statistics')
        ? [...data.statistics, levelStat]
        : [levelStat];
      return data;
    })
    .then(userObj =>
      firebase
        .database()
        .ref('users/' + userID)
        .set(userObj)
    );
}

export function getUserStat(userID) {
  return firebase
    .database()
    .ref('users/' + userID + '/statistics')
    .once('value')
    .then(snap => snap.val())
    .then(d => d);
}

getUserStat('7Uji9soUFbYzLsgjmi1ax2irjjo1');

// ссылка на базу данных
const firebaseDB = firebase.database();

export const getLevels = () => dispatch =>
  firebaseDB
    .ref('levels')
    .once('value')
    .then(snap => dispatch(getLevelsAction(snap.val())));

export const getDevmodeLevels = () => dispatch =>
  firebaseDB
    .ref('devLevels')
    .once('value')
    .then(snap => dispatch(getDevmodeLevelsAction(snap.val())));
