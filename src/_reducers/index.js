import { combineReducers } from "redux";
import register from "./user/registerReducer";
import login from "./loginReducer";
import homeReducer from "./user/homeReducer";
import deleteReducer from "./user/deleteReducer";
import updateReducer from "./user/updateReducer";
import addMenuReducer from "./menu/addMenuReducer";
import menuReducer from "./menu/menuReducer";
import deleteMenuReducer from "./menu/deleteMenuReducer";
import updateMenuReducer from "./menu/updateMenuReducer";
//Role
import addRoleReducer from "./role/addRoleReducer";
import roleReducer from "./role/roleReducer";
import deleteRoleReducer from "./role/deleteRoleReducer";
import updateRoleReducer from "./role/updateRoleReducer";
//RoleMenu
import addRolemenuReducer from "./rolemenu/addRolemenuReducer";
import rolemenuReducer from "./rolemenu/rolemenuReducer";
import deleteRolemenuReducer from "./rolemenu/deleteRolemenuReducer";
import updateRolemenuReducer from "./rolemenu/updateRolemenuReducer";

const rootReducer = combineReducers({
  register,
  login,
  homeReducer,
  deleteReducer,
  updateReducer,
  addMenuReducer,
  menuReducer,
  updateMenuReducer,
  deleteMenuReducer,
  addRoleReducer,
  roleReducer,
  updateRoleReducer,
  deleteRoleReducer,
  addRolemenuReducer,
  rolemenuReducer,
  updateRolemenuReducer,
  deleteRolemenuReducer
});

export default rootReducer;
