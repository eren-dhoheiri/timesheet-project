import { put, call } from "redux-saga/effects";
import { deleteRolemenuService } from "../../../_services/rolemenu/deleteRolemenuServices";

import * as types from "../../_actions";

export function* deleteRolemenuSaga(payload) {
  try {
    const response = yield call(deleteRolemenuService, payload);
    yield [put({ type: types.DELETE_ROLE_MENU_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.DELETE_ROLE_MENU_ERROR, error });
  }
}