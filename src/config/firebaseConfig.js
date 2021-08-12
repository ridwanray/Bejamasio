import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//Put these credentials in .env file and add .env to gitignore

var firebaseConfig = {
  apiKey: process.env.REACT_APP_ApiKey,
  authDomain: process.env.REACT_APP_AuthDomain,
  databaseURL: process.env.REACT_APP_DatabaseURL,
  projectId: process.env.REACT_APP_ProjectId,
  storageBucket: process.env.REACT_APP_StorageBucket,
  messagingSenderId: process.env.REACT_APP_MessagingSenderId,
  appId: process.env.REACT_APP_AppId,
  measurementId: process.env.REACT_APP_MeasurementId,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
