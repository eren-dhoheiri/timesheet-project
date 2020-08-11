import { put, call } from "redux-saga/effects";
import { deleteService } from "../../_services/user/deleteService";

import * as types from "../../_actions";

export function* deleteSaga(payload) {
  try {
    const response = yield call(deleteService, payload);
    yield [put({ type: types.ON_DELETE_USER_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.ON_DELETE_USER_SUCCESS, error });
  }
}
