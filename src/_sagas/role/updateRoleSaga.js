import { put, call } from "redux-saga/effects";
import { updateRoleServices } from "../../_services/role/updateRoleServices";

import * as types from "../../_actions";

export function* updateRoleSaga(payload) {
  try {
    const response = yield call(updateRoleServices, payload);
    yield [put({ type: types.UPDATE_ROLE_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.UPDATE_ROLE_ERROR, error });
  }
}