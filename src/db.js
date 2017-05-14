import credentials from './credentials';
import firebase from 'firebase';
firebase.initializeApp(credentials.firebase);

const setWarriorsProperty = (id, obj) => {
  return firebase.database().ref(`warriors/${id}`).set(obj);
}

const createWarrior = (obj) => {
  return firebase.database().ref(`warriors/${obj.name}`).set(obj);
}

const removeWarriors = () => {
  return firebase.database().ref('warriors/').remove();
}

const setBulletProperty = (obj) => {
  return firebase.database().ref('bullets/').set(obj);
}

const createBullet = (obj) => {
  return firebase.database().ref('bullets/').push(obj);
}

const removeBullets = () => {
  return firebase.database().ref('bullets/').remove();
}

const bindWarriorChanges = (cb) => {
  firebase.database().ref('/warriors/').on('value', (snap) => { cb(snap.val()) });
}

const bindBulletChanges = (cb) => {
  firebase.database().ref('/bullets/').on('value', (snap) => { cb(snap.val()) });
}

export { setWarriorsProperty, createWarrior, setBulletProperty, createBullet,
bindWarriorChanges, bindBulletChanges, removeBullets, removeWarriors };
