import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import {
    getAllProductsReducer,
} from "./productReducers";


const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,

  GetAllProducts:getAllProductsReducer,


});

export default rootReducer;
