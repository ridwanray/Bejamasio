import {
  GetAllProducts_REQUEST,
  GetAllProducts_SUCCESS,
  GetAllProducts_FAIL,
} from "../constants/productConstants";

export const fetchProducts = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    dispatch({ type: GetAllProducts_REQUEST });
    console.log("fetching contact..........");
    firestore
      .collection("products")
      .get()
      .then((querySnapshot) => {
        const ProductData = [];
        querySnapshot.forEach((doc) => {
          ProductData.push(
            (doc.data())
          );       
        });
        console.log(ProductData);
        console.log('------------')
        const featuredProducts =  ProductData.filter(product => product.featured === true)
        console.log(featuredProducts[0].name)
        dispatch({
          type: GetAllProducts_SUCCESS,
          payload:ProductData
        });
      })
      .catch((error) => {
        dispatch({
          type: GetAllProducts_FAIL,
          payload: error.message,
        });
      });
  };
};
