import { takeLatest, all } from "redux-saga/effects";

export function* helloSaga() {
    yield console.log('Hello Sagas!')
}


//fetch productData
export function* fetchProductData() {
    yield console.log('fetchProductDataSaga')
    //logic to fetch product data
}


function* actionWatcher() {
    yield takeLatest("FETCH_PRODUCT_DATA", fetchProductData);
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
    // code after all-effect
}