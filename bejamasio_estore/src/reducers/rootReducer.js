import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import {
    getAllProductsReducer,
} from "./productReducers";

import {
  cartReducers
} from "./cartReducers";


const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,

  GetAllProducts:getAllProductsReducer,
  Cart:cartReducers,

});

export default rootReducer;
