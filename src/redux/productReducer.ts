import { SET_PRODUCT_LIST } from "./constants";

export const productData = (data = [], action: any) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.warn("PRODUCT_LIST condition ", action);
      return [...action.data];
    default:
      return data;
  }
};
