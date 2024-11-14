import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, PRODUCT_SEARCH, SET_PRODUCT_LIST } from "./constants";

function* getProducts() {
  let data = yield fetch("https://fakestoreapi.com/products");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data: data });
}

function* searchProducts(data) {
  let result = yield fetch(
    `https://fakestoreapi.com/products/category/${data.query}`
  );
  result = yield result.json();
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(PRODUCT_SEARCH, searchProducts);
}

export default productSaga;
