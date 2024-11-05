import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constants";

export const addToCart = (data: any) => {
  console.log("add action called", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};
export const RemoveFromCart = (data: any) => {
  console.log("remove action called", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};
export const EmptyCart = () => {
  console.log("remove action called");
  return {
    type: EMPTY_CART,
  };
};
