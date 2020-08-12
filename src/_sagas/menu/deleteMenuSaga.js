import { put, call } from "redux-saga/effects";
import { deleteMenuService } from "../../_services/menu/deleteMenuService";

import * as types from "../../_actions";

export function* deleteMenuSaga(payload) {
  try {
    const response = yield call(deleteMenuService, payload);
    console.log(response);
    yield [put({ type: types.DELETE_MENU_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.DELETE_MENU_ERROR, error });
  }
}
