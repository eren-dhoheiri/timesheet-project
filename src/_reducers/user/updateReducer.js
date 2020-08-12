import * as types from "../../_actions";

export default function (state = [], action) {
  let response = action.response;
  // console.log(response);

  switch (action.type) {
    case types.UPDATE_USER_DETAILS_SUCCESS:
      return { ...state, response };
    // case types.UPDATE_USER_DETAILS_SUCCESS:
    //   return { ...state, response };
    default:
      return state;
  }
}
