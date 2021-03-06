import { takeLatest } from "redux-saga/effects";
import { registerSaga, loginSaga } from "./authenticationSaga";
import { homeSaga } from "./user/homeSaga";
import { deleteSaga } from "./user/deleteSaga";
import { updateSaga } from "./user/updateSaga";
import { menuSaga } from "./menu/menuSaga";
import { deleteMenuSaga } from "./menu/deleteMenuSaga";
import { updateMenuSaga } from "./menu/updateMenuSaga";
import { addMenuSaga } from "./menu/addMenuSaga";
//Role
import { roleSaga } from "./role/roleSaga";
import { addRoleSaga } from "./role/addRoleSaga";
import { deleteRoleSaga } from "./role/deleteRoleSaga";
import { updateRoleSaga } from "./role/updateRoleSaga";

import * as types from "../_actions";

export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.FETCH_USERS_LIST, homeSaga);
  yield takeLatest(types.UPDATE_USER_DETAILS, updateSaga);
  yield takeLatest(types.ON_DELETE_USER, deleteSaga);
  yield takeLatest(types.FETCH_MENU, menuSaga);
  yield takeLatest(types.ADD_MENU, addMenuSaga);
  yield takeLatest(types.DELETE_MENU, deleteMenuSaga);
  yield takeLatest(types.UPDATE_MENU, updateMenuSaga);
  //Role
  yield takeLatest(types.FETCH_ROLE, roleSaga);
  yield takeLatest(types.ADD_ROLE, addRoleSaga);
  yield takeLatest(types.DELETE_ROLE, deleteRoleSaga);
  yield takeLatest(types.UPDATE_ROLE, updateRoleSaga);
}
