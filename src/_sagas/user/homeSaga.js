import { put, call } from "redux-saga/effects";
import { homeService } from "../../_services/user/homeServices";

import * as types from "../../_actions";

export function* homeSaga(payload) {
  try {
    const response = yield call(homeService, payload);
    yield [put({ type: types.FETCH_USERS_LIST_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.FETCH_USERS_LIST_SUCCESS, error });
  }
}
