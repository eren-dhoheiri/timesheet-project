import { put, call } from "redux-saga/effects";
import { roleService } from "../../../_services/role/roleService";

import * as types from "../../_actions";

export function* roleSaga(payload) {
  try {
    const response = yield call(roleService, payload);
    yield [put({ type: types.FETCH_ROLE_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.FETCH_ROLE_ERROR, error });
  }
}
