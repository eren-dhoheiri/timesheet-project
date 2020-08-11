import { put, call } from "redux-saga/effects";
import { addRolemenuService } from "../../../_services/rolemenu/addRolemenuServices";

import * as types from "../../_actions";

export function* addRolemenuSaga(payload) {
  try {
    const response = yield call(addRolemenuService, payload);
    yield [put({ type: types.ADD_ROLE_MENU_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.ADD_ROLE_MENU_ERROR, error });
  }
}
