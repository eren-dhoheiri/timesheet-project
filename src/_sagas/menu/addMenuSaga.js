import { put, call } from "redux-saga/effects";
import { addMenuService } from "../../../_services/menu/addMenuServices";

import * as types from "../../_actions";

export function* addMenuSaga(payload) {
  try {
    const response = yield call(addMenuService, payload);
    yield [put({ type: types.ADD_MENU_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.ADD_MENU_ERROR, error });
  }
}
