import { put, call } from "redux-saga/effects";
import { addRoleServices } from "../../_services/role/addRoleServices";

import * as types from "../../_actions";

export function* addRoleSaga(payload) {
  try {
    const response = yield call(addRoleServices, payload);
    yield [put({ type: types.ADD_ROLE_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.ADD_ROLE_ERROR, error });
  }
}
