import { put, call } from "redux-saga/effects";
import { updateMenuService } from "../../_services/menu/updateMenuService";

import * as types from "../../_actions";

export function* updateMenuSaga(payload) {
  try {
    const response = yield call(updateMenuService, payload);
    yield [put({ type: types.UPDATE_MENU_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.UPDATE_MENU_ERROR, error });
  }
}
