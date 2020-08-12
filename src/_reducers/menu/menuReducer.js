import * as types from "../../_actions";

export default function (state = [], action) {
  let response = action.response;
  // console.log(response);

  switch (action.type) {
    case types.FETCH_MENU_SUCCESS:
      return { ...state, response };
    case types.FETCH_MENU_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}
