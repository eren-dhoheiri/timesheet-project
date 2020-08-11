import { takeLatest } from "redux-saga/effects";
import { registerSaga, loginSaga } from "./authenticationSaga";
import { homeSaga } from "./homeSaga";
import { deleteSaga } from "./deleteSaga";
import { updateSaga } from "./updateSaga";

import * as types from "../_actions";

export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.FETCH_USERS_LIST, homeSaga);
  yield takeLatest(types.UPDATE_USER_DETAILS, updateSaga);
  yield takeLatest(types.ON_DELETE_USER, deleteSaga);
}
