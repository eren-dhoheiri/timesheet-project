import * as types from "../../_actions";

export default function (state = [], action) {
  const response = action.response;

  switch (action.type) {
    case types.FETCH_USERS_LIST_SUCCESS:
      return { ...state, response };
    case types.FETCH_USERS_LIST_SUCCESS:
      return { ...state, response };
    default:
      return state;
  }
}
