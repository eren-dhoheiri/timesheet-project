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
});

export default rootReducer;
