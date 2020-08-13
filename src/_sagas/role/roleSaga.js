import { put, call } from "redux-saga/effects";
import { roleServices} from "../../_services/role/roleServices";

import * as types from "../../_actions";

export function* roleSaga(payload) {
  try {
    const response = yield call(roleServices, payload);
    yield [put({ type: types.FETCH_ROLE_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.FETCH_ROLE_ERROR, error });
  }
}
