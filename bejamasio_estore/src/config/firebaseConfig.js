import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//Put these credentials in .env file and in gitignore

var firebaseConfig = {
  apiKey: "AIzaSyD1w7ItY0U1hIlFHt2rYAWOE4exsCPx6vM",
  authDomain: "bejamasio-284e9.firebaseapp.com",
  databaseURL: "https://bejamasio-284e9-default-rtdb.firebaseio.com",
  projectId: "bejamasio-284e9",
  storageBucket: "bejamasio-284e9.appspot.com",
  messagingSenderId: "310014956426",
  appId: "1:310014956426:web:76e78571912c8a682cae73",
  measurementId: "G-GFPHNLTCSF"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

// var firebaseConfig = {
//   apiKey: process.env.REACT_APP_ApiKey,
//   authDomain: process.env.REACT_APP_AuthDomain,
//   databaseURL: process.env.REACT_APP_DatabaseURL,
//   projectId: process.env.REACT_APP_ProjectId,
//   storageBucket: process.env.REACT_APP_StorageBucket,
//   messagingSenderId: process.env.REACT_APP_MessagingSenderId,
//   appId: process.env.REACT_APP_AppId,
//   measurementId: process.env.REACT_APP_MeasurementId,
// };