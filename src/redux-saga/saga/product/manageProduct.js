import { call, put } from "redux-saga/effects";
import { delete_product, get_product, post_product, update_product, } from "../../product/api/api";
import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_SUCCESS, } from "../../product/action/action";

function* handle_get_product(action) {
  try {
    let { data, status } = yield call(get_product, action);
    if (status == 200) {
      yield put({ type: GET_PRODUCT_SUCCESS, data });
    } else {
      yield put({ type: GET_PRODUCT_ERROR, data });
    }
  } catch (err) {
    yield put({ type: GET_PRODUCT_ERROR, err });
  }
}

function* handle_post_product(action) {
  console.log(action, "action manage file");
  try {
    let { data, status } = yield call(post_product, action);
    console.log(data, status, "this is from post manage");
    if (status == 201 || status == 200) {
      yield put({ type: POST_PRODUCT_SUCCESS, data });
    } else {
      yield put({ type: POST_PRODUCT_ERROR, data });
    }
  } catch (err) {
    yield put({ type: POST_PRODUCT_ERROR, err });
  }
}

function* handle_delete_product(action) {
  console.log(action, "action from manage");
  try {
    let { data, status } = yield call(delete_product, action);
    if (status == 200) {
      yield put({ type: DELETE_PRODUCT_SUCCESS, data });
    } else {
      yield put({ type: DELETE_PRODUCT_ERROR, data });
    }
  } catch (err) {
    yield put({ type: DELETE_PRODUCT_ERROR, err });
  }
}

function* handle_update_product(action) {
  try {
    let { data, status } = yield call(update_product, action);
    if (status == 200) {
      yield put({ type: UPDATE_PRODUCT_SUCCESS, data });
    } else {
      yield put({ type: UPDATE_PRODUCT_ERROR, data });
    }
  } catch (err) {
    yield put({ type: UPDATE_PRODUCT_ERROR, data: err });
  }
}

export { handle_get_product, handle_post_product, handle_delete_product, handle_update_product, };