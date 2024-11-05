import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./productReducer";

// const selectorData = (state: any) => state || initialState;

export default combineReducers({
  // selectorData,
  cartData,
  productData,
});
