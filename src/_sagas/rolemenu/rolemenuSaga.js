import { put, call } from "redux-saga/effects";
import { rolemenuService } from "../../../_services/rolemenu/rolemenuService";

import * as types from "../../_actions";

export function* rolemenuSaga(payload) {
  try {
    const response = yield call(rolemenuService, payload);
    yield [put({ type: types.FETCH_ROLE_MENU_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.FETCH_ROLE_MENU_ERROR, error });
  }
}
