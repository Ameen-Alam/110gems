import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCs1oOVYeTsw-NGv0_oOYAaZuTrGncPCEE",
    authDomain: "mass-trainingbatch.firebaseapp.com",
    databaseURL: "https://mass-trainingbatch.firebaseio.com",
    projectId: "mass-trainingbatch",
    storageBucket: "mass-trainingbatch.appspot.com",
    messagingSenderId: "770297055379"
};
let fire = firebase.initializeApp(config);

export default fire