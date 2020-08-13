import * as types from "../../_actions";

export default function (state = [], action) {
  const response = action.response;
  // console.log(action);

  switch (action.type) {
    case types.DELETE_MENU_SUCCESS:
      return { ...state, response };
    case types.DELETE_MENU_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}
