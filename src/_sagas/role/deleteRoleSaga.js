import { put, call } from "redux-saga/effects";
import { deleteRoleService } from "../../../_services/role/deleteRoleServices";

import * as types from "../../_actions";

export function* deleteRoleSaga(payload) {
  try {
    const response = yield call(deleteRoleService, payload);
    yield [put({ type: types.DELETE_ROLE_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.DELETE_ROLE_ERROR, error });
  }
}