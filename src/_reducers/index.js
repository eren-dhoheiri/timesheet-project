import { combineReducers } from "redux";
import register from "./registerReducer";
import login from "./loginReducer";
import homeReducer from "./homeReducer";
import deleteReducer from "./deleteReducer";
import updateReducer from "./updateReducer";

const rootReducer = combineReducers({
  register,
  login,
  homeReducer,
  deleteReducer,
  updateReducer,
});

export default rootReducer;
