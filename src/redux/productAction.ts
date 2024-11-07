import { PRODUCT_LIST, PRODUCT_SEARCH } from "./constants";

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};
export const productSearch = (query: any) => {
  return {
    type: PRODUCT_SEARCH,
    query,
  };
};
