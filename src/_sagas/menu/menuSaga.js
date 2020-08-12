import { put, call } from "redux-saga/effects";
import { menuService } from "../../_services/menu/menuService";

import * as types from "../../_actions";

export function* menuSaga(payload) {
  try {
    const response = yield call(menuService, payload);
    yield [put({ type: types.FETCH_MENU_SUCCESS, response })];
    // console.log(response);
  } catch (error) {
    yield put({ type: types.FETCH_MENU_ERROR, error });
  }
}
