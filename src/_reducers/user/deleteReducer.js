import * as types from "../../_actions";

export default function (state = [], action) {
  let response = action.response;
  // console.log(response);

  switch (action.type) {
    case types.ON_DELETE_USER_SUCCESS:
      return { ...state, response };
    case types.ON_DELETE_USER_SUCCESS:
      return { ...state, response };
    default:
      return state;
  }
}
