import axios from "axios";
import {
  GetAllProducts_REQUEST,
  GetAllProducts_SUCCESS,
  GetAllProducts_FAIL,
} from "../constants/productConstants";

export const get_all_db_products = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GetAllProducts_REQUEST });

    const { data } = await axios.get(`/allproducts/`);
    dispatch({
      type: GetAllProducts_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GetAllProducts_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
