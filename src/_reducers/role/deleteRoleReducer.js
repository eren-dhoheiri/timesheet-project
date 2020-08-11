import * as types from "../../_actions";

export default function (state = [], action) {
  const response = action.response;

  switch (action.type) {
    case types.DELETE_ROLE_SUCCESS:
      return { ...state, response };
    case types.DELETE_ROLE_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}
