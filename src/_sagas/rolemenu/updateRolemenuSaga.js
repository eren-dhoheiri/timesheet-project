import { put, call } from "redux-saga/effects";
import { updateRolemenuService } from "../../../_services/rolemenu/updateRolemenuServices";

import * as types from "../../_actions";

export function* updateRolemenuSaga(payload) {
  try {
    const response = yield call(updateRolemenuService, payload);
    yield [put({ type: types.UPDATE_ROLE_MENU_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.UPDATE_ROLE_MENU_ERROR, error });
  }
}