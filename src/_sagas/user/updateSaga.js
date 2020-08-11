import { put, call } from "redux-saga/effects";
import { updateService } from "../../_services/user/updateService";

import * as types from "../../_actions";

export function* updateSaga(payload) {
  try {
    // console.log(response);
    const response = yield call(updateService, payload);
    yield [put({ type: types.UPDATE_USER_DETAILS_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.UPDATE_USER_DETAILS_SUCCESS, error });
    console.log(error);
  }
}
