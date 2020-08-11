import * as types from "../_actions";

export default function (state = [], action) {
  const response = action.response;

  switch (action.type) {
    case types.ON_DELETE_USER_SUCCESS:
      return { ...state, response };
    case types.ON_DELETE_USER_SUCCESS:
      return { ...state, response };
    default:
      return state;
  }
}
