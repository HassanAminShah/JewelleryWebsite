import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constants";

function* getProducts() {
  //   let data = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   let data = yield fetch("https://jsonplaceholder.typicode.com/users");
  let data = yield fetch("https://fakestoreapi.com/products");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data: data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}
export default productSaga;
